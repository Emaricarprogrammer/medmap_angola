import { SignInData } from "@/schemas/sign-in"
import { api } from "@/services/axios"

interface SigInResponse {
  sucess: true
  logged: true
  role: "pharmacy" | "deposit"
}
export async function signIn(entity: SignInData) {
  const response = await api.post<SigInResponse>("/entidades/signin", entity)

  return response.data
}
