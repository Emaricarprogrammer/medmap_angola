import { api } from "@/services/axios"

interface GetProfile {
  success: true
  profile: {
    id: number
    role: string
    email: string
    name: string
  }
}
export async function getProfile() {
  const response = await api.get<GetProfile>("/entidades/profile")

  return response.data
}
