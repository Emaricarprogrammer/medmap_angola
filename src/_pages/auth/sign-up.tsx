import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import { User, Lock, Barcode, ArrowRight, AtSign, Loader2 } from "lucide-react";
import { Logo } from "@/components/logo";
import { Card, CardHeader } from "@/components/ui/card";
import { Link, useNavigate } from "react-router-dom";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { Helmet } from "react-helmet-async";

const signUpScheme = z.object({
  company: z.string().min(1, "Preencha este campo!"),
  nif: z.string().min(1, "Preencha este campo!"),
  email: z.string().email("Introduza um e-mail válido!"),
  password: z
    .string()
    .min(6, "Introduza uma palavra-passe de no mínimo 6 dígitos!"),
});

type SignUpData = z.infer<typeof signUpScheme>;

export function SignUp() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm<SignUpData>({
    resolver: zodResolver(signUpScheme),
  });

  async function handleSignUp(data: SignUpData) {
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      toast.success("Conta cadastrada com sucesso!", {
        action: {
          label: "Fazer Login",
          onClick: () => {
            navigate("/sign-in");
          },
        },
      });
    } catch {
      toast.error("Ops! Falha ao cadastrar conta.");
    }
  }

  return (
    <>
      <Helmet title="Cadastrar-se" />
      <Card className="w-[480px] p-8">
        <CardHeader>
          <Logo />
          <div>
            Já possui uma conta?{" "}
            <Link to="/sign-in" className="text-primary font-bold">
              Entrar
            </Link>
          </div>
        </CardHeader>

        <form
          className="flex flex-col gap-2"
          onSubmit={handleSubmit(handleSignUp)}
        >
          <div className="flex flex-col gap-2">
            <Label className="flex items-center text-foreground/60 ml-2 gap-1">
              <User className="w-4 h-4" />
              <span>Firma</span>
            </Label>
            <Input
              type="text"
              placeholder="Firma, Lda"
              className="bg-neutral-50"
              {...register("company")}
            />
            <span className="text-rose-600 text-sm text-left ">
              {errors.company && errors.company.message}
            </span>
          </div>

          <div className="flex flex-col gap-2">
            <Label className="flex items-center text-foreground/60 ml-2 gap-1">
              <Barcode className="w-4 h-4" />
              <span>NIF</span>
            </Label>
            <Input
              type="text"
              placeholder="00000000LA"
              className="bg-neutral-50"
              {...register("nif")}
            />
            <span className="text-rose-600 text-sm text-left ">
              {errors.nif && errors.nif.message}
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
              className="bg-neutral-50"
              {...register("email")}
            />
            <span className="text-rose-600 text-sm text-left ">
              {errors.email && errors.email.message}
            </span>
          </div>

          <div className="flex flex-col gap-2">
            <Label className="flex items-center text-foreground/60 ml-2 gap-1">
              <Lock className="w-4 h-4" />
              <span>Palavra passe</span>
            </Label>
            <Input
              type="text"
              placeholder="*** *** ***"
              className="bg-neutral-50"
              {...register("password")}
            />
            <span className="text-rose-600 text-sm text-left ">
              {errors.password && errors.password.message}
            </span>
          </div>

          <div className="w-full">
            <Button className="w-full font-bold" disabled={isSubmitting}>
              {isSubmitting ? (
                <>
                  <Loader2 className="animate-spin" />
                  <span>Processando Pedido...</span>
                </>
              ) : (
                <>
                  <ArrowRight />
                  <span>Finalizar</span>
                </>
              )}
            </Button>
          </div>
        </form>
      </Card>
    </>
  );
}
