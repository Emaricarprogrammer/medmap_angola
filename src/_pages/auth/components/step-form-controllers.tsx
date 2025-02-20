import { Button } from '@/components/ui/button';
import { ArrowLeft, ArrowRight } from 'lucide-react';

interface StepFormControllersProps {
  stepForm: number;
  onPrevious: () => void;
  onNext: () => void;
}
export function StepFormControllers({
  stepForm,
  onNext,
  onPrevious,
}: StepFormControllersProps) {
  return (
    <div className="flex justify-end gap-4 mt-4">
      {stepForm !== 1 && (
        <Button type="button" variant="secondary" onClick={onPrevious}>
          <ArrowLeft />
          <span>Voltar</span>
        </Button>
      )}

      {stepForm < 3 && (
        <Button type="button" onClick={onNext}>
          <ArrowRight />
          <span>Próximo</span>
        </Button>
      )}
    </div>
  );
}
