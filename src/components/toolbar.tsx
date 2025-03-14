import { ShoppingCart } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import { ReactNode } from "react"

interface ToolbarProps {
  legend: string
  children: ReactNode
}
export function Toolbar({ legend, children }: ToolbarProps) {
  return (
    <div className="w-full border p-4 flex items-center justify-between max-sm:mt-16 bg-white shadow-sm rounded-xl">
      <div className="flex items-center gap-2 max-sm:gap-1">
        {children}
        <span className="font-semibold">{legend}</span>
      </div>
      <div className="flex items-center justify-between gap-8 max-sm:gap-8 text-neutral-400">
        <div className="flex items-end cursor-pointer" title="Sexto de compras">
          <ShoppingCart className="w-8 h-8 max-sm:w-7 max-sm:h-7" />
          <span className="w-5 h-5 bg-rose-600 text-white max-sm:text-sm  rounded-full flex items-center justify-center font-bold">
            0
          </span>
        </div>

        <Avatar className="max-sm:w-10 max-sm:h-10">
          <AvatarImage src="/avatar.png" />
          <AvatarFallback>HS</AvatarFallback>
        </Avatar>
      </div>
    </div>
  )
}
