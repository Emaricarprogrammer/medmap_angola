import { aproveOrder } from "@/api/deposit/aprove-order"
import { Button } from "@/components/ui/button"
import {
	Dialog,
	DialogContent,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { useMutation } from "@tanstack/react-query"
import { ArrowRight, MessageCircle, X } from "lucide-react"
import { useState } from "react"
import { toast } from "sonner"

interface Props {
	status: "pendente" | "concluido" | "cancelado"
	order: {
		id_aquisicao: string
		data_aquisicao: "2025-05-03T13:12:57.567Z"
		status: "pendente" | "concluido" | "cancelado"
		farmacia: {
			id: string
			nome: string
			contacto: number
		}
		total_compra: number
	}
}
export function OrdersStatusAction({ status, order }: Props) {
	const [message, setMessage] = useState("")
	const [isOpen, setIsOpen] = useState<boolean>(false)

	const { mutateAsync: aproveOrderFn } = useMutation({
		mutationFn: aproveOrder,
		onSuccess() {
			setIsOpen(false)
			toast.success("Medicamento Aprovado!")
		},
		onError(error: any) {
			toast.error(error.response.data.message)
		},
	})

	async function hadleAproveOrder(orderId: string) {
		await aproveOrderFn({
			aquisicao_status: "concluido",
			contacto_farmacia: order.farmacia.contacto,
			id_aquisicao: orderId,
			mensagem: message,
		})
	}

	return (
		<div className="flex items-center gap-6">
			<Dialog open={isOpen} onOpenChange={setIsOpen}>
				<DialogTrigger asChild>
					<Button
						disabled={
							status.includes("concluido") || status.includes("cancelado")
						}
						title="Aprovar Pedido"
						className="bg-transparent text-emerald-600 hover:bg-transparent"
						size="sm"
					>
						<ArrowRight className="w-4 h-4" />
						Aprovar
					</Button>
				</DialogTrigger>

				<DialogContent>
					<DialogTitle>Pedido: xgxgtrafaljtgf</DialogTitle>

					<div className="flex flex-col gap-5">
						<Input
							placeholder="Disponibilidade de Levantamento"
							className="h-16"
							value={message}
							onChange={(e) => setMessage(e.target.value)}
						/>
						<Button
							className="ml-auto"
							onClick={() => {
								hadleAproveOrder(order.id_aquisicao)
							}}
						>
							<MessageCircle />
							Enviar
						</Button>
					</div>
				</DialogContent>
			</Dialog>

			<Button
				disabled={status.includes("concluido") || status.includes("cancelado")}
				title="Cancelar Pedido"
				className="bg-transparent text-red-600 hover:bg-transparent"
				size="sm"
			>
				<X className="w-4 h-4" />
				Cancelar
			</Button>
		</div>
	)
}
