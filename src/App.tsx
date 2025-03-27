import { Helmet, HelmetProvider } from "react-helmet-async"
import { RouterProvider } from "react-router-dom"
import { Toaster } from "sonner"
import { routes } from "./routes"
import { QueryClientProvider } from "@tanstack/react-query"
import { queryClient } from "./services/react-query"
import { CartProvider } from "./contexts/cart"

export function App() {
  return (
    <>
      <HelmetProvider>
        <Helmet titleTemplate="%s - Medmap" />
        <Toaster
          style={{
            fontFamily: "DM Sans",
          }}
          richColors
          position="top-center"
        />
        <QueryClientProvider client={queryClient}>
          <CartProvider>
            <RouterProvider router={routes} />
          </CartProvider>
        </QueryClientProvider>
      </HelmetProvider>
    </>
  )
}
