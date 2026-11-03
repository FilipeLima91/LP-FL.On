import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FL.On | Presença digital que abre caminhos",
  description:
    "A FL.On ajuda pequenos negócios e prestadores de serviços a fortalecer sua presença no Google e transformar visitas em oportunidades com landing pages estratégicas.",
  openGraph: {
    title: "FL.On | Presença digital que abre caminhos",
    description: "Presença Local no Google e Landing Pages estratégicas para negócios que querem crescer.",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
