import { Button } from "@/components/ui/button"
import {
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  RegisterMedicinalFormData,
  registerMedicinalSchema,
} from "@/schemas/register-medicinal"
import { zodResolver } from "@hookform/resolvers/zod"
import { Loader2, Plus } from "lucide-react"
import { useForm } from "react-hook-form"
import { toast } from "sonner"

export function RegisterMedDialog() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterMedicinalFormData>({
    resolver: zodResolver(registerMedicinalSchema),
  })

  async function handleRegisterNewMedicinal(data: RegisterMedicinalFormData) {
    await new Promise((resolve) => setTimeout(resolve, 2000))

    try {
      toast.success(`${data.tradeName} Cadastrado com Sucesso!`)
    } catch {
      toast.error("Ops! Erro ao cadastrar medicamento")
    }
  }

  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Cadastrar Novo Medicamento</DialogTitle>
      </DialogHeader>

      <form
        action=""
        className="mt-4 flex flex-col gap-5"
        onSubmit={handleSubmit(handleRegisterNewMedicinal)}
      >
        <div className="grid grid-cols-2 gap-5">
          <div className="flex flex-col gap-2">
            <Label className="text-foreground/80 text-sm">Nome Comercial</Label>
            <Input
              className="bg-neutral-50 h-12"
              placeholder="Paracetamol"
              {...register("tradeName")}
            />
            <span className="text-sm text-rose-600">
              {errors.tradeName && errors.tradeName.message}
            </span>
          </div>

          <div className="flex flex-col gap-2">
            <Label className="text-foreground/80 text-sm">Nome Genérico</Label>
            <Input
              className="bg-neutral-50 h-12"
              placeholder="Paracetamol"
              {...register("genericName")}
            />
            <span className="text-sm text-rose-600">
              {errors.genericName && errors.genericName.message}
            </span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-5">
          <div className="flex flex-col gap-2">
            <Label className="text-foreground/80 text-sm">Origem</Label>
            <Input
              className="bg-neutral-50 h-12"
              placeholder="Portugal"
              {...register("origin")}
            />
            <span className="text-sm text-rose-600">
              {errors.origin && errors.origin.message}
            </span>
          </div>

          <div className="flex flex-col gap-2">
            <Label className="text-foreground/80 text-sm">Validade</Label>
            <Input
              type="date"
              className="bg-neutral-50 h-12"
              {...register("validateDate", { valueAsDate: true })}
            />
            <span className="text-sm text-rose-600">
              {errors.validateDate && errors.validateDate.message}
            </span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-5">
          <div className="flex flex-col gap-2">
            <Label className="text-foreground/80 text-sm">Preço Unitário</Label>
            <Input
              type="number"
              className="bg-neutral-50 h-12"
              placeholder="1900 KZ"
              {...register("unityPrice", { valueAsNumber: true })}
            />
            <span className="text-sm text-rose-600">
              {errors.unityPrice && errors.unityPrice.message}
            </span>
          </div>

          <div className="flex flex-col gap-2">
            <Label className="text-foreground/80 text-sm">Quantidade</Label>
            <Input
              type="number"
              className="bg-neutral-50 h-12"
              placeholder="12"
              {...register("quantity", { valueAsNumber: true })}
            />
            <span className="text-sm text-rose-600">
              {errors.quantity && errors.quantity.message}
            </span>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <Label className="text-foreground/80 text-sm">Categoria</Label>
          <Input
            className="bg-neutral-50 h-12"
            placeholder="Analgésico"
            {...register("category")}
          />
          <span className="text-sm text-rose-600">
            {errors.category && errors.category.message}
          </span>
        </div>

        <Button
          type="submit"
          disabled={isSubmitting}
          className="flex items-center rounded-full bg-gradient-to-tr to-emerald-500 from-emerald-600 gap-1"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="animate-spin w-4 h-4" />
              <span>Cadastrando Medicamento...</span>
            </>
          ) : (
            <>
              <Plus className=" w-4 h-4" />
              <span>Cadastrar</span>
            </>
          )}
        </Button>
      </form>
    </DialogContent>
  )
}
