import './globals.css'
import { Inter } from 'next/font/google'
import { EXAMPLE_PATH, CMS_NAME } from '@/lib/constants'

export const metadata = {
  title: `Next.js and ${CMS_NAME} Example`,
  description: `This is a blog built with Next.js and ${CMS_NAME}.`,
}

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
})

function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <h3>Year in Music.</h3>
        <p>Built with Next.js and Contentful.</p>
      </div>
      <div className="footer-link">
        <a href="https://github.com/brittanyrw/year-in-music-2023" target="_blank">GitHub</a>
      </div>
    </footer>
  )
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body suppressHydrationWarning={true}>
        <section className="min-h-screen">
          <main>{children}</main>
          <Footer />
        </section>
      </body>
    </html>
  )
}
