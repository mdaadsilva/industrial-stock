import Link from "next/link";

export function Header() {
  return (
    <header className="flex h-16 items-center justify-between border-b border-slate-200 bg-white px-4 sm:px-6">
      <Link
        href="/"
        className="text-lg font-semibold tracking-tight text-slate-900"
      >
        Industrial Stock
      </Link>

      <div className="flex items-center gap-3 text-sm text-slate-500">
        <span data-testid="header-user-placeholder">Convidado</span>
      </div>
    </header>
  );
}
