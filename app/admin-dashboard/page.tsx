import { Breadcrumbs } from '@/components/ui/breadcrumb'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { AiOutlinePlus } from 'react-icons/ai'
import PropertiesTable from './properties-table'

export default async function AdminDashboard() {
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
      <PropertiesTable />
    </div>
  )
}