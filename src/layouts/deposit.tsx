import { signOut } from "@/api/sign-out"
import { DepositNavbar } from "@/components/deposit-ui/navbar"
import { useMutation } from "@tanstack/react-query"
import { jwtDecode } from "jwt-decode"
import { LogOut } from "lucide-react"
import { useEffect } from "react"
import { Outlet, useNavigate } from "react-router-dom"
import { toast } from "sonner"

export function DepositLayout() {
	const navigate = useNavigate()

	const storedToken = localStorage.getItem("accessToken")
		? JSON.parse(localStorage.getItem("accessToken")!)
		: null

	const { mutateAsync: signOutFn } = useMutation({
		mutationFn: signOut,
	})

	async function handleSignOut() {
		try {
			await signOutFn()
			toast.warning("Sua sessão foi terminada!")
			navigate("/auth/entrar", { replace: true })
		} catch (error: any) {
			toast.error(error.response.data.message || "Erro desconhecido!")
		}
	}

	useEffect(() => {
		if (!storedToken) {
			navigate("/auth/entrar", { replace: true })
			toast.warning("Sua sessão foi terminada!")

			return
		}

		try {
			const { access_level } = jwtDecode<any>(storedToken)

			if (access_level === "farmacia") {
				navigate("/farmacia", { replace: true })
			} else if (access_level === "deposito") {
				navigate("/deposito", { replace: true })
			} else {
				navigate("/administrador", { replace: true })
			}
		} catch (error) {
			navigate("/auth/entrar", { replace: true })
		}
	}, [navigate, storedToken])

	return (
		<div className="flex antialiased bg-neutral-50 h-screen gap-0 max-sm:gap-0">
			<aside className="flex items-center z-50 flex-col justify-between w-fit max-sm:flex-row max-sm:left-0 max-sm:w-full bg-neutral-950 max-sm:h-fit max-sm:py-4 max-sm:px-6 max-sm:fixed max-sm:bottom-0 max-sm:shadow-md h-screen p-8 border-r border-neutral-700/50">
				<header className="flex flex-col w-44 gap-16 max-sm:flex-row max-sm:gap-4 max-sm:items-center">
					<div className="flex flex-col gap-5">
						<div className="flex items-end gap-2.5">
							<img src="/logo-white-1.png" className="w-9 h-9" alt="Logo" />
							<img
								src="/logo-white-2.png"
								className="max-sm:hidden h-6"
								alt="Brand Name"
							/>
						</div>

						<span className="w-full max-sm:hidden h-px bg-neutral-700/80 mt-2"></span>
					</div>

					<DepositNavbar />
				</header>

				<footer className="flex flex-col gap-6">
					<button
						onClick={() => {
							handleSignOut()
						}}
						className="flex items-center gap-3 max-sm:flex-col max-sm:gap-0 font-semibold max-sm:px-5 text-rose-400/90 hover:text-rose-300 transition-colors text-sm group"
					>
						<LogOut className="w-6 h-6  group-hover:scale-105 transition-transform" />
						<span>Sair</span>
					</button>

					<div className="max-sm:hidden text-sm text-neutral-500/90">
						Painel do Depósito &copy; {new Date().getFullYear()}
					</div>
				</footer>
			</aside>

			<div className="flex-1 overflow-auto p-6 bg-white/50">
				<Outlet />
			</div>
		</div>
	)
}
