import { SignUpData } from "@/schemas/sign-up"
import { api } from "@/services/axios"

export async function SignUp(newUser: SignUpData) {
  api.post("/entidades/sign-up", {
    newUser,
  })
}
