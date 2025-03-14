import { Card } from "@/components/ui/card"
import { Map } from "lucide-react"

export function DepositLocationCard() {
  return (
    <Card className="p-5 flex flex-col gap-2 shadow-sm rounded-lg justify-between text-foreground">
      <strong className="flex">Angola, Luanda</strong>
      <div className=" font-light text-sm flex items-center justify-between">
        <span>Localização</span>
        <Map className="w-4 h-4" />
      </div>
    </Card>
  )
}
