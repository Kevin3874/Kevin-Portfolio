import type { NextApiRequest, NextApiResponse } from "next";
import FormData from "form-data";
import Mailgun from "mailgun.js";

type ResponseData = { success: boolean };

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  if (req.method !== "POST") {
    res.status(405).json({ success: false });
    return;
  }

  const { email, message, subject } = req.body as {
    email: string;
    message: string;
    subject: string;
  };

  const apiKey = process.env.MAILGUN_API_KEY;
  const domain = process.env.MAILGUN_DOMAIN;
  const toEmail = process.env.EMAIL_USERNAME;
  const fromEmail = process.env.EMAILSEND_USERNAME;

  if (!apiKey || !domain || !toEmail || !fromEmail) {
    console.error("Missing one or more required environment variables");
    res.status(500).json({ success: false });
    return;
  }

  const mailgun = new Mailgun(FormData);
  const mg = mailgun.client({ username: "api", key: apiKey });

  try {
    await mg.messages.create(domain, {
      from: `kevinzhang.dev <${fromEmail}>`,
      to: [toEmail],
      subject,
      text: `From: ${email}\nMessage:\n${message}`,
    });
    res.status(200).json({ success: true });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ success: false });
  }
}
