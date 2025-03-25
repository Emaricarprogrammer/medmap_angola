import { Toolbar } from "@/components/pharmacy-ui/toolbar"
import { ShoppingBag, ShoppingCart, Lock } from "lucide-react"
import { Helmet } from "react-helmet-async"
import { CartItem } from "./cart-item"
import { Button } from "@/components/ui/button"

export function Cart() {
  return (
    <>
      <Helmet title="Encomendas" />

      <div>
        <Toolbar
          children={<ShoppingCart className="text-emerald-700 h-6 w-6" />}
          legend="Carrinho"
        />
      </div>

      <div className="mt-12 grid grid-cols-[1fr_400px] gap-12">
        <div className="bg-white p-8 rounded-2xl shadow-lg border border-neutral-200 h-fit">
          <CartItem />
          <CartItem />
          <CartItem />
        </div>

        <div className="bg-white p-6 rounded-xl border border-neutral-200 shadow-sm">
          <h1 className="font-bold text-neutral-800 text-lg flex items-center gap-2">
            <ShoppingBag className="h-5 w-5 text-emerald-600" />
            Resumo da Encomenda
          </h1>

          <div className="mt-6 space-y-4">
            <div className="flex items-center justify-between py-3 px-2 bg-neutral-50 rounded-lg">
              <span className="text-neutral-600">Total de Medicamentos</span>
              <strong className="text-neutral-900 font-medium">4</strong>
            </div>

            <div className="flex items-center justify-between py-3 px-2">
              <span className="text-neutral-600">Subtotal</span>
              <strong className="text-neutral-900 font-medium">190 Kz</strong>
            </div>

            <div className="flex items-center justify-between py-3 px-2 border-t border-dashed border-neutral-200 pt-4">
              <span className="text-neutral-800 font-semibold">Total</span>
              <strong className="text-emerald-600 text-xl font-bold">
                200 Kz
              </strong>
            </div>

            <div className="pt-4">
              <Button className="w-full bg-emerald-600 hover:bg-emerald-700 h-12 rounded-lg font-medium gap-2 transition-colors">
                <ShoppingCart className="h-5 w-5" />
                Finalizar Encomenda
              </Button>

              <p className="text-xs text-neutral-500 mt-2 text-center">
                <Lock className="inline mr-1 h-3 w-3" />
                Pagamento seguro e encriptado
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
