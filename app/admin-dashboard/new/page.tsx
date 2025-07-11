import { Breadcrumbs } from '@/components/ui/breadcrumb'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import NewPropertyForm from './new-property-form'

export default function NewProperty() {
  return (
    <div>
      <Breadcrumbs 
        items={[
          {
            href: '/admin-dashboard',
            label: 'Dashboard',
          },
          { 
            label: 'New Property'
          }
        ]} 
      />
      <Card>
        <CardHeader>
          <CardTitle className='text-3xl font-medium'>
            New Property
          </CardTitle>
        </CardHeader>
        <CardContent> 
          <NewPropertyForm />
        </CardContent>
      </Card>
    </div>
  )
}