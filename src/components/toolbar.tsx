import { Search, Settings } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { ReactNode } from "react";
import { Link } from "react-router-dom";

interface ToolbarProps {
  legend: string;
  children: ReactNode;
}
export function Toolbar({ legend, children }: ToolbarProps) {
  return (
    <div className="w-full p-4 flex items-center justify-between bg-white shadow-sm rounded-xl">
      <div className="flex items-center gap-2">
        {children}
        <span>{legend}</span>
      </div>

      <div className="flex items-center justify-between gap-8 text-neutral-400">
        <Search className="h-8 w-8" />
        <Settings className="h-8 w-8" />

        <Link to="/perfil">
          <Avatar>
            <AvatarImage src="/avatar.png" />
            <AvatarFallback>HS</AvatarFallback>
          </Avatar>
        </Link>
      </div>
    </div>
  );
}
