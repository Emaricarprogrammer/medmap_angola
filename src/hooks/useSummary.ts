import { useCart } from "./useCart"

export function useSummary() {
  const { cartItems } = useCart()
  const FRETE_DE_ENTREGA = 500

  const summary = cartItems.reduce(
    (acc, cartItem) => {
      acc.subtotal += cartItem.preco * Number(cartItem.quantity)
      acc.total = FRETE_DE_ENTREGA + acc.subtotal
      return acc
    },
    {
      total: 0,
      subtotal: 0,
    }
  )

  return { summary, FRETE_DE_ENTREGA }
}
