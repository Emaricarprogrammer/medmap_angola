import axios from "axios"

export const api = axios.create({
  baseURL: "http://NOME_DO_IP:PORTA/ROTA_BASE",
})
