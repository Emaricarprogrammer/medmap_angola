import { Toolbar } from "@/components/toolbar";
import { HandPlatter } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { DepositCard } from "./depositi-card";

export function Deposits() {
  return (
    <>
      <Helmet title="Depósitos" />

      <div>
        <Toolbar
          children={<HandPlatter className="text-primary h-8 w-8" />}
          legend="Depósitos"
        />

        <div className="py-16 grid grid-cols-4 gap-4">
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
