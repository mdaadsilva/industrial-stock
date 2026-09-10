"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type NavItem = {
  href: string;
  label: string;
};

const navItems: NavItem[] = [
  { href: "/", label: "Dashboard" },
  { href: "/produtos", label: "Produtos" },
  { href: "/estoque", label: "Estoque" },
  { href: "/movimentacoes", label: "Movimentações" },
  { href: "/usuarios", label: "Usuários" },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <nav
      aria-label="Navegação principal"
      className="w-56 shrink-0 border-r border-slate-200 bg-white px-3 py-4"
    >
      <ul className="flex flex-col gap-1">
        {navItems.map((item) => {
          const isActive = pathname === item.href;

          return (
            <li key={item.href}>
              <Link
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                className={`block rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-slate-900 text-white"
                    : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                }`}
              >
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
