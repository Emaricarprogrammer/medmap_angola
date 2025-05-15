import { TableRow, TableCell } from "@/components/ui/table";
import { EntityType } from "./entity-type";
import { Trash, Loader2 } from "lucide-react";
import { Entity } from "@/@types/entity";

interface EntityTableRowProps {
  entity: Entity;
  onDelete: (id: string) => Promise<void>;
  isDeleting: boolean;
}

export function EntityTableRow({ entity, onDelete, isDeleting }: EntityTableRowProps) {
  const handleDelete = async () => {
    try {
      await onDelete(entity.id_entidade);
    } catch (error) {
      console.error("Failed to delete entity:", error);
    }
  };

  return (
    <TableRow className="transition-colors bg-gray-50 hover:bg-gray-100">
      <TableCell className="py-4 font-medium border-b border-gray-100">
        {entity.firma_entidade}
      </TableCell>

      <TableCell className="py-4 border-b border-gray-100">
        <EntityType type={entity.tipo_entidade} />
      </TableCell>

      <TableCell className="py-4 text-gray-500 border-b border-gray-100">
        {new Date(entity.createdAt).toLocaleDateString()}
      </TableCell>

      <TableCell className="py-4 border-b border-gray-100">
        <button
          onClick={handleDelete}
          disabled={isDeleting}
          className="flex items-center gap-1 px-3 py-1 rounded-md text-sm transition-all text-rose-600 hover:bg-rose-50 disabled:opacity-50"
        >
          {isDeleting ? (
            <Loader2 className="w-4 h-4 animate-spin" />
          ) : (
            <Trash className="w-4 h-4" />
          )}
          <span className="transition-opacity">
            {isDeleting ? "Excluindo..." : "Excluir"}
          </span>
        </button>
      </TableCell>
    </TableRow>
  );
}