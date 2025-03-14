import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export function Pagination() {
  return (
    <div className="text-sm flex px-2 items-center mt-8 justify-between">
      <div>
        <span>Total de 100 Medicamentos</span>
      </div>

      <div className="flex items-center gap-4">
        <span>Página 1 de 20</span>
        <div className="flex items-center gap-2">
          <Button
            size="sm"
            className="bg-white border text-foreground font-extrabold hover:bg-white/70"
          >
            <ChevronLeft />
          </Button>

          <Button
            size="sm"
            className="bg-white border text-foreground font-extrabold hover:bg-white/70"
          >
            <ChevronRight />
          </Button>
        </div>
      </div>
    </div>
  );
}
