import { Medicinal } from "@/@types/medicinals"
import { Button } from "@/components/ui/button"
import {
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"
import {
  Hospital,
  Minus,
  Plus,
  ShoppingBag,
  Truck,
  ShieldCheck,
} from "lucide-react"
import { Badge } from "@/components/ui/badge"

interface DetailsDialogProps {
  medicinal: Medicinal
}

export function DetailsDialog({ medicinal }: DetailsDialogProps) {
  return (
    <DialogContent className="sm:max-w-[625px] rounded-lg">
      <div className="space-y-4">
        <DialogTitle className="text-2xl font-bold text-emerald-700 flex items-center gap-2">
          <ShoppingBag className="w-6 h-6" />
          Faça sua Encomenda
        </DialogTitle>

        <DialogDescription className="text-sm text-muted-foreground">
          Complete seu pedido e receba em até 24h
        </DialogDescription>

        <div className="border rounded-lg overflow-hidden shadow-sm">
          <div className="grid md:grid-cols-2 gap-6 p-6">
            <div className="flex flex-col items-center gap-4">
              <img
                className="w-48 h-48 object-contain rounded-lg border bg-white p-4 shadow-sm"
                src="/medicial.png"
                alt={medicinal.nome_generico}
              />

              <div className="flex items-center gap-2 bg-emerald-50 px-3 py-1 rounded-full">
                <ShieldCheck className="h-4 w-4 text-emerald-600" />
                <span className="text-sm font-medium text-emerald-700">
                  {medicinal.quantidade_disponivel} unidades disponíveis
                </span>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-foreground">
                  {medicinal.nome_generico}
                </h3>

                <div className="mt-2 flex items-center gap-2">
                  <Badge variant="secondary" className="text-emerald-700">
                    {medicinal.origem}
                  </Badge>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-emerald-50 p-3 rounded-lg">
                  <p className="text-sm text-muted-foreground">
                    Preço por caixa
                  </p>
                  <p className="text-2xl font-bold text-emerald-600">
                    {Intl.NumberFormat("pt-br", {
                      currency: "AKZ",
                      style: "currency",
                    }).format(medicinal.preco)}
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <Hospital className="mt-1 text-emerald-600 h-5 w-5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">
                      {medicinal.deposito.firma_deposito}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {medicinal.deposito.rua}, {medicinal.deposito.logradouro}
                    </p>
                  </div>
                </div>

                <div className="border rounded-lg p-4">
                  <h4 className="font-medium mb-3">Quantidade</h4>
                  <div className="flex items-center justify-between gap-4">
                    <Button
                      variant="outline"
                      size="icon"
                      className="rounded-full"
                    >
                      <Minus className="h-4 w-4" />
                    </Button>

                    <span className="text-lg font-bold">1</span>

                    <Button
                      variant="outline"
                      size="icon"
                      className="rounded-full bg-emerald-50 border-emerald-100"
                    >
                      <Plus className="h-4 w-4 text-emerald-600" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t bg-gray-50 p-6">
            <div className="flex flex-col sm:flex-row justify-between gap-4">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Truck className="h-4 w-4" />
                <span>Entrega em 24h • Taxa de entrega: 500 AKZ</span>
              </div>

              <Button className="gap-2 bg-emerald-600 hover:bg-emerald-700 shadow-md">
                <ShoppingBag className="h-4 w-4" />
                Adicionar ao carrinho
              </Button>
            </div>
          </div>
        </div>
      </div>
    </DialogContent>
  )
}
