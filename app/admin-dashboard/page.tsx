import { Breadcrumbs } from '@/components/ui/breadcrumb'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { AiOutlinePlus } from 'react-icons/ai'

export default function AdminDashboard() {
  return (
    <div>
      <Breadcrumbs
        items={[{
          label: 'Dashboard'
        }]}
      />
      <h1 className='text-4xl font-medium mt-6'>Admin Dashboard</h1>
      <Button asChild>
        <Link href='/admin-dashboard/new'>
          <AiOutlinePlus />
          New Property
        </Link>
      </Button>
    </div>
  )
}