import Link from "next/link";
import { Calendar } from "lucide-react";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-background/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-2 font-semibold text-foreground">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand text-white">
            <Calendar className="h-5 w-5" />
          </span>
          Reserve
        </Link>
        <nav className="hidden items-center gap-8 text-sm text-muted md:flex">
          <a href="#features" className="transition hover:text-foreground">
            Fonctionnalités
          </a>
          <a href="#pricing" className="transition hover:text-foreground">
            Tarifs
          </a>
        </nav>
        <div className="flex items-center gap-3">
          <Link
            href="/dashboard"
            className="hidden text-sm font-medium text-muted transition hover:text-foreground sm:inline"
          >
            Connexion
          </Link>
          <Link
            href="/dashboard"
            className="rounded-full bg-brand px-4 py-2 text-sm font-medium text-white transition hover:bg-brand-dark"
          >
            Essai gratuit
          </Link>
        </div>
      </div>
    </header>
  );
}
