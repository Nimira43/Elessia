'use client'

import { useAuth } from '@/context/auth'
import Link from 'next/link'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from './ui/dropdown-menu'
import { Avatar, AvatarFallback } from './ui/avatar'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

export default function AuthButtons() {
  const router = useRouter()
  const auth = useAuth()

  return (
    <div>
      {!!auth?.currentUser && (
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Avatar>
              {!!auth.currentUser.photoURL && (
                <Image
                  src={auth.currentUser.photoURL}
                  alt={`${auth.currentUser.displayName} avatar`}
                  width={70}
                  height={70}
                />  
              )}
              <AvatarFallback>
                {(auth.currentUser.displayName || auth.currentUser.email)?.[0]}
              </AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>
              <div
                className='font-medium'
              >
                {auth.currentUser.displayName}
              </div>
              <div 
                className='font-normal text-xs'
              >
                {auth.currentUser.email}
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem asChild>
              <Link href='/account'>My Account</Link>
            </DropdownMenuItem>
            {!!auth.customClaims?.admin && (
              <DropdownMenuItem asChild>
                <Link href='/admin-dashboard'>Admin Dashboard</Link>
              </DropdownMenuItem>
            )}
            {!auth.customClaims?.admin && (
              <DropdownMenuItem asChild>
                <Link href='/account/my-favourites'>My Favourites</Link>
              </DropdownMenuItem>
            )}
            <DropdownMenuItem
              onClick={async () => {
                await auth.logout()
                router.refresh()
              }}
            >
              Logout              
            </DropdownMenuItem>
          </DropdownMenuContent>          
        </DropdownMenu>
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