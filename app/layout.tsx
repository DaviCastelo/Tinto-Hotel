import type React from "react"
import type { Metadata } from "next"
import { Inter, Poppins, Playfair_Display } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import { ChatWidget } from "@/components/chat-widget"
import "./globals.css"

// Configuração das fontes baseada no site oficial do Tintto Hotel
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
  display: "swap",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-playfair",
  display: "swap",
})

export const metadata: Metadata = {
  title: "TINTTO Hotel - Conforto e Hospitalidade",
  description:
    "Experimente o melhor da hospitalidade no TINTTO Hotel. Quartos confortáveis, localização privilegiada e atendimento excepcional.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.variable} ${poppins.variable} ${playfair.variable} font-sans`}>
        <Suspense fallback={null}>{children}</Suspense>
        <ChatWidget />
        <Analytics />
      </body>
    </html>
  )
}
