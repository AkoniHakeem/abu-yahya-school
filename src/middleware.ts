import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const authRole = request.cookies.get('auth_role')?.value
  const { pathname } = request.nextUrl

  // Protected routes
  const isProtected = pathname.startsWith('/admin') || 
                      pathname.startsWith('/tutor') || 
                      pathname.startsWith('/billing')

  // Auth pages (login/signup)
  const isAuthPage = pathname.startsWith('/login') || 
                     pathname.startsWith('/signup')

  if (isProtected && !authRole) {
    // Redirect unauthenticated users to login
    return NextResponse.redirect(new URL('/login', request.url))
  }

  if (isAuthPage && authRole) {
    // Redirect authenticated users away from auth pages
    if (authRole === 'admin') return NextResponse.redirect(new URL('/admin/dashboard', request.url))
    if (authRole === 'tutor') return NextResponse.redirect(new URL('/tutor/classroom', request.url))
    if (authRole === 'student') return NextResponse.redirect(new URL('/billing', request.url))
  }
  
  if (pathname === '/' && authRole) {
    if (authRole === 'admin') return NextResponse.redirect(new URL('/admin/dashboard', request.url))
    if (authRole === 'tutor') return NextResponse.redirect(new URL('/tutor/classroom', request.url))
    if (authRole === 'student') return NextResponse.redirect(new URL('/billing', request.url))
  }

  return NextResponse.next()
}

// Config to match paths
export const config = {
  matcher: [
    '/',
    '/admin/:path*',
    '/tutor/:path*',
    '/billing/:path*',
    '/login',
    '/signup'
  ]
}
