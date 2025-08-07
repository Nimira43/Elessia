'use server'

import { auth } from '@/firebase/server'

export const saveNewProperty = async (data: {
  address1: string
  address2?: string
  city: string
  postcode: string
  description: string
  price: number
  bedrooms: number
  bathrooms: number
  status: 'draft' | 'for sale' | 'withdrawn' | 'sold'
  token: string
}) => {
  const verifiedToken = await auth.verifyIdToken(data.token)

  if (!verifiedToken.admin) {
    return {
      error: true,
      message: 'Unauthorised.'
    }
  }

  
}