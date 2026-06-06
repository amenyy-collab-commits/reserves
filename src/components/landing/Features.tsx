import { Bell, CalendarDays, Smartphone, Users } from "lucide-react";

const features = [
  {
    icon: CalendarDays,
    title: "Agenda intelligent",
    description:
      "Créneaux, pauses et jours fériés. Évitez les doubles réservations automatiquement.",
  },
  {
    icon: Users,
    title: "Fiches clients",
    description:
      "Historique des visites, préférences et notes — tout au même endroit.",
  },
  {
    icon: Bell,
    title: "Rappels automatiques",
    description:
      "SMS et e-mail avant chaque rendez-vous. Moins de no-shows, plus de CA.",
  },
  {
    icon: Smartphone,
    title: "100 % mobile",
    description:
      "Gérez votre salon depuis le téléphone, où que vous soyez.",
  },
];

export function Features() {
  return (
    <section id="features" className="border-t border-border bg-card/50 px-6 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Tout ce dont votre salon a besoin
          </h2>
          <p className="mt-4 text-muted">
            Une seule plateforme pour remplacer le carnet, WhatsApp et les appels manqués.
          </p>
        </div>
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="rounded-2xl border border-border bg-card p-6 transition hover:border-brand/30 hover:shadow-md"
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-brand/10 text-brand">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="font-semibold text-foreground">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
