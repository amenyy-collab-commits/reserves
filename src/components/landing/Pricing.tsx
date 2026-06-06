import Link from "next/link";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "29",
    description: "Idéal pour un salon solo ou petite équipe.",
    features: ["Jusqu'à 2 employés", "200 RDV / mois", "Rappels SMS", "Support e-mail"],
    highlighted: false,
  },
  {
    name: "Pro",
    price: "59",
    description: "Le plus choisi par les salons en croissance.",
    features: [
      "Jusqu'à 8 employés",
      "RDV illimités",
      "SMS + e-mail",
      "Statistiques avancées",
      "Page réservation brandée",
    ],
    highlighted: true,
  },
  {
    name: "Business",
    price: "99",
    description: "Multi-salons et franchises.",
    features: [
      "Employés illimités",
      "Multi-établissements",
      "API & exports",
      "Support prioritaire",
    ],
    highlighted: false,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="px-6 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Tarifs simples, sans surprise
          </h2>
          <p className="mt-4 text-muted">
            Essai gratuit 14 jours. Sans carte bancaire. Annulation à tout moment.
          </p>
        </div>
        <div className="mt-14 grid gap-8 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col rounded-2xl border p-8 ${
                plan.highlighted
                  ? "border-brand bg-card shadow-lg shadow-brand/10"
                  : "border-border bg-card"
              }`}
            >
              {plan.highlighted && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-brand px-3 py-0.5 text-xs font-medium text-white">
                  Populaire
                </span>
              )}
              <h3 className="text-lg font-semibold text-foreground">{plan.name}</h3>
              <p className="mt-1 text-sm text-muted">{plan.description}</p>
              <p className="mt-6 flex items-baseline gap-1">
                <span className="text-4xl font-semibold text-foreground">{plan.price}€</span>
                <span className="text-sm text-muted">/ mois</span>
              </p>
              <ul className="mt-8 flex-1 space-y-3">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-muted">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                href="/dashboard"
                className={`mt-8 block rounded-full py-2.5 text-center text-sm font-medium transition ${
                  plan.highlighted
                    ? "bg-brand text-white hover:bg-brand-dark"
                    : "border border-border text-foreground hover:border-brand/40"
                }`}
              >
                Commencer
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
