import { EmptyState } from "@/components/EmptyState";
import { PageHeader } from "@/components/PageHeader";

const columns = ["Data", "Produto", "Tipo", "Quantidade", "Responsável"];

export default function MovimentacoesPage() {
  return (
    <div className="flex flex-col gap-6">
      <PageHeader
        title="Movimentações"
        description="Histórico de entradas, saídas e ajustes de estoque."
      />

      <div className="overflow-x-auto rounded-lg border border-slate-200 bg-white">
        <table className="w-full text-left text-sm">
          <caption className="sr-only">Histórico de movimentações de estoque</caption>
          <thead className="border-b border-slate-200 text-slate-500">
            <tr>
              {columns.map((column) => (
                <th key={column} scope="col" className="px-4 py-3 font-medium">
                  {column}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan={columns.length} className="p-0">
                <EmptyState
                  title="Nenhuma movimentação registrada"
                  description="O histórico de movimentações será implementado em uma próxima etapa."
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
