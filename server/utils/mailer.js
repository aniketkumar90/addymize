const nodemailer = require('nodemailer');

// Dynamic transporter supporting both Gmail/Google Workspace and Custom Domain SMTP (cPanel/Hostinger/Zoho)
const getTransporter = () => {
  if (process.env.SMTP_HOST) {
    return nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 465,
      secure: process.env.SMTP_SECURE !== 'false',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });
  }

  return nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });
};

const isConfigured = () => {
  const user = process.env.EMAIL_USER;
  const pass = process.env.EMAIL_PASS;
  if (!user || !pass) return false;
  if (user.includes('your_gmail') || pass.includes('your_gmail')) return false;
  return true;
};

/**
 * Send contact form notification email to admin
 */
const sendContactEmail = async ({ name, email, phone, company, message }) => {
  if (!isConfigured()) {
    console.warn('[Mailer] EMAIL_USER / EMAIL_PASS not set in server/.env — skipping email.');
    return;
  }

  const transporter = getTransporter();
  const recipient = process.env.EMAIL_TO || process.env.EMAIL_USER;

  const mailOptions = {
    from: `"Addymize Website" <${process.env.EMAIL_USER}>`,
    to: recipient,
    subject: `📩 New Contact Form Submission — ${name}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #0a0e1c; color: #e2e8f0; border-radius: 12px; overflow: hidden;">
        <!-- Header -->
        <div style="background: linear-gradient(135deg, #f59e0b, #0891b2); padding: 24px 32px;">
          <h1 style="margin: 0; font-size: 22px; color: #fff; font-weight: 800;">
            📩 New Contact Form Submission
          </h1>
          <p style="margin: 4px 0 0; font-size: 13px; color: rgba(255,255,255,0.85);">
            Addymize CRM & HRMS — Website Lead
          </p>
        </div>

        <!-- Body -->
        <div style="padding: 28px 32px;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #1e293b; width: 130px;">
                <span style="font-size: 12px; font-weight: 700; color: #94a3b8; text-transform: uppercase; letter-spacing: 1px;">Name</span>
              </td>
              <td style="padding: 10px 0; border-bottom: 1px solid #1e293b;">
                <span style="font-size: 15px; color: #f1f5f9; font-weight: 600;">${name}</span>
              </td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #1e293b;">
                <span style="font-size: 12px; font-weight: 700; color: #94a3b8; text-transform: uppercase; letter-spacing: 1px;">Email</span>
              </td>
              <td style="padding: 10px 0; border-bottom: 1px solid #1e293b;">
                <a href="mailto:${email}" style="color: #38bdf8; font-size: 15px; text-decoration: none;">${email}</a>
              </td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #1e293b;">
                <span style="font-size: 12px; font-weight: 700; color: #94a3b8; text-transform: uppercase; letter-spacing: 1px;">Phone</span>
              </td>
              <td style="padding: 10px 0; border-bottom: 1px solid #1e293b;">
                <span style="font-size: 15px; color: #f1f5f9;">${phone || '—'}</span>
              </td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #1e293b;">
                <span style="font-size: 12px; font-weight: 700; color: #94a3b8; text-transform: uppercase; letter-spacing: 1px;">Company</span>
              </td>
              <td style="padding: 10px 0; border-bottom: 1px solid #1e293b;">
                <span style="font-size: 15px; color: #f1f5f9;">${company || '—'}</span>
              </td>
            </tr>
            <tr>
              <td style="padding: 10px 0;" colspan="2">
                <span style="font-size: 12px; font-weight: 700; color: #94a3b8; text-transform: uppercase; letter-spacing: 1px;">Message</span>
                <div style="margin-top: 10px; padding: 16px; background: #1e293b; border-radius: 8px; border-left: 3px solid #f59e0b;">
                  <p style="margin: 0; font-size: 14px; color: #cbd5e1; line-height: 1.7;">${message}</p>
                </div>
              </td>
            </tr>
          </table>
        </div>

        <!-- Footer -->
        <div style="padding: 16px 32px; background: #0f172a; text-align: center; border-top: 1px solid #1e293b;">
          <p style="margin: 0; font-size: 11px; color: #475569;">
            This email was sent automatically from the Addymize website contact form.
          </p>
        </div>
      </div>
    `,
  };

  await transporter.sendMail(mailOptions);
};

/**
 * Send demo request notification email to admin
 */
const sendDemoEmail = async ({ name, email, phone, company }) => {
  if (!isConfigured()) {
    console.warn('[Mailer] EMAIL_USER / EMAIL_PASS not set in server/.env — skipping email.');
    return;
  }

  const transporter = getTransporter();
  const recipient = process.env.EMAIL_TO || process.env.EMAIL_USER;

  const mailOptions = {
    from: `"Addymize Website" <${process.env.EMAIL_USER}>`,
    to: recipient,
    subject: `🚀 New Demo Request — ${name}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #0a0e1c; color: #e2e8f0; border-radius: 12px; overflow: hidden;">
        <!-- Header -->
        <div style="background: linear-gradient(135deg, #0891b2, #7c3aed); padding: 24px 32px;">
          <h1 style="margin: 0; font-size: 22px; color: #fff; font-weight: 800;">
            🚀 New Demo Request
          </h1>
          <p style="margin: 4px 0 0; font-size: 13px; color: rgba(255,255,255,0.85);">
            Addymize CRM & HRMS — Demo Booking
          </p>
        </div>

        <!-- Body -->
        <div style="padding: 28px 32px;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #1e293b; width: 130px;">
                <span style="font-size: 12px; font-weight: 700; color: #94a3b8; text-transform: uppercase; letter-spacing: 1px;">Name</span>
              </td>
              <td style="padding: 10px 0; border-bottom: 1px solid #1e293b;">
                <span style="font-size: 15px; color: #f1f5f9; font-weight: 600;">${name}</span>
              </td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #1e293b;">
                <span style="font-size: 12px; font-weight: 700; color: #94a3b8; text-transform: uppercase; letter-spacing: 1px;">Email</span>
              </td>
              <td style="padding: 10px 0; border-bottom: 1px solid #1e293b;">
                <a href="mailto:${email}" style="color: #38bdf8; font-size: 15px; text-decoration: none;">${email}</a>
              </td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #1e293b;">
                <span style="font-size: 12px; font-weight: 700; color: #94a3b8; text-transform: uppercase; letter-spacing: 1px;">Phone</span>
              </td>
              <td style="padding: 10px 0; border-bottom: 1px solid #1e293b;">
                <span style="font-size: 15px; color: #f1f5f9;">${phone || '—'}</span>
              </td>
            </tr>
            <tr>
              <td style="padding: 10px 0;">
                <span style="font-size: 12px; font-weight: 700; color: #94a3b8; text-transform: uppercase; letter-spacing: 1px;">Company</span>
              </td>
              <td style="padding: 10px 0;">
                <span style="font-size: 15px; color: #f1f5f9;">${company || '—'}</span>
              </td>
            </tr>
          </table>
        </div>

        <!-- Footer -->
        <div style="padding: 16px 32px; background: #0f172a; text-align: center; border-top: 1px solid #1e293b;">
          <p style="margin: 0; font-size: 11px; color: #475569;">
            This email was sent automatically from the Addymize website demo booking form.
          </p>
        </div>
      </div>
    `,
  };

  await transporter.sendMail(mailOptions);
};

module.exports = { sendContactEmail, sendDemoEmail };
