"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Calendar, Home, LayoutDashboard, Users } from "lucide-react";

const nav = [
  { href: "/dashboard", label: "Vue d'ensemble", icon: LayoutDashboard },
  { href: "/dashboard/clients", label: "Clients", icon: Users },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="flex w-64 shrink-0 flex-col border-r border-border bg-card">
      <div className="flex h-16 items-center gap-2 border-b border-border px-5">
        <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand text-white">
          <Calendar className="h-5 w-5" />
        </span>
        <div>
          <p className="text-sm font-semibold text-foreground">Reserve</p>
          <p className="text-xs text-muted">Salon Élégance</p>
        </div>
      </div>

      <nav className="flex-1 space-y-1 p-4">
        {nav.map(({ href, label, icon: Icon }) => {
          const active =
            href === "/dashboard"
              ? pathname === "/dashboard"
              : pathname.startsWith(href);
          return (
            <Link
              key={href}
              href={href}
              className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition ${
                active
                  ? "bg-brand/10 text-brand"
                  : "text-muted hover:bg-background hover:text-foreground"
              }`}
            >
              <Icon className="h-4 w-4" />
              {label}
            </Link>
          );
        })}
      </nav>

      <div className="border-t border-border p-4">
        <Link
          href="/"
          className="flex items-center gap-2 text-sm text-muted transition hover:text-foreground"
        >
          <Home className="h-4 w-4" />
          Retour au site
        </Link>
      </div>
    </aside>
  );
}
