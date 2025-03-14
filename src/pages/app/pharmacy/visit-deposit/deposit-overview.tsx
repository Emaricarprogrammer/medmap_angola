import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

import { DepositMedicinalAvailableCard } from "./deposit-medicinals-available-card"
import { DepositLocationCard } from "./deposit-location-card"
import { DepositContactsCard } from "./deposit-contacts-card"
import { DepositGeoLocationCard } from "./deposit-geolocation-card"

export function DepositOverView() {
  return (
    <div className="flex flex-col gap-2 w-full border bg-white p-4 rounded-md">
      <div className="flex items-center gap-2">
        <Avatar className="h-16 w-16">
          <AvatarImage src="[Nome da Imagem]" />
          <AvatarFallback className="font-bold border-2">SC</AvatarFallback>
        </Avatar>

        <div className="flex flex-col gap-1">
          <strong className="font-bold text-xl">Santa Catarina</strong>
          <span className="text-foreground/80">Depósito de Medicamentos</span>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-4 mt-4 max-xl:grid-cols-2 max-sm:grid-cols-1">
        <DepositMedicinalAvailableCard />
        <DepositLocationCard />
        <DepositContactsCard />
        <DepositGeoLocationCard />
      </div>
    </div>
  )
}
