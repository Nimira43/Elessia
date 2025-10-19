'use client'

import { Property } from '@/types/property'

type Props = Property

export default function EditPropertyForm({
  id, 
  address1,
  address2, 
  city, 
  postcode, 
  bathrooms, 
  bedrooms, 
  description, 
  price, 
  status

}: Props) {
  return (
    <div>Edit Property Form</div>
  )
}