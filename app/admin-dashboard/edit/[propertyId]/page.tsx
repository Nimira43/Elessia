import { Breadcrumbs } from '@/components/ui/breadcrumb'
import { getPropertyById } from '@/data/properties'

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
        items={[{
          href: '/admin-dashboard',
          label: 'Dashboard'
        }, {
          label: 'Edit Property'
        }]}
      >

      </Breadcrumbs>

    </div>
  )
}