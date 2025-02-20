import { Logo } from '@/components/logo';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/components/ui/card';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTrigger,
} from '@/components/ui/dialog';
import { UserPlus, HeartHandshake, BookDown } from 'lucide-react';
import { Link } from 'react-router-dom';

export function StartDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="lg" className="bg-neutral-800 hover:bg-neutral-900">
          <UserPlus className="h-4 w-4" />
          <span>Criar conta</span>
        </Button>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <Logo />
        </DialogHeader>

        <DialogDescription className="text-center text-xl">
          Qual tipo de conta gostaria de criar?
        </DialogDescription>

        <div>
          <div className="grid grid-cols-2 gap-4">
            <Card className="p-2 flex flex-col items-center justify-center text-center gap-4">
              <CardHeader className="w-fit rounded-full p-2 bg-neutral-800 text-white">
                <HeartHandshake className="w-4 h-4" />
              </CardHeader>

              <CardContent>
                <h2 className="font-semibold">Farmácia</h2>
                <p>Crie sua conta como farmácia</p>
              </CardContent>

              <CardFooter>
                <Button className="w-[170px]">
                  <Link to="/auth/sign-up">Criar conta</Link>
                </Button>
              </CardFooter>
            </Card>

            <Card className="p-2 bg-neutral-800 text-white flex flex-col items-center justify-center text-center gap-3">
              <CardHeader className="w-fit rounded-full p-2 bg-neutral-950 text-primary/60">
                <BookDown className="h-4 w-4" />
              </CardHeader>

              <CardContent>
                <h2 className="font-semibold">Depósito</h2>
                <p>Crie sua conta como depósito</p>
              </CardContent>

              <CardFooter>
                <Button className="w-[170px]">
                  <Link to="/auth/sign-up">Criar conta</Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
