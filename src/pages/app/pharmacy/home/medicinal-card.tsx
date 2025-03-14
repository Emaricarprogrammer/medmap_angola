import { Dialog, DialogTrigger } from "@/components/ui/dialog"
import {
  ArrowUpRightFromSquare,
  Hospital,
  Package,
  ShoppingCart,
} from "lucide-react"
import { EncomendDialog } from "./encomend-dialog"
import { Button } from "@/components/ui/button"

export function MedicinalCard() {
  return (
    <div className="bg-white border-t-emerald-600 p-6 flex rounded-xl max-sm:p-4 max-sm:flex-col border-2">
      <img className="w-20 h-20 max-sm:w-24 max-sm:h-24" src="/medicial.png" />

      <div className="flex-1 rounded-tr-xl rounded-br-xl bg-neutral-100 flex flex-col gap-3 max-sm:gap-2">
        <div className="flex flex-col gap-2 p-3">
          <strong className="text-emerald-600 font-normal">
            <span>11999,99</span> /Caixa
          </strong>
          <strong className="font-medium text-foreground text-sm">
            Paracetamol -{" "}
            <span className="font-normal text-neutral-500">34 Lâminas</span>
          </strong>
        </div>

        <div className="flex items-center px-3 gap-2 text-sm">
          <Hospital className="text-foreground/50 h-4 w-4" />
          <strong className="grid">
            <span className="font-medium text-sm">Mariana & Filhos Lda</span>
            <span className="font-normal text-sm text-neutral-500">
              Luanda, Viana
            </span>
          </strong>
        </div>

        <div className="flex items-center px-3 gap-2">
          <Package className="text-foreground/50 h-4 w-4" />
          <span className="text-neutral-500 text-sm">
            25 Unidades Disponíveis
          </span>
        </div>

        <footer className="border-t flex items-center">
          <div className="border-r p-2">
            <Dialog>
              <DialogTrigger asChild>
                <Button
                  size="sm"
                  className="flex bg-transparent w-fit hover:bg-transparent hover:opacity-80 duration-300 rounded-full items-center gap-2 text-emerald-600 cursor-pointer shadow-none"
                >
                  <ShoppingCart className="h-4 w-4" />
                  <span className="text-sm font-semibold">Encomendar</span>
                </Button>
              </DialogTrigger>

              <EncomendDialog />
            </Dialog>
          </div>

          <div className="flex text-center items-center justify-center">
            <Button
              size="sm"
              className="flex bg-transparent w-fit hover:bg-transparent hover:opacity-80 duration-300 rounded-full items-center gap-2 text-neutral-600 cursor-pointer shadow-none"
            >
              <ArrowUpRightFromSquare className="w-4 h-4" />
              <span className="text-sm">Detalhes</span>
            </Button>
          </div>
        </footer>
      </div>
    </div>
  )
}
