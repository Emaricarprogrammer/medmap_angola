import { Button } from "@/components/ui/button"
import { DialogContent, DialogTitle } from "@/components/ui/dialog"
import {
  Caravan,
  Hospital,
  Minus,
  Package,
  Plus,
  ShoppingBag,
} from "lucide-react"

export function EncomendDialog() {
  return (
    <DialogContent>
      <DialogTitle>Faça a sua encomenda ou reserva</DialogTitle>

      <div className="border gap-8 rounded-sm flex items-center justify-between max-sm:flex-col">
        <img className="w-36 h-36" src="/medicial.png" />

        <div className="flex p-6 flex-col gap-4 bg-neutral-100">
          <div className="flex flex-col gap-2">
            <strong className="font-bold text-xl text-foreground">
              Paracetamol -{" "}
              <span className="font-normal text-neutral-500 text-sm">
                34 Lâminas
              </span>
            </strong>
          </div>
          <div className="flex items-center gap-2">
            <Hospital className="text-emerald-600 h-6 w-6" />
            <strong className="grid text-sm">
              <span className="font-bold">Mariana & Filhos Lda</span>
              <span className="font-normal text-neutral-500">
                Luanda, Viana
              </span>
            </strong>
          </div>
          <div className="flex items-center gap-2">
            <Package className="text-emerald-600 h-6 w-6" />
            <span className="text-neutral-500">25 Unidades Disponíveis</span>
          </div>

          <div>
            <strong className="text-emerald text-xl font-normal">
              <span className="font-bold">11999,99</span> /Caixa
            </strong>
          </div>

          <div className="border px-4 py-2 rounded flex items-center gap-2 justify-between">
            <div className="cursor-pointer w-full flex justify-center font-bold items-center gap-2">
              <Minus className="w-4 h-4" />
            </div>
            <div className="cursor-pointer bg-gradient-to-tr to-emerald-500 from-emerald-600 justify-center font-bold text-white p-2 rounded-sm w-full flex items-center gap-2">
              <Plus className="h-4 w-5" />
            </div>
          </div>

          <footer className="grid gap-2">
            <div className="text-sm text-center">
              <h1 className="font-bold">Reserve & Encomende</h1>
              <p className="text-foreground/80">
                Ao encomedares medicamentos, o depósito enviará o motoboy para
                ir ao seu encontro, isso custaria uma taxa adcional
              </p>
            </div>

            <div className="flex items-center justify-center gap-2 mt-6">
              <Button className="flex items-center gap-1 bg-gradient-to-tr to-emerald-500 from-emerald-600">
                <Caravan className="w-4 h-4" />
                <span>Reservar</span>
              </Button>
              <Button className="flex items-center gap-1" variant="outline">
                <ShoppingBag className="w-4 h-4" />
                <span>Encomedar</span>
              </Button>
            </div>
          </footer>
        </div>
      </div>
    </DialogContent>
  )
}
