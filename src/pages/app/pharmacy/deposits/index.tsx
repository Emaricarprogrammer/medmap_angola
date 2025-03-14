import { Toolbar } from "@/components/pharmacy-ui/toolbar"
import { HandPlatter } from "lucide-react"
import { Helmet } from "react-helmet-async"
import { DepositCard } from "./deposit-card"
import { Pagination } from "@/components/general-ui/pagination"

export function Deposits() {
  return (
    <>
      <Helmet title="Depósitos" />

      <div>
        <Toolbar
          children={<HandPlatter className="text-emerald-700 h-6 w-6" />}
          legend="Depósitos"
        />

        <div className="py-6  max-xl:h-[52rem] max-sm:h-[40rem] overflow-y-scroll max-sm:grid-cols-1 max-xl:py-8 grid grid-cols-4 gap-4 max-xl:grid-cols-2">
          <DepositCard />
          <DepositCard />
          <DepositCard />
          <DepositCard />
          <DepositCard />
          <DepositCard />
          <DepositCard />
          <DepositCard />
        </div>

        <Pagination
          currentPage={1}
          totalItem={20}
          legend="Depósitos"
          perPage={3}
        />
      </div>
    </>
  )
}
