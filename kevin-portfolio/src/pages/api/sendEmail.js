import mailgun from 'mailgun-js';

export default async function handler(req, res) {
  const { email, message, subject } = req.body;

  const mailgunApiKey = process.env.MAILGUN_API_KEY;
  const mailgunDomain = process.env.MAILGUN_DOMAIN;
  const emailUsername = process.env.EMAIL_USERNAME;
  const emailSendUsername = process.env.EMAILSEND_USERNAME;

  if (!mailgunApiKey || !mailgunDomain || !emailUsername || !emailSendUsername) {
    console.error('One or more environment variables are not defined');
    res.status(500).json({ success: false });
    return;
  }

  const mg = mailgun({ apiKey: mailgunApiKey, domain: mailgunDomain });

  const data = {
    from: 'kevinzhang.dev <' + emailSendUsername + '>',
    to: emailUsername,
    subject: subject,
    text: "From: " + email + "\n" + "Message: " + "\n" + message
  };

  try {
    await mg.messages().send(data);
    res.status(200).json({ success: true });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ success: false });
  }
}
