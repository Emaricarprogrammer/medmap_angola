import { z } from "zod"

export const registerMedicinalSchema = z.object({
  tradeName: z.string().min(3, "Preencha este campo!"),
  genericName: z.string().min(3, "Preencha este campo!"),
  category: z.string().min(3, "Preencha este campo"),
  origin: z.string().min(3, "Preencha este campo!"),
  validateDate: z.date(),
  unityPrice: z.number().min(1, "Preencha este campo!"),
  quantity: z.number().min(1, "Preencha este campo!"),
})

export type RegisterMedicinalFormData = z.infer<typeof registerMedicinalSchema>
