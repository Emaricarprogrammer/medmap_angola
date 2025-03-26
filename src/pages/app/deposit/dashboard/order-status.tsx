type OrderStatus = "pending" | "delivered" | "canceled"

interface OrderStatusProps {
  status: OrderStatus
}

export function OrderStatus({ status }: OrderStatusProps) {
  return (
    <div className="flex items-center gap-1">
      {status === "pending" && (
        <>
          <span className="w-2 h-2 rounded-full bg-amber-600"></span>
          <span>Pendente</span>
        </>
      )}
      {status === "delivered" && (
        <>
          <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
          <span>Entregue</span>
        </>
      )}
      {status === "canceled" && (
        <>
          <span className="w-2 h-2 rounded-full bg-rose-600"></span>
          <span>Cancelado</span>
        </>
      )}
    </div>
  )
}
