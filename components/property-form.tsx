'use client'

import { useForm } from 'react-hook-form'
import { propertyDataSchema } from '@/validation/propertySchema'

export default function PropertyForm() {
  const form = useForm()
  return (
    <div>
      Property Form
    </div>
  )
}