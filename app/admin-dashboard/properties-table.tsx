import { getProperties } from '@/data/properties'

export default async function PropertiesTable() {
  const {data} = await getProperties()
  console.log({data})
  
  return (
    <div>
      Properties Table
    </div>
  )
}