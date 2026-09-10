import { EmptyState } from "@/components/EmptyState";
import { PageHeader } from "@/components/PageHeader";

const columns = ["Nome", "E-mail", "Perfil", "Status"];

export default function UsuariosPage() {
  return (
    <div className="flex flex-col gap-6">
      <PageHeader
        title="Usuários"
        description="Gerenciamento de usuários e perfis de acesso (Admin, Supervisor, Operador)."
      />

      <div className="overflow-x-auto rounded-lg border border-slate-200 bg-white">
        <table className="w-full text-left text-sm">
          <caption className="sr-only">Lista de usuários do sistema</caption>
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
                  title="Nenhum usuário cadastrado"
                  description="O controle de permissões por perfil será implementado em uma próxima etapa."
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
