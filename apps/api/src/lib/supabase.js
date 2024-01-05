import { createServerClient } from '@supabase/ssr'

export function createClient(req, res) {
    return createServerClient(process.env.SUPABASE_URL, process.env.SUPABASE_ANON_KEY, {
        cookies: {
            get: (key) => {
                const cookies = req.cookies
                const cookie = cookies[key] ?? ''
                return decodeURIComponent(cookie)
            },
            set: (key, value, options) => {
                if (!res) return
                res.cookie(key, encodeURIComponent(value), {
                    ...options,
                    sameSite: 'Lax',
                    httpOnly: true,
                })
            },
            remove: (key, options) => {
                if (!res) return
                res.cookie(key, '', { ...options, httpOnly: true })
            },
        },
    })
}