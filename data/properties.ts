import 'server-only'

type getPropertiesOptions = {
  filters?: {
    minPrice?: number | null 
    maxPrice?: number | null 
    minBedrooms?: number | null 
    status?: number | null 
  }
}

export const getProperties = async (options?: GetPropertiesOptions) => {

}