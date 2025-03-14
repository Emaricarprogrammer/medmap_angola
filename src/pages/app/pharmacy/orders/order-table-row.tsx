import { TableRow, TableCell } from "@/components/ui/table"
import { OrderStatus } from "./order-status"

export function OrderTableRow() {
  return (
    <TableRow>
      <TableCell className="py-4 max-xl:py-2">Paracetamol</TableCell>
      <TableCell className="py-4 max-xl:py-2">Analgésico</TableCell>
      <TableCell className="py-4 max-xl:py-2">Santa Catarina Lda</TableCell>
      <TableCell className="py-4 max-xl:py-2">25 Caixas</TableCell>
      <TableCell className="py-4 max-xl:py-2">89.000,90 Akz</TableCell>
      <TableCell className="py-4 max-xl:py-2">Há 2 dias</TableCell>
      <TableCell className="py-4 max-xl:py-2">
        <OrderStatus status="canceled" />
      </TableCell>
    </TableRow>
  )
}
