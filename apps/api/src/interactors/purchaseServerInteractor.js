// const stripe = require('stripe')(process.env.STRIPE_KEY);
import { getPlanPersistence } from '../persistence/getPlanPersistence.js';
import { createServerOnFreeNode } from './helpers/createServerOnFreeNode.js';

export const purchaseServerInteractor = async (req) => {
    try {
        const { planId, version } = req.body;

        if (!planId || !version) {
            throw new Error("Missing required parameters");
        }

        const plan = await getPlanPersistence(req, planId)
        const { data: { session }, error } = await req.supabase.auth.getSession()
        if (error) {
            throw new Error(error)
        }
        const userId = session.user.id
        if (userId === undefined) {
            throw new Error("Error in purchaseServerInteractor: session.user.id is undefined")
        }

        // await stripe.subscriptions.create({
        //   customer: user.id,
        //   items: [
        //     {
        //       plan: plan.plan,
        //       quantity: 1,
        //     },
        //   ],
        // })

        await createServerOnFreeNode({
            userId,
            plan,
            version,
            req
        })
    } catch (error) {
        console.error(error)
        throw new Error()
    }
}