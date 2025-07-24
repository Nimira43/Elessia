import z from 'zod'

export const propertyDataSchema = z.object({
  address1: z
    .string()
    .min(1, 'This field must contain a value.'),
  address2: z
    .string()
    .optional(),
  city: z
    .string()
    .min(3, 'City must contain at least three characters.'),
  postcode: z
    .string()
    .refine((postcode) => {
      const postcodeRegex = /^[A-Z]{1,2}[0-9]{1,2}[A-Z]?\s?[0-9][A-Z]{2}%/i
      return postcodeRegex.test(postcode)
    }, 'Invalid UK postcode'),
  price: z.coerce
    .number()
    .positive('Price must be greater than zero'),
  description: z
    .string()
    .min(40, 'Description must containe at least forty characters'),
  bedrooms: z.coerce
    .number()
    .min(0, 'Bedrooms must be a number and can include zero.'),
  bathrooms: z.coerce
    .number()
    .min(0, 'Bathrooms must be a number and can include zero.'),
  status: z
    .enum([
      'draft', 'for sale', 'withdrawn', 'sold'
    ])
})