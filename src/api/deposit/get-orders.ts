import { api } from "@/services/axios"

export async function getOrders(depositId: string) {
	const storedToken = localStorage.getItem("accessToken")

	if (!storedToken || typeof storedToken !== "string") {
		throw new Error("Token de autenticação ausente ou inválido")
	}

	try {
		const response = await api.get(
			`/entity/deposit/medicines/my/requests/${depositId}`,
			{
				headers: {
					Authorization: `Bearer ${storedToken}`,
				},
			}
		)
		console.log(response.data)
		return response.data
	} catch (error) {
		console.log(error)
	}
}
