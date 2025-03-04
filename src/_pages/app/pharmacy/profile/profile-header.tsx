import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Phone, Map, Package, MapPin } from 'lucide-react';

export function ProfileHeader() {
  return (
    <div className="flex flex-col gap-2 w-full  bg-white  shadow-lg p-4 rounded-md">
      <div className="flex items-center gap-4">
        <Avatar className="h-16 w-16">
          <AvatarImage src="/profile.png" />
          <AvatarFallback>SC</AvatarFallback>
        </Avatar>

        <div className="flex flex-col gap-1">
          <strong className="font-bold text-xl">Santa Catarina</strong>
          <span className="text-foreground/80">Depósito de Medicamentos</span>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-4 mt-4 max-xl:grid-cols-2 max-sm:grid-cols-1">
        <div className="bg-neutral-800 p-5 flex flex-col gap-2 justify-between text-white rounded-md">
          <strong className="flex font-normal">140</strong>
          <div className="text-white/60 font-light flex items-center justify-between">
            <span>Unidade de Medicamentos</span>
            <Package className="w-6 h-6" />
          </div>
        </div>

        <div className="bg-neutral-800 p-5 flex flex-col gap-2 justify-between text-white rounded-md">
          <strong className="flex font-normal">Angola, Luanda</strong>
          <div className="text-white/60 font-light flex items-center justify-between">
            <span>Localização</span>
            <Map className="w-6 h-6" />
          </div>
        </div>

        <div className="bg-neutral-800 p-5 flex flex-col gap-2 justify-between text-white rounded-md">
          <strong className="flex font-normal">+244 900 000 000</strong>
          <div className="text-white/60 font-light flex items-center justify-between">
            <span>Contacto</span>
            <Phone className="w-6 h-6" />
          </div>
        </div>

        <div className="bg-neutral-800 p-5 flex flex-col gap-2 justify-between text-white rounded-md">
          <div className="flex g-2">
            <strong className="flex font-normal">-3425.55/Log</strong>
            <strong className="flex font-normal">-3443.55/Lat</strong>
          </div>
          <div className="text-white/60 font-light flex items-center justify-between">
            <span>Geolocalização</span>
            <MapPin className="w-6 h-6" />
          </div>
        </div>
      </div>
    </div>
  );
}
