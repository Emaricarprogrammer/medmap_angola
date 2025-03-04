import { Toolbar } from '@/components/toolbar';
import { Helmet } from 'react-helmet-async';
import { CircleDashed } from 'lucide-react';
import { PendingCard } from './pending-card';

export function Pendings() {
  return (
    <>
      <Helmet title="Pendentes" />

      <div className="w-full">
        <Toolbar
          children={<CircleDashed className="text-primary h-8 w-8" />}
          legend="Pendentes"
        />

        <div className="py-16 h-[40rem] max-xl:h-[52rem] max-sm:h-[40rem]  overflow-y-scroll  max-xl:py-8 grid grid-cols-4 gap-8 max-xl:grid-cols-2 max-sm:grid-cols-1">
          <PendingCard />
          <PendingCard />
          <PendingCard />
          <PendingCard />
          <PendingCard />
          <PendingCard />
          <PendingCard />
          <PendingCard />
        </div>
      </div>
    </>
  );
}
