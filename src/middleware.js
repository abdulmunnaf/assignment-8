import { NextResponse } from "next/server";
import { getSessionCookie } from "better-auth/cookies";

export function middleware(request) {
  const { pathname } = request.nextUrl;
  
  const token = getSessionCookie(request.headers, {
    cookiePrefix: "better-auth",
    cookieName: "session_token",
  });

  const isAuthRoute = pathname.startsWith("/login") || pathname.startsWith("/register");
  const isPrivateRoute = pathname.startsWith("/my-profile") || pathname.startsWith("/update-profile") || pathname.startsWith("/tile");

  if (isPrivateRoute && !token) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  if (isAuthRoute && token) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/my-profile/:path*",
    "/update-profile/:path*",
    "/tile/:path*",
    "/login",
    "/register",
  ],
};
