import type { Metadata } from "next";
import { Geist, Geist_Mono, Cinzel, IM_Fell_English } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollProgressBar from "@/components/ScrollProgressBar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["400", "600", "700", "900"],
});

const imFell = IM_Fell_English({
  variable: "--font-fell",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "The Smokey Cauldron — Premium Magical Dining in Islamabad",
  description:
    "Experience the mystery and enchantment of The Smokey Cauldron. A premium Dark Arts-inspired restaurant in F-6 Markaz, Islamabad, serving world-class wizarding cuisine and our signature Butterbeer.",
  keywords: ["The Smokey Cauldron", "Harry Potter restaurant Islamabad", "Dark Arts dining", "F-6 Markaz restaurants", "Magical dining Pakistan", "Butterbeer Islamabad"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${cinzel.variable} ${imFell.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <ScrollProgressBar />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

