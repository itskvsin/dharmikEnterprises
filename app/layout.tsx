import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Dharmik Enterprise – B2B Embroidery Manufacturer | Ahmedabad, India',
  description: 'Premium bulk embroidery manufacturing for brands, wholesalers & garment businesses. Logo stitching, uniform embroidery, MOQ 50 pcs. Based in Ahmedabad, Gujarat.',
  keywords: 'bulk embroidery manufacturer, B2B embroidery India, logo stitching, uniform embroidery, Ahmedabad embroidery, wholesale embroidery',
  openGraph: {
    title: 'Dharmik Enterprise – B2B Embroidery Manufacturer',
    description: 'Premium bulk embroidery manufacturing for brands & garment businesses.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,600&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Navbar />
        <main className="pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
