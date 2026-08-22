import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ContactEmailRequest {
  name: string;
  email: string;
  message: string;
}

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, message }: ContactEmailRequest = await req.json();

    console.log("Received contact form submission:", { name, email });

    const notificationRes = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "Portfolio Contact <onboarding@resend.dev>",
        to: ["philipinem7@gmail.com"],
        subject: `New Portfolio Contact: ${name}`,
        html: `
          <!DOCTYPE html>
          <html>
            <head>
              <style>
                body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background: #0a0b0f; color: #e5e7eb; padding: 20px; }
                .container { max-width: 600px; margin: 0 auto; background: linear-gradient(135deg, #111318 0%, #1a1d24 100%); border-radius: 16px; padding: 32px; border: 1px solid #2d3748; }
                h1 { color: #2dd4bf; margin-bottom: 24px; font-size: 24px; }
                .field { margin-bottom: 20px; }
                .label { color: #9ca3af; font-size: 12px; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 4px; }
                .value { color: #f3f4f6; font-size: 16px; padding: 12px; background: rgba(45, 212, 191, 0.1); border-radius: 8px; border-left: 3px solid #2dd4bf; }
                .message { white-space: pre-wrap; line-height: 1.6; }
                .footer { margin-top: 32px; padding-top: 20px; border-top: 1px solid #2d3748; color: #6b7280; font-size: 12px; text-align: center; }
              </style>
            </head>
            <body>
              <div class="container">
                <h1>🚀 New Contact Form Submission</h1>
                <div class="field">
                  <div class="label">From</div>
                  <div class="value">${name}</div>
                </div>
                <div class="field">
                  <div class="label">Email</div>
                  <div class="value"><a href="mailto:${email}" style="color: #2dd4bf;">${email}</a></div>
                </div>
                <div class="field">
                  <div class="label">Message</div>
                  <div class="value message">${message}</div>
                </div>
                <div class="footer">
                  Sent from your portfolio website • ${new Date().toISOString()}
                </div>
              </div>
            </body>
          </html>
        `,
      }),
    });

    const notificationData = await notificationRes.json();
    console.log("Notification email sent:", notificationData);

    const confirmationRes = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "Philip Inem <onboarding@resend.dev>",
        to: [email],
        subject: "Thanks for reaching out!",
        html: `
          <!DOCTYPE html>
          <html>
            <head>
              <style>
                body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background: #0a0b0f; color: #e5e7eb; padding: 20px; }
                .container { max-width: 600px; margin: 0 auto; background: linear-gradient(135deg, #111318 0%, #1a1d24 100%); border-radius: 16px; padding: 32px; border: 1px solid #2d3748; }
                h1 { color: #2dd4bf; margin-bottom: 16px; font-size: 28px; }
                p { color: #d1d5db; line-height: 1.7; margin-bottom: 16px; }
                .highlight { color: #2dd4bf; font-weight: 600; }
                .links { margin-top: 24px; }
                .link { display: inline-block; margin-right: 16px; color: #2dd4bf; text-decoration: none; }
                .footer { margin-top: 32px; padding-top: 20px; border-top: 1px solid #2d3748; color: #6b7280; font-size: 12px; text-align: center; }
                .signature { margin-top: 24px; padding: 16px; background: rgba(45, 212, 191, 0.05); border-radius: 8px; }
              </style>
            </head>
            <body>
              <div class="container">
                <h1>Hey ${name}! 👋</h1>
                <p>Thank you for reaching out through my portfolio. I've received your message and I'm excited to connect with you!</p>
                <p>I typically respond within <span class="highlight">24 hours</span>, so you'll hear from me soon.</p>
                <div class="signature">
                  <p style="margin-bottom: 8px;"><strong>Philip Inem</strong></p>
                  <p style="margin-bottom: 0; color: #9ca3af;">Quantitative Systems Engineer</p>
                </div>
                <div class="links">
                  <a href="https://github.com/Xzavior34" class="link">GitHub</a>
                  <a href="https://www.linkedin.com/in/philip-inem" class="link">LinkedIn</a>
                </div>
                <div class="footer">
                  © ${new Date().getFullYear()} Philip Inem • Engineering Zero-DowntimeSystems
                </div>
              </div>
            </body>
          </html>
        `,
      }),
    });

    const confirmationData = await confirmationRes.json();
    console.log("Confirmation email sent:", confirmationData);

    return new Response(
      JSON.stringify({
        success: true,
        notificationId: notificationData.id,
        confirmationId: confirmationData.id,
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      },
    );
  } catch (error: unknown) {
    console.error("Error in send-contact-email function:", error);

    const errorMessage =
      error instanceof Error ? error.message : "An unknown error occurred";

    return new Response(
      JSON.stringify({ error: errorMessage }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      },
    );
  }
};

serve(handler);
