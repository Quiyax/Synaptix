import type React from "react"
import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _inter = Inter({ subsets: ["latin"] })
const _playfair = Playfair_Display({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Synaptix | Melena de León - Suplemento Natural para Enfoque Mental",
  description:
    "Synaptix - Suplemento natural de Melena de León (Hericium erinaceus) formulado artesanalmente para apoyar la concentración, memoria y claridad mental. Sin estimulantes artificiales.",
  keywords:
    "synaptix, melena de león, suplemento natural, concentración, enfoque mental, claridad mental, hericium erinaceus",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
