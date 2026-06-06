export type AppointmentStatus = "confirmé" | "en attente" | "terminé";

export type Appointment = {
  id: string;
  time: string;
  client: string;
  service: string;
  staff: string;
  status: AppointmentStatus;
};

export type Client = {
  id: string;
  name: string;
  phone: string;
  visits: number;
  lastVisit: string;
};

export const stats = {
  todayAppointments: 12,
  weekRevenue: 2840,
  newClients: 8,
  noShowRate: 4,
};

export const todayAppointments: Appointment[] = [
  {
    id: "1",
    time: "09:00",
    client: "Amira Ben Salah",
    service: "Coupe + brushing",
    staff: "Sarra",
    status: "terminé",
  },
  {
    id: "2",
    time: "10:30",
    client: "Sonia Mejri",
    service: "Coloration",
    staff: "Ines",
    status: "confirmé",
  },
  {
    id: "3",
    time: "11:30",
    client: "Leila Khelifi",
    service: "Soin capillaire",
    staff: "Sarra",
    status: "confirmé",
  },
  {
    id: "4",
    time: "14:00",
    client: "Nour Hammami",
    service: "Manucure",
    staff: "Rania",
    status: "en attente",
  },
  {
    id: "5",
    time: "15:30",
    client: "Yasmine Trabelsi",
    service: "Brushing",
    staff: "Ines",
    status: "confirmé",
  },
  {
    id: "6",
    time: "17:00",
    client: "Hiba Gharbi",
    service: "Coupe homme",
    staff: "Sarra",
    status: "confirmé",
  },
];

export const clients: Client[] = [
  { id: "1", name: "Amira Ben Salah", phone: "+216 98 123 456", visits: 14, lastVisit: "28 mai" },
  { id: "2", name: "Sonia Mejri", phone: "+216 22 987 654", visits: 9, lastVisit: "25 mai" },
  { id: "3", name: "Leila Khelifi", phone: "+216 55 111 222", visits: 6, lastVisit: "20 mai" },
  { id: "4", name: "Nour Hammami", phone: "+216 93 444 555", visits: 3, lastVisit: "15 mai" },
  { id: "5", name: "Yasmine Trabelsi", phone: "+216 27 666 777", visits: 11, lastVisit: "22 mai" },
];
