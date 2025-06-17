'use server'

import { auth } from '@/firebase/server'

export const setToken = async ({
  token,
  refreshToken
}: {
  token: string
  refreshToken: string
}) => {
  try {
    const verifiedToken = await auth.verifyIdToken(token)  
  } catch (e) {
    console.log(e)
  }
  
}