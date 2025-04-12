import { Button } from "@/components/ui/button"
import { DialogContent } from "@/components/ui/dialog"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function EditProfileDialog() {
	return (
		<DialogContent className="sm:max-w-[600px]">
			<div className="space-y-6">
				<h2 className="text-xl font-bold text-gray-800">
					Editar Perfil do Depósito
				</h2>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
					<div className="space-y-2">
						<Label htmlFor="name">Nome do Depósito</Label>
						<Input
							id="name"
							defaultValue="Depósito Santa Catarina"
							className="w-full h-12"
						/>
					</div>

					<div className="space-y-2">
						<Label htmlFor="email">Email</Label>
						<Input
							id="email"
							type="email"
							defaultValue="farmacia@luandasul.com"
							className="w-full h-12"
						/>
					</div>

					<div className="space-y-2">
						<Label htmlFor="phone">Telefone</Label>
						<Input
							id="phone"
							defaultValue="923 000 999"
							className="w-full h-12"
						/>
					</div>

					<div className="space-y-2">
						<Label htmlFor="address">Endereço</Label>
						<Input
							id="address"
							defaultValue="Rua Kikagil - Luanda"
							className="w-full h-12"
						/>
					</div>

					<div className="space-y-2">
						<Label htmlFor="entity">Entidade</Label>
						<Input
							id="entity"
							defaultValue="98454444645"
							className="w-full h-12"
						/>
					</div>
				</div>

				<div className="flex justify-end gap-3 pt-4">
					<Button variant="outline">Cancelar</Button>
					<Button className="bg-emerald-600 hover:bg-emerald-700">
						Salvar Alterações
					</Button>
				</div>
			</div>
		</DialogContent>
	)
}
