"use server"
import { createSupabaseServerClient } from '@/utils/supabase/server'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

export async function purchaseServer(planId) {
    const supabase = createSupabaseServerClient()
    const { data: { user } } = await supabase.auth.getUser()

    if (!user) {
        throw new Error('You must be signed in to perform this action')
    }

    const res = await fetch(`${process.env.API_URL}/servers/${planId}/start`, { method: "POST", credentials: "include" })
    console.log(res.status)

    revalidatePath("/dashboard/servers")
    redirect("/dashboard/servers")
}