import { api } from "@/services/axios"
import { jwtDecode } from "jwt-decode"

interface EditProfileBody {
	firma: string
	email: string
	contacto: number
	cidade: string
	nif: string
}

export async function editProfile({
	cidade,
	contacto,
	email,
	firma,
	nif,
}: EditProfileBody) {
	const storedToken = JSON.parse(localStorage.getItem("accessToken") as string)
	const { id_entidade } = jwtDecode<any>(storedToken)

	await api.patch(`/entities/${id_entidade}`, {
		cidade,
		contacto,
		email,
		firma,
		nif,
	})
}
