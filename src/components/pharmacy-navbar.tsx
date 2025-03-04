import { Thermometer, HandPlatter, CircleDashed } from 'lucide-react';
import { NavLink } from 'react-router-dom';

export function PharmacyNavbar() {
  return (
    <nav className="flex flex-col gap-10 font-light max-sm:flex-row max-sm:text-sm max-sm:gap-8 text-neutral-400 tracking-wide">
      <NavLink
        to="/pharmacy/medicinals"
        className="flex items-center gap-1 text-lg hover:text-neutral-200"
      >
        <Thermometer className="h-4 w-4 max-sm:w-7 max-sm:h-7" />
        <span className="max-sm:hidden">Medicamentos</span>
      </NavLink>
      <NavLink
        to="/pharmacy/deposits"
        className="flex items-center gap-1 text-lg hover:text-neutral-200"
      >
        <HandPlatter className="h-4 w-4 max-sm:w-7 max-sm:h-7" />
        <span className="max-sm:hidden">Depósitos</span>
      </NavLink>
      <NavLink
        to="/pharmacy/pendings"
        className="flex items-center gap-1 text-lg hover:text-neutral-200"
      >
        <CircleDashed className="h-4 w-4 max-sm:w-7 max-sm:h-7" />
        <span className="max-sm:hidden">Pendentes</span>
      </NavLink>
    </nav>
  );
}
