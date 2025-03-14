import { Card } from "@/components/ui/card"
import { Phone } from "lucide-react"

export function DepositContactsCard() {
  return (
    <Card className="p-5 flex flex-col gap-2 rounded-lg shadow-sm justify-between text-foreground">
      <strong className="flex">+244 900 000 000</strong>
      <div className="font-light text-sm flex items-center justify-between">
        <span>Contacto</span>
        <Phone className="w-4 h-4" />
      </div>
    </Card>
  )
}
