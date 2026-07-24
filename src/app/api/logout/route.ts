import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'

export async function GET(request: Request) {
  // Clear the auth cookie
  const cookieStore = await cookies();
  cookieStore.delete('auth_role');
  
  // Redirect to login
  const url = new URL('/login', request.url)
  return NextResponse.redirect(url)
}
