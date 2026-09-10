import { EmptyState } from "@/components/EmptyState";
import { PageHeader } from "@/components/PageHeader";

const columns = ["Nome", "SKU", "Categoria", "Quantidade"];

export default function ProdutosPage() {
  return (
    <div className="flex flex-col gap-6">
      <PageHeader
        title="Produtos"
        description="Cadastro e consulta de produtos do estoque."
      />

      <div className="overflow-x-auto rounded-lg border border-slate-200 bg-white">
        <table className="w-full text-left text-sm">
          <caption className="sr-only">Lista de produtos cadastrados</caption>
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
                  title="Nenhum produto cadastrado"
                  description="O cadastro de produtos será implementado em uma próxima etapa."
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
