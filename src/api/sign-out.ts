import { api } from "@/services/axios"

//Testes de autenticação
export async function signOut() {
	localStorage.removeItem("accessToken")
	await api.post("auth/logout")
}
