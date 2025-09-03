/* eslint-disable @typescript-eslint/no-unused-vars */
import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    const { data, error } = await resend.emails.send({
      from: 'Portfolio Contact devdebo.com',
      to: ['adebolabadejo11@gmail.com'],
      subject: `New Portfolio Contact from ${name}`,
      html: `
        <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; background-color: #f8f9fa;">
          <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; text-align: center;">
            <h1 style="color: white; margin: 0; font-size: 28px; font-weight: 600;">
              New Portfolio Contact
            </h1>
          </div>
          
          <div style="padding: 40px 30px; background-color: white;">
            <div style="background-color: #f8f9fa; padding: 25px; border-radius: 10px; border-left: 5px solid #667eea;">
              <h2 style="color: #333; margin: 0 0 20px 0; font-size: 20px;">Contact Details</h2>
              
              <div style="margin-bottom: 15px;">
                <strong style="color: #555; display: inline-block; width: 80px;">Name:</strong>
                <span style="color: #333;">${name}</span>
              </div>
              
              <div style="margin-bottom: 20px;">
                <strong style="color: #555; display: inline-block; width: 80px;">Email:</strong>
                <span style="color: #333;">${email}</span>
              </div>
              
              <div>
                <strong style="color: #555; display: block; margin-bottom: 10px;">Message:</strong>
                <div style="background-color: white; padding: 20px; border-radius: 8px; border: 1px solid #e9ecef; line-height: 1.6; color: #333;">
                  ${message.replace(/\n/g, '<br>')}
                </div>
              </div>
            </div>
          </div>
          
          <div style="background-color: #f8f9fa; padding: 20px; text-align: center; border-top: 1px solid #dee2e6;">
            <p style="color: #6c757d; font-size: 14px; margin: 0;">
              This email was sent from your portfolio contact form
            </p>
            <p style="color: #6c757d; font-size: 12px; margin: 5px 0 0 0;">
              Sent on ${new Date().toLocaleString()}
            </p>
          </div>
        </div>
      `,
      replyTo: email,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: 'Email sent successfully', id: data?.id },
      { status: 200 }
    );

  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}