'use client'

import { Form, useForm } from 'react-hook-form'
import { propertyDataSchema } from '@/validation/propertySchema'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

type Props = {
  handleSubmit: (data: z.infer<typeof propertyDataSchema>) => void
}

export default function PropertyForm({handleSubmit}: Props) {
  const form = useForm<z.infer<typeof propertyDataSchema>>({
    resolver: zodResolver(propertyDataSchema),
    defaultValues: {
      address1: '',
      address2: '',
      city: '',
      postcode: '',
      price: 0,
      bedrooms: 0,
      bathrooms: 0,
      status: 'draft',
      description: ''
    }
  })
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)}>
        <div className='grid grid-cols-2'>
          <fieldset>
            
          </fieldset>
        </div>
      </form>
    </Form>
  )
}