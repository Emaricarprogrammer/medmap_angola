import { Toolbar } from "@/components/deposit-ui/toolbar"
import { User } from "lucide-react"
import { Helmet } from "react-helmet-async"

export function DepositPofile() {
  return (
    <>
      <Helmet title="Perfil do Depósito" />

      <div className="w-full">
        <Toolbar
          children={<User className="text-emerald-700 h-6 w-6" />}
          legend="Perfil Depósito"
        />

        <div className="mt-8 bg-white p-4 rounded-lg border shadow-sm">
          <h1>Informações e Dados Relacionados ao Depósito</h1>
        </div>
      </div>
    </>
  )
}
