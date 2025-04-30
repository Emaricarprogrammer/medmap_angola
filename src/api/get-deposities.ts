import { api } from "@/services/axios";

export interface Medicamentos {
	id_medicamento: string;
	categoria: string;
	nome_generico: string;
	nome_comercial: string;
	origem: string;
	validade: Date | string;
	quantidade_disponivel: number;
	preco: number;
	imagem: string;
}

export interface Deposito {
	id_entidade: string;
	NIF_entidade: string;
	createdAt: string;
	updatedAt: string;
	rua: string;
	cidade: string;
	firma_entidade: string;
	tipo_entidade: "farmacia" | "deposito";
	contacto: number;
	logradouro: string;
	numero: number;
	pais: string;
	geolocalizacao_entidade: {
		latitude: number;
		longitude: number;
	};
	medicamentos: Medicamentos[];
}
export interface GetDepositsResponse {
	success: boolean;
	response: Deposito[];
	pagination: {
		currentPage: number;
		itemsPerPage: number;
		totalItems: number;
		totalPages: number;
	};
}
export async function getDeposities(latitude: number, longitude: number) {
	const storedToken = JSON.parse(localStorage.getItem("accessToken") as string);

	const response = await api.get<GetDepositsResponse>(
		`/entity/pharmacy/search_deposits?latitude=${latitude}&longitude=${longitude}&distance=${10000}`,
		{
			headers: {
				Authorization: `Bearer ${storedToken}`,
			},
		}
	);

	return response.data;
}
