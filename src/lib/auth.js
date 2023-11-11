import NextAuth from "next-auth"
import GitHubProvider from "next-auth/providers/github"

import { SupabaseAdapter } from "@auth/supabase-adapter"
import jwt from "jsonwebtoken"

// import { getServerSession } from "next-auth"

export const authOptions = {
    // theme: {
    //     logo: "https://next-auth.js.org/img/logo/logo-sm.png",
    // },
    adapter: SupabaseAdapter({
        url: process.env.NEXT_PUBLIC_SUPABASE_URL,
        secret: process.env.SUPABASE_SERVICE_ROLE_KEY,
    }),
    pages: {
        signIn: "/login",
    },
    providers: [
        GitHubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET
        })
    ],
    callbacks: {
        async session({ session, user }) {
            const signingSecret = process.env.SUPABASE_JWT_SECRET
            if (signingSecret) {
                const payload = {
                    aud: "authenticated",
                    exp: Math.floor(new Date(session.expires).getTime() / 1000),
                    sub: user.id,
                    email: user.email,
                    role: "authenticated",
                }
                session.supabaseAccessToken = jwt.sign(payload, signingSecret)
            }
            return session
        },
        // async redirect({ url, baseUrl }) {
        //     console.log("url???" + url)
        //     if (this.authorized === "authorized") {
        //         console.log("authorized")
        //     }
        //     if (url.startsWith("/")) console.log(`${baseUrl}${url}`)
        //     // Allows relative callback URLs
        //     if (url.startsWith("/")) return `${baseUrl}${url}`
        //     // Allows callback URLs on the same origin
        //     else if (new URL(url).origin === baseUrl) return url
        //     return url
        // }
    },
}

// export function auth(...args) {
//     return getServerSession(...args, authOptions);
// }

export const { handlers, auth, signIn, signOut } = NextAuth(authOptions)