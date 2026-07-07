import type { Metadata } from 'next'
import { Oswald, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from '@/components/providers/theme-provider'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const oswald = Oswald({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-oswald',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://www.vikashforgepvtltd.com'),
  title: 'Vikash Forge Pvt. Ltd. | Precision Forging Manufacturer – Howrah, India',
  description:
    'Vikash Forge Pvt. Ltd. is a leading precision forging manufacturer in Howrah, India with 30+ years of experience. Specialists in rounds, shafts, pinions, and hook nuts for railways, automotive, and heavy engineering.',
  keywords:
    'forging manufacturer India, precision forging Howrah, industrial forgings, EN24 steel, hook nut manufacturer, shaft forgings, pinion forgings, Vikash Forge',

  authors: [
    {
      name: 'Swachalit Business Solutions Pvt. Ltd.',
      url: 'https://swachalit.co.in'
    }
  ],
  openGraph: {
    title: 'Vikash Forge Pvt. Ltd. | Precision Forging',
    description: 'Precision Forging. Strength You Can Trust.',
    url: 'https://www.vikashforgepvtltd.com',
    siteName: 'Vikash Forge Pvt. Ltd.',
    type: 'website',
    images: [
      {
        url: '/vikash_forge.png',
        width: 1200,
        height: 630,
        alt: 'Vikash Forge Pvt. Ltd. Logo'
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vikash Forge Pvt. Ltd. | Precision Forging',
    description: 'Precision Forging. Strength You Can Trust.',
    images: ['/vikash_forge.png'],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="bg-background" data-scroll-behavior="smooth">
      <body className={`${inter.variable} ${oswald.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}

