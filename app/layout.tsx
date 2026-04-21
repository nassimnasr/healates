import type { Metadata } from 'next'
import { Playfair_Display, Cairo, Inter } from 'next/font/google'
import './globals.css'
import { LanguageProvider } from '@/context/LanguageContext'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppFloat from '@/components/WhatsAppFloat'
import { cn } from "@/lib/utils";

const inter = Inter({subsets:['latin'],variable:'--font-sans'});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

const cairo = Cairo({
  subsets: ['latin', 'arabic'],
  variable: '--font-cairo',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Healates — Pilates & Yoga in Rasmaska',
  description: 'Heal your body, free your mind. Premium pilates and yoga studio in Rasmaska, Lebanon.',
  openGraph: {
    title: 'Healates — Pilates & Yoga in Rasmaska',
    description: 'Heal your body, free your mind. Premium pilates and yoga studio in Rasmaska, Lebanon.',
    url: 'https://healates.com',
    siteName: 'Healates',
    locale: 'en_LB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Healates — Pilates & Yoga in Rasmaska',
    description: 'Heal your body, free your mind.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" dir="ltr" className={cn(playfair.variable, cairo.variable, "font-sans", inter.variable)}>
      <body className="font-sans antialiased">
        <LanguageProvider>
          <Navbar />
          <main className="pt-16 md:pt-20">
            {children}
          </main>
          <Footer />
          <WhatsAppFloat />
        </LanguageProvider>
      </body>
    </html>
  )
}