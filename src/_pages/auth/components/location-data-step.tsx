import { Label } from '@/components/ui/label';
import { Info, Map, Building } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { FormStepProps } from '@/schemas/sign-up';

export function LocationDataStep({ register, errors }: FormStepProps) {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-col gap-1">
        <Label className="flex items-center text-foreground/60 ml-2 gap-1">
          <Info className="w-4 h-4" />
          <span>Rua</span>
        </Label>
        <Input
          type="text"
          placeholder="Insira o nome da sa rua"
          className="bg-neutral-50 placeholder:text-neutral-500"
          {...register('street')}
        />
        <span className="text-rose-600 text-sm font-light text-left ">
          {errors.street &&
            typeof errors.street.message === 'string' &&
            errors.street.message}
        </span>
      </div>

      <div className="flex flex-col gap-1">
        <Label className="flex items-center text-foreground/60 ml-2 gap-1">
          <Building className="w-4 h-4" />
          <span>Cidade</span>
        </Label>
        <Input
          type="text"
          placeholder="Adcione sua cidade"
          className="bg-neutral-50 placeholder:text-neutral-500"
          {...register('city')}
        />
        <span className="text-rose-600 text-sm font-light text-left ">
          {errors.city &&
            typeof errors.city.message === 'string' &&
            errors.city.message}
        </span>
      </div>

      <div className="flex flex-col gap-1">
        <Label className="flex items-center text-foreground/60 ml-2 gap-1">
          <Map className="w-4 h-4" />
          <span>Latitude</span>
        </Label>
        <Input
          type="number"
          placeholder="Longitude"
          className="bg-neutral-50 placeholder:text-neutral-500"
          {...register('latitude', { valueAsNumber: true })}
        />
        <span className="text-rose-600 text-sm font-light text-left ">
          {errors.latitude &&
            typeof errors.latitude.message === 'string' &&
            errors.latitude.message}
        </span>
      </div>

      <div className="flex flex-col gap-2">
        <Label className="flex items-center text-foreground/60 ml-2 gap-1">
          <Map className="w-4 h-4" />
          <span>Longitude</span>
        </Label>
        <Input
          type="number"
          placeholder="Latitude"
          className="bg-neutral-50 placeholder:text-neutral-500"
          {...register('longitude', { valueAsNumber: true })}
        />
        <span className="text-rose-600 text-sm font-light text-left ">
          {errors.longitude &&
            typeof errors.longitude.message === 'string' &&
            errors.longitude.message}
        </span>
      </div>
    </div>
  );
}
