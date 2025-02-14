import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

function isUserLoggedIn(request: NextRequest) {
  return request.cookies.has("user_session")
}

function isAdminLoggedIn(request: NextRequest) {
  return request.cookies.has("admin_session")
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  if (isUserLoggedIn(request) && pathname === "/auth/signin") {
    return NextResponse.redirect(new URL("/", request.url))
  }

  if (isAdminLoggedIn(request) && pathname === "/auth/signin") {
    return NextResponse.redirect(new URL("/admin", request.url))
  }

  if (pathname.startsWith("/admin")) {
    if (!isAdminLoggedIn(request)) {
      return NextResponse.redirect(new URL("/auth/signin", request.url))
    }
  }

  if (pathname.startsWith("/user")) {
    if (!isUserLoggedIn(request)) {
      return NextResponse.redirect(new URL("/auth/signin", request.url))
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/admin/:path*", "/user/:path*", "/auth/signin"],
}

