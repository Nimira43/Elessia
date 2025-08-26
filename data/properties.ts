import 'server-only'
import { PropertyStatus } from '@/types/propertyStatus'

type getPropertiesOptions = {
  filters?: {
    minPrice?: number | null 
    maxPrice?: number | null 
    minBedrooms?: number | null 
    status?: PropertyStatus[] | null 
  },
  pagination?: {
    pageSize?: number
    page?: number
  }
}

export const getProperties = async (options?: GetPropertiesOptions) => {

}