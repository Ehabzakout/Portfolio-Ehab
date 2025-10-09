import sendEmail from "@/lib/utils/email";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { from, subject, html } = await req.json();
    sendEmail({ from, subject, html });
    return NextResponse.json({ success: true });
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "Can't send email";
    return NextResponse.json({ success: false, error: errorMessage });
  }
}
