import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import Link from 'next/link'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
})

export const metadata: Metadata = {
  title: 'Elessia',
  description: 'Next JS project using TypeScript, Tailwind, Shadcn and Firebase',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={poppins.className}>
        <nav className='bg-dark text-light p-5 h-24 flex items-center justify-between'>
          <Link href='/'>
            Elessia
          </Link>
          <ul>
            <li>
              <Link href='/login'>
                Login
              </Link>
            </li>
            <li>
              <Link href='/register'>
                Register
              </Link>
            </li>
          </ul>
        </nav>
        {children}
      </body>
    </html>
  )
}
