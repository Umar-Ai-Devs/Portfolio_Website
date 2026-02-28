import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { name, email, subject, message } = await request.json();

  const emailBody = `
Name: ${name}
Email: ${email}
Subject: ${subject}

Message:
${message}
  `;

  const mailtoLink = `mailto:umaraidevs@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailBody)}`;

  return NextResponse.json({ success: true, mailtoLink });
}
