import { Table, TableBody } from "@/components/ui/table"
import { Pagination } from "@/components/general-ui/pagination"
import { Toolbar } from "@/components/pharmacy-ui/toolbar"

import { OrderTableRow } from "./order-table-row"
import { OrderTableHead } from "./order-table-head"

import { Helmet } from "react-helmet-async"
import { Package } from "lucide-react"

import { useQuery } from "@tanstack/react-query"
import { getOrders } from "@/api/get-orders"
import { OrderTableRowSkeleton } from "./orders-skeleton"

export function Orders() {
	const { data: result } = useQuery({
		queryKey: ["orders"],
		queryFn: getOrders,
	})

	return (
		<>
			<Helmet title="Encomendas" />

			<div className="w-full">
				<Toolbar
					children={<Package className="text-emerald-700 h-6 w-6" />}
					legend="Encomendas"
				/>

				<div className="h-[37rem] overflow-y-scroll flex flex-col justify-between">
					<div className="mt-8 bg-white p-4 rounded-lg border shadow-sm">
						<Table className="w-full">
							<OrderTableHead />

							<TableBody>
								{result &&
									result.response.map((pedido) =>
										pedido.pedidos.map((item) =>
											item.medicamento.map((item1) => {
												return (
													<OrderTableRow
														key={item1.id_medicamento}
														order={item1}
														status={item.status}
														quantidade_medicamentos={
															item.quantidade_medicamentos
														}
														data_aquisicao={item.data_aquisicao}
													/>
												)
											})
										)
									)}
								{!result &&
									Array.from({ length: 8 }).map((_, index) => {
										return <OrderTableRowSkeleton key={index} />
									})}
							</TableBody>
						</Table>

						{/* {orders.length === 0 && (
							<div className="flex w-full flex-col items-center justify-center gap-4 p-8 text-center">
								<div className="w-20 h-20 bg-neutral-100 rounded-full flex items-center justify-center">
									<Package className="w-8 h-8 text-neutral-400" />
								</div>

								<div className="flex flex-col gap-1">
									<h3 className="text-lg font-medium text-neutral-800">
										Ops! Não Existem Encomendas
									</h3>
									<p className="text-neutral-500">
										Adicione medicamentos ao carrinho em seguida encomende-os!
									</p>
								</div>

								<Link
									to="/farmacia"
									className="mt-4 px-6 py-2 bg-orange-400 text-white rounded-lg hover:bg-orange-300 transition-colors"
								>
									Começar
								</Link>
							</div>
						)} */}
					</div>
				</div>

				<div>
					{" "}
					<Pagination
						currentPage={result?.pagination.currentPage || 1}
						legend="Pedidos"
						totalItem={Number(result?.response[0].totalPedidos)}
						perPage={result?.pagination.itemsPerPage || 8}
					/>
				</div>
			</div>
		</>
	)
}
