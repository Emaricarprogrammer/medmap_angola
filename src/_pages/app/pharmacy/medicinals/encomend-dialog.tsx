import { DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Hospital, Package } from "lucide-react";

export function EncomendDialog() {
  return (
    <DialogContent>
      <DialogTitle>Faça a sua encomenda ou reserva</DialogTitle>

      <div className="border gap-8 rounded-sm flex items-center justify-between">
        <img className="w-36 h-36" src="/medicial.png" />

        <div className="flex p-6 flex-col gap-8 bg-neutral-50">
          <div className="flex flex-col gap-2">
            <strong className="font-bold text-xl text-foreground">
              Paracetamol -{" "}
              <span className="font-normal text-neutral-500 text-sm">
                34 Lâminas
              </span>
            </strong>
          </div>
          <div className="flex items-center gap-3">
            <Hospital className="text-primary h-6 w-6" />
            <strong className="grid text-sm">
              <span className="font-bold">Mariana & Filhos Lda</span>
              <span className="font-normal text-neutral-500">
                Luanda, Viana
              </span>
            </strong>
          </div>
          <div className="flex items-center gap-2">
            <Package className="text-primary h-6 w-6" />
            <span className="text-neutral-500">25 Unidades Disponíveis</span>
          </div>

          <div>
            <strong className="text-primary text-xl font-normal">
              <span className="font-bold">11999,99</span> /Caixa
            </strong>
          </div>

          <footer className="border px-4 py-2 rounded flex items-center gap-4 justify-between">
            <div>Diminuir</div>
            <div className="bg-primary text-white p-2 rounded-sm">Aumentar</div>
          </footer>
        </div>
      </div>
    </DialogContent>
  );
}
