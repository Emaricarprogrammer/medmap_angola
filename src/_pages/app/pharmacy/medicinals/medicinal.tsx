import { Toolbar } from '@/components/toolbar';
import { MedicialCard } from './medicinal-card';
import { Helmet } from 'react-helmet-async';
import { Thermometer } from 'lucide-react';

export function Medicinals() {
  return (
    <>
      <Helmet title="Medicamentos" />

      <div className="w-full">
        <Toolbar
          children={<Thermometer className="text-primary h-8 w-8" />}
          legend="Medicamentos"
        />

        <div className="py-16 h-[40rem] max-xl:py-8 grid grid-cols-2 gap-8 max-xl:grid-cols-1 overflow-y-scroll">
          <MedicialCard />
          <MedicialCard />
          <MedicialCard />
          <MedicialCard />
          <MedicialCard />
          <MedicialCard />
          <MedicialCard />
          <MedicialCard />
          <MedicialCard />
          <MedicialCard />
        </div>
      </div>
    </>
  );
}
