"use server"
import { createSupabaseServerClient } from "@/utils/supabase/server"
import { redirect } from "next/navigation"

export default async function logOut() {
    const supabase = await createSupabaseServerClient()
    await supabase.auth.signOut()
    redirect("/login")
}