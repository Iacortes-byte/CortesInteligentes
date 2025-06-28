import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"


const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "IA Renda Extra - Ganhe +R$1.000 por semana com vídeos de IA",
  description:
    "Descubra como fazer mais de R$1.000 por semana com vídeos de Inteligência Artificial, sem aparecer e só com seu celular.",
  keywords: "IA, inteligência artificial, renda extra, vídeos, ganhar dinheiro online",
  openGraph: {
    title: "IA Renda Extra - Ganhe +R$1.000 por semana com vídeos de IA",
    description:
      "Descubra como fazer mais de R$1.000 por semana com vídeos de Inteligência Artificial, sem aparecer e só com seu celular.",
    type: "website",
    locale: "pt_BR",
  },
  twitter: {
    card: "summary_large_image",
    title: "IA Renda Extra - Ganhe +R$1.000 por semana com vídeos de IA",
    description:
      "Descubra como fazer mais de R$1.000 por semana com vídeos de Inteligência Artificial, sem aparecer e só com seu celular.",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '1820320315492350');
              fbq('track', 'PageView');
            `,
          }}
        />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=1820320315492350&ev=PageView&noscript=1"
          />
        </noscript>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
