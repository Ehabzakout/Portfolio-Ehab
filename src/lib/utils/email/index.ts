import nodemailer, { SendMailOptions } from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  auth: {
    user: process.env.SENDER,
    pass: process.env.PASSWORD,
  },
});

async function sendEmail({ from, subject, html }: SendMailOptions) {
  await transporter.sendMail({
    from: `${from} <${process.env.SENDER}>`,
    subject: `Email from ${subject}`,
    to: process.env.SENDER,
    html,
  });
}

export default sendEmail;
