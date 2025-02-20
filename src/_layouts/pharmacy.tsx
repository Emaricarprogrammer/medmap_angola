import { PharmacyNavbar } from '@/components/pharmacy-navbar';
import { Power } from 'lucide-react';
import { Outlet } from 'react-router-dom';

export function PharmacyLayout() {
  return (
    <div className="flex h-screen gap-8 bg-primary/5">
      <aside className="flex flex-col justify-between w-fit bg-neutral-800 h-screen p-10">
        <header className="flex flex-col gap-20">
          <div className="flex items-end justify-center gap-2">
            <img src="/logo-white-1.png" className="w-10" />
            <img src="/logo-white-2.png" />
          </div>

          <PharmacyNavbar />
        </header>

        <footer className="flex cursor-pointer items-center gap-2 font-lg text-white hover:text-neutral-100">
          <Power className="text-rose-600 w-4 h-5" />
          <span>Sair</span>
        </footer>
      </aside>

      <div className="p-6 w-full">
        <Outlet />
      </div>
    </div>
  );
}
