import { HandPlatter, House, Package } from "lucide-react"
import { NavLink } from "react-router-dom"

export function PharmacyNavbar() {
  return (
    <nav className="flex flex-col gap-10 font-light max-sm:flex-row max-sm:text-sm max-sm:gap-8 text-neutral-300 tracking-wide">
      <NavLink
        to="/pharmacy"
        className="flex items-center gap-2 max-sm:gap-0 max-sm:flex-col text-neutral-400 font-medium hover:text-neutral-200"
      >
        <House className="h-5 w-5 max-sm:w-5 max-sm:h-5" />
        <span className="max-sm:xs">Home</span>
      </NavLink>

      <NavLink
        to="/pharmacy/deposits"
        className="flex items-center gap-2 max-sm:gap-0 max-sm:flex-col text-neutral-400 font-medium hover:text-neutral-200"
      >
        <HandPlatter className="h-5 w-5 max-sm:w-5 max-sm:h-5" />
        <span className="max-sm:xs">Depósitos</span>
      </NavLink>

      <NavLink
        to="/pharmacy/orders"
        className="flex items-center gap-2 max-sm:gap-0 max-sm:flex-col text-neutral-400 font-medium hover:text-neutral-200"
      >
        <Package className="h-5 w-5 max-sm:w-5 max-sm:h-5" />
        <span className="max-sm:xs">Encomendas</span>
      </NavLink>
    </nav>
  )
}
