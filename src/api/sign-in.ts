import { SignInData } from "@/schemas/sign-in"
import { api } from "@/services/axios"

export async function signIn(entity: SignInData) {
  await api.post("/entidades/signin", {
    entity,
  })
}
