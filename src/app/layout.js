import Header from '@/components/Header'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'MPGS test',
  description: 'Mastercard Payment Gateway Services'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="max-w-7xl mx-auto p-6 lg:px-8">{children}</main>
        <Script src="https://mtf.gateway.mastercard.com/static/checkout/checkout.min.js" />
      </body>
    </html>
  )
}