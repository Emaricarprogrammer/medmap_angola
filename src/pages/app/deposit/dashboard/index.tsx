import { Helmet } from "react-helmet-async"

import { Button } from "@/components/ui/button"
import { Toolbar } from "@/components/deposit-ui/toolbar"

import { DashboardOverview } from "./dashboard-overview"
import { Dialog, DialogTrigger } from "@/components/ui/dialog"
import { RegisterMedDialog } from "./register-med-dialog"

import { Table, TableBody } from "@/components/ui/table"
import { OrdersTableHead } from "./orders-table-head"
import { OrdersTableRow } from "./orders-table-row"

import { Pagination } from "@/components/general-ui/pagination"

import { House, Package, Plus } from "lucide-react"

export function Dashboard() {
  return (
    <>
      <Helmet title="Dashboard - Depósito" />

      <div className="w-full">
        <Toolbar
          children={<House className="text-emerald-700 h-6 w-6" />}
          legend="Painel do Depósito"
        />

        <div className="bg-white p-5 border border-neutral-200 rounded-lg  mt-4">
          <DashboardOverview />

          <div className="mt-10 flex items-center justify-between">
            <h1 className="font-bold flex items-center gap-1 text-neutral-800">
              <Package className="w-5 h-5" />
              Últimos Pedidos em 24h
            </h1>

            <Dialog>
              <DialogTrigger>
                <Button
                  type="button"
                  className="flex items-center bg-gradient-to-tr to-emerald-500 from-emerald-600 gap-1"
                >
                  <Plus className="w-4 h-4" />
                  <span>Cadastrar Novo Medicamento</span>
                </Button>
              </DialogTrigger>

              <RegisterMedDialog />
            </Dialog>
          </div>

          <div className="mt-6 bg-white p-4 rounded-lg border shadow-sm">
            <Table className="w-full">
              <OrdersTableHead />

              <TableBody>
                {Array.from({ length: 4 }).map((_) => {
                  return <OrdersTableRow />
                })}
              </TableBody>
            </Table>
          </div>

          <div>
            <Pagination
              currentPage={1}
              totalItem={20}
              perPage={3}
              legend="Medicamentos"
            />
          </div>
        </div>
      </div>
    </>
  )
}
