'use server'

import { auth } from '@/firebase/server'
import { propertyDataSchema } from '@/validation/propertySchema'

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
  const {token, ...propertyData} = data
  const verifiedToken = await auth.verifyIdToken(token)

  if (!verifiedToken.admin) {
    return {
      error: true,
      message: 'Unauthorised.'
    }
  }

  const validation = propertyDataSchema.safeParse(propertyData)
}