import { createSupabaseClient } from "../lib/supabase.js";

const supabaseMiddleware = async (req, res, next) => {
    try {
        const accessToken = req.cookies['access_token']
        const refreshToken = req.cookies['refresh_token']

        const supabase = await createSupabaseClient(accessToken, refreshToken);
        const { data: { user } } = await supabase.auth.getUser();

        if (!user) {
            res.status(401).send("Unauthenticated!")
            return
        }

        req.supabase = supabase;
        next();
    } catch (error) {
        console.error('Error in supabaseMiddleware:', error);
        next(error);
    }
};

export default supabaseMiddleware;