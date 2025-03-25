import { useNavigate } from "react-router-dom"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ArrowUpRight, Box, MapPin } from "lucide-react"

export function DepositCard() {
  const navigate = useNavigate()

  function handleVisitDeposit() {
    navigate(`/pharmacy/view-deposit?name=[NomeDoDeposito]`)
  }

  return (
    <div className="bg-white h-72 p-6 cursor-pointer flex flex-col justify-between gap-4 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 hover:border-gray-200 group">
      <div className="flex items-start gap-4">
        <div className="relative">
          <Avatar className="h-14 w-14 rounded-xl border-2 border-white shadow-sm">
            <AvatarImage src="/profile.png" className="object-cover" />
            <AvatarFallback className="bg-gradient-to-br from-gray-100 to-gray-200 text-gray-600 font-medium">
              MA
            </AvatarFallback>
          </Avatar>
          <div className="absolute -bottom-2 -right-2 bg-emerald-500 p-1 rounded-full border-2 border-white">
            <Box className="h-3 w-3 text-white" />
          </div>
        </div>

        <div className="flex-1">
          <h3 className="text-xl font-semibold text-gray-900">
            Marcos Aus Lda
          </h3>
          <p className="text-sm text-gray-500 flex items-center gap-1.5 mt-1">
            <MapPin className="h-4 w-4 text-gray-400" />
            <span>Luanda, Kimbangu</span>
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 mt-2">
        <div className="bg-gray-50/80 p-3 rounded-xl">
          <p className="text-xs text-gray-500">Unidades</p>
          <p className="text-lg font-medium text-gray-900">+500</p>
        </div>
      </div>

      <button
        onClick={handleVisitDeposit}
        className="mt-2 flex border items-center justify-center gap-2 text-sm font-medium text-emerald-600  transition-all duration-300 w-full py-3 rounded-xl group-hover:shadow-emerald-sm"
      >
        <ArrowUpRight className="w-4 h-4" />
        <span>Visitar Depósito</span>
      </button>
    </div>
  )
}
