import { createContext, useState } from "react"
import { Medicinal } from "@/@types/medicinals"
import { toast } from "sonner"
import { ShoppingBag } from "lucide-react"
import { Order } from "@/@types/pharmacy-orders"

export interface CartProps extends Medicinal {
  quantity?: number
}

interface CartContextType {
  cartItems: CartProps[]
  totalItems: number

  addMedicinalToCart: (medicinal: CartProps) => void
  removeMedicinalFromCart: (medicinal: CartProps) => void

  onIncrementQuantity: (medicinal: CartProps) => void
  onDecrementQuantity: (medicinal: CartProps) => void

  orders: Order[]
  totalOrders: number
  addOrders: () => void
}
export const CartContext = createContext({} as CartContextType)

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cartItems, setCartItems] = useState<CartProps[]>([])
  const [orders, setOrders] = useState<Order[]>([])

  const totalItems = cartItems.length
  const totalOrders = orders.length

  function addMedicinalToCart(medicinal: CartProps) {
    const medicinalAlreadyExistInTheCart = cartItems.some((item) => {
      return item.id_medicamento === medicinal.id_medicamento
    })

    if (medicinalAlreadyExistInTheCart) {
      const updatedCartItems = cartItems.map((item) => {
        if (item.id_medicamento === medicinal.id_medicamento) {
          return {
            ...item,
            quantity: item.quantity ? item.quantity + 1 : 1,
          }
        }

        return item
      })

      toast.warning(
        `${medicinal.nome_generico} Já existe no carrinho, Deseja Aumetar a Quantidade?, `,

        {
          icon: <ShoppingBag className="w-5 h-5" />,
          action: {
            label: "Confirmar",
            onClick: () => {
              setCartItems(updatedCartItems)
            },
          },
        }
      )
    } else {
      setCartItems([...cartItems, { ...medicinal, quantity: 1 }])
      toast.success(`${medicinal.nome_generico} adicionado ao carrinho!`)
    }
  }

  function removeMedicinalFromCart(medicinal: CartProps) {
    const cartItemsWithoutRemoved = cartItems.filter((item) => {
      return item.id_medicamento !== medicinal.id_medicamento
    })

    setCartItems(cartItemsWithoutRemoved)
    toast.warning(`${medicinal.nome_generico} removido do carrinho!`)
  }

  function onIncrementQuantity(medicinal: CartProps) {
    const updatedCartItems = cartItems.map((item) => {
      if (item.id_medicamento === medicinal.id_medicamento) {
        return {
          ...item,
          quantity: item.quantity ? item.quantity + 1 : 1,
        }
      }

      return item
    })

    setCartItems(updatedCartItems)
  }

  function onDecrementQuantity(medicinal: CartProps) {
    const updatedCartItems = cartItems.map((item) => {
      if (medicinal.id_medicamento === item.id_medicamento) {
        return {
          ...medicinal,
          quantity: medicinal.quantity ? medicinal.quantity - 1 : 1,
        }
      } else {
        return item
      }
    })

    setCartItems(updatedCartItems)
  }

  function addOrders() {
    cartItems.map((order) => {
      setOrders((prev) => [
        ...prev,
        {
          ...order,
          status: "pending",
          date: new Date(),
          total: order.preco * Number(order.quantity),
        },
      ])
    })

    setCartItems([])
  }

  return (
    <CartContext.Provider
      value={{
        cartItems,
        totalItems,
        orders,
        totalOrders,
        addOrders,
        addMedicinalToCart,
        removeMedicinalFromCart,
        onIncrementQuantity,
        onDecrementQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
