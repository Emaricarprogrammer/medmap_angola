import { useNavigate } from "react-router-dom"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

import { ArrowUpRightFromSquare, Package } from "lucide-react"

export function DepositCard() {
  const navigate = useNavigate()

  function handleVisitDeposit() {
    navigate(`/pharmacy/view-deposit?name=[NomeDoDeposito]`)
  }

  return (
    <div className="bg-white h-64 p-8 border-t-emerald-500 duration-200 cursor-pointer flex flex-col justify-between gap-2 rounded-xl border-2 border-t-2">
      <Avatar>
        <AvatarImage src="/profile.png" />
        <AvatarFallback>HF</AvatarFallback>
      </Avatar>

      <div className="flex flex-col gap-1">
        <strong>Marcos Aus Lda</strong>
        <span className="text-neutral-500">Luanda, Kimbangu</span>
      </div>

      <div className="flex items-center gap-2">
        <Package className="h-5 w-5" />
        <span className="text-neutral-500">+500 unidades</span>
      </div>

      <footer className="text-emerald-600 mt-6">
        <span
          onClick={handleVisitDeposit}
          className="cursor-pointer flex text-sm hover:bg-emerald-500 hover:text-white duration-300 bg-emerald-500/10 w-fit py-2 px-4 rounded-full items-center gap-1"
        >
          <ArrowUpRightFromSquare className="w-4 h-4" />
          <span className="font-semibold">Visitar</span>
        </span>
      </footer>
    </div>
  )
}
