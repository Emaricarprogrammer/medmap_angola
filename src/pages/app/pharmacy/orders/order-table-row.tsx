import { TableRow, TableCell } from "@/components/ui/table"
import { OrderStatus } from "./order-status"
import { Order } from "@/@types/pharmacy-orders"
import { priceFormatter } from "@/utils/formatter"

import { formatDistanceToNow } from "date-fns"
import { pt } from "date-fns/locale"

interface OrderProps {
  order: Order
}

export function OrderTableRow({ order }: OrderProps) {
  return (
    <TableRow>
      <TableCell className="py-4 max-xl:py-2">{order.nome_generico}</TableCell>
      <TableCell className="py-4 max-xl:py-2">{order.categoria}</TableCell>
      <TableCell className="py-4 max-xl:py-2">
        {order.deposito.firma_deposito}
      </TableCell>
      <TableCell className="py-4 max-xl:py-2">
        {order.quantity} {order.quantity === 1 ? "Caixa" : "Caixas"}
      </TableCell>
      <TableCell className="py-4 max-xl:py-2">
        {priceFormatter.format(order.preco)}
      </TableCell>
      <TableCell className="py-4 max-xl:py-2">
        {priceFormatter.format(order.total)}
      </TableCell>
      <TableCell className="py-4 max-xl:py-2">
        {formatDistanceToNow(order.date, {
          locale: pt,
        })}
      </TableCell>
      <TableCell className="py-4 max-xl:py-2">
        <OrderStatus status={order.status} />
      </TableCell>
    </TableRow>
  )
}
