import { MapPin } from "lucide-react"

export function DepositGeoLocationCard() {
  return (
    <div className="bg-white border border-neutral-300 p-5 flex flex-col gap-2 justify-between text-foreground rounded-md">
      <div className="flex g-2">
        <strong className="flex">-3425.55/Log</strong>
        <strong className="flex">-3443.55/Lat</strong>
      </div>
      <div className=" font-light text-sm flex items-center justify-between">
        <span>Geolocalização</span>
        <MapPin className="w-4 h-4" />
      </div>
    </div>
  )
}
