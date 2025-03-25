import { Table, TableBody } from "@/components/ui/table"
import { Pagination } from "@/components/general-ui/pagination"
import { Toolbar } from "@/components/pharmacy-ui/toolbar"

import { OrderTableRow } from "./order-table-row"
import { OrderTableHead } from "./order-table-head"

import { Helmet } from "react-helmet-async"
import { CircleDashed } from "lucide-react"

export function Orders() {
  return (
    <>
      <Helmet title="Pedidos" />

      <div className="w-full">
        <Toolbar
          children={<CircleDashed className="text-emerald-700 h-6 w-6" />}
          legend="Pedidos"
        />

        <div className="mt-8 bg-white p-4 rounded-lg border shadow-sm">
          <Table className="w-full">
            <OrderTableHead />

            <TableBody>
              {Array.from({ length: 9 }).map((_) => {
                return <OrderTableRow />
              })}
            </TableBody>
          </Table>
        </div>

        <Pagination
          currentPage={1}
          legend="Pedidos"
          totalItem={20}
          perPage={3}
        />
      </div>
    </>
  )
}
