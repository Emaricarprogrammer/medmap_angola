import { Helmet } from "react-helmet-async"
import { House, Package } from "lucide-react"

import { OrdersTableHead } from "./orders-table-head"
import { OrdersTableRow } from "./orders-table-row"
import { DashboardOverview } from "./dashboard-overview"

import { Table, TableBody } from "@/components/ui/table"
import { Toolbar } from "@/components/deposit-ui/toolbar"
import { Pagination } from "@/components/general-ui/pagination"

export function Dashboard() {
  return (
    <>
      <Helmet title='Dashboard - Depósito' />

      <div className='w-full'>
        <Toolbar
          children={<House className='text-emerald-700 h-6 w-6' />}
          legend='Painel do Depósito'
        />

        <div className='bg-white p-5  border border-neutral-200 rounded-lg  mt-4'>
          <DashboardOverview />

          <div className='mt-10 flex items-center justify-between'>
            <h1 className='font-bold flex items-center gap-1 text-neutral-800'>
              <Package className='w-5 h-5' />
              Últimos Pedidos em 24h
            </h1>
          </div>
          <div className='mt-6 bg-white h-[22rem] overflow-y-scroll p-4 rounded-lg border shadow-sm'>
            <Table className='w-full'>
              <OrdersTableHead />

              <TableBody>
                {Array.from({ length: 7 }).map((_) => {
                  return <OrdersTableRow />
                })}
              </TableBody>
            </Table>
          </div>

          <Pagination
            currentPage={1}
            totalItem={20}
            perPage={3}
            legend='Pedidos'
          />
        </div>
      </div>
    </>
  )
}
