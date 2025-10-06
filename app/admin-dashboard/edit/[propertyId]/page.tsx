import { Breadcrumbs } from '@/components/ui/breadcrumb'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { getPropertyById } from '@/data/properties'
import NewPropertyForm from '../../new/new-property-form'

export default async function EditProperty({
  params
}: {
  params: Promise<any>
}) {
  const paramsValue = await params
  const property = await getPropertyById(paramsValue.propertyId)
  console.log(property)

  return (
    <div>
      <Breadcrumbs 
        items={[
          {
          href: '/admin-dashboard',
          label: 'Dashboard'
          }, 
          {
            label: 'Edit Property'
          }
        ]}
      />
      <Card className='mt-5'>
        <CardHeader>
          <CardTitle className='text-3xl font-medium uppercase'>
            Edit Property
          </CardTitle>
        </CardHeader>
        <CardContent> 
          EditPropertyForm
        </CardContent>
      </Card>
    </div>
  )
}