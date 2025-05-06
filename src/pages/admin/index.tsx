import { Table, TableBody } from "@/components/ui/table"
import { EntityTableHead } from "./entity-table-head"
import { Hospital, Users, Package, Activity, ArrowUpRight } from "lucide-react"
import { Pagination } from "@/components/general-ui/pagination"
import { EntityTableRow } from "./entity-table-row"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { useNavigate } from "react-router-dom"

export function AdminDashboard() {
	const navigate = useNavigate()

	const stats = [
		{
			title: "Farmácias Registradas",
			value: 45,
			change: "+12%",
			icon: <Hospital className="h-5 w-5" />,
			color: "bg-emerald-500",
		},
		{
			title: "Depósitos Registrados",
			value: 28,
			change: "+5%",
			icon: <Package className="h-5 w-5" />,
			color: "bg-amber-500",
		},
		{
			title: "Contas Cadastradas",
			value: 326,
			change: "+24%",
			icon: <Users className="h-5 w-5" />,
			color: "bg-indigo-500",
		},
	]

	return (
		<div className="flex-1 space-y-6 p-6">
			<div className="flex items-center justify-between">
				<div>
					<h1 className="text-3xl font-bold tracking-tight">
						Painel Administrativo
					</h1>
					<p className="text-muted-foreground mt-2">
						Visão geral das entidades e atividades do sistema
					</p>
				</div>
			</div>

			<div className="grid gap-6 grid-cols-3">
				{stats.map((stat, i) => (
					<Card key={i} className="hover:shadow-md transition-shadow">
						<CardHeader className="flex flex-row items-center justify-between pb-2">
							<CardTitle className="text-sm font-medium text-muted-foreground">
								{stat.title}
							</CardTitle>
							<div className={`${stat.color} p-2 rounded-md text-white`}>
								{stat.icon}
							</div>
						</CardHeader>
						<CardContent>
							<div className="text-2xl font-bold">{stat.value}</div>
							<div className="flex items-center pt-2">
								<Badge variant="outline" className="flex items-center gap-1">
									<ArrowUpRight className="h-3 w-3" />
									{stat.change}
								</Badge>
								<span className="text-sm text-muted-foreground ml-2">
									vs. último mês
								</span>
							</div>
						</CardContent>
					</Card>
				))}
			</div>

			<Card>
				<CardHeader className="flex flex-row items-center justify-between">
					<CardTitle>Últimas Entidades Registradas</CardTitle>
					<Button
						variant="ghost"
						size="sm"
						onClick={() => navigate("/entidades")}
					>
						Ver todas
					</Button>
				</CardHeader>
				<CardContent>
					<Table>
						<EntityTableHead />
						<TableBody>
							{Array.from({ length: 5 }).map((_, i) => (
								<EntityTableRow key={i} />
							))}
						</TableBody>
					</Table>
					<div className="mt-4">
						<Pagination
							totalItem={20}
							currentPage={2}
							perPage={4}
							legend="Entidades"
						/>
					</div>
				</CardContent>
			</Card>
		</div>
	)
}
