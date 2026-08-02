import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AlerteBonPlan — Les meilleures promos Amazon",
  description: "Découvrez les meilleurs bons plans Amazon détectés en temps réel.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
