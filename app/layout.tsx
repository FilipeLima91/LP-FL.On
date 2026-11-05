import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FL.On | Soluções Digitais",
  description: "Presença Local no Google e Landing Pages estratégicas para pequenos negócios e prestadores de serviços.",
  openGraph: {
    title: "FL.On | Soluções Digitais",
    description: "Sua empresa merece ser encontrada. E escolhida.",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR"><body>{children}</body></html>;
}
