import './globals.css'
import Navbar from '@/components/Navbar'

export const metadata = {
  title: 'NSP - Local SEO Strategist | AEO • GEO • SEO',
  description: 'Transform your online visibility with expert AEO, GEO, and SEO strategies. Ranked #1 in AI Answer Engines and Google Maps.',
  keywords: 'Local SEO, AEO, GEO, SEO Services, Australian SEO, Answer Engine Optimization',
  openGraph: {
    title: 'NSP - Local SEO Strategist',
    description: 'Expert AEO, GEO, and SEO services for Australian businesses.',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
