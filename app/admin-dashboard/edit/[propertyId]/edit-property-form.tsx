'use client'

import PropertyForm from '@/components/property-form'
import { Property } from '@/types/property'
import { propertyDataSchema } from '@/validation/propertySchema'
import z from 'zod'
import { LiaSave } from 'react-icons/lia'
import { auth } from '@/firebase/client'
import { updateProperty } from './actions'
import { useRouter } from 'next/navigation'
import { toast } from '@/hooks/use-toast'

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
  const router = useRouter()
  const handleSubmit = async (data: z.infer<typeof propertyDataSchema>) => {
    const token = await auth?.currentUser?.getIdToken()

    if (!token) {
      return
    }

    await updateProperty({...data, id },  token)
    toast({
      title: 'Success',
      description: 'Property updated!',
      variant: 'default'
    })
    router.push('/admin-dashboard')
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