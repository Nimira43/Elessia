'use server'

import { Property } from '@/types/property'

export const updateProperty = async (data: Property, authToken: string) => {
  const verifiedToken = await auth.verifyIdToken(token)

  if (!verifiedToken.admin) {
    return {
      error: true,
      message: 'Unauthorised.'
    }
  }

  const validation = propertyDataSchema.safeParse(propertyData)
  if (!validation.success) {
    return {
      error: true,
      message: validation.error.issues[0]?.message ?? 'An error occurred.'
    }
  }
}