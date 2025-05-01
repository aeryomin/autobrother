import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'АвтоБрат Рыбинск - Надёжный ремонт автомобилей',
  description: 'Профессиональный автосервис в Рыбинске. Ремонт двигателя, замена масла, компьютерная диагностика и другие услуги.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <body className={inter.className}>{children}</body>
    </html>
  )
} 