import { AppointmentsTable } from "@/components/dashboard/AppointmentsTable";
import { StatCard } from "@/components/dashboard/StatCard";
import { stats, todayAppointments } from "@/lib/mock-data";
import { CalendarDays, Euro, TrendingUp, UserPlus } from "lucide-react";

export default function DashboardPage() {
  const dateLabel = new Intl.DateTimeFormat("fr-FR", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date());

  return (
    <>
      <header className="flex flex-col gap-4 border-b border-border bg-card/50 px-6 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <div>
          <h1 className="text-xl font-semibold text-foreground">Vue d&apos;ensemble</h1>
          <p className="mt-0.5 text-sm capitalize text-muted">{dateLabel}</p>
        </div>
        <div className="flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand/15 text-sm font-semibold text-brand">
            SE
          </span>
          <div className="text-sm">
            <p className="font-medium text-foreground">Salon Élégance</p>
            <p className="text-xs text-muted">Plan Pro · Démo</p>
          </div>
        </div>
      </header>

      <main className="flex-1 space-y-8 p-6 sm:p-8">
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          <StatCard
            label="RDV aujourd'hui"
            value={String(stats.todayAppointments)}
            hint="3 créneaux libres"
            icon={CalendarDays}
            trend="+2 vs hier"
          />
          <StatCard
            label="CA semaine"
            value={`${stats.weekRevenue.toLocaleString("fr-FR")} €`}
            hint="Objectif : 3 500 €"
            icon={Euro}
            trend="+12 % cette semaine"
          />
          <StatCard
            label="Nouveaux clients"
            value={String(stats.newClients)}
            hint="Ce mois-ci"
            icon={UserPlus}
            trend="+3 vs mois dernier"
          />
          <StatCard
            label="No-shows"
            value={`${stats.noShowRate} %`}
            hint="Grâce aux rappels SMS"
            icon={TrendingUp}
            trend="-1 % vs mois dernier"
          />
        </div>

        <AppointmentsTable appointments={todayAppointments} />
      </main>
    </>
  );
}
