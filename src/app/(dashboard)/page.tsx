const summaryCards = [
  { label: "Produtos cadastrados", value: "—" },
  { label: "Itens em estoque", value: "—" },
  { label: "Movimentações no mês", value: "—" },
  { label: "Alertas de estoque baixo", value: "—" },
];

export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-2xl font-semibold text-slate-900">Dashboard</h1>
        <p className="mt-1 text-sm text-slate-500">
          Visão geral do estoque industrial.
        </p>
      </div>

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

      <div className="rounded-lg border border-dashed border-slate-300 bg-white p-8 text-center text-sm text-slate-500">
        Nenhum dado disponível ainda. Este painel será preenchido conforme as
        funcionalidades de estoque forem implementadas.
      </div>
    </div>
  );
}
