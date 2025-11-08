'use client'

import PropertyForm from '@/components/property-form'
import { Property } from '@/types/property'
import { propertyDataSchema } from '@/validation/propertySchema'
import z from 'zod'
import { LiaSave } from 'react-icons/lia'
import { auth } from '@/firebase/client'
import { updateProperty } from './actions'

type Props = Property

export default function EditPropertyForm({
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
  const handleSubmit = async (data: z.infer<typeof propertyDataSchema>) => {
    const token = await auth?.currentUser?.getIdToken()

    if (!token) {
      return
    }

    await updateProperty(data, token)
  }
  
  return (
    <div>
      <PropertyForm 
        handleSubmit={handleSubmit}
        submitButtonLabel={
          <>
            <LiaSave />
            Save Property          
          </>
        }
        defaultValues={{
          address1,
          address2, 
          city, 
          postcode, 
          bathrooms, 
          bedrooms, 
          description, 
          price, 
          status
        }}
      />
    </div>
  )
}