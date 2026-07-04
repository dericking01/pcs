import { NextResponse } from "next/server";

interface ContactPayload {
  name?: string;
  company?: string;
  email?: string;
  phone?: string;
  service?: string;
  message?: string;
}

export async function POST(request: Request) {
  const body = (await request.json()) as ContactPayload;

  if (!body.name || !body.email || !body.message) {
    return NextResponse.json(
      { error: "Name, email, and message are required." },
      { status: 400 }
    );
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(body.email)) {
    return NextResponse.json({ error: "Enter a valid email address." }, { status: 400 });
  }

  // Server-side receipt of the enquiry. Wire this up to an email/CRM
  // provider (e.g. Resend, SES) to notify the PCS team.
  console.log("[contact] new enquiry", {
    name: body.name,
    company: body.company,
    email: body.email,
    phone: body.phone,
    service: body.service,
  });

  return NextResponse.json({ ok: true });
}
