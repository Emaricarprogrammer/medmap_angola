import { Logo } from '@/components/logo';
import { Button } from '@/components/ui/button';

import { User, UserPlus } from 'lucide-react';
import { Link, NavLink } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

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

          <div className="mt-24 max-lg:mt-8 flex flex-col gap-6 items-center max-lg:w-96">
            <header className="text-4xl font-bold tracking-wide w-fit max-lg:text-3xl">
              <h1 className="max-lg:hidden">Medicamentos ao ceu alcance:</h1>
              <h2>Encontre os Depósitos Mais Próximos</h2>
            </header>

            <article className="w-[800px] max-lg:w-fit text-xl text-foreground/80 tracking-wide max-lg:text-lg">
              Nosso sistema conecta voçê aos depósitos mais próximos em poucos
              cliques. Pesquise pelo medicamento necessário e encontre
              rapidamente onde comprar.
            </article>

            <div className="flex gap-4 items-center justify-center">
              <Button
                size="lg"
                asChild
                className="bg-neutral-900 hover:bg-neutral-800 rounded-full"
              >
                <Link to="/auth/sign-up" className="flex gap-1 items-center">
                  <UserPlus className="h-4 w-4" />
                  <span>Criar Conta</span>
                </Link>
              </Button>

              <Button size="lg" asChild className="rounded-full">
                <Link to="/auth/sign-in" className="flex gap-1 items-center">
                  <User className="h-4 w-4" />
                  <span>Entrar</span>
                </Link>
              </Button>
            </div>
          </div>
        </div>

        <footer className="w-full px-20 max-lg:px-10 py-10 absolute bottom-0 max-lg:justify-center flex items-end justify-between">
          <div className="flex items-end gap-2 max-lg:hidden">
            <img src="/logo.png" />
            <span>Contactos</span>
          </div>

          <div className="flex items-center justify-between gap-8">
            <NavLink to="#">Termos & condições</NavLink>
            <NavLink to="#">Guia</NavLink>
            <NavLink to="#">Cookies</NavLink>
          </div>
        </footer>
      </main>
    </>
  );
}
