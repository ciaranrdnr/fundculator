import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'


export const metadata: Metadata = {
  title: 'Platform Pembayaran Bisnis & Invoice Digital GRATIS | Paper.id ',
  description: 'Atur tempo pembayaran bisnis serta kirim & terima pembayaran dengan kartu kredit, invoice juga langsung sah dengan e-Meterai. Coba Sekarang!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <link
        rel="apple-touch-icon"
        href="https://www.paper.id/apple-touch-icon.png"
        type="image/<generated>"
        sizes="<generated>"
      />
      <link rel="icon" type="image/png" href="https://www.paper.id/apple-touch-icon.png" sizes="32x32"></link>
      <body>{children}</body>
    </html>
  )
}
