import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";

import { User } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import { StartDialog } from "./start-dialog";
import { Helmet } from "react-helmet-async";

export function Landing() {
  return (
    <>
      <Helmet title="Início" />

      <main
        className="bg-cover bg-center h-screen flex flex-col text-center items-center py-20"
        style={{ backgroundImage: "url('/main-bg.png')" }}
      >
        <div>
          <Logo />

          <div className="mt-24 flex flex-col gap-6">
            <header className="font-title text-4xl font-semibold tracking-wide">
              <h1>Medicamentos ao ceu alcance:</h1>
              <h2>Encontre os Depósitos Mais Próximos</h2>
            </header>

            <article className="w-[800px] text-xl text-foreground/80 tracking-wide">
              Nosso sistema conecta voçê aos depósitos mais próximos em poucos
              cliques. Pesquise pelo medicamento necessário e encontre
              rapidamente onde comprar.
            </article>

            <div className="flex gap-4 items-center justify-center">
              <Button size="lg">
                <Link to="/sign-in" className="flex gap-1 items-center">
                  <User className="h-4 w-4" />
                  <span>Entrar</span>
                </Link>
              </Button>

              <StartDialog />
            </div>
          </div>
        </div>

        <footer className="w-full px-20 py-10 absolute bottom-0 flex items-end justify-between">
          <div className="flex items-end gap-2">
            <img src="/logo.png" />
            <span>Contactos</span>
          </div>

          <div className="flex items-center justify-between gap-8">
            <NavLink to="">Termos & condições</NavLink>
            <NavLink to="">Guia</NavLink>
            <NavLink to="">Cookies</NavLink>
          </div>
        </footer>
      </main>
    </>
  );
}
