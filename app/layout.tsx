import type { Metadata, Viewport } from "next";
import { Archivo, Archivo_Black } from "next/font/google";
import "./globals.css";

const archivo = Archivo({ subsets: ["latin"], variable: "--font-archivo" });
const archivoBlack = Archivo_Black({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-archivo-black",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://standard-beta-two.vercel.app"),
  title: "Standard : réponds aux questions de tes clients en un clic",
  description:
    "Dix questions reviennent chaque jour : devis, délais, zone, décennale. Standard répond pour toi en un clic.",
  openGraph: {
    title: "Arrête de répondre aux mêmes questions de clients.",
    description: "Standard répond pour toi en un clic. Pour artisans du BTP.",
    locale: "fr_FR",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${archivo.variable} ${archivoBlack.variable}`}>
      <body>{children}</body>
    </html>
  );
}
