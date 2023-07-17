const sgMail = require('@sendgrid/mail');

export default async function handler(req, res) {
  const { email, message, subject, id} = req.body;

  sgMail.setApiKey(process.env.SENDGRID_API_KEY);

  const msg = {
    to: process.env.EMAIL_USERNAME,
    from: {
      name: 'kevinzhang.dev',
      email: process.env.EMAILSEND_USERNAME,
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
