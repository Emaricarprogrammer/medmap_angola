import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Hospital } from "lucide-react"
import { Helmet } from "react-helmet-async"

export function AdminLayouth() {
  return (
    <>
      <Helmet title="Administrador" />

      <div className="bg-neutral-900 h-screen w-full text-neutral-100">
        <header className="flex items-center justify-between border-b border-b-neutral-800 px-12 py-6">
          <img src="/logo-white-1.png" className="w-12" alt="" />

          <nav className="flex items-center gap-4">
            <h1 className="text-xl font-bold">Heezy</h1>
            <Avatar>
              <AvatarImage src="" />
              <AvatarFallback className="bg-neutral-600 font-bold">
                HZ
              </AvatarFallback>
            </Avatar>
          </nav>
        </header>

        <div className="p-12 text-2xl font-semibold">
          <h1>Painel do Administrador</h1>
        </div>

        <div className="px-10 grid grid-cols-4 gap-8">
          {Array.from({ length: 4 }).map((_) => {
            return (
              <div className="flex flex-col gap-2 bg-neutral-800 border border-neutral-700 p-4 rounded-md">
                <div className="w-fit  rounded-full bg-gradient-to-tr to-emerald-500 from-emerald-600 p-2">
                  <Hospital />
                </div>
                <p className="text-lg">Farmácias Registradas</p>
                <strong>45</strong>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}
