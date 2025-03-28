import { ReactNode } from "react"

import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"

interface ToolbarProps {
  legend: string
  children: ReactNode
}
export function Toolbar({ legend, children }: ToolbarProps) {
  return (
    <div className="w-full border p-4 flex items-center justify-between bg-white rounded-lg">
      <div className="flex items-center gap-2 max-sm:gap-1">
        {children}
        <span className="font-semibold">{legend}</span>
      </div>
      <div className="flex items-center justify-between gap-8 max-sm:gap-8 font-bold">
        <Avatar className="max-sm:w-10 max-sm:h-10">
          <AvatarImage src="[Imagem do Depósito]" />
          <AvatarFallback className="bg-neutral-800 text-white">
            SC
          </AvatarFallback>
        </Avatar>
      </div>
    </div>
  )
}
