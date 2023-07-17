import sgMail from '@sendgrid/mail';

export default async function handler(req, res) {
  const { email, message, subject } = req.body;

  const sendGridApiKey = process.env.SENDGRID_API_KEY;
  const emailUsername = process.env.EMAIL_USERNAME;
  const emailSendUsername = process.env.EMAILSEND_USERNAME;

  if (!sendGridApiKey || !emailUsername || !emailSendUsername) {
    console.error('One or more environment variables are not defined');
    res.status(500).json({ success: false });
    return;
  }

  sgMail.setApiKey(sendGridApiKey);

  const msg = {
    to: emailUsername,
    from: {
      name: 'kevinzhang.dev',
      email: emailSendUsername,
    },
    subject: subject,
    text: "From: " + email + "\n" + "Message: " + "\n" + message
  };

  try {
    await sgMail.send(msg);
    res.status(200).json({ success: true });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ success: false });
  }
}
