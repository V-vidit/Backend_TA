import { NextRequest, NextResponse } from "next/server";

export function proxy(req: NextRequest){
    const url=req.nextUrl;
    console.log(req.nextUrl)
    console.log("Middleware called")
    if (url.pathname=='/products') {
        if (!url.searchParams.get("pageNo")) {
            const newUrl=url.clone();
            newUrl.searchParams.set("pageNo", "0");
            return NextResponse.redirect(newUrl);
        }
    }

    if(url.pathname.startsWith("/dashboard") && url.searchParams.get("expired")==="true"){
        const newUrl=url.clone();
        newUrl.searchParams.set("token", "adminNew");
        newUrl.searchParams.delete("expired");
        return NextResponse.redirect(newUrl);
    }

    if (url.pathname.startsWith("/dashboard")) {
        const token=url.searchParams.get("token");

        if (token!=='admin' && token!=='adminNew') {
            return NextResponse.redirect(new URL("/login", req.url));
        }
    }

    return NextResponse.next();
}

export const config={
    matcher: ['/api/users', '/products/:path*', '/dashboard']
}

