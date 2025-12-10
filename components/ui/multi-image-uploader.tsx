'use client'

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
}) {

}