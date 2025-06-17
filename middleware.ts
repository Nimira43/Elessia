import { NextRequest } from 'next/server'

export async function middleware(request: NextRequest) {
  console.log('Middleware: ', request.url)
}

export const config = {
  matcher: [
    '/admin-dashboard'
  ],
}