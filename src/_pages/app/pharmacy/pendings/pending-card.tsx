import { Package } from "lucide-react";

export function PendingCard() {
  return (
    <div className="bg-white h-64 p-8 flex flex-col justify-between gap-2 rounded-xl">
      <div className="flex items-center justify-end text-white w-fit p-2 bg-neutral-900 border rounded-full">
        <Package className="h-10 w-10" />
      </div>

      <div className="flex flex-col gap-1">
        <strong className="font-bold">Amoxaxiclina</strong>
        <span className="text-neutral-500">De Santa Catarina</span>
        <span className="text-neutral-500">Há 1h</span>
      </div>
    </div>
  );
}
