import { Toolbar } from '@/components/toolbar';
import { Helmet } from 'react-helmet-async';
import { CircleDashed } from 'lucide-react';
import { PendingCard } from './pending-card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Pagination } from '@/components/pagination';

export function Pendings() {
  return (
    <>
      <Helmet title="Pendentes" />

      <div className="w-full">
        <Toolbar
          children={<CircleDashed className="text-primary h-8 w-8" />}
          legend="Pendentes"
        />

        <div className="mt-16 bg-white p-4 rounded-lg">
          <Table className="w-full">
            <TableHeader>
              <TableRow>
                <TableHead className="w-[250px]">Medicamento</TableHead>
                <TableHead className="w-[250px]">Depósito</TableHead>
                <TableHead className="w-[200px]">Quantidade</TableHead>
                <TableHead className="w-[200px]">Preço</TableHead>
                <TableHead className="w-[200px]">Data</TableHead>
                <TableHead className="w-[200px]">Status</TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {Array.from({ length: 8 }).map((_) => {
                return (
                  <TableRow className="py-12">
                    <TableCell className="p-4">Paracetamol</TableCell>
                    <TableCell className="p-4">Santa Catarina Lda</TableCell>
                    <TableCell className="p-4">25 Caixas</TableCell>
                    <TableCell className="p-4">89.000,90 Akz</TableCell>
                    <TableCell className="p-4">Há 2 dias</TableCell>
                    <TableCell className="p-4 flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-amber-600"></span>
                      <span>Pendente</span>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </div>

        <Pagination />
      </div>
    </>
  );
}
