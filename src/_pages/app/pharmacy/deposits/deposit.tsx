import { Toolbar } from '@/components/toolbar';
import { HandPlatter } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { DepositCard } from './depositi-card';

export function Deposits() {
  return (
    <>
      <Helmet title="Depósitos" />

      <div>
        <Toolbar
          children={<HandPlatter className="text-primary h-8 w-8" />}
          legend="Depósitos"
        />

        <div className="py-16 h-[40rem] max-xl:h-[52rem] max-sm:h-[40rem] overflow-y-scroll max-sm:grid-cols-1 max-xl:py-8 grid grid-cols-4 gap-4 max-xl:grid-cols-2">
          <DepositCard />
          <DepositCard />
          <DepositCard />
          <DepositCard />
          <DepositCard />
          <DepositCard />
          <DepositCard />
          <DepositCard />
        </div>
      </div>
    </>
  );
}
