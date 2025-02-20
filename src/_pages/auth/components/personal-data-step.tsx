import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { FormStepProps } from '@/schemas/sign-up';
import { User, BriefcaseBusiness, LucideUserCog, Barcode } from 'lucide-react';

export function PersonalDataStep({ register, errors }: FormStepProps) {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-col gap-1">
        <Label className="flex items-center text-foreground/60 ml-2 gap-1">
          <User className="w-4 h-4" />
          <span>Nome</span>
        </Label>
        <Input
          type="text"
          placeholder="Digite seu nome"
          className="bg-neutral-50 placeholder:text-neutral-500"
          {...register('name')}
        />
        <span className="text-rose-600 text-sm font-light  text-left ">
          {errors.name &&
            typeof errors.name.message === 'string' &&
            errors.name.message}
        </span>
      </div>

      <div className="flex flex-col gap-1">
        <Label className="flex items-center text-foreground/60 ml-2 gap-1">
          <BriefcaseBusiness className="w-4 h-4" />
          <span>Firma</span>
        </Label>
        <Input
          type="text"
          placeholder="Firma, Lda"
          className="bg-neutral-50 placeholder:text-neutral-500"
          {...register('company')}
        />
        <span className="text-rose-600 text-sm font-light text-left ">
          {errors.company &&
            typeof errors.company.message === 'string' &&
            errors.company.message}
        </span>
      </div>

      <div className="flex flex-col gap-1">
        <Label className="flex items-center text-foreground/60 ml-2 gap-1">
          <LucideUserCog className="w-4 h-4" />
          <span>Tipo de Entidade</span>
        </Label>
        <Select>
          <SelectTrigger className="bg-neutral-50 placeholder:text-neutral-500">
            <SelectValue placeholder="Selecione uma entidade" />
          </SelectTrigger>

          <SelectContent>
            <SelectItem value="pharmacy">Farmácia</SelectItem>
            <SelectItem value="deposit">Depósito</SelectItem>
          </SelectContent>
        </Select>
        <span className="text-rose-600 text-sm font-light text-left ">
          {errors.entity &&
            typeof errors.entity.message === 'string' &&
            errors.entity.message}
        </span>
      </div>

      <div className="flex flex-col gap-1">
        <Label className="flex items-center text-foreground/60 ml-2 gap-1">
          <Barcode className="w-4 h-4" />
          <span>NIF</span>
        </Label>
        <Input
          type="text"
          placeholder="00000000LA"
          className="bg-neutral-50 placeholder:text-neutral-500"
          {...register('nif')}
        />
        <span className="text-rose-600 text-sm font-light text-left ">
          {errors.nif &&
            typeof errors.nif.message === 'string' &&
            errors.nif.message}
        </span>
      </div>
    </div>
  );
}
