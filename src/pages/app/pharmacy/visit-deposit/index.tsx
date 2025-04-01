import { Helmet } from "react-helmet-async"

import { Pagination } from "@/components/general-ui/pagination"
import { Toolbar } from "@/components/pharmacy-ui/toolbar"
import { Input } from "@/components/ui/input"

import { DepositMedicinalCard } from "./deposit-medicinal-card"
import { DepositOverView } from "./deposit-overview"

import { HandPlatter, Search } from "lucide-react"
import { useSearchParams } from "react-router-dom"
import { MedicinalSkeleton } from "../home/medicinal-skeleton"
import { getMedicinals } from "@/api/get-medicinals"
import { useQuery } from "@tanstack/react-query"
import { toast } from "sonner"

export function VisitDeposit() {
  const {
    data: result,
    isFetching,
    isError,
  } = useQuery({
    queryKey: ["medicinals"],
    queryFn: getMedicinals,
  })

  if (isError) {
    toast.error("Erro ao carregar medicamentos!")
  }

  const [searchParams] = useSearchParams()
  const depositName = searchParams.get("name")

  return (
    <>
      <Helmet title={`${depositName}`} />

      <div className="w-full">
        <Toolbar
          children={<HandPlatter className="text-emerald-600 h-6 w-6" />}
          legend={`${depositName}`}
        />
        <div className="py-8 w-full">
          <DepositOverView depositName={depositName} />

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

          <div className="">
            <div className="py-4 max-xl:h-[52rem] max-sm:h-[40rem] h-[15rem] overflow-y-scroll grid grid-cols-3 gap-8 max-xl:grid-cols-2 max-lg:grid-cols-1 ">
              {isFetching || isError ? (
                <>
                  <MedicinalSkeleton />
                  <MedicinalSkeleton />
                  <MedicinalSkeleton />
                  <MedicinalSkeleton />
                  <MedicinalSkeleton />
                  <MedicinalSkeleton />
                </>
              ) : (
                result?.map((medicinal) => (
                  <DepositMedicinalCard
                    key={medicinal.id_medicamento}
                    medicinal={medicinal}
                  />
                ))
              )}
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
