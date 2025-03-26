import { TableRow, TableCell } from "@/components/ui/table"
import { OrderStatus } from "./order-status"

export function OrderTableRow() {
  return (
    <TableRow>
      <TableCell className="py-4 max-xl:py-2">Paracetamol</TableCell>
      <TableCell className="py-4 max-xl:py-2">Analgésico</TableCell>
      <TableCell className="py-4 max-xl:py-2">Santa Catarina Lda</TableCell>
      <TableCell className="py-4 max-xl:py-2">25 Caixas</TableCell>
      <TableCell className="py-4 max-xl:py-2">AOA 89.000,90</TableCell>
      <TableCell className="py-4 max-xl:py-2">AOA 45.00,90</TableCell>
      <TableCell className="py-4 max-xl:py-2">4horas</TableCell>
      <TableCell className="py-4 max-xl:py-2">
        <OrderStatus status="canceled" />
      </TableCell>
    </TableRow>
  )
}
