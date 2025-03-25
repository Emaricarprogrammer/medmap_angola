import { DepositNavbar } from "@/components/deposit-ui/navbar"
import { LogOut } from "lucide-react"
import { Outlet } from "react-router-dom"

export function DepositLayout() {
  return (
    <div className="flex antialiased bg-neutral-50 h-screen">
      <aside className="flex flex-col justify-between w-64 max-sm:w-full bg-gradient-to-b from-neutral-900 to-neutral-800 max-sm:fixed max-sm:top-0 max-sm:z-50 h-screen p-8 max-sm:p-4 max-sm:py-4 max-sm:border-b max-sm:border-neutral-700 shadow-lg">
        <header className="flex flex-col gap-12 max-sm:flex-row max-sm:items-center max-sm:gap-8">
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <img
                src="/logo-white-1.png"
                className="w-9 h-9 object-contain"
                alt="Deposit Logo"
              />
              <img
                src="/logo-white-2.png"
                className="max-sm:hidden h-6 object-contain"
                alt="Deposit Name"
              />
            </div>
            <div className="max-sm:hidden w-full h-px bg-neutral-700/80"></div>
          </div>

          <DepositNavbar />
        </header>

        <footer className="flex flex-col gap-6">
          <button className="flex items-center gap-3 text-rose-400/90 hover:text-rose-300 transition-colors duration-200 text-sm group">
            <LogOut className="w-5 h-5 max-sm:w-6 max-sm:h-6 group-hover:scale-105 transition-transform" />
            <span className="max-sm:hidden">Sair</span>
          </button>

          <div className="max-sm:hidden text-xs text-neutral-500/70">
            Painel do Depósito &copy; {new Date().getFullYear()}
          </div>
        </footer>
      </aside>

      <div className="flex-1 overflow-y-auto p-8 max-sm:pt-20 bg-white/50">
        <Outlet />
      </div>
    </div>
  )
}
