import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const highlights = [
  "Réservations 24h/24 en ligne",
  "Rappels SMS automatiques",
  "Tableau de bord simple",
];

export function Hero() {
  return (
    <section className="relative overflow-hidden px-6 pb-20 pt-16 md:pb-28 md:pt-24">
      <div className="pointer-events-none absolute -right-32 top-0 h-96 w-96 rounded-full bg-brand/10 blur-3xl" />
      <div className="pointer-events-none absolute -left-20 bottom-0 h-72 w-72 rounded-full bg-brand/5 blur-3xl" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted">
            <span className="h-1.5 w-1.5 rounded-full bg-brand" />
            Pour salons, coiffures &amp; spas
          </p>
          <h1 className="text-4xl font-semibold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-[3.25rem]">
            Plus de rendez-vous.
            <span className="block text-brand">Moins de téléphone.</span>
          </h1>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted">
            Reserve centralise vos réservations, vos clients et votre planning.
            Vos clientes réservent en ligne — vous vous concentrez sur l&apos;accueil.
          </p>
          <ul className="mt-8 space-y-3">
            {highlights.map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm text-foreground">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-brand" />
                {item}
              </li>
            ))}
          </ul>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/dashboard"
              className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-medium text-white transition hover:bg-brand-dark"
            >
              Voir la démo
              <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href="#pricing"
              className="inline-flex items-center rounded-full border border-border bg-card px-6 py-3 text-sm font-medium text-foreground transition hover:border-brand/40"
            >
              Voir les tarifs
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="rounded-2xl border border-border bg-card p-6 shadow-xl shadow-brand/5">
            <div className="mb-4 flex items-center justify-between">
              <p className="text-sm font-medium text-foreground">Aujourd&apos;hui</p>
              <span className="rounded-full bg-brand/10 px-2.5 py-0.5 text-xs font-medium text-brand">
                12 RDV
              </span>
            </div>
            <div className="space-y-3">
              {[
                { time: "09:00", name: "Amira B.", service: "Coupe + brushing" },
                { time: "11:30", name: "Sonia M.", service: "Coloration" },
                { time: "14:00", name: "Leila K.", service: "Soin capillaire" },
                { time: "16:30", name: "Nour H.", service: "Manucure" },
              ].map((rdv) => (
                <div
                  key={rdv.time}
                  className="flex items-center gap-4 rounded-xl border border-border bg-background p-3"
                >
                  <span className="w-12 text-sm font-medium text-brand">{rdv.time}</span>
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-medium text-foreground">{rdv.name}</p>
                    <p className="truncate text-xs text-muted">{rdv.service}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <p className="mt-4 text-center text-xs text-muted lg:text-left">
            Aperçu du dashboard — données fictives
          </p>
        </div>
      </div>
    </section>
  );
}
