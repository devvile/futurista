import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Bebas_Neue } from 'next/font/google'

export const bebasNeue = Bebas_Neue({ 
  subsets: ['latin'],
  weight: '400',
  variable: '--font-bebas-neue', // CSS variable
})

export const metadata: Metadata = {
  title: "Futurista - Ai solution for your business",
  description: "Investment strategies that outperform the market",
    generator: 'v0.app'
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${bebasNeue.variable} antialiased`}
        suppressHydrationWarning
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
