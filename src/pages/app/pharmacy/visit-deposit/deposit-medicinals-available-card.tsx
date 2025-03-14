import { Card } from "@/components/ui/card"
import { Package } from "lucide-react"

export function DepositMedicinalAvailableCard() {
  return (
    <Card className="p-5 flex flex-col gap-2 rounded-lg shadow-sm justify-between text-foreground">
      <strong className="flex">140</strong>
      <div className="font-light text-sm flex items-center justify-between">
        <span>Unidade de Medicamentos</span>
        <Package className="w-4 h-4" />
      </div>
    </Card>
  )
}
