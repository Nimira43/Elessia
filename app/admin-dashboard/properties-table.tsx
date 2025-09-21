import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { getProperties } from '@/data/properties'

export default async function PropertiesTable() {
  const {data, totalPages} = await getProperties({
    pagination: {
      pageSize: 5,
    }
  })
  console.log({data, totalPages})
  
  return (
    <>
      {!data && 
        <h1 className='text-center text-dark py-20 font-medium text-3xl'>There are no propeties to show.</h1>
      }
      {!!data &&
        <Table className='mt-5'>
          <TableHeader>
            <TableRow>
              <TableHead>Address</TableHead>
              <TableHead>Listing Price</TableHead>
              <TableHead>Status</TableHead>
              <TableHead />
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map(property => {
              const address = [
                property.address1,
                property.address2,
                property.city,
                property.postcode,
              ]
                .filter(addressLine => !!addressLine)
                .join(', ')
              return (
                <TableRow key={property.id}>
                  <TableCell>{address}</TableCell>
                  <TableCell>{property.price}</TableCell>
                  <TableCell>{property.status}</TableCell>
                  <TableCell>View | Edit</TableCell>
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      }
    </>
  )
}