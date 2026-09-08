import { NextResponse } from "next/server";

interface AccountDeletionPayload {
  email?: string;
  username?: string;
  phone?: string;
  info?: string;
}

export async function POST(request: Request) {
  const body = (await request.json()) as AccountDeletionPayload;

  if (!body.email) {
    return NextResponse.json({ error: "Email address is required." }, { status: 400 });
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(body.email)) {
    return NextResponse.json({ error: "Enter a valid email address." }, { status: 400 });
  }

  // Server-side receipt of the request. Wire this up to an email/CRM
  // provider (e.g. Resend, SES) to notify the PCS team.
  console.log("[account-deletion] new request", {
    email: body.email,
    username: body.username,
    phone: body.phone,
    info: body.info,
  });

  return NextResponse.json({ ok: true });
}
