import { auth } from "@/lib/auth"
 
export default auth((req) => {
  if (!req.auth && req.nextUrl.pathname !== "/authentication/login") {
    const newUrl = new URL("/authentication/login", req.nextUrl.origin)
    return Response.redirect(newUrl)
  }
})

export const config = {
    matcher: ["/((?!api|_next/static|_next/image|favicon.ico|authentication).*)"],
  }

export { auth as middleware } from "@/lib/auth"