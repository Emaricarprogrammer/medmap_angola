import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import { AtSign, LogIn, Loader2 } from "lucide-react";
import { Logo } from "@/components/logo";
import { Card, CardHeader } from "@/components/ui/card";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { Helmet } from "react-helmet-async";

const recoveryPassWordScheme = z.object({
  email: z.string().email("Introduza um e-mail válido!"),
});

type RecoveryPassWordData = z.infer<typeof recoveryPassWordScheme>;

export function RecoveryPassWord() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm<RecoveryPassWordData>({
    resolver: zodResolver(recoveryPassWordScheme),
  });

  async function handleRecoveryPassWord(data: RecoveryPassWordData) {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      toast.success(
        `Enviamos um link de reposição de senha para ${data.email}!`,
        {
          action: {
            label: "Reenviar",
            onClick: () => handleRecoveryPassWord(data),
          },
        }
      );
    } catch {
      toast.error("Ops! Falha ao enviar link");
    }
  }

  return (
    <>
      <Helmet title="Recuperar Credencias" />
      <Card className="w-[480px] h-[350px] p-8">
        <CardHeader>
          <Logo />
          <div>
            <h1 className="text-xl font-bold">Recuperar Credencias</h1>
          </div>
        </CardHeader>
        <form
          className="flex flex-col gap-4"
          onSubmit={handleSubmit(handleRecoveryPassWord)}
        >
          <div className="flex flex-col gap-2">
            <Label className="flex items-center text-foreground/60 ml-2 gap-1">
              <AtSign className="w-4 h-4" />
              <span>Insira seu e-mail de cadastro</span>
            </Label>
            <Input
              type="email"
              placeholder="seu@email.com"
              className="bg-neutral-50"
              {...register("email")}
            />
            <span className="text-rose-600 text-sm text-left ">
              {errors.email && errors.email.message}
            </span>
          </div>

          <div className="w-full">
            <Button className="w-full font-bold" disabled={isSubmitting}>
              {isSubmitting ? (
                <>
                  <Loader2 className="animate-spin" />
                  <span>Enviando Link...</span>
                </>
              ) : (
                <>
                  <LogIn />
                  <span>Enviar</span>
                </>
              )}
            </Button>
          </div>
        </form>
      </Card>
    </>
  );
}
