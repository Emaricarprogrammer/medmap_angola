import { Button } from "@/components/ui/button"
import { TableRow, TableCell } from "@/components/ui/table"
import { Search } from "lucide-react"
import { OrderStatus } from "./order-status"
import { OrdersStatusAction } from "./orders-status-action"
import { Dialog, DialogTrigger } from "@/components/ui/dialog"
import { OrdersDetails } from "./orders-details"

export function OrdersTableRow() {
  return (
    <TableRow>
      <TableCell className="py-4 max-xl:py-2">
        <Dialog>
          <DialogTrigger asChild>
            <Button
              title="Detalhes do Pedido"
              className="bg-transparent text-neutral-800 hover:bg-transparent"
              size="sm"
            >
              <Search className="w-4 h-4" />
            </Button>
          </DialogTrigger>

          <OrdersDetails />
        </Dialog>
      </TableCell>

      <TableCell className="py-4 max-xl:py-2">Ada Farma</TableCell>
      <TableCell className="py-4 max-xl:py-2">23 Caixas</TableCell>
      <TableCell className="py-4 max-xl:py-2">AKZ 45.000,00</TableCell>
      <TableCell className="py-4 max-xl:py-2">45 Minutos</TableCell>

      <TableCell className="py-4 max-xl:py-2">
        <OrderStatus status="pending" />
      </TableCell>

      <TableCell className="py-4 max-xl:py-2">
        <OrdersStatusAction />
      </TableCell>
    </TableRow>
  )
}
