import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-border px-6 py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 sm:flex-row">
        <div className="text-center sm:text-left">
          <p className="font-semibold text-foreground">Reserve</p>
          <p className="mt-1 text-sm text-muted">
            Projet portfolio — démo SaaS réservations salon
          </p>
        </div>
        <div className="flex gap-6 text-sm text-muted">
          <Link href="/dashboard" className="transition hover:text-foreground">
            Dashboard démo
          </Link>
          <span className="text-border">·</span>
          <span>© {new Date().getFullYear()} Démo</span>
        </div>
      </div>
    </footer>
  );
}
