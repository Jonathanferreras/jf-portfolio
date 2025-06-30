import { Resend } from "resend";
import { withAllowedOrigins } from "@/middlewares/cors";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function postHandler(req: Request) {
  try {
    const { name, email, message } = await req.json();
    const response = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: process.env.CONTACT_EMAIL_ADDRESS ?? "",
      subject: `New Portfolio Contact Message from ${name}`,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong><br/>${message}</p>
      `,
    });

    if (!response.data) {
      throw new Error("Error sending email");
    }

    return new Response(
      JSON.stringify({ success: true, data: response.data }),
      {
        status: 200,
      }
    );
  } catch (error) {
    console.log(error);
    return new Response(JSON.stringify({ error: "Failed to send email" }), {
      status: 500,
    });
  }
}

export const POST = withAllowedOrigins(postHandler);
