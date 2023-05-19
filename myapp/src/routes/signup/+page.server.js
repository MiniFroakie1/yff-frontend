import nodemailer from "nodemailer";
import Verification from "$lib/emails/Verification.svelte";
import { render } from "svelte-email";

/** @type {import('./$types').Action} */
export const actions = {
    default: async ({ request, url, cookies }) => {
        const formData = await request.formData();

        let UUID = await fetch('http://localhost:8080/api/signup', {
            method: "POST",
            body: JSON.stringify({
                "name": formData.get("name"),
                "email": formData.get("email"),
                "password": formData.get("password")
            }),
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Basic dXNlcjphYjQyOTFlMi05NTBjLTRhOTYtYTFhNy0yZDY5MTUyZTY3YjQ=",
                "Access-Control-Allow-Origin": "http://localhost:8080"
            }
        }).then(res => res.json());
        if(UUID) {
            const transporter = nodemailer.createTransport({
                host: 'smtp.ethereal.email',
                port: 587,
                secure: false,
                auth: {
                    user: 'my_user',
                    pass: 'my_password'
                }
            });

            const emailHtml = render({
                component: Verification,
                props: {
                    name: formData.get("name")
                }
            });

            const options = {
                from: 'noreply@example.com',
                to: formData.get("email"),
                subject: 'ACTION REQUIRED: Confirm Your Email',
                html: emailHtml
            }

            transporter.sendMail(options)

            cookies.set("UUID", UUID[0]);
            return  {
                success: true,
                end: url.searchParams.get("back"),
            }
        }
    }
}

export async function load ({ cookies }) {
    if(!cookies.get("UUID")) {
        return {
            cookie: false
        }
    }
    return {
        cookie: true
    }
}
