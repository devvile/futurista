import type { Metadata } from "next";
import "./globals.css";
import  Header  from "@/components/header"
import { Bebas_Neue } from 'next/font/google'

export const bebasNeue = Bebas_Neue({ 
  subsets: ['latin'],
  weight: '400',
  variable: '--font-bebas-neue', // CSS variable
})

export const metadata: Metadata = {
  title: "Futurista - Ai solution for your business",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
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
