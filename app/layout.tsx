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
      <body className={inter.className}>{children}</body>
    </html>
  )
}
