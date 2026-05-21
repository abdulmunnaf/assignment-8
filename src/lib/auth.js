
import { mongodbAdapter } from "@better-auth/mongo-adapter";
import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";

const client = new MongoClient(process.env.MONGO_URI)

const db = client.db('a-8_skil-shaper')

export const auth = betterAuth({

    database: mongodbAdapter((db), {
        client: client,
    }),
    emailAndPassword: {
        enabled: true,
    },
    socialProviders: {
        google: {
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        },
    },
});