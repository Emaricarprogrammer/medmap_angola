import { Loader2, Lock } from "lucide-react"

import { Logo } from "@/components/general-ui/logo"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@radix-ui/react-label"
import { Card, CardHeader } from "@/components/ui/card"

import { Helmet } from "react-helmet-async"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { toast } from "sonner"
import {
  ResetPasswordData,
  resetPasswordSchema,
} from "@/schemas/reset-password"
import { useNavigate } from "react-router-dom"

export function ResetPassword() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm<ResetPasswordData>({
    resolver: zodResolver(resetPasswordSchema),
  })

  const navigate = useNavigate()

  async function handleResetPassword(data: ResetPasswordData) {
    console.log(data)
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000))
      toast.success(`Palavra Passe alterada com sucesso`, {
        action: {
          label: "Fazer Login",
          onClick: () => {
            navigate("/auth/sign-in")
          },
        },
      })
    } catch {
      toast.error("Ops! Falha ao repor credencias.")
    }
  }

  return (
    <>
      <Helmet title="Repor Credencias" />
      <Card className="w-[480px] h-[600px] p-12 max-lg:w-96 max-lg:px-6 max-lg:border-none max-lg:shadow-none">
        <CardHeader>
          <Logo />
          <div className="text-foreground">
            Ao repor a sua palavra passe certifique que será fácil de lembrar
          </div>
        </CardHeader>

        <form
          className="flex flex-col gap-6"
          onSubmit={handleSubmit(handleResetPassword)}
        >
          <div className="flex flex-col gap-2">
            <Label className="flex items-center text-foreground/60 ml-2 gap-1">
              <Lock className="w-4 h-4" />
              <span>Palavra Passe antiga</span>
            </Label>
            <Input
              type="password"
              placeholder="*** *** ***"
              className="bg-neutral-50/50"
              {...register("oldPassWord")}
            />
            <span className="text-rose-600 text-sm text-left ">
              {errors.oldPassWord && errors.oldPassWord.message}
            </span>
          </div>

          <div className="flex flex-col gap-2">
            <Label className="flex items-center text-foreground/60 ml-2 gap-1">
              <Lock className="w-4 h-4" />
              <span>Nova Palavra Passe</span>
            </Label>
            <Input
              type="password"
              placeholder="*** *** ***"
              className="bg-neutral-50/50"
              {...register("newPassWord")}
            />
            <span className="text-rose-600 text-sm text-left ">
              {errors.newPassWord && errors.newPassWord.message}
            </span>
          </div>

          <div className="w-full">
            <Button
              className="w-full font-bold rounded-full bg-gradient-to-tr to-emerald-500 from-emerald-600"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="animate-spin" />
                  <span>Processando...</span>
                </>
              ) : (
                <span>Repor Palavra Passe</span>
              )}
            </Button>
          </div>
        </form>
      </Card>
    </>
  )
}
