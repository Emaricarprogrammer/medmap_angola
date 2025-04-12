import { api } from "@/services/axios"

interface GetProfile {
	success: true
	response: {
		id_entidade: number
		email: string
		firma_entidade: string
		contacto: number
		logradouro: string
		rua: string
		numero: number
		cidade: string
		NIF_entidade: number
	}
}
export async function getProfile() {
	const idAcessToken = JSON.parse(localStorage.getItem("id") as string)
	const entityId = idAcessToken.id_entidade

	console.log(entityId)

	const response = await api.get<GetProfile>(`/entities/me/${entityId}`)
	return response.data.response
}
