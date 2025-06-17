import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import Link from 'next/link'
import { AuthProvider } from '@/context/auth'
import AuthButtons from '@/components/auth-buttons'
import { GiCat } from 'react-icons/gi'

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
        <AuthProvider>
          <nav className='bg-dark text-light p-5 h-24 flex items-center justify-between'>
            <Link 
              href='/'
              className='text-3xl logo flex items-center'  
            >
              <GiCat />
              <span>Elessia</span>
            </Link>
            <ul>
              <AuthButtons />
            </ul>
          </nav>
          {children}
        </AuthProvider>
        
      </body>
    </html>
  )
}
