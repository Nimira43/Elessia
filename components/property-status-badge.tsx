import { PropertyStatus } from '@/types/propertyStatus'

const statusLabel = {
  'for-sale': 'For Sale',
  withdrawn: 'Withdrawn',
  draft: 'Draft',
  sold: 'Sold'
}

const variant = {
  'for-sale': 'For Sale',
  withdrawn: 'Withdrawn',
  draft: 'Draft',
  sold: 'Sold'
}

export default function PropertyStatusBadge({
  status
}: {
  status: PropertyStatus
}) {
  const label = statusLabel[status]
}