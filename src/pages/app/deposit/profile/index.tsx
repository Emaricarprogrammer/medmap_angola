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
	UserCircle,
} from "lucide-react"
import { Helmet } from "react-helmet-async"
import { EditProfileDialog } from "./edit-profile-dialog"

export function DepositProfile() {
	return (
		<>
			<Helmet title="Encomendas" />

			<div className="w-full">
				<Toolbar
					children={<UserCircle className="text-emerald-700 h-6 w-6" />}
					legend="Perfil Depósito"
				/>

				<Dialog>
					<div className="max-w-4xl p-6 bg-white rounded-lg shadow-md mt-6">
						<div className="flex flex-col md:flex-row gap-8">
							<div className="flex-1 space-y-6">
								<div className="flex items-center gap-4">
									<div className="bg-amber-100 p-3 rounded-full">
										<Building2 className="h-6 w-6 text-amber-600" />
									</div>

									<div>
										<h2 className="text-2xl font-bold text-gray-800">
											Depósito Santa Catarina
										</h2>
									</div>
								</div>

								<div className="space-y-4">
									<div className="flex items-center gap-3">
										<Mail className="h-5 w-5 text-gray-500" />

										<span className="text-gray-700">
											farmacia@luandasul.com
										</span>
									</div>

									<div className="flex items-center gap-3">
										<Phone className="h-5 w-5 text-gray-500" />

										<span className="text-gray-700">923 000 999</span>
									</div>

									<div className="flex items-start gap-3">
										<MapPin className="h-5 w-5 text-gray-500 mt-1" />

										<span className="text-gray-700">Rua Kikagil - Luanda</span>
									</div>

									<DialogTrigger asChild>
										<button className="flex items-center gap-1 bg-amber-100 py-2 px-6 rounded-full">
											<PencilLine className="h-5 w-5 text-amber-700" />

											<span className="text-amber-700">Editar Perfil</span>
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

										<span className="text-gray-700">98454444645</span>
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
