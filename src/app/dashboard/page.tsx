import DashboardClient from "./DashboardClient";

export const metadata = {
  title: "Dashboard Preview — NivoraIB",
  description: "Interactive preview of the NivoraIB workspace.",
  robots: { index: false, follow: true },
  alternates: { canonical: "https://www.nivoraib.com/dashboard" },
};

export default function DashboardPage() {
  return <DashboardClient />;
}
