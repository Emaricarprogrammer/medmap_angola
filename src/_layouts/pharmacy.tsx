import { PharmacyNavbar } from '@/components/pharmacy-navbar';
import { LogOut } from 'lucide-react';
import { Outlet } from 'react-router-dom';

export function PharmacyLayout() {
  return (
    <div className="flex bg-neutral-100 h-screen gap-8 max-sm:gap-2 ">
      <aside className="flex flex-col justify-between w-fit max-sm:flex-row max-sm:left-0 max-sm:w-full bg-neutral-800 max-sm:h-fit max-sm:py-5 max-sm:px-8 max-sm:fixed max-sm:top-0 h-screen p-10">
        <header className="flex flex-col gap-20 max-sm:flex-row max-sm:gap-12">
          <div className="flex items-end justify-center gap-2 max-sm">
            <img src="/logo-white-1.png" className="w-10 max-sm:w-8" />
            <img src="/logo-white-2.png" className="max-sm:hidden" />
          </div>

          <PharmacyNavbar />
        </header>

        <footer className="flex cursor-pointer items-center gap-2 font-lg text-white hover:text-neutral-100">
          <LogOut className="text-rose-600 w-5 h-5 max-sm:w-6 max-sm:h-6" />
          <span>Sair</span>
        </footer>
      </aside>

      <div className="p-6 w-full">
        <Outlet />
      </div>
    </div>
  );
}
