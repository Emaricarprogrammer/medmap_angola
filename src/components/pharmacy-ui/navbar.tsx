import { HandPlatter, CircleDashed, House } from "lucide-react"
import { NavLink } from "react-router-dom"

export function PharmacyNavbar() {
  return (
    <nav className="flex flex-col gap-10 font-light max-sm:flex-row max-sm:text-sm max-sm:gap-8 text-neutral-300 tracking-wide">
      <NavLink
        to="/pharmacy"
        className="flex items-center gap-2 text-lg hover:text-neutral-200"
      >
        <House className="h-5 w-5 max-sm:w-7 max-sm:h-7" />
        <span className="max-sm:hidden">Home</span>
      </NavLink>

      <NavLink
        to="/pharmacy/deposits"
        className="flex items-center gap-2 text-lg hover:text-neutral-200"
      >
        <HandPlatter className="h-5 w-5 max-sm:w-7 max-sm:h-7" />
        <span className="max-sm:hidden">Depósitos</span>
      </NavLink>

      <NavLink
        to="/pharmacy/orders"
        className="flex items-center gap-2 text-lg hover:text-neutral-200"
      >
        <CircleDashed className="h-5 w-5 max-sm:w-7 max-sm:h-7" />
        <span className="max-sm:hidden">Pedidos</span>
      </NavLink>
    </nav>
  )
}
