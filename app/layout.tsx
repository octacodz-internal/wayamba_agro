import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Wayamba Corporation — Professionalizing Agriculture",
  description:
    "Wayamba Corporation (PVT) LTD transforms idle farmland into high-yield, professionally managed agricultural enterprises across Sri Lanka's Wayamba Province. Your partner in professional agri-business.",
  keywords: [
    "agriculture",
    "Sri Lanka",
    "Wayamba",
    "farming",
    "agri-business",
    "land leasing",
    "crop cultivation",
  ],
  openGraph: {
    title: "Wayamba Corporation — Professionalizing Agriculture",
    description:
      "Transforming idle farmland into high-yield agricultural enterprises in Sri Lanka.",
    type: "website",
  },
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${dmSans.variable}`}>
      <body className="grain-overlay antialiased">
        {children}
        <Toaster position="bottom-right" />
      </body>
    </html>
  );
}
