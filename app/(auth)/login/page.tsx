import ContinueWithGoogleButton from '@/components/continue-with-google-button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function Login() {
  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle
            className='font-medium uppercase'
          >
            Login
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ContinueWithGoogleButton />
        </CardContent>
      </Card>
    </div>
  )
}