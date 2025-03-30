import { House, Package } from "lucide-react"
import { NavLink } from "react-router-dom"

export function DepositNavbar() {
  return (
    <nav className="flex flex-col gap-10 font-light max-sm:flex-row max-sm:text-sm max-sm:gap-neutral-300 tracking-wide">
      <NavLink
        to="/deposito"
        className="flex items-center gap-2 max-sm:gap-0 max-sm:flex-col text-neutral-400 font-semibold hover:text-neutral-200"
      >
        <House className="h-5 w-5 max-sm:w-5 max-sm:h-5" />
        <span className="max-sm:xs">Dashboard</span>
      </NavLink>

      <NavLink
        to="/deposito/medicamentos"
        className="flex items-center gap-2 max-sm:gap-0 max-sm:flex-col text-neutral-400 font-semibold hover:text-neutral-200"
      >
        <Package className="h-5 w-5 max-sm:w-5 max-sm:h-5" />
        <span className="max-sm:xs">Stock</span>
      </NavLink>
    </nav>
  )
}
