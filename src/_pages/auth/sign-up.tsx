import { Logo } from '@/components/logo';
import { Button } from '@/components/ui/button';
import { Card, CardHeader } from '@/components/ui/card';

import { toast } from 'sonner';
import { Helmet } from 'react-helmet-async';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowRight, Loader2 } from 'lucide-react';

import { PersonalDataStep } from './components/personal-data-step';
import { LocationDataStep } from './components/location-data-step';
import { AuthDataStep } from './components/auth-data-step';

import { useForm } from 'react-hook-form';
import { useMultStepForm } from '@/hooks/useMulStepForm';
import { SignUpData, signUpScheme } from '@/schemas/sign-up';
import { zodResolver } from '@hookform/resolvers/zod';
import { StepFormControllers } from './components/step-form-controllers';

export function SignUp() {
  const navigate = useNavigate();

  const { stepForm, handleNext, handlePrevious, stepState } = useMultStepForm();

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
      toast.success('Conta cadastrada com sucesso!', {
        action: {
          label: 'Fazer Login',
          onClick: () => {
            navigate(`/auth/sign-in?email=${data.email}`);
          },
        },
      });
    } catch {
      toast.error('Ops! Falha ao cadastrar conta.');
    }
  }

  return (
    <>
      <Helmet title="Cadastrar-se" />
      <Card className="w-[480px] h-[690px] py-6 px-12">
        <CardHeader>
          <Logo />
          <div>
            Já possui uma conta?{' '}
            <Link to="/auth/sign-in" className="text-primary font-bold">
              Entrar
            </Link>
          </div>
        </CardHeader>

        <form
          className="flex flex-col gap-2 mt-6 text-sm"
          onSubmit={handleSubmit(handleSignUp)}
        >
          {stepForm === 1 && (
            <PersonalDataStep register={register} errors={errors} />
          )}
          {stepForm === 2 && (
            <LocationDataStep register={register} errors={errors} />
          )}
          {stepForm === 3 && (
            <AuthDataStep register={register} errors={errors} />
          )}

          {stepState === 'finished' && (
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
          )}

          <StepFormControllers
            stepForm={stepForm}
            onNext={handleNext}
            onPrevious={handlePrevious}
          />
        </form>
      </Card>
    </>
  );
}
