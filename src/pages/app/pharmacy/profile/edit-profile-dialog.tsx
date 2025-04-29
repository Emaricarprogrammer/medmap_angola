import { editProfile } from "@/api/edit-profile"
import { getProfile } from "@/api/get-profile"
import { Button } from "@/components/ui/button"
import { DialogContent } from "@/components/ui/dialog"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useMutation, useQuery } from "@tanstack/react-query"
import { useForm } from "react-hook-form"
import { toast } from "sonner"

import { z } from "zod"

const editProfileSchema = z.object({
	firma: z.string().min(1, "Firma inválido!"),
	email: z.string().email(),
	contacto: z.number({ message: "Telefone inválido!" }).min(9),
	cidade: z.string(),
	nif: z.string().min(10, "NIF inválido!"),
})

type EditProfileFormData = z.infer<typeof editProfileSchema>

export function EditProfileDialog() {
	const { data: profile } = useQuery({
		queryKey: ["profile"],
		queryFn: getProfile,
	})

	const { mutateAsync: editProfileFn } = useMutation({
		mutationFn: editProfile,
	})

	const {
		register,
		handleSubmit,
		formState: { isSubmitting },
	} = useForm<EditProfileFormData>({})

	async function handleEditProfile({
		cidade,
		contacto,
		email,
		firma,
		nif,
	}: EditProfileFormData) {
		try {
			await editProfileFn({ cidade, contacto, email, firma, nif })
			toast.success("Actualizou os seus Dados!")
		} catch (error: any) {
			toast.error(error?.response?.data?.message)
		}
	}

	return (
		<DialogContent className="sm:max-w-[600px]">
			<form className="space-y-6" onSubmit={handleSubmit(handleEditProfile)}>
				<h2 className="text-xl font-bold text-gray-800">
					Editar Perfil {profile?.firma_entidade}
				</h2>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
					<div className="space-y-2">
						<Label htmlFor="name">Nome do Depósito</Label>
						<Input
							id="name"
							defaultValue={profile?.firma_entidade}
							className="w-full h-12"
							{...register("firma")}
						/>
					</div>

					<div className="space-y-2">
						<Label htmlFor="email">Email</Label>
						<Input
							id="email"
							type="email"
							defaultValue={profile?.email}
							className="w-full h-12"
							{...register("email")}
						/>
					</div>

					<div className="space-y-2">
						<Label htmlFor="phone">Telefone</Label>
						<Input
							id="phone"
							defaultValue={profile?.contacto}
							className="w-full h-12"
							{...register("contacto")}
						/>
					</div>

					<div className="space-y-2">
						<Label htmlFor="address">Endereço</Label>
						<Input
							id="address"
							defaultValue={profile?.cidade}
							className="w-full h-12"
							{...register("cidade")}
						/>
					</div>

					<div className="space-y-2">
						<Label htmlFor="entity">Entidade</Label>
						<Input
							id="entity"
							defaultValue={profile?.NIF_entidade}
							className="w-full h-12"
							{...register("nif")}
						/>
					</div>
				</div>

				<div className="flex justify-end gap-3 pt-4">
					<Button type="button" variant="outline">
						Cancelar
					</Button>
					<Button
						type="submit"
						disabled={isSubmitting}
						className="bg-emerald-600 hover:bg-emerald-700"
					>
						{isSubmitting ? "Salvando..." : "Salvar Alterações"}
					</Button>
				</div>
			</form>
		</DialogContent>
	)
}
