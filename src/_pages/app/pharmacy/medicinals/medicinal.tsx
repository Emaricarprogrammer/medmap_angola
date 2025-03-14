import { Toolbar } from '@/components/toolbar';
import { MedicialCard } from './medicinal-card';
import { Helmet } from 'react-helmet-async';
import { Thermometer } from 'lucide-react';
import { Pagination } from '@/components/pagination';

export function Medicinals() {
  return (
    <>
      <Helmet title="Medicamentos" />

      <div className="w-full">
        <Toolbar
          children={<Thermometer className="text-primary h-8 w-8" />}
          legend="Medicamentos"
        />

        <div className="h-[40rem] overflow-y-scroll">
          <div className="py-6 max-xl:h-[52rem] max-sm:h-[40rem]  grid grid-cols-3 gap-8 max-xl:grid-cols-2 max-lg:grid-cols-1 overflow-y-scroll">
            <MedicialCard />
            <MedicialCard />
            <MedicialCard />
            <MedicialCard />
            <MedicialCard />
            <MedicialCard />
          </div>

          <Pagination />
        </div>
      </div>
    </>
  );
}
