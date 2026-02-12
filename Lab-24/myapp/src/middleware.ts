import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const url = request.nextUrl;
 console.log(request)
  //1
  if (url.pathname === "/products") {
    if (!url.searchParams.has("pageNo")) {
      const newUrl = url.clone();
      newUrl.searchParams.set("pageNo", "0");
      return NextResponse.redirect(newUrl);
    }
  }

  //3
  if (
    url.pathname.startsWith("/dashboard") &&
    url.searchParams.get("expired") === "true"
  ) {
    const newUrl = url.clone();
    newUrl.searchParams.set("token", "adminNew"); 
    newUrl.searchParams.delete("expired");
    return NextResponse.redirect(newUrl);
  }

  //2
  if (url.pathname.startsWith("/dashboard")) {
    const token = url.searchParams.get("token");

    if (token !== "admin" && token!=="adminNew") {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/products", "/dashboard/:path*"],
};
