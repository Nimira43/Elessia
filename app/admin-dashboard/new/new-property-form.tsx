'use client'

import PropertyForm from '@/components/property-form'
import { propertySchema } from '@/validation/propertySchema'
import z from 'zod'
import { AiOutlinePlus } from 'react-icons/ai'
import { useAuth } from '@/context/auth'
import { createProperty, savePropertyImages } from './actions'
import { toast } from '@/hooks/use-toast'
import { useRouter } from 'next/navigation'
import { ref, uploadBytesResumable, UploadTask } from 'firebase/storage'
import { storage } from '@/firebase/client'

export default function NewPropertyForm() {
  const auth = useAuth()
  const router = useRouter()

  const handleSubmit = async (data: z.infer<typeof propertySchema>) => {
    const token = await auth?.currentUser?.getIdToken()

    if (!token) {
      return
    }

    const {images, ...rest} = data
    const response = await createProperty(rest, token)

    if (!!response.error || !response.propertyId) {
      toast({
        title: 'Error',
        description: response.error,
        variant: 'destructive',
      })
      return
    }

    const uploadTasks: UploadTask[] = []
    const paths: string[] = []

    images.forEach((image, index) => {
      if (image.file) {
        const path = `properties/${response.propertyId}/${Date.now()}-${index}-${image.file.name}`
        paths.push(path)
        const storageRef = ref(storage, path)
        uploadTasks.push(uploadBytesResumable(storageRef, image.file))
      }
    })

    await Promise.all(uploadTasks)
    await savePropertyImages({
      propertyId: response.propertyId,
      images: paths
    }, token)

    toast({
      title: 'Success',
      description: 'Property created.',
    })
    
    router.push('/admin-dashboard')
  }

  return (
    <div>
      <PropertyForm 
        handleSubmit={handleSubmit}
        submitButtonLabel={
          <>
            <AiOutlinePlus />
            Create Property
          </>
        }
      />
    </div>
  ) 
}