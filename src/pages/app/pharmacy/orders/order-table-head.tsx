import { TableHeader, TableRow, TableHead } from "@/components/ui/table"

export function OrderTableHead() {
  return (
    <TableHeader>
      <TableRow>
        <TableHead className="w-[250px]">Medicamento</TableHead>
        <TableHead className="w-[150px]">Categoria</TableHead>
        <TableHead className="w-[300px]">Depósito</TableHead>
        <TableHead className="w-[150px]">Quantidade</TableHead>
        <TableHead className="w-[150px]">Preço</TableHead>
        <TableHead className="w-[200px]">Data</TableHead>
        <TableHead className="w-[200px]">Status</TableHead>
      </TableRow>
    </TableHeader>
  )
}
