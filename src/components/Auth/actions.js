"use server"
import createSupabaseServerClient from "@/utils/supabase/server"
import { redirect } from "next/navigation"

export default async function logout() {
    console.log("should sign out")
    const supabase = await createSupabaseServerClient()
    await supabase.auth.signOut()
    redirect("/login")
}