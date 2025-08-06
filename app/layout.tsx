import type { Metadata } from 'next'
import { Roboto, Bebas_Neue, PT_Sans } from 'next/font/google'
import './globals.css'

const roboto = Roboto({ 
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  variable: '--font-roboto'
})
const bebasNeue = Bebas_Neue({ 
  weight: '400',
  subsets: ['latin'],
  variable: '--font-bebas-neue'
})
const ptSans = PT_Sans({ 
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-pt-sans'
})

export const metadata: Metadata = {
  title: 'SferaAuto Рыбинск - Надёжный ремонт автомобилей',
  description: 'Профессиональный автосервис в Рыбинске. Ремонт двигателя, замена масла, компьютерная диагностика и другие услуги.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
          integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>
      <body className={`${roboto.className} ${bebasNeue.variable} ${ptSans.variable}`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  )
} 