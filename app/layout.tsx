import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import Effects from "@/components/Effects";
import Nav from "@/components/Nav";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Pheerah Praditthaphong – Project & Product Leader",
  description:
    "12 years in software delivery: IT project management, ERP delivery and Agile product ownership.",
  openGraph: {
    title: "Pheerah Praditthaphong – Project & Product Leader",
    description:
      "IT Project Manager · Product Owner · ERP & enterprise delivery. 12 years in software.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={jakarta.variable}>
      <body>
        <div id="bar" />
        <div id="cur" />
        <Nav />
        {children}
        <footer>© Pheerah Praditthaphong</footer>
        <Effects />
      </body>
    </html>
  );
}
