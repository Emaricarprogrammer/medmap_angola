import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Hospital, Package, ShoppingBag, MessageCircle } from "lucide-react";
import { EncomendDialog } from "./encomend-dialog";

export function MedicialCard() {
  return (
    <div className="bg-white p-8 flex rounded-xl">
      <img className="w-36 h-36 " src="/medicial.png" />

      <div className="bg-neutral-50 flex-1 p-8 flex flex-col gap-3 rounded-md">
        <div className="flex flex-col gap-2">
          <strong className="text-primary font-normal">
            <span className="font-bold">11999,99</span> /Caixa
          </strong>
          <strong className="font-bold text-foreground">
            Paracetamol -{" "}
            <span className="font-normal text-neutral-500">34 Lâminas</span>
          </strong>
        </div>
        <div className="flex items-center gap-3">
          <Hospital className="text-primary h-6 w-6" />
          <strong className="grid text-sm">
            <span className="font-bold">Mariana & Filhos Lda</span>
            <span className="font-normal text-neutral-500">Luanda, Viana</span>
          </strong>
        </div>
        <div className="flex items-center gap-2">
          <Package className="text-primary h-6 w-6" />
          <span className="text-neutral-500">25 Unidades Disponíveis</span>
        </div>

        <footer className="flex items-center justify-between mt-4 gap-8">
          <Dialog>
            <DialogTrigger asChild>
              <div className="flex items-center gap-2 text-primary cursor-pointer hover:opacity-60">
                <ShoppingBag className="h-5 w-5" />
                <span>Encomendar</span>
              </div>
            </DialogTrigger>

            <EncomendDialog />
          </Dialog>

          <div className="flex items-center gap-2 text-foreground cursor-pointer hover:opacity-60">
            <MessageCircle className="h-5 w-5" />
            <span>Mensagem</span>
          </div>
        </footer>
      </div>
    </div>
  );
}
