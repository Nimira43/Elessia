import { getProperties } from '@/data/properties'

export default async function PropertiesTable() {
  const {data} = await getProperties()
  console.log({data})
  
  return (
    <>
      {!data && 
        <h1 className='text-center text-dark py-20 font-medium text-3xl'>There are no propeties to show.</h1>
      }
    </>
  )
}