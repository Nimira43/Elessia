'use server'

import { auth } from '@/firebase/server'

export const setToken = async ({
  token,
  refreshToken
}: {
  token: string
  refreshToken: string
}) => {
  const verifiedToken = auth
}