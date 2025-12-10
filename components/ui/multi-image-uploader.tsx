'use client'

import { Button } from './button'

export type ImageUpload = {
  id: string
  url: string
  file?: File
}

type Props = {
  images?: ImageUpload[] 
  onImagesChange: (images: ImageUpload[]) => void
}

export default function MultiImageUploader({
  images,
  onImagesChange
}: Props) {
  return (
    <div className='w-full max-w-3xl mx-auto p-4'>
      <Button
        type='button'
      >
        Upload Images
      </Button>
    </div>
  )
}