import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Package } from 'lucide-react';
import { Link } from 'react-router-dom';

export function DepositCard() {
  return (
    <div className="bg-white h-64 p-8 flex flex-col justify-between gap-2 rounded-xl border-2">
      <Avatar>
        <AvatarImage src="/profile.png" />
        <AvatarFallback>HF</AvatarFallback>
      </Avatar>

      <div className="flex flex-col gap-1">
        <strong>Marcos Aus Lda</strong>
        <span className="text-neutral-500">Luanda, Kimbangu</span>
      </div>

      <div className="flex items-center gap-2">
        <Package className="text-primary h-5 w-5" />
        <span className="text-neutral-500">+500 unidades</span>
      </div>

      <footer className="text-primary">
        <Link to="/pharmacy/profile">Visitar</Link>
      </footer>
    </div>
  );
}
