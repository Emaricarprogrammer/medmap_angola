import { Table, TableBody } from "@/components/ui/table"
import { Pagination } from "@/components/general-ui/pagination"

import { Helmet } from "react-helmet-async"
import { Package } from "lucide-react"
import { Toolbar } from "@/components/deposit-ui/toolbar"
import { MedicinalTableHead } from "./medicinal-table-head"
import { MedicinalTableRow } from "./medicinal-table-row"

export function Medicinals() {
  return (
    <>
      <Helmet title="Gestão de Medicamentos" />

      <div className="w-full">
        <Toolbar
          children={<Package className="text-emerald-700 h-6 w-6" />}
          legend="Medicamentos"
        />

        <div className="mt-8 bg-white p-4 rounded-lg border shadow-sm">
          <Table className="w-full">
            <MedicinalTableHead />

            <TableBody>
              {Array.from({ length: 9 }).map((_) => {
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
