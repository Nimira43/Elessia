'use server'

export const saveNewProperty = async (data : {
  address1: string
  address2?: string
  city: string
  postcode: string
  description: string
  price: number
  bedrooms: number
  bathrooms: number
  status: 'draft' | 'for sale' | 'withdrawn' | 'sold'
}) => {}