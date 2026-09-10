import { EmptyState } from "@/components/EmptyState";
import { PageHeader } from "@/components/PageHeader";

const summaryCards = [
  { label: "Produtos cadastrados", value: "—" },
  { label: "Itens em estoque", value: "—" },
  { label: "Movimentações no mês", value: "—" },
  { label: "Alertas de estoque baixo", value: "—" },
];

export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-6">
      <PageHeader
        title="Dashboard"
        description="Visão geral do estoque industrial."
      />

      <dl className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {summaryCards.map((card) => (
          <div
            key={card.label}
            className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm"
          >
            <dt className="text-sm font-medium text-slate-500">
              {card.label}
            </dt>
            <dd className="mt-2 text-2xl font-semibold text-slate-900">
              {card.value}
            </dd>
          </div>
        ))}
      </dl>

      <EmptyState
        title="Nenhum dado disponível ainda"
        description="Este painel será preenchido conforme as funcionalidades de estoque forem implementadas."
      />
    </div>
  );
}
