"use server"
import { createSupabaseServerClient } from '@/utils/supabase/server'
import { revalidatePath } from 'next/cache'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export async function purchaseServer(planId, version, formData) {
    const supabase = createSupabaseServerClient()
    const { data: { user } } = await supabase.auth.getUser()

    if (!user) {
        throw new Error('You must be signed in to perform this action')
    }

    const cookieStore = cookies()
    const cookie = cookieStore.get('sb-ptgxftdilvyyiwtiegmv-auth-token');
    const cookieObject = JSON.parse(cookie.value)
    const accessToken = cookieObject.access_token;
    const refreshToken = cookieObject.refresh_token;

    // formData.append("planId", planId)
    // formData.append("version", version)
    // console.log(JSON.stringify({ planId, version }))
    // console.log(`access_token=${accessToken};refresh_token=${refreshToken}`)

    const res = await fetch(`${process.env.API_URL}/purchase-server`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Cookie: `access_token=${accessToken};refresh_token=${refreshToken}`
        },
        body: JSON.stringify({ planId, version })
    })
        // .then(res => res.json())
        .then(data => console.log('Status code:', data.status))
    // console.log(formData.get("planId"))

    revalidatePath("/dashboard/servers")
    redirect("/dashboard/servers")
}