import { createClient } from '@supabase/supabase-js'

export const createSupabaseClient = async (access_token, refresh_token) => {
    const supabase = await createClient(process.env.SUPABASE_URL, process.env.SUPABASE_ANON_KEY)
    await supabase.auth.setSession({
        access_token,
        refresh_token
    }).catch(error => {
        console.error('Error setting session:', error);
        throw error
    })

    return supabase
}

export const createSupabaseAdminClient = async () => {
    return await createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY, {
        auth: {
            autoRefreshToken: false,
            persistSession: false
        }
    })
}