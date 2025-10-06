export default async function EditProperty({
  params
}: {
  params: Promise<any>
}) {
  const paramsValue = await params
  console.log(paramsValue)

  return (
    <div>Edit Property</div>
  )
}