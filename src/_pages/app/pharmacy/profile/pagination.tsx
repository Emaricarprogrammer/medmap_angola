import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export function Pagination() {
  return (
    <div className="flex items-center gap-4">
      <span>Página 1 de 20</span>
      <div className="flex items-center gap-2">
        <Button className="bg-white border text-foreground font-extrabold hover:bg-white/70">
          <ChevronLeft />
        </Button>

        <Button className="bg-white border text-foreground font-extrabold hover:bg-white/70">
          <ChevronRight />
        </Button>
      </div>
    </div>
  );
}
