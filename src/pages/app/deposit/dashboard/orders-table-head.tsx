import { TableHeader, TableRow, TableHead } from "@/components/ui/table"

export function OrdersTableHead() {
  return (
    <TableHeader>
      <TableRow>
        <TableHead className="w-[100px]">Detalhes</TableHead>
        <TableHead className="w-[200px]">Entidade Farmacêutica</TableHead>
        <TableHead className="w-[150px]">Quantidade</TableHead>
        <TableHead className="w-[150px]">Total de Pedidos</TableHead>
        <TableHead className="w-[150px]">Realizado Há</TableHead>
        <TableHead className="w-[150px]">Status</TableHead>
      </TableRow>
    </TableHeader>
  )
}
