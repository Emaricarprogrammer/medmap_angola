import { Helmet } from "react-helmet-async"
import { Package, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Toolbar } from "@/components/deposit-ui/toolbar"

import { Table, TableBody } from "@/components/ui/table"
import { Dialog, DialogTrigger } from "@/components/ui/dialog"
import { Pagination } from "@/components/general-ui/pagination"
import { RegisterMedDialog } from "../dashboard/register-med-dialog"

import { MedicinalTableRow } from "./medicinal-table-row"
import { MedicinalTableHead } from "./medicinal-table-head"

export function Medicinals() {
  return (
    <>
      <Helmet title="Stock de Medicamentos" />

      <div className="w-full">
        <Toolbar
          children={<Package className="text-emerald-700 h-6 w-6" />}
          legend="Stock"
        />

        <div className="mt-10 flex items-center justify-between">
          <h1 className="font-bold px-1 flex items-center gap-1 text-neutral-800">
            Adcionados Recentemente
          </h1>

          <Dialog>
            <DialogTrigger>
              <Button
                type="button"
                className="flex items-center font-bold rounded-full bg-gradient-to-tr to-emerald-500 from-emerald-600 gap-1"
              >
                <Plus className="w-4 h-4" />
                <span className="max-sm:hidden">Novo Medicamento</span>
              </Button>
            </DialogTrigger>

            <RegisterMedDialog />
          </Dialog>
        </div>

        <div className="mt-8 bg-white p-4 rounded-lg border shadow-sm">
          <Table className="w-full">
            <MedicinalTableHead />

            <TableBody>
              {Array.from({ length: 6 }).map((_) => {
                return <MedicinalTableRow />
              })}
            </TableBody>
          </Table>
        </div>

        <Pagination
          currentPage={1}
          legend="Medicamentos"
          totalItem={20}
          perPage={3}
        />
      </div>
    </>
  )
}
