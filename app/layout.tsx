import type { Metadata } from "next";
import "./globals.css";
import  Header  from "@/components/header"
import { Bebas_Neue } from 'next/font/google'
import Script from 'next/script'

export const bebasNeue = Bebas_Neue({ 
  subsets: ['latin'],
  weight: '400',
  variable: '--font-bebas-neue', 
})

export const metadata: Metadata = {
  title: "Futurista - Ai solution for your business",
  description: "Automations, Ai Integrations, Ai Agents, Applications, Mobile App, Development, Software",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
            <head>
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-NFMV5L8X4F"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-NFMV5L8X4F');
          `}
        </Script>
      </head>
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
