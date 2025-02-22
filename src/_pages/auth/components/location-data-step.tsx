import { Label } from '@/components/ui/label';
import { Info, Map, MapPin } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { FormStepProps } from '@/schemas/sign-up';

export function LocationDataStep({ register, errors }: FormStepProps) {
  function handleGeoLocation() {
    navigator.geolocation.getCurrentPosition((position) => {
      let { latitude } = position.coords;
      let { longitude } = position.coords;

      //Esses Dados Serão Preenchidos Automaticamente
      // quando essa função for chamada!
      console.log('Latitude: ', latitude);
      console.log('Longitude: ', longitude);
    });
  }

  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-col col-span-2 gap-1">
        <Label className="flex items-center text-foreground/60 ml-2 gap-1">
          <Info className="w-4 h-4" />
          <span>Logradouro</span>
        </Label>
        <Input
          type="text"
          placeholder="Logradouro"
          className="bg-neutral-50 placeholder:text-neutral-500"
          {...register('logradouro')}
        />
        <span className="text-rose-600 text-sm font-light text-left ">
          {errors.logradouro &&
            typeof errors.logradouro.message === 'string' &&
            errors.logradouro.message}
        </span>
      </div>
      <div className="flex flex-col gap-1">
        <Label className="flex items-center text-foreground/60 ml-2 gap-1">
          <Info className="w-4 h-4" />
          <span>Rua</span>
        </Label>
        <Input
          type="text"
          placeholder="Nº da Rua"
          className="bg-neutral-50 placeholder:text-neutral-500"
          {...register('streetNumber')}
        />
        <span className="text-rose-600 text-sm font-light text-left ">
          {errors.streetNumber &&
            typeof errors.streetNumber.message === 'string' &&
            errors.streetNumber.message}
        </span>
      </div>

      <div className="grid grid-cols-2 gap-2">
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

        <div className="flex flex-col gap-1">
          <Label className="flex items-center text-foreground/60 gap-1">
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

      <div
        onClick={handleGeoLocation}
        className="flex justify-start text-sm font-bold text-primary w-fit gap-1 mt-4 cursor-pointer rounded-full"
      >
        <MapPin className="w-4 h-4" />
        <span>Usar a localização actual</span>
      </div>
    </div>
  );
}
