import { SignUpData } from "@/schemas/sign-up"
import { api } from "@/services/axios"

export async function signUp(newEntity: SignUpData) {
  api.post("/entidades/sign-up", {
    newEntity,
  })
}
