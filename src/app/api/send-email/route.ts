import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const { from, subject, html } = await req.json();
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.SENDER,
        pass: process.env.PASSWORD,
      },
    });
    await transporter.sendMail({
      from: `${from} <${process.env.SENDER}>`,
      subject: `Email from ${subject}`,
      to: process.env.SENDER,
      html,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "Can't send email";
    return NextResponse.json({ success: false, error: errorMessage });
  }
}
