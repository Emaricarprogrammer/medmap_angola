import { House, Package, User } from "lucide-react"
import { NavLink } from "react-router-dom"

export function DepositNavbar() {
  return (
    <nav className="flex flex-col gap-10 font-light max-sm:flex-row max-sm:text-sm max-sm:gap-8 text-neutral-300 tracking-wide">
      <NavLink
        to="/deposit"
        className="flex items-center gap-2 text-lg hover:text-neutral-200"
      >
        <House className="h-5 w-5 max-sm:w-7 max-sm:h-7" />
        <span className="max-sm:hidden">Dashboard</span>
      </NavLink>

      <NavLink
        to="/deposit/medicinals"
        className="flex items-center gap-2 text-lg hover:text-neutral-200"
      >
        <Package className="h-5 w-5 max-sm:w-7 max-sm:h-7" />
        <span className="max-sm:hidden">Medicamentos</span>
      </NavLink>

      <NavLink
        to="/deposit/profile"
        className="flex items-center gap-2 text-lg hover:text-neutral-200"
      >
        <User className="h-5 w-5 max-sm:w-7 max-sm:h-7" />
        <span className="max-sm:hidden">Perfil</span>
      </NavLink>
    </nav>
  )
}
