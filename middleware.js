import { NextResponse } from 'next/server';
import { verify } from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'your-fallback-secret-key-for-development';

export async function middleware(request) {
  const path = request.nextUrl.pathname;
  
  // Define paths that are protected (admin-only)
  const isAdminPath = path.startsWith('/admin');
  
  // Get token from cookies
  const token = request.cookies.get('token')?.value || '';
  
  // Check if token exists and path is protected
  if (isAdminPath) {
    if (!token) {
      return NextResponse.redirect(new URL('/login', request.url));
    }
    
    try {
      // Verify token
      const decoded = verify(token, JWT_SECRET);
      
      // Check if user is admin for admin paths
      if (isAdminPath && decoded.role !== 'admin') {
        return NextResponse.redirect(new URL('/', request.url));
      }
      
      // Continue to the protected route
      return NextResponse.next();
    } catch (error) {
      // Token invalid, redirect to login
      return NextResponse.redirect(new URL('/login', request.url));
    }
  }
  
  // Allow access to public routes
  return NextResponse.next();
}

// Define which paths this middleware should run on
export const config = {
  matcher: [
    '/admin/:path*',
    '/login',
    '/register',
  ],
}; 