import nodemailer, { SendMailOptions } from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  auth: {
    user: "ftwehab@gmail.com",
    pass: process.env.PASSWORD,
  },
});

async function sendEmail({ from, subject, html }: SendMailOptions) {
  transporter.sendMail({
    from: `${from} <ftwehab@gmail.com>`,
    subject: `Email from ${subject}`,
    to: "ftwehab@gmail.com",
    html,
  });
}

export default sendEmail;
