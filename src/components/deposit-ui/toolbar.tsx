import { ReactNode } from "react"

interface ToolbarProps {
  legend: string
  children: ReactNode
}
export function Toolbar({ legend, children }: ToolbarProps) {
  return (
    <div className="w-full border p-4 flex items-center justify-between bg-white rounded-lg">
      <div className="flex items-center gap-2 max-sm:gap-1">
        {children}
        <span className="">{legend}</span>
      </div>
    </div>
  )
}
