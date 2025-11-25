import { Button } from '@/components/ui/button'
import { Table, TableBody, TableCell, TableFooter, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { getProperties } from '@/data/properties'
import Link from 'next/link'
import { SlPencil } from 'react-icons/sl'
import numeral from 'numeral'

export default async function PropertiesTable({
  page = 1
}: {
  page?: number
}) {
  const {data, totalPages} = await getProperties({
    pagination: {
      page,
      pageSize: 5,
    }
  })
  
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
                  <TableCell>
                    {numeral(property.price).format('0,0')}
                  </TableCell>
                  <TableCell>{property.status}</TableCell>
                  <TableCell>
                    View | 
                    <Button 
                      variant='outline'
                      asChild
                      size='sm'
                    >
                      <Link
                        href={`/admin-dashboard/edit/${property.id}`}
                      >
                        <SlPencil />
                      </Link>
                    </Button>
                  </TableCell>
                </TableRow>
              )
            })}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell
                colSpan={4}
                className='text-center'
              >
                {
                  Array.from({
                    length: totalPages
                  }).map((_, i) => (
                    <Button
                      key={i}
                      asChild  
                      className='mx-1'
                      variant='outline'
                    >
                      <Link 
                        href={`/admin-dashboard?page=${i + 1}`}
                      >
                        {i + 1}
                      </Link>
                    </Button>
                  ))
                }
              </TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      }
    </>
  )
}