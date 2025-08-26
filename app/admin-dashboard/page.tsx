import { Breadcrumbs } from '@/components/ui/breadcrumb'
import { Button } from '@/components/ui/button'
import { getProperties } from '@/data/properties'
import Link from 'next/link'
import { AiOutlinePlus } from 'react-icons/ai'

export default async function AdminDashboard() {
  const data = await getProperties()

  return (
    <div>
      <Breadcrumbs
        items={[{
          label: 'Dashboard'
        }]}
      />
      <h1 className='text-4xl font-medium mt-6'>Admin Dashboard</h1>
      <Button asChild className='inline-flex pl-2 gap-2 mt-4'>
        <Link href='/admin-dashboard/new'>
          <AiOutlinePlus />
          New Property
        </Link>
      </Button>
    </div>
  )
}