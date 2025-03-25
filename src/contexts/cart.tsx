import { createContext, useState } from "react"
import { Medicinal } from "@/@types/medicinals"
import { toast } from "sonner"

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
}
export const CartContext = createContext({} as CartContextType)

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cartItems, setCartItems] = useState<CartProps[]>([])
  const totalItems = cartItems.length

  function addMedicinalToCart(medicinal: CartProps) {
    setCartItems([
      ...cartItems,
      {
        ...medicinal,
        quantity: medicinal.quantity ? medicinal.quantity + 1 : 1,
      },
    ])
    toast.success(`${medicinal.nome_generico} adicionado ao carrinho!`)
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

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addMedicinalToCart,
        totalItems,
        removeMedicinalFromCart,
        onIncrementQuantity,
        onDecrementQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
