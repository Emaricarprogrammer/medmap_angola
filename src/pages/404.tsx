import { Helmet } from "react-helmet-async"

export function NotFound() {
  return (
    <>
      <Helmet title="Not found" />

      <div className="flex h-screen items-center justify-center gap-10 text-emerald-600">
        <div>
          <strong className="text-8xl">404</strong>
        </div>

        <div className="flex flex-col gap-4 text-neutral-800">
          <h1 className="text-4xl font-bold">Página não encontrada</h1>
          <p>Não conseguimos encontrar a página solicitada</p>
        </div>
      </div>
    </>
  )
}
