import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { FormStepProps } from "@/schemas/sign-up"
import { AtSign, Phone, Lock } from "lucide-react"

export function AuthDataStep({ register, errors }: FormStepProps) {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-col gap-1">
        <Label className="flex items-center text-foreground/60 ml-2 gap-1">
          <Phone className="w-4 h-4" />
          <span>Telefone</span>
        </Label>
        <Input
          type="number"
          placeholder="999 999 999"
          className="bg-neutral-50 placeholder:text-neutral-500"
          {...register("contacto", { valueAsNumber: true })}
        />
        <span className="text-rose-600 text-sm font-light text-left ">
          {errors.phone &&
            typeof errors.phone.message === "string" &&
            errors.phone.message}
        </span>
      </div>

      <div className="flex flex-col gap-2">
        <Label className="flex items-center text-foreground/60 ml-2 gap-1">
          <AtSign className="w-4 h-4" />
          <span>E-mail</span>
        </Label>
        <Input
          type="email"
          placeholder="seu@email.com"
          className="bg-neutral-50 placeholder:text-neutral-500"
          {...register("email")}
        />
        <span className="text-rose-600 text-sm font-light text-left ">
          {errors.email &&
            typeof errors.email.message === "string" &&
            errors.email.message}
        </span>
      </div>

      <div className="flex flex-col gap-2">
        <Label className="flex items-center text-foreground/60 ml-2 gap-1">
          <Lock className="w-4 h-4" />
          <span>Palavra passe</span>
        </Label>
        <Input
          type="password"
          placeholder="*** *** ***"
          className="bg-neutral-50 placeholder:text-neutral-500"
          {...register("password")}
        />
        <span className="text-rose-600 text-sm font-light text-left ">
          {errors.password &&
            typeof errors.password.message === "string" &&
            errors.password.message}
        </span>
      </div>
    </div>
  )
}
