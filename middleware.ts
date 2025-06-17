import { cookies } from 'next/headers'
import { NextRequest, NextResponse } from 'next/server'

export async function middleware(request: NextRequest) {
  console.log('Middleware: ', request.url)
  if (request.method === 'POST') {
    return NextResponse.next()
  }
  const cookieStore = await cookies()
  const token = cookieStore.get('firebaseAuthToken')
}

export const config = {
  matcher: [
    '/admin-dashboard'
  ],
}