import { Search, Settings, ShoppingBasket } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface ToolbarProps {
  legend: string;
  children: ReactNode;
}
export function Toolbar({ legend, children }: ToolbarProps) {
  return (
    <div className="w-full border p-4 flex items-center justify-between max-sm:mt-16 bg-white shadow-sm rounded-xl">
      <div className="flex items-center gap-2 max-sm:gap-1">
        {children}
        <span>{legend}</span>
      </div>

      <div className="flex items-center justify-between gap-8 max-sm:gap-2 text-neutral-400">
        <div
          className="flex items-end gap-1 cursor-pointer"
          title="Sexto de compras"
        >
          <ShoppingBasket className="w-8 h-8 max-sm:w-6 max-sm:h-6" />
          <span className="w-5 h-5 bg-rose-600 text-white max-sm:text-sm  rounded-full flex items-center justify-center font-bold">
            0
          </span>
        </div>

        <Search className="h-7 w-7 max-sm:w-5 max-sm:h-5" />
        <Settings className="h-7 w-7 max-sm:w-5 max-sm:h-5" />

        <Link to="/pharmacy/profile">
          <Avatar>
            <AvatarImage src="/avatar.png" />
            <AvatarFallback>HS</AvatarFallback>
          </Avatar>
        </Link>
      </div>
    </div>
  );
}
