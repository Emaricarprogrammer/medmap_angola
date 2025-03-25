import { Toolbar } from "@/components/pharmacy-ui/toolbar"
import { ShoppingBag, ShoppingCart, Lock, ShoppingBasket } from "lucide-react"
import { Helmet } from "react-helmet-async"
import { Button } from "@/components/ui/button"
import { useCart } from "@/hooks/useCart"
import { CartItem } from "./cart-item"
import { Link } from "react-router-dom"

export function Cart() {
  const { cartItems, totalItems } = useCart()

  return (
    <>
      <Helmet title="Encomendas" />

      <div>
        <Toolbar
          children={<ShoppingCart className="text-emerald-700 h-6 w-6" />}
          legend="Carrinho"
        />
      </div>

      <div className="mt-12 grid grid-cols-[1fr_400px] gap-12 max-lg:grid-cols-1">
        <div className="bg-white p-8 rounded-2xl shadow-lg border border-neutral-200 h-fit">
          {cartItems.length !== 0 ? (
            cartItems.map((item) => {
              return <CartItem key={item.id_medicamento} item={item} />
            })
          ) : (
            <div className="flex flex-col items-center justify-center gap-4 p-8 text-center">
              <div className="w-20 h-20 bg-neutral-100 rounded-full flex items-center justify-center">
                <ShoppingBasket className="w-8 h-8 text-neutral-400" />
              </div>

              <div className="flex flex-col gap-1">
                <h3 className="text-lg font-medium text-neutral-800">
                  Seu carrinho está vazio
                </h3>
                <p className="text-neutral-500">
                  Adicione medicamentos para vê-los aparecer aqui
                </p>
              </div>

              <Link
                to="/pharmacy"
                className="mt-4 px-6 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors"
              >
                Ver medicamentos
              </Link>
            </div>
          )}
        </div>

        <div className="bg-white p-6 rounded-xl border border-neutral-200 shadow-sm">
          <h1 className="font-bold text-neutral-800 text-lg flex items-center gap-2">
            <ShoppingBag className="h-5 w-5 text-emerald-600" />
            Resumo da Encomenda
          </h1>

          <div className="mt-6 space-y-4">
            <div className="flex items-center justify-between py-3 px-2 bg-neutral-50 rounded-lg">
              <span className="text-neutral-600">Total de Medicamentos</span>
              <strong className="text-neutral-900 font-medium">
                {totalItems}
              </strong>
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
