import { useEffect, useState } from "react";
import { Table, TableBody } from "@/components/ui/table";
import { EntityTableHead } from "./entity-table-head";
import { Hospital, Users, Package, ArrowUpRight, User } from "lucide-react";
import { EntityTableRow } from "./entity-table-row";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { api } from "@/services/axios";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface StatCard {
  title: string;
  value: number;
  change: string;
  icon: React.ReactNode;
  color: string;
}

interface Entity {
  id_entidade: string;
  firma_entidade: string;
  tipo_entidade: "farmacia" | "deposito";
  createdAt: string;
}

export function AdminDashboard() {
  const navigate = useNavigate();
  const [stats, setStats] = useState<{
    farmacias: StatCard;
    depositos: StatCard;
    contas: StatCard;
  } | null>(null);
  const [recentEntities, setRecentEntities] = useState<Entity[]>([]);
  const [allEntities, setAllEntities] = useState<Entity[]>([]);
  const [showAll, setShowAll] = useState(false);
  const [loading, setLoading] = useState(true);
  const [deleteLoading, setDeleteLoading] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [adminData, setAdminData] = useState({ name: "", email: "" });
  const [showAdminModal, setShowAdminModal] = useState(false);
  
  const storedToken = localStorage.getItem("accessToken");

  if (!storedToken || typeof storedToken !== "string") {
    navigate("/login");
    return null;
  }

  // Buscar dados do admin
  const fetchAdminData = async () => {
    try {
      const decodedToken = JSON.parse(atob(storedToken.split('.')[1]));
      const adminId = decodedToken?.id_entidade;
      
      if (!adminId) return;

      const response = await api.get(`/admin/${adminId}`, {
        headers: { Authorization: `Bearer ${storedToken}` }
      });

      if (response.data.success) {
        setAdminData({
          name: response.data.response.username,
          email: response.data.response.email
        });
      }
    } catch (err) {
      console.error("Erro ao buscar dados do admin:", err);
    }
  };

  const handleShowAdminData = () => {
    setShowAdminModal(true);
    if (!adminData.name) {
      fetchAdminData();
    }
  };

  // Buscar dados do dashboard
  useEffect(() => {
    const fetchData = async () => {
      try {
        setError(null);
        setLoading(true);
        
        const headers = {
          Authorization: `Bearer ${storedToken}`
        };

        const [statsResponse, entitiesResponse] = await Promise.all([
          api.get("/admin/appControll/users", { headers }),
          api.get("/admin/appControll/all/users", { headers })
        ]);
        
        const statsData = statsResponse.data.response;
        const entitiesData = entitiesResponse.data.response;
        
        setStats({
          farmacias: {
            title: "Farmácias Registradas",
            value: statsData.farmacias,
            change: "+12%",
            icon: <Hospital className="h-4 w-4 sm:h-5 sm:w-5" />,
            color: "bg-emerald-500",
          },
          depositos: {
            title: "Depósitos Registrados",
            value: statsData.depositos,
            change: "+5%",
            icon: <Package className="h-4 w-4 sm:h-5 sm:w-5" />,
            color: "bg-amber-500",
          },
          contas: {
            title: "Contas Cadastradas",
            value: statsData.usuarios,
            change: "+24%",
            icon: <Users className="h-4 w-4 sm:h-5 sm:w-5" />,
            color: "bg-indigo-500",
          }
        });

        const sortedEntities = [...entitiesData]
          .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
        
        setAllEntities(sortedEntities);
        setRecentEntities(sortedEntities.slice(0, 5));
      } catch (err) {
        console.error("Erro ao buscar dados:", err);
        setError("Falha ao carregar dados. Tente novamente mais tarde.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [navigate, storedToken]);

  const handleDeleteEntity = async (id: string) => {
    try {
      setDeleteLoading(id);
      
      await api.delete(`/admin/appControll/delete/${id}`, {
        headers: {
          Authorization: `Bearer ${storedToken}`
        }
      });
      
      setAllEntities(prev => prev.filter(entity => entity.id_entidade !== id));
      setRecentEntities(prev => prev.filter(entity => entity.id_entidade !== id));
      
      const statsResponse = await api.get("/admin/appControll/users", {
        headers: {
          Authorization: `Bearer ${storedToken}`
        }
      });
      
      setStats(prev => prev ? {
        ...prev,
        farmacias: {...prev.farmacias, value: statsResponse.data.response.farmacias},
        depositos: {...prev.depositos, value: statsResponse.data.response.depositos},
        contas: {...prev.contas, value: statsResponse.data.response.usuarios}
      } : null);
    } catch (err) {
      console.error("Erro ao deletar entidade:", err);
    } finally {
      setDeleteLoading(null);
    }
  };

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  if (loading) {
    return (
      <div className="flex-1 space-y-4 p-4 sm:space-y-6 sm:p-6">
        <Skeleton className="h-8 w-1/2 sm:h-10 sm:w-1/3" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {[1, 2, 3].map(i => (
            <Card key={i}>
              <CardHeader>
                <Skeleton className="h-5 w-3/4 sm:h-6" />
              </CardHeader>
              <CardContent>
                <Skeleton className="h-7 w-full mt-2 sm:h-8" />
                <Skeleton className="h-5 w-1/2 mt-3 sm:h-6 sm:mt-4" />
              </CardContent>
            </Card>
          ))}
        </div>
        <Card>
          <CardHeader>
            <Skeleton className="h-5 w-1/3 sm:h-6" />
          </CardHeader>
          <CardContent>
            {[1, 2, 3, 4, 5].map(i => (
              <Skeleton key={i} className="h-10 w-full mb-2 sm:h-12" />
            ))}
          </CardContent>
        </Card>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex-1 flex items-center justify-center p-4 sm:p-6">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle className="text-red-500">Erro</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">{error}</p>
            <Button onClick={() => window.location.reload()}>
              Tentar Novamente
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="flex-1 space-y-4 p-4 sm:space-y-6 sm:p-6">
      {/* Header responsivo */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
            Painel Administrativo
          </h1>
          <p className="text-sm text-muted-foreground mt-1 sm:text-base sm:mt-2">
            Visão geral das entidades e atividades do sistema
          </p>
        </div>
        <Button
          variant="outline"
          onClick={handleShowAdminData}
          className="flex items-center gap-2 w-full sm:w-auto"
        >
          <User className="h-4 w-4" />
          <span>Meus Dados</span>
        </Button>
      </div>

      {/* Modal de dados do admin */}
      <Dialog open={showAdminModal} onOpenChange={setShowAdminModal}>
        <DialogContent className="w-[90%] sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Minhas Informações</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 py-2 sm:py-4">
            <div>
              <p className="text-sm text-muted-foreground">Nome</p>
              <p className="font-medium text-base sm:text-lg">
                {adminData.name || <Skeleton className="h-5 w-[180px] sm:h-6" />}
              </p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Email</p>
              <p className="font-medium text-base sm:text-lg break-all">
                {adminData.email || <Skeleton className="h-5 w-[220px] sm:h-6" />}
              </p>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Cards de estatísticas responsivos */}
      {stats && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {Object.values(stats).map((stat, index) => (
            <Card key={index} className="hover:shadow-md transition-shadow">
              <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                <CardTitle className="text-xs font-medium text-muted-foreground sm:text-sm">
                  {stat.title}
                </CardTitle>
                <div className={`${stat.color} p-1.5 sm:p-2 rounded-md text-white`}>
                  {stat.icon}
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-xl font-bold sm:text-2xl">{stat.value}</div>
                <div className="flex items-center pt-1 sm:pt-2">
                  <Badge variant="outline" className="flex items-center gap-1 text-xs sm:text-sm">
                    <ArrowUpRight className="h-3 w-3" />
                    {stat.change}
                  </Badge>
                  <span className="text-xs text-muted-foreground ml-2 sm:text-sm">
                    vs. último mês
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {/* Tabela de entidades responsiva */}
      <Card className="overflow-hidden">
        <CardHeader className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <CardTitle className="text-lg sm:text-xl">
            {showAll ? "Todas as Entidades" : "Últimas Entidades Registradas"}
          </CardTitle>
          <Button
            variant="ghost"
            size="sm"
            onClick={toggleShowAll}
            className="w-full sm:w-auto"
          >
            {showAll ? "Ver apenas recentes" : "Ver todas"}
          </Button>
        </CardHeader>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <Table className="min-w-[600px] sm:min-w-full">
              <EntityTableHead />
              <TableBody>
                {(showAll ? allEntities : recentEntities).length > 0 ? (
                  (showAll ? allEntities : recentEntities).map((entity) => (
                    <EntityTableRow 
                      key={entity.id_entidade} 
                      entity={entity}
                      onDelete={handleDeleteEntity}
                      isDeleting={deleteLoading === entity.id_entidade}
                    />
                  ))
                ) : (
                  <tr>
                    <td colSpan={4} className="text-center py-4 text-muted-foreground">
                      Nenhuma entidade cadastrada
                    </td>
                  </tr>
                )}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}