import './globals.css'
import { Inter } from 'next/font/google'
import { my_name } from './libs/constants'
import Navbar from './components/ui/navbar'
import { Suspense } from 'react'
import Loading from './components/ui/loading'
import { Analytics } from '@vercel/analytics/react'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Mohd Abdullah - Portfolio',
  description: 'Web Developer & Designer Portfolio | Software Developer | Computer Science Engineer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col min-h-screen">
          <header className="bg-white shadow-md">
            <Navbar />
          </header>
          <Suspense fallback={<Loading />}>
          <main className="flex-grow">
            {children}
            <Analytics />
          </main>
          </Suspense>
          <footer className="bg-gray-900 text-white py-8">
            <div className="container mx-auto px-6 text-center">
              <p>&copy; {new Date().getFullYear()} {my_name}. All rights reserved.</p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  )
}