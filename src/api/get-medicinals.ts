import { api } from "@/services/axios"

interface GetMedidicals {
  id_medicamento: string
  categoria: string
  nome_generico: string
  nome_comercial: string
  origem: string
  validade: Date
  quantidade_disponivel: number
  deposito: {
    firma_deposito: string
    logradouro: string
    rua: string
    number: string
    cidade: string
  }
  preco: number
  imagem: string
}

export async function getMedicinals() {
  const response = await api.get<GetMedidicals[]>("/medicamentos")
  const data = response.data

  return data
}
