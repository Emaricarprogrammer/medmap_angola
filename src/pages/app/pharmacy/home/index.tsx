import { Helmet } from "react-helmet-async"

import { Toolbar } from "@/components/pharmacy-ui/toolbar"
import { Pagination } from "@/components/general-ui/pagination"

import { House } from "lucide-react"
import { MedicinalCard } from "./medicinal-card"
import { useQuery } from "@tanstack/react-query"
import { getMedicinals } from "@/api/get-medicinals"
import { MedicinalSkeleton } from "./medicinal-skeleton"
import { toast } from "sonner"
import { useEffect } from "react"

export function Home() {
	const {
		data: result,
		isFetching,
		isError,
	} = useQuery({
		queryKey: ["medicinals"],
		queryFn: getMedicinals,
	})

	if (isError) {
		toast.error("Erro ao carregar medicamentos!")
	}

	useEffect(() => {
		if (result?.response === undefined) {
			toast.warning("Ainda Não Existe Medicamentos Disponíveis!")
		}
	}, [])

	return (
		<>
			<Helmet title="Painel Farmácia" />

			<div className="w-full">
				<Toolbar
					children={<House className="text-emerald-700 h-6 w-6" />}
					legend="Home"
				/>

				<div className="h-[40rem] flex-col flex overflow-y-scroll">
					<div className="py-6 max-xl:h-[52rem] max-sm:h-[40rem]  grid grid-cols-3 gap-8 max-xl:grid-cols-2 max-lg:grid-cols-1 overflow-y-scroll">
						{isFetching || isError || result?.response === undefined
							? Array.from({ length: 6 }).map((_, index) => {
									return <MedicinalSkeleton key={index} />
							  })
							: result?.response?.map((medicinal) => (
									<MedicinalCard
										key={medicinal.id_medicamento}
										medicinal={medicinal}
									/>
							  ))}
					</div>

					<div className="mb-auto">
						<Pagination
							legend="Medicamentos"
							currentPage={1}
							totalItem={result?.pagination.totalItems || 0}
							perPage={4}
						/>
					</div>
				</div>
			</div>
		</>
	)
}
