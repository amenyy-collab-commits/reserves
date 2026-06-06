import type { Appointment, AppointmentStatus } from "@/lib/mock-data";

const statusStyles: Record<AppointmentStatus, string> = {
  confirmé: "bg-emerald-50 text-emerald-700",
  "en attente": "bg-amber-50 text-amber-700",
  terminé: "bg-slate-100 text-slate-600",
};

export function AppointmentsTable({ appointments }: { appointments: Appointment[] }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-card">
      <div className="flex items-center justify-between border-b border-border px-5 py-4">
        <div className="flex items-center gap-2">
          <h2 className="font-semibold text-foreground">Rendez-vous du jour</h2>
        </div>
        <button
          type="button"
          className="rounded-full bg-brand px-4 py-1.5 text-xs font-medium text-white transition hover:bg-brand-dark"
        >
          + Nouveau RDV
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="border-b border-border text-xs text-muted">
              <th className="px-5 py-3 font-medium">Heure</th>
              <th className="px-5 py-3 font-medium">Client</th>
              <th className="px-5 py-3 font-medium">Prestation</th>
              <th className="px-5 py-3 font-medium">Employé</th>
              <th className="px-5 py-3 font-medium">Statut</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((rdv) => (
              <tr key={rdv.id} className="border-b border-border/60 last:border-0">
                <td className="px-5 py-3.5 font-medium text-brand">{rdv.time}</td>
                <td className="px-5 py-3.5 font-medium text-foreground">{rdv.client}</td>
                <td className="px-5 py-3.5 text-muted">{rdv.service}</td>
                <td className="px-5 py-3.5 text-muted">{rdv.staff}</td>
                <td className="px-5 py-3.5">
                  <span
                    className={`inline-flex rounded-full px-2.5 py-0.5 text-xs font-medium capitalize ${statusStyles[rdv.status]}`}
                  >
                    {rdv.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
