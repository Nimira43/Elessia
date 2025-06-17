'use client'

import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { Button } from './ui/button'
import { auth } from '@/firebase/client'

export default function ContinueWithGoogleButton() {
  return (
    <Button
      onClick={() => {
 
      }}
    >
      Continue with Google
    </Button>
  )
}