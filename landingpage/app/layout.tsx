import './globals.css'
import { Nunito } from 'next/font/google'

const font = Nunito({ subsets: ['latin'] })

export const metadata = {
  title: 'MaxAlign Dental',
  description: 'MaxAlign Dental - A Multispecialty Clinic',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${font.className} bg-slate-100`}>{children}</body>
    </html >
  )
}
