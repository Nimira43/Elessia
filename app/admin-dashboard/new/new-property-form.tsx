'use client'

import PropertyForm from '@/components/property-form'
import { propertyDataSchema } from '@/validation/propertySchema'
import z from 'zod'
import { AiOutlinePlus } from 'react-icons/ai'
import { useAuth } from '@/context/auth'
import { createProperty } from './actions'
import { toast } from '@/hooks/use-toast'
import { useRouter } from 'next/navigation'

export default function NewPropertyForm() {
  const auth = useAuth()
  const router = useRouter()

  const handleSubmit = async (data: z.infer<typeof propertyDataSchema>) => {
    const token = await auth?.currentUser?.getIdToken()

    if (!token) {
      return
    }

    const response = await saveNewProperty({
      ...data,
      token
    })

    if (!!response.error) {
      toast({
        title: 'Error',
        description: response.error,
        variant: 'destructive',
      })
      return
    }
    toast({
      title: 'Success',
      description: 'Property created.',
    })
    
    router.push('/admin-dashboard')
  }

  return (
    <div>
      <PropertyForm 
        handleSubmit={handleSubmit}
        submitButtonLabel={
          <>
            <AiOutlinePlus />
            Create Property
          </>
        }
      />
    </div>
  )
}