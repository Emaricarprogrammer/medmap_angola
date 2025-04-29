import { Toolbar } from "@/components/deposit-ui/toolbar"
import { Dialog, DialogTrigger } from "@/components/ui/dialog"
import {
	BriefcaseBusiness,
	Building2,
	Mail,
	MapPin,
	PencilLine,
	Phone,
	User,
} from "lucide-react"
import { Helmet } from "react-helmet-async"
import { EditProfileDialog } from "./edit-profile-dialog"
import { useQuery } from "@tanstack/react-query"
import { getProfile } from "@/api/get-profile"
import { Skeleton } from "@/components/ui/skeleton"

export function PharmacyProfile() {
	const { data: profile } = useQuery({
		queryKey: ["profile"],
		queryFn: getProfile,
	})
	return (
		<>
			<Helmet title="Encomendas" />

			<div className="w-full">
				<Toolbar
					children={<User className="text-emerald-700 h-6 w-6" />}
					legend="Perfil da Farmácia"
				/>

				<Dialog>
					<div className="p-6 h-96 bg-white rounded-lg shadow-md mt-6">
						<div className="flex flex-col md:flex-row gap-8">
							<div className="flex-1 space-y-6">
								<div className="flex items-center gap-4">
									<div className="bg-emerald-100 p-3 rounded-full">
										<Building2 className="h-6 w-6 text-emerald-600" />
									</div>

									<div>
										<h2 className="text-2xl font-bold text-gray-800">
											{profile?.firma_entidade ? (
												profile.firma_entidade
											) : (
												<Skeleton className="w-56 h-4" />
											)}
										</h2>
									</div>
								</div>

								<div className="space-y-4">
									<div className="flex items-center gap-3">
										<Mail className="h-5 w-5 text-gray-500" />

										<p className="text-gray-700">
											{profile?.email ? (
												profile.email
											) : (
												<Skeleton className="w-48 h-4" />
											)}
										</p>
									</div>

									<div className="flex items-center gap-3">
										<Phone className="h-5 w-5 text-gray-500" />

										<span className="text-gray-700">
											{profile?.contacto ? (
												profile.contacto
											) : (
												<Skeleton className="w-48 h-4" />
											)}
										</span>
									</div>

									<div className="flex items-start gap-3">
										<MapPin className="h-5 w-5 text-gray-500 mt-1" />

										<span className="text-gray-700">
											{profile?.rua && profile.cidade ? (
												profile.rua + profile.cidade
											) : (
												<Skeleton className="w-24 h-4" />
											)}
										</span>
									</div>

									<DialogTrigger asChild>
										<button className="flex items-center gap-1 bg-emerald-100 py-2 px-6 rounded-full">
											<PencilLine className="h-5 w-5 text-emerald-700" />

											<span className="text-emerald-700">Editar Perfil</span>
										</button>
									</DialogTrigger>
								</div>
							</div>

							<div className="flex-1">
								<h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
									<User className="h-5 w-5 text-gray-600" />
									Entidade
								</h3>

								<div className="space-y-4">
									<div className="flex items-center gap-3">
										<BriefcaseBusiness className="h-5 w-5 text-gray-500" />

										{profile?.NIF_entidade ? (
											profile.NIF_entidade
										) : (
											<Skeleton className="w-48 h-4" />
										)}
									</div>
								</div>
							</div>
						</div>
					</div>

					<EditProfileDialog />
				</Dialog>
			</div>
		</>
	)
}
