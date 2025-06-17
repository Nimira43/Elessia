'use client'

import { useAuth } from '@/context/auth'
import Link from 'next/link'

export default function AuthButtons() {
  const auth = useAuth()

  return (
    <div>
      {!!auth?.currentUser && (
        <>
          <div>
            {auth.currentUser.email}
          </div>
          <div onClick={() => {
            auth.logout()
          }}>
            Logout
          </div>
        </>
      )}
      {!auth?.currentUser && (
        <div className='flex gap-2 items-center '>
          <Link
            className='font-medium uppercase hover:text-support-light btn-hover' 
            href='/login'
          >
            Login
          </Link>
          <Link 
            className='font-medium uppercase hover:text-support-light btn-hover'
            href='/register'
          >
            Register
          </Link>
        </div>
      )} 
    </div>
  )
}