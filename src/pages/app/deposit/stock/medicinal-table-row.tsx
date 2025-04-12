import { Button } from "@/components/ui/button"
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog"
import { TableRow, TableCell } from "@/components/ui/table"
import { Image, Trash2 } from "lucide-react"
import { EditMedicinalDialog } from "./edit-medicinal-dialog"

export function MedicinalTableRow() {
	return (
		<TableRow>
			<TableCell className="py-4 max-xl:py-2">
				<Dialog>
					<DialogTrigger asChild>
						<Button
							className="bg-transparent text-neutral-800 hover:bg-transparent"
							size="sm"
						>
							<Image className="w-4 h-4" />
						</Button>
					</DialogTrigger>

					<DialogContent className="">
						<DialogHeader>
							<DialogTitle>Pré-visualização da Imagem</DialogTitle>
						</DialogHeader>
						<div className="flex justify-center p-4">
							<img
								src="/medicial.png"
								alt="Visualização ampliada"
								className="max-w-full max-h-[70vh] object-contain"
							/>
						</div>
					</DialogContent>
				</Dialog>
			</TableCell>

			<TableCell className="py-4 max-xl:py-2">Paracetamol</TableCell>
			<TableCell className="py-4 max-xl:py-2">Paracetamol</TableCell>
			<TableCell className="py-4 max-xl:py-2">Analgésico</TableCell>
			<TableCell className="py-4 max-xl:py-2">24</TableCell>
			<TableCell className="py-4 max-xl:py-2">Portugal</TableCell>
			<TableCell className="py-4 max-xl:py-2">89.000,90 Akz</TableCell>
			<TableCell className="py-4 max-xl:py-2">02/06/2025</TableCell>

			<TableCell>
				<div className="flex items-center gap-6">
					<Button
						className="bg-transparent text-rose-800 hover:bg-transparent"
						size="sm"
					>
						<Trash2 className="w-4 h-4" />
						Eliminar
					</Button>

					<Dialog>
						<DialogTrigger asChild>
							<Button
								className="bg-transparent text-amber-600 hover:bg-transparent"
								size="sm"
							>
								Editar
							</Button>
						</DialogTrigger>

						<EditMedicinalDialog />
					</Dialog>
				</div>
			</TableCell>
		</TableRow>
	)
}
