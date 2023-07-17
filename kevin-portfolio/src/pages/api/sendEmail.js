import sgMail from '@sendgrid/mail';

export default async function handler(req, res) {
  const { email, message, subject } = req.body;

  const sendGridApiKey = "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";
  const emailUsername = "zzsshwkevin@gmail.com";
  const emailSendUsername = "kevinzhang090602@gmail.com";

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
