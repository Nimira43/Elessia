'use client'

import PropertyForm from '@/components/property-form'
import { propertyDataSchema } from '@/validation/propertySchema'
import z from 'zod'
import { AiOutlinePlus } from 'react-icons/ai'

export default function NewPropertyForm() {
  const handleSubmit = async (data: z.infer<typeof propertyDataSchema>) => {
    console.log(data)
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