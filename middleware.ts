import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Get the pathname of the request
  const path = request.nextUrl.pathname;

  // If the path is /admin, allow it to proceed
  if (path === '/admin') {
    return NextResponse.next();
  }

  // If the path is /login, redirect to /admin
  if (path === '/login') {
    return NextResponse.redirect(new URL('/admin', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin', '/login'],
}; 