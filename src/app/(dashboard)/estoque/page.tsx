import { EmptyState } from "@/components/EmptyState";
import { PageHeader } from "@/components/PageHeader";

const columns = ["Produto", "Quantidade atual", "Localização", "Última atualização"];

export default function EstoquePage() {
  return (
    <div className="flex flex-col gap-6">
      <PageHeader
        title="Estoque"
        description="Consulta de níveis de estoque por produto."
      />

      <div className="overflow-x-auto rounded-lg border border-slate-200 bg-white">
        <table className="w-full text-left text-sm">
          <caption className="sr-only">Níveis de estoque por produto</caption>
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
                  title="Nenhum item em estoque"
                  description="Entrada e saída de estoque serão implementadas em uma próxima etapa."
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
