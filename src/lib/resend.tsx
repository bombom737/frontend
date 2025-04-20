"use server"
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (email: string, name: string, subject: string, content: string) => {
    await resend.emails.send({
        to: "tootoopaz@gmail.com",
        from: "OrcDev <onboarding@resend.dev>",
        subject: subject,
        html:`<p>Email sent from ${name}, Email address: ${email}.</p>
        <p>Email content: ${content}</p>
        ` ,
    });
}