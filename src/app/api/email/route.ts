import { Resend } from "resend";
import { EmailTemplate } from "@/components/EmailTemplate/EmailTemplate";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request){
    try {
        const {name, email, topic, content} = await req.json()

        console.log({name, email, topic, content})
        const {data, error} = await resend.emails.send({
            from: "onboarding@resend.dev",
            to: process.env.EMAIL_TO || "",
            subject: topic,
            react: EmailTemplate({name, email, content})
        })

        if(error){
            return Response.json({error})
        }

        return Response.json({data})
    }
    catch(error) {
        return Response.json({error})
    }
}