import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import { Lock, AtSign, Loader, LogIn } from "lucide-react";
import { Logo } from "@/components/logo";
import { Card, CardHeader } from "@/components/ui/card";
import { Link } from "react-router-dom";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { Helmet } from "react-helmet-async";

const signInScheme = z.object({
  email: z.string().email("Introduza um e-mail válido!"),
  password: z
    .string()
    .min(6, "Introduza uma palavra-passe de no mínimo 6 dígitos!"),
});

type SignInData = z.infer<typeof signInScheme>;

export function SignIn() {
  /*   const navigate = useNavigate(); */

  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm<SignInData>({
    resolver: zodResolver(signInScheme),
  });

  async function handleSignIn(data: SignInData) {
    console.log(data);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      toast.success("Login realizado com Sucesso!", {});
    } catch {
      toast.error("Ops! Falha ao fazer Login.");
    }
  }

  return (
    <>
      <Helmet title="Fazer Login" />
      <Card className="w-[480px] h-[500px] p-8">
        <CardHeader>
          <Logo />
          <div>
            Ainda não possui uma conta?{" "}
            <Link to="/sign-up" className="text-primary font-bold">
              Crie uma
            </Link>
          </div>
        </CardHeader>
        <form
          className="flex flex-col gap-6"
          onSubmit={handleSubmit(handleSignIn)}
        >
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
                  <Loader className="animate-spin" />
                  <span>Verificando credencias...</span>
                </>
              ) : (
                <>
                  <LogIn />
                  <span>Fazer Login</span>
                </>
              )}
            </Button>
          </div>
        </form>
      </Card>
    </>
  );
}
