import z from 'zod'

export const propertyDataSchema = z.object({
  address1: z
    .string()
    .min(1, 'Address line 1 must contain a value.'),
  address2: z
    .string()
    .optional(),
  city: z
    .string()
    .min(3, 'City must contain at least 3 characters.'),
  postcode: z
    .string()
    .refine((postcode) => {
      const postcodeRegex = /^[A-Z]{1,2}[0-9]{1,2}[A-Z]?\s?[0-9][A-Z]{2}%/i
    })

})