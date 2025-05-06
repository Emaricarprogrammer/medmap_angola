import { TableRow, TableCell } from "@/components/ui/table"
import { EntityType } from "./entity-type"
import { Trash } from "lucide-react"

export function EntityTableRow() {
	return (
		<TableRow className={`transition-colors bg-gray-50"`}>
			<TableCell className="py-4 font-medium border-b border-gray-100">
				Santa Catarina LDA
			</TableCell>

			<TableCell className="py-4 border-b border-gray-100">
				<EntityType type="deposito" />
			</TableCell>

			<TableCell className="py-4 text-gray-500 border-b border-gray-100">
				02/05/2015
			</TableCell>

			<TableCell className="py-4 border-b border-gray-100">
				<button
					className="
              flex items-center gap-1 px-3 py-1 rounded-md text-sm
              transition-all text-rose-600"
				>
					<Trash className="w-4 h-4" />
					<span className="transition-opacity">Excluir</span>
				</button>
			</TableCell>
		</TableRow>
	)
}
