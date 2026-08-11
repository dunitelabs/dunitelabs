import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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

export const metadata: Metadata = {
  title: {
    default: "dunitelabs — usable apps and websites",
    template: "%s · dunitelabs",
  },
  description:
    "dunitelabs is a product studio that designs and builds apps and websites with usability at the center — interfaces people actually want to use.",
  metadataBase: new URL("https://dunitelabs.com"),
  openGraph: {
    title: "dunitelabs — usable apps and websites",
    description:
      "A product studio that designs and builds apps and websites with usability at the center.",
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-zinc-950 text-zinc-50">
        <CustomCursor />
        <Header />
        <main className="flex flex-1 flex-col">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
