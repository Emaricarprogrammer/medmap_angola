import { PharmacyNavbar } from "@/components/pharmacy-ui/navbar"
import { LogOut } from "lucide-react"
import { Outlet } from "react-router-dom"

export function PharmacyLayout() {
  return (
    <div className="flex antialiased bg-neutral-50 h-screen gap-0 max-sm:gap-0">
      {/* Sidebar - Now with subtle gradient and better spacing */}
      <aside className="flex flex-col justify-between w-fit max-sm:flex-row max-sm:left-0 max-sm:w-full bg-gradient-to-b from-neutral-900 to-neutral-800 max-sm:h-fit max-sm:py-4 max-sm:px-6 max-sm:fixed max-sm:top-0 max-sm:shadow-md h-screen p-8 border-r border-neutral-700/50">
        <header className="flex flex-col w-44 gap-16 max-sm:flex-row max-sm:gap-8 max-sm:items-center">
          <div className="flex flex-col gap-5">
            <div className="flex items-end gap-2.5">
              <img src="/logo-white-1.png" className="w-9 h-9" alt="Logo" />
              <img
                src="/logo-white-2.png"
                className="max-sm:hidden h-6"
                alt="Brand Name"
              />
            </div>

            <span className="w-full max-sm:hidden h-px bg-neutral-700/80 mt-2"></span>
          </div>

          <PharmacyNavbar />
        </header>

        <footer className="flex flex-col gap-6">
          <button className="flex items-center gap-3 text-rose-400/90 hover:text-rose-300 transition-colors text-sm group">
            <LogOut className="w-5 h-5 max-sm:w-6 max-sm:h-6 group-hover:scale-105 transition-transform" />
            <span className="max-sm:hidden">Sair</span>
          </button>

          <div className="max-sm:hidden text-sm text-neutral-500/90">
            Painel da Farmácia &copy; {new Date().getFullYear()}
          </div>
        </footer>
      </aside>

      <div className="flex-1 overflow-auto p-6 max-sm:pt-24 bg-white/50">
        <Outlet />
      </div>
    </div>
  )
}
