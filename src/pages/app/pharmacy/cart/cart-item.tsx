import { Minus, Plus, Trash2 } from "lucide-react"

export function CartItem() {
  return (
    <div className="flex items-center gap-4 justify-between p-4 hover:bg-neutral-50 rounded-lg transition-colors">
      <div className="flex items-center gap-4">
        <div className="w-20 h-20 bg-white border border-neutral-200 rounded-lg overflow-hidden flex items-center justify-center">
          <img
            src="/medicial.png"
            alt="Paracetamol"
            className="w-full h-full object-contain"
          />
        </div>

        <div className="flex flex-col gap-1">
          <strong className="text-neutral-800">Paracetamol</strong>
          <span className="text-sm text-neutral-500">
            500mg · 20 comprimidos
          </span>

          <div className="flex gap-3 mt-2">
            <div className="flex items-center gap-3 bg-neutral-100/70 rounded-lg px-3 py-1">
              <button className="text-emerald-600 hover:text-emerald-700 transition-colors w-5 h-5 flex items-center justify-center rounded-lg hover:bg-emerald-50">
                <Minus className="w-3 h-3" />
              </button>
              <span className="text-sm font-medium w-5 text-center">1</span>
              <button className="text-emerald-600 hover:text-emerald-700 transition-colors w-5 h-5 flex items-center justify-center rounded-lg hover:bg-emerald-50">
                <Plus className="w-3 h-3" />
              </button>
            </div>

            <button className="flex items-center gap-1 text-sm text-rose-600 hover:text-rose-700 transition-colors">
              <Trash2 className="w-4 h-4" />
              <span>Remover</span>
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-end">
        <span className="font-bold text-neutral-800">900 Kz</span>
      </div>
    </div>
  )
}
