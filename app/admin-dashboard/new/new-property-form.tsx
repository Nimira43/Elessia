'use client'

import PropertyForm from '@/components/property-form'
import { propertyDataSchema } from '@/validation/propertySchema'
import z from 'zod'
import { AiOutlinePlus } from 'react-icons/ai'
import { useAuth } from '@/context/auth'
import { saveNewProperty } from './actions'

export default function NewPropertyForm() {
  const auth = useAuth()

  const handleSubmit = async (data: z.infer<typeof propertyDataSchema>) => {
    const token = await auth?.currentUser?.getIdToken()

    if (!token) {
      return
    }

    const response = await saveNewProperty({
      ...data,
      token
    })
    console.log(response)
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