import { useEffect, useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { api } from "@/services/axios";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode"


interface AdminData {
  id_admin: string;
  username: string;
  nivel_acesso: string;
  email: string;
  id_conta_fk: string;
  createdAt: string;
  updatedAt: string;
}

    const token = localStorage.getItem("accessToken")

    const { id_entidade } = jwtDecode<{ id_entidade: string }>(token || "")

export function AdminProfile() {
  const [adminData, setAdminData] = useState<AdminData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAdminData = async () => {
      try {
        setLoading(true);
        setError(null);
        
        if (!token) {
          navigate("/login");
          return;
        }

        const response = await api.get(`/admin/${id_entidade}`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });

        if (response.data.success) {
          setAdminData(response.data.response);
        } else {
          throw new Error(response.data.message || "Falha ao buscar dados do admin");
        }
      } catch (err) {
        console.error("Erro ao buscar dados do admin:", err);
        setError(err instanceof Error ? err.message : "Erro desconhecido");
      } finally {
        setLoading(false);
      }
    };

    fetchAdminData();
  }, [navigate]);

  if (loading) {
    return (
      <Card className="w-full mb-6">
        <CardHeader>
          <CardTitle>
            <Skeleton className="h-6 w-3/4" />
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="flex justify-between">
              <Skeleton className="h-4 w-1/3" />
              <Skeleton className="h-4 w-1/2" />
            </div>
          ))}
        </CardContent>
      </Card>
    );
  }

  if (error) {
    return (
      <Card className="w-full mb-6">
        <CardHeader>
          <CardTitle className="text-red-500">Erro ao carregar perfil</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">{error}</p>
        </CardContent>
      </Card>
    );
  }

  if (!adminData) {
    return (
      <Card className="w-full mb-6">
        <CardHeader>
          <CardTitle>Perfil não encontrado</CardTitle>
        </CardHeader>
      </Card>
    );
  }

  return (
    <Card className="w-full mb-6">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span>Meu Perfil Administrativo</span>
          <Badge variant="outline">{adminData.nivel_acesso}</Badge>
        </CardTitle>
      </CardHeader>
      <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">

        <div className="space-y-2">
          <p className="text-sm text-muted-foreground">Nome de usuário</p>
          <p className="font-medium">{adminData.username}</p>
        </div>
        <div className="space-y-2">
          <p className="text-sm text-muted-foreground">Email</p>
          <p className="font-medium">{adminData.email}</p>
        </div>

        <div className="space-y-2">
          <p className="text-sm text-muted-foreground">Cadastrado em</p>
          <p className="font-medium">{new Date(adminData.createdAt).toLocaleDateString()}</p>
        </div>

      </CardContent>
    </Card>
  );
}