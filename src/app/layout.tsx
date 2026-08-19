import type { Metadata } from "next";
import { Geist, Geist_Mono, Bodoni_Moda } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CustomCursor } from "@/components/motion/CustomCursor";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const bodoni = Bodoni_Moda({
  variable: "--font-bodoni",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: {
    default: "dunitelabs — an indie studio for apps & websites",
    template: "%s · dunitelabs",
  },
  description:
    "dunitelabs is a small independent studio designing and building apps and websites with craft, personality, and a healthy obsession with detail.",
  metadataBase: new URL("https://dunitelabs.com"),
  openGraph: {
    title: "dunitelabs — an indie studio for apps & websites",
    description:
      "A small independent studio designing and building apps and websites with craft and personality.",
    type: "website",
    siteName: "dunitelabs",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${bodoni.variable} h-full antialiased`}
    >
      <body className="grain flex min-h-full flex-col bg-paper text-ink">
        <CustomCursor />
        <Header />
        <main className="flex flex-1 flex-col">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
