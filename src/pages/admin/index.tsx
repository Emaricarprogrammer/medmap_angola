import { Table, TableBody } from "@/components/ui/table"
import { EntityTableHead } from "./entity-table-head"
import { Hospital } from "lucide-react"
import { Pagination } from "@/components/general-ui/pagination"
import { EntityTableRow } from "./entity-table-row"

export function AdminDashboard() {
  return (
    <>
      <div className="px-12 py-8 text-2xl font-semibold">
        <h1>Painel do Administrador</h1>
      </div>

      <div className="px-10 grid grid-cols-4 gap-8">
        {Array.from({ length: 4 }).map((_) => {
          return (
            <div className="flex border-t-emerald-600 shadow-sm flex-col gap-4 bg-white border border-neutral-200 p-4 rounded-md">
              <div className="w-fit  rounded-full bg-gradient-to-tr text-white to-emerald-500 from-emerald-600 p-2">
                <Hospital />
              </div>
              <div className="flex items-center justify-between">
                <p className="text-lg">Farmácias Registradas</p>
                <strong className="font-semibold text-xl">45</strong>
              </div>
            </div>
          )
        })}
      </div>

      <div className="px-10 mt-8">
        <div className="bg-white shadow-sm p-4 rounded-lg border">
          <Table>
            <EntityTableHead />

            <TableBody>
              {Array.from({ length: 5 }).map((_) => {
                return <EntityTableRow />
              })}
            </TableBody>
          </Table>
        </div>

        <Pagination
          totalItem={20}
          currentPage={2}
          perPage={4}
          legend="Entidades"
        />
      </div>
    </>
  )
}
