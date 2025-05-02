import { Helmet } from "react-helmet-async"

import { Pagination } from "@/components/general-ui/pagination"
import { Toolbar } from "@/components/pharmacy-ui/toolbar"
import { Input } from "@/components/ui/input"

import { DepositMedicinalCard } from "./deposit-medicinal-card"
import { DepositOverView } from "./deposit-overview"

import { HandPlatter, Search } from "lucide-react"
import { useSearchParams } from "react-router-dom"
import { MedicinalSkeleton } from "../home/medicinal-skeleton"
import { useQuery } from "@tanstack/react-query"
import { getDeposit } from "@/api/get-deposit"

export function VisitDeposit() {
	const [searchParams] = useSearchParams()
	const paramsId = searchParams.get("id") || null

	const { data, isFetching, isError } = useQuery({
		queryKey: ["deposit", { depsitId: paramsId }],
		queryFn: async () => {
			if (!paramsId) return null
			return getDeposit(paramsId)
		},
		enabled: !!paramsId,
	})

	return (
		<>
			<Helmet title={data?.response?.firma_deposito || "Medmap"} />

			<div className="w-full">
				<Toolbar
					children={<HandPlatter className="text-emerald-600 h-6 w-6" />}
					legend="Detalhes do Depósito"
				/>
				<div className="py-8 w-full">
					<DepositOverView
						available={data?.response.medicamentos_deposito.length || 0}
						locale={data?.response?.pais || ""}
						contacts={data?.response.contacto || 0}
						latitude={data?.response.geolocalizacao_deposito.latitude || 0}
						longitude={data?.response.geolocalizacao_deposito.longitude || 0}
						depositName={data?.response.firma_deposito || ""}
					/>

					<form className="mt-4">
						<div className="relative text-foreground/60">
							<Search className="w-5 h-5 absolute right-3 top-3" />
							<Input
								className="bg-white rounded-lg p-5"
								type="text"
								placeholder="Pesquise por um medicamento"
							/>
						</div>
					</form>

					<div className="">
						<div className="py-4 max-xl:h-[52rem] max-sm:h-[40rem] h-[15rem] overflow-y-scroll grid grid-cols-3 gap-8 max-xl:grid-cols-2 max-lg:grid-cols-1 ">
							{isFetching || isError
								? Array.from({ length: 6 }).map((_, index) => {
										return <MedicinalSkeleton key={index} />
								  })
								: data?.response?.medicamentos_deposito?.map((medicinal) => (
										<DepositMedicinalCard
											key={medicinal.id_medicamento}
											medicinal={medicinal}
										/>
								  ))}
						</div>

						{!isFetching &&
							data?.response.medicamentos_deposito.length === 0 && (
								<div className="flex items-center justify-center">
									{data.response.firma_deposito} Não Possui Medicamentos
								</div>
							)}

						<Pagination
							legend="Medicamentos"
							currentPage={data?.pagination?.currentPage || 0}
							totalItem={data?.pagination?.totalItems || 0}
							perPage={data?.pagination.itemsPerPage || 0}
						/>
					</div>
				</div>
			</div>
		</>
	)
}
