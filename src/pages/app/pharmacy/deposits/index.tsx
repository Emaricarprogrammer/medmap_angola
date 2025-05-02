import { Toolbar } from "@/components/pharmacy-ui/toolbar"
import { HandPlatter } from "lucide-react"
import { Helmet } from "react-helmet-async"
import { DepositCard } from "./deposit-card"
import { Pagination } from "@/components/general-ui/pagination"
import { useQuery } from "@tanstack/react-query"
import { getDeposities } from "@/api/get-deposities"
import { getProfile } from "@/api/get-profile"
import { MedicinalSkeleton } from "../home/medicinal-skeleton"
import { toast } from "sonner"

export function Deposits() {
	const {
		data: profile,
		isLoading: isProfileLoading,
		error: profileError,
	} = useQuery({
		queryKey: ["profile"],
		queryFn: getProfile,
	})

	const {
		data: deposits,
		error: depositsError,
		isLoading: isDepositsLoading,
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
			return getDeposities(latitude, longitude)
		},
		enabled:
			!!profile &&
			!!profile.geolocalizacao_entidade?.latitude &&
			!!profile.geolocalizacao_entidade?.longitude,
	})

	if (profileError) {
		toast.error(
			"Erro ao carregar perfil: " + (profileError.message || "Tente novamente")
		)
	}

	if (depositsError) {
		toast.error(depositsError.message || "Erro ao carregar depósitos")
	}

	const isLoading = isProfileLoading || isDepositsLoading

	return (
		<>
			<Helmet title="Depósitos" />

			<div>
				<Toolbar
					children={<HandPlatter className="text-emerald-700 h-6 w-6" />}
					legend="Depósitos"
				/>

				<div className="">
					<div className="h-[37.5rem] overflow-scroll">
						{isLoading && (
							<div className="py-6 flex-col justify-between max-xl:h-[52rem] max-sm:h-[40rem] overflow-y-scroll max-sm:grid-cols-1 max-xl:py-8 grid grid-cols-3 gap-4 max-xl:grid-cols-2">
								{Array.from({ length: 6 }).map((_, index) => (
									<MedicinalSkeleton key={index} />
								))}
							</div>
						)}

						{!isLoading && deposits && deposits.response.length > 0 && (
							<div className="py-6 flex-col justify-between max-xl:h-[52rem] max-sm:h-[40rem] overflow-y-scroll max-sm:grid-cols-1 max-xl:py-8 grid grid-cols-4 gap-4 max-xl:grid-cols-2">
								{deposits.response.map((deposit) => (
									<DepositCard key={deposit.id_entidade} deposit={deposit} />
								))}
							</div>
						)}

						{!isLoading && deposits && deposits.response.length === 0 && (
							<div className="py-6 text-center text-neutral-500">
								Nenhum depósito encontrado.
							</div>
						)}

						{!isLoading && !deposits && !depositsError && (
							<div className="py-6 text-center text-neutral-500">
								Coordenadas de geolocalização não disponíveis. Verifique seu
								perfil.
							</div>
						)}
					</div>

					<div>
						{deposits && (
							<Pagination
								currentPage={deposits.pagination.currentPage || 1}
								totalItem={deposits.pagination.totalItems || 20}
								legend="Depósitos"
								perPage={deposits.pagination.itemsPerPage || 3}
							/>
						)}
					</div>
				</div>
			</div>
		</>
	)
}
