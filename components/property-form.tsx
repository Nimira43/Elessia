'use client'

import { useForm } from 'react-hook-form'
import { propertyDataSchema } from '@/validation/propertySchema'
import z from 'zod'

export default function PropertyForm() {
  const form = useForm<z.infer<typeof propertyDataSchema>>()
  return (
    <div>
      Property Form
    </div>
  )
}