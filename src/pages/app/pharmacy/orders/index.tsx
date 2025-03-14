import { Table, TableBody } from "@/components/ui/table"
import { Pagination } from "@/components/pagination"
import { Toolbar } from "@/components/toolbar"

import { OrderTableRow } from "./order-table-row"
import { OrderTableHead } from "./order-table-head"

import { Helmet } from "react-helmet-async"
import { CircleDashed } from "lucide-react"
import { OrderFilter } from "./order-filter"

export function Orders() {
  return (
    <>
      <Helmet title="Pedidos" />

      <div className="w-full">
        <Toolbar
          children={<CircleDashed className="text-primary h-6 w-6" />}
          legend="Pedidos"
        />

        <OrderFilter />

        <div className="mt-3 bg-white p-4 rounded-lg border shadow-sm">
          <Table className="w-full">
            <OrderTableHead />

            <TableBody>
              {Array.from({ length: 8 }).map((_) => {
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
