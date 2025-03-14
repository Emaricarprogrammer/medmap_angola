import { Helmet } from "react-helmet-async"

import { Pagination } from "@/components/pagination"
import { Toolbar } from "@/components/toolbar"
import { Input } from "@/components/ui/input"

import { DepositMedicialCard } from "./deposit-medicinal-card"
import { DepositOverView } from "./deposit-overview"

import { HandPlatter, Search } from "lucide-react"

export function VisitDeposit() {
  return (
    <>
      <Helmet title="[Nome do Depósito]" />

      <div className="w-full">
        <Toolbar
          children={<HandPlatter className="text-primary h-6 w-6" />}
          legend="Santa Catarina Lda"
        />
        <div className="py-8 w-full">
          <DepositOverView />

          <form className="mt-4">
            <div className="relative text-foreground/60">
              <Search className="w-5 h-5 absolute right-3 top-3" />
              <Input
                className="bg-white rounded-lg p-5"
                type="text"
                placeholder="Pesquise por um medicamento"
              />
            </div>
          </form>

          <div className="h-[20rem] overflow-y-scroll">
            <div className="py-6 max-xl:h-[52rem] max-sm:h-[40rem]  grid grid-cols-3 gap-8 max-xl:grid-cols-2 max-lg:grid-cols-1 overflow-y-scroll">
              <DepositMedicialCard />
              <DepositMedicialCard />
              <DepositMedicialCard />
            </div>

            <Pagination
              legend="Medicamentos"
              currentPage={1}
              totalItem={20}
              perPage={4}
            />
          </div>
        </div>
      </div>
    </>
  )
}
