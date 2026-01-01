import { google } from 'googleapis';
import type { gmail_v1 } from 'googleapis';

const OAuth2 = google.auth.OAuth2;

async function getGmailClient(): Promise<gmail_v1.Gmail> {
  const oauth2Client = new OAuth2(
    process.env.GMAIL_CLIENT_ID,
    process.env.GMAIL_CLIENT_SECRET,
    'https://developers.google.com/oauthplayground'
  );

  oauth2Client.setCredentials({
    refresh_token: process.env.GMAIL_REFRESH_TOKEN,
  });

  return google.gmail({ version: 'v1', auth: oauth2Client });
}

function createEmailMessage(to: string, subject: string, html: string, from: string): string {
  const utf8Subject = `=?utf-8?B?${Buffer.from(subject).toString('base64')}?=`;
  const messageParts = [
    `From: ${from}`,
    `To: ${to}`,
    'Content-Type: text/html; charset=utf-8',
    'MIME-Version: 1.0',
    `Subject: ${utf8Subject}`,
    '',
    html,
  ];
  const message = messageParts.join('\n');

  // Encode the message in base64url format
  const encodedMessage = Buffer.from(message)
    .toString('base64')
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=+$/, '');

  return encodedMessage;
}

export async function sendEmail(to: string, subject: string, html: string) {
  try {
    const gmail = await getGmailClient();
    const from = process.env.GMAIL_USER || 'sales@automataxpro.site';
    
    const encodedMessage = createEmailMessage(to, subject, html, from);

    const result = await gmail.users.messages.send({
      userId: 'me',
      requestBody: {
        raw: encodedMessage,
      },
    });

    console.log('Email sent successfully via Gmail API:', result.data.id);
    return { success: true, messageId: result.data.id };
  } catch (error) {
    console.error('Gmail API error:', error);
    throw error;
  }
}
