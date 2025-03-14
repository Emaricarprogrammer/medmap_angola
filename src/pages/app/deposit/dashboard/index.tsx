import { Helmet } from "react-helmet-async"

import { Toolbar } from "@/components/deposit-ui/toolbar"

import { House, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DashboardOverview } from "./dashboard-overview"
import { Dialog, DialogTrigger } from "@/components/ui/dialog"
import { RegisterMedDialog } from "./register-med-dialog"
import { MedicialCard } from "./medicinal-card"

export function Dashboard() {
  return (
    <>
      <Helmet title="Dashboard - Depósito" />

      <div className="w-full">
        <Toolbar
          children={<House className="text-emerald-700 h-6 w-6" />}
          legend="Painel do Depósito"
        />

        <div className="bg-white p-5 border border-neutral-200 rounded-lg  mt-4">
          <DashboardOverview />

          <div className="mt-10 flex items-center justify-between">
            <h1>Medicamentos Adcionados Recentemente</h1>

            <Dialog>
              <DialogTrigger>
                <Button
                  type="button"
                  className="flex items-center bg-gradient-to-tr to-emerald-500 from-emerald-600 gap-1"
                >
                  <Plus className="w-4 h-4" />
                  <span>Cadastrar Novo Medicamento</span>
                </Button>
              </DialogTrigger>

              <RegisterMedDialog />
            </Dialog>
          </div>
        </div>

        <div className="py-6 max-xl:h-[52rem] max-sm:h-[40rem]  grid grid-cols-3 gap-8 max-xl:grid-cols-2 max-lg:grid-cols-1 overflow-y-scroll">
          <MedicialCard />
        </div>
      </div>
    </>
  )
}
