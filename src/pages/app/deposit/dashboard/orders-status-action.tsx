import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { ArrowRight, MessageCircle, X } from "lucide-react"

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

        <DialogContent>
          <DialogTitle>Pedido: xgxgtrafaljtgf</DialogTitle>

          <form className="flex flex-col gap-5">
            <Input
              placeholder="Disponibilidade de Levantamento"
              className="h-16"
            />
            <Button className="ml-auto">
              <MessageCircle />
              Enviar
            </Button>
          </form>
        </DialogContent>
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
