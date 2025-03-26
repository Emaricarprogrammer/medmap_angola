import { Button } from "@/components/ui/button"
import { ArrowRight, X } from "lucide-react"

export function OrdersStatusAction() {
  return (
    <div className="flex items-center gap-6">
      <Button
        title="Detalhes do Pedido"
        className="bg-transparent text-emerald-800 hover:bg-transparent"
        size="sm"
      >
        <ArrowRight className="w-4 h-4" />
        Aprovar
      </Button>

      <Button
        title="Detalhes do Pedido"
        className="bg-transparent text-rose-800 hover:bg-transparent"
        size="sm"
      >
        <X className="w-4 h-4" />
        Cancelar
      </Button>
    </div>
  )
}
