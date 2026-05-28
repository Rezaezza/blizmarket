import './globals.css'

import Navbar from '@/components/layout/Navbar'
import Providers from '@/components/layout/Providers'

export const metadata = {
  title: 'BlizMarket',
  description: 'Prediction Market on Arc Testnet',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        <Providers>
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  )
}