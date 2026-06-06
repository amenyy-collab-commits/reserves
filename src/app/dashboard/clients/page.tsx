import { clients } from "@/lib/mock-data";
import { Search } from "lucide-react";

export default function ClientsPage() {
  return (
    <>
      <header className="border-b border-border bg-card/50 px-6 py-5 sm:px-8">
        <h1 className="text-xl font-semibold text-foreground">Clients</h1>
        <p className="mt-0.5 text-sm text-muted">{clients.length} fiches actives</p>
      </header>

      <main className="flex-1 p-6 sm:p-8">
        <div className="mb-6 flex max-w-md items-center gap-2 rounded-xl border border-border bg-card px-4 py-2.5">
          <Search className="h-4 w-4 text-muted" />
          <input
            type="search"
            placeholder="Rechercher un client…"
            className="w-full bg-transparent text-sm text-foreground outline-none placeholder:text-muted"
            readOnly
          />
        </div>

        <div className="overflow-hidden rounded-2xl border border-border bg-card">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-border text-xs text-muted">
                <th className="px-5 py-3 font-medium">Nom</th>
                <th className="px-5 py-3 font-medium">Téléphone</th>
                <th className="px-5 py-3 font-medium">Visites</th>
                <th className="px-5 py-3 font-medium">Dernière visite</th>
              </tr>
            </thead>
            <tbody>
              {clients.map((client) => (
                <tr key={client.id} className="border-b border-border/60 last:border-0">
                  <td className="px-5 py-3.5 font-medium text-foreground">{client.name}</td>
                  <td className="px-5 py-3.5 text-muted">{client.phone}</td>
                  <td className="px-5 py-3.5 text-muted">{client.visits}</td>
                  <td className="px-5 py-3.5 text-muted">{client.lastVisit}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </>
  );
}
