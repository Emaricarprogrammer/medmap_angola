import { Map } from "lucide-react"

export function DepositLocationCard() {
  return (
    <div className="bg-white border border-neutral-300 p-5 flex flex-col gap-2 justify-between text-foreground rounded-md">
      <strong className="flex">Angola, Luanda</strong>
      <div className=" font-light text-sm flex items-center justify-between">
        <span>Localização</span>
        <Map className="w-4 h-4" />
      </div>
    </div>
  )
}
