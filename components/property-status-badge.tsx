import { PropertyStatus } from '@/types/propertyStatus'
import { Badge } from './ui/badge'

const statusLabel = {
  'for-sale': 'For Sale',
  withdrawn: 'Withdrawn',
  draft: 'Draft',
  sold: 'Sold'
}

const variant = {
  'for-sale': 'ForSale',
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

  return (
    <Badge variant>
      {label}
    </Badge>
  )
}