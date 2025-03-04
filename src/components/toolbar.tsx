import { Search, Settings } from 'lucide-react';
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

      <div className="flex items-center justify-between gap-8 max-sm:gap-4 text-neutral-400">
        <Search className="h-7 w-7" />
        <Settings className="h-7 w-7" />

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
