import { Toolbar } from "@/components/toolbar";
import { Input } from "@/components/ui/input";
import { Search, User } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { ProfileHeader } from "./profile-header";

export function PharmacyProfile() {
  return (
    <>
      <Helmet title="Perfil do Farmacêutico" />

      <div className="w-full">
        <Toolbar
          children={<User className="text-primary h-8 w-8" />}
          legend="Perfil de Santa Catarina Lda"
        />

        <div className="py-8 w-full">
          <ProfileHeader />

          <form className="mt-4">
            <div className="relative text-foreground/60">
              <Search className="w-6 h-6 absolute left-4 top-3" />
              <Input
                className="bg-white rounded-full py-6 px-12"
                type="text"
                placeholder="Pesquise por um medicamento..."
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
