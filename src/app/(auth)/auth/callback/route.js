import createSupabaseServerClient from '@/utils/supabase/server'
import { NextResponse } from 'next/server'

export async function GET(request) {
  const { searchParams, origin } = new URL(request.url)
  const code = searchParams.get('code')
  // const next = searchParams.get('next') ?? '/'

  if (code) {
    const supabase = await createSupabaseServerClient()
    const { error } = await supabase.auth.exchangeCodeForSession(code)
    // if (!error) {
    //   throw new error
    //   return NextResponse.redirect(`${origin}${next}`)

    // }
  }

  // URL to redirect to after sign in process completes
  return NextResponse.redirect(origin)
}
