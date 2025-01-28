import { Helmet, HelmetProvider } from "react-helmet-async";
import { RouterProvider } from "react-router-dom";
import { Toaster } from "sonner";
import { routes } from "./routes";

export function App() {
  return (
    <>
      <HelmetProvider>
        <Helmet titleTemplate="%s / med-map" />
        <Toaster
          style={{
            fontFamily: "Inter",
            fontWeight: "bold",
          }}
          richColors
          position="top-center"
        />
        <RouterProvider router={routes} />
      </HelmetProvider>
    </>
  );
}
