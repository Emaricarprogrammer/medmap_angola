import { Toolbar } from "@/components/pharmacy-ui/toolbar"
import { HandPlatter } from "lucide-react"
import { Helmet } from "react-helmet-async"
import { DepositCard } from "./deposit-card"
import { Pagination } from "@/components/general-ui/pagination"
import { useQuery } from "@tanstack/react-query"
import { getDeposities } from "@/api/get-deposities"
import { getProfile } from "@/api/get-profile"
import { MedicinalSkeleton } from "../home/medicinal-skeleton"

export function Deposits() {
	const { data: profile } = useQuery({
		queryKey: ["profile"],
		queryFn: getProfile,
	})

	const {
		data: deposits,
		error,
		isLoading,
	} = useQuery({
		queryKey: [
			"deposits",
			{
				latitude: profile?.geolocalizacao_entidade?.latitude || 0,
				longitude: profile?.geolocalizacao_entidade?.longitude || 0,
			},
		],
		queryFn: async ({
			queryKey,
		}: {
			queryKey: [string, { latitude: number; longitude: number }]
		}) => {
			const [, { latitude, longitude }] = queryKey
			console.log("Fetching deposits for:", { latitude, longitude })
			return getDeposities(latitude, longitude)
		},
		enabled: !!profile && !!profile.geolocalizacao_entidade,
	})

	if (isLoading) console.log("Loading deposits...")
	if (error) console.error("Query error:", error)

	return (
		<>
			<Helmet title="Depósitos" />

			<div>
				<Toolbar
					children={<HandPlatter className="text-emerald-700 h-6 w-6" />}
					legend="Depósitos"
				/>

				<div className="py-6 flex-col justify-between  max-xl:h-[52rem] max-sm:h-[40rem] overflow-y-scroll max-sm:grid-cols-1 max-xl:py-8 grid grid-cols-4 gap-4 max-xl:grid-cols-2">
					{deposits
						? deposits.response.map((deposit) => {
								return <DepositCard deposit={deposit} />
						  })
						: Array.from({ length: 6 }).map(() => {
								return <MedicinalSkeleton />
						  })}
				</div>

				<Pagination
					currentPage={1}
					totalItem={20}
					legend="Depósitos"
					perPage={3}
				/>
			</div>
		</>
	)
}
