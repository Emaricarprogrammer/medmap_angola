import { Helmet } from "react-helmet-async"

import { Toolbar } from "@/components/pharmacy-ui/toolbar"
import { Pagination } from "@/components/general-ui/pagination"

import { House } from "lucide-react"
import { MedicinalCard } from "./medicinal-card"

export function Home() {
  return (
    <>
      <Helmet title="Home" />

      <div className="w-full">
        <Toolbar
          children={<House className="text-emerald-700 h-6 w-6" />}
          legend="Home"
        />

        <div className="h-[40rem] overflow-y-scroll">
          <div className="py-6 max-xl:h-[52rem] max-sm:h-[40rem]  grid grid-cols-3 gap-8 max-xl:grid-cols-2 max-lg:grid-cols-1 overflow-y-scroll">
            <MedicinalCard />
            <MedicinalCard />
            <MedicinalCard />
            <MedicinalCard />
            <MedicinalCard />
            <MedicinalCard />
          </div>

          <Pagination
            legend="Medicamentos"
            currentPage={1}
            totalItem={20}
            perPage={4}
          />
        </div>
      </div>
    </>
  )
}
