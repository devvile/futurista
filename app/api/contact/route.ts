import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { firstName, email, phone, message } = body;

    const { data, error } = await resend.emails.send({
      from: 'Contact Form <form@futurista.dev>', // Use your verified domain
      to: [process.env.COMPANY_EMAIL!],
      replyTo: email,
      subject: `New Contact Form Submission from ${firstName}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${firstName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    });

    if (error) {
      return NextResponse.json({ error }, { status: 400 });
    }

    return NextResponse.json({ success: true, data });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}