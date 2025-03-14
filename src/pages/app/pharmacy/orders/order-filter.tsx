import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import { Filter, X } from "lucide-react"

export function OrderFilter() {
  return (
    <div className="mt-5 text-sm w-[50rem]">
      <p className="mb-4">Filtros</p>

      <div className="flex items-center gap-4">
        <Input className="bg-white" placeholder="Nome do Medicamento" />

        <Select defaultValue="all">
          <SelectTrigger className="bg-white">
            <SelectValue placeholder="Status" />
          </SelectTrigger>

          <SelectContent>
            <SelectItem value="all">Todos</SelectItem>
            <SelectItem value="pending">Pendente</SelectItem>
            <SelectItem value="delivered">Entregue</SelectItem>
            <SelectItem value="canceled">Cancelado</SelectItem>
          </SelectContent>
        </Select>

        <Button
          type="submit"
          className="flex items-center gap-1 bg-gradient-to-tr to-emerald-500 from-emerald-600"
          size="sm"
        >
          <Filter className="w-4 h-4" />
          Aplicar filtros
        </Button>

        <Button
          type="button"
          variant="secondary"
          className="flex items-center gap-1 bg-white hover:bg-white"
          size="sm"
        >
          <X className="w-4 h-4" />
          Remover
        </Button>
      </div>
    </div>
  )
}
