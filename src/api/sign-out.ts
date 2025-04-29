import { api } from "@/services/axios"

export async function signOut() {
	localStorage.removeItem("accessToken")
	await api.post("auth/logout")
}
