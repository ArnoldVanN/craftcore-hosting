import { createSupabaseServerClient } from "@/utils/supabase/server"

export const revalidate = 900

export async function GET(request) {
    const supabase = await createSupabaseServerClient()
    const { data } = await supabase.from("plans").select().order("memory_size")
    return Response.json({ data })
}
