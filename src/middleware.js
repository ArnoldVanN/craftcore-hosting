import { createServerClient } from '@supabase/ssr'
import { NextResponse } from 'next/server'

export async function middleware(request) {
    let response = NextResponse.next({
        request: {
            headers: request.headers,
        },
    })

    const supabase = createServerClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
        {
            cookies: {
                get(name) {
                    return request.cookies.get(name)?.value
                },
                set(name, value, options) {
                    request.cookies.set({
                        name,
                        value,
                        ...options,
                    })
                    response = NextResponse.next({
                        request: {
                            headers: request.headers,
                        },
                    })
                    response.cookies.set({
                        name,
                        value,
                        ...options,
                    })
                },
                remove(name, options) {
                    request.cookies.set({
                        name,
                        value: '',
                        ...options,
                    })
                    response = NextResponse.next({
                        request: {
                            headers: request.headers,
                        },
                    })
                    response.cookies.set({
                        name,
                        value: '',
                        ...options,
                    })
                },
            },
        }
    )

    await supabase.auth.getSession()

    return response
}

export const config = {
    matcher: ['/dashboard:path*'],
};

// import { getToken } from "next-auth/jwt"
// import { withAuth } from "next-auth/middleware"
// import { NextResponse } from "next/server"
// import { getCurrentUser } from "@/lib/session"
// import { getServerSession } from "next-auth/next"
// import { authOptions } from "@/lib/auth"
// import { getSession } from "next-auth/react"


// export default withAuth(
//     async function middleware(req) {
//         const session = await getSession(authOptions)
//         const isAuth = !!session
//         const isAuthPage =
//             req.nextUrl.pathname.startsWith("/login")
//         // || req.nextUrl.pathname.startsWith("/register")

//         if (isAuthPage) {
//             if (isAuth) {
//                 return NextResponse.redirect(new URL("/dashboard", req.url))
//             }

//             return null
//         }

//         if (!isAuth) {
//             let from = req.nextUrl.pathname;
//             if (req.nextUrl.search) {
//                 from += req.nextUrl.search;
//             }

//             return NextResponse.redirect(
//                 new URL(`/login?from=${encodeURIComponent(from)}`, req.url)
//             );
//         }
//     },
//     {
//         callbacks: {
//             async authorized() {
//                 // This is a work-around for handling redirect on auth pages.
//                 // We return true here so that the middleware function above
//                 // is always called.
//                 return true
//             },
//         },
//     },
//     {
//         pages: {
//             signIn: '/login',
//         }
//     }
// )

// export const config = {
//     matcher: ["/dashboard/:path*", "/login"],
// }