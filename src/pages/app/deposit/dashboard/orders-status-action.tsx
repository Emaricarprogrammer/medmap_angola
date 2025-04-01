import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { ArrowRight, X } from "lucide-react"

export function OrdersStatusAction() {
  return (
    <div className="flex items-center gap-6">
      <Dialog>
        <DialogTrigger asChild>
          <Button
            title="Aprovar Pedido"
            className="bg-transparent text-amber-800 hover:bg-transparent"
            size="sm"
          >
            <ArrowRight className="w-4 h-4" />
            Aprovar
          </Button>
        </DialogTrigger>

        <DialogContent></DialogContent>
      </Dialog>

      <Button
        title="Cancelar Pedido"
        className="bg-transparent text-rose-800 hover:bg-transparent"
        size="sm"
      >
        <X className="w-4 h-4" />
        Cancelar
      </Button>
    </div>
  )
}
