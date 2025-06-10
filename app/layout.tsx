import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Jroling Seguidores - Compra Seguidores y Vistas para Instagram, YouTube, TikTok",
  description:
    "Impulsa tus redes sociales al siguiente nivel. Obtén seguidores, likes, comentarios y vistas reales para Instagram, YouTube, TikTok, Facebook y más. Sistema 100% automatizado y seguro.",
  keywords:
    "seguidores instagram, suscriptores youtube, likes tiktok, seguidores reales, vistas youtube, comentarios instagram, crecimiento redes sociales",
  authors: [{ name: "Jroling Seguidores" }],
  openGraph: {
    title: "Jroling Seguidores - Crecimiento Real para Redes Sociales",
    description: "Plataforma líder en servicios de crecimiento para redes sociales. Entrega automática 24/7.",
    url: "https://jrolingseguidores.xyz",
    siteName: "Jroling Seguidores",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jroling Seguidores - Crecimiento Real para Redes Sociales",
    description: "Impulsa tus redes sociales con servicios reales y seguros",
  },
  robots: {
    index: true,
    follow: true,
  },
  metadataBase: new URL("https://jrolingseguidores.xyz"),
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
