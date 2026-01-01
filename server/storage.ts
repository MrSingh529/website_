import "dotenv/config";
import { type InsertContactSubmission } from "../shared/schema.js";
import { sendEmail } from "./email-gmail.js";

export interface IStorage {
  createContactSubmission(contact: InsertContactSubmission): Promise<{ success: boolean; message: string }>;
}

export class EmailStorage implements IStorage {
  constructor() {
    // Verify Gmail API credentials are loaded
    const clientId = process.env.GMAIL_CLIENT_ID;
    const clientSecret = process.env.GMAIL_CLIENT_SECRET;
    const refreshToken = process.env.GMAIL_REFRESH_TOKEN;
    const user = process.env.GMAIL_USER || "sales@automataxpro.site";
    
    console.log("Gmail API config:", { 
      user, 
      hasClientId: !!clientId,
      hasClientSecret: !!clientSecret,
      hasRefreshToken: !!refreshToken
    });

    if (!clientId || !clientSecret || !refreshToken) {
      throw new Error("Gmail API credentials (GMAIL_CLIENT_ID, GMAIL_CLIENT_SECRET, GMAIL_REFRESH_TOKEN) are required");
    }
  }

  async createContactSubmission(contact: InsertContactSubmission): Promise<{ success: boolean; message: string }> {
    try {
      console.log("Attempting to send email for:", contact.email);
      
      const adminEmail = process.env.GMAIL_USER || "sales@automataxpro.site";
      
      // Email to you (admin notification)
      const adminEmailHtml = `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${contact.name}</p>
        <p><strong>Email:</strong> ${contact.email}</p>
        <p><strong>Company:</strong> ${contact.company || "Not provided"}</p>
        <p><strong>Message:</strong></p>
        <p>${contact.message}</p>
        <hr>
        <p>Received at: ${new Date().toLocaleString()}</p>
      `;

      await sendEmail(
        adminEmail,
        `New Contact Form Submission from ${contact.name}`,
        adminEmailHtml
      );

      console.log("Admin email sent");

      // Optional: Auto-reply to the user
      if (contact.email) {
        const autoReplyHtml = `
          <h3>Thank you for your message!</h3>
          <p>Hi ${contact.name},</p>
          <p>We've received your inquiry and will get back to you within 24 hours.</p>
          <p><strong>Your message:</strong></p>
          <p><em>${contact.message.substring(0, 200)}${contact.message.length > 200 ? '...' : ''}</em></p>
          <br>
          <p>Best regards,</p>
          <p>The Automatax Team</p>
        `;

        await sendEmail(
          contact.email,
          "Thank you for contacting Automatax",
          autoReplyHtml
        );
        
        console.log("Auto-reply sent to:", contact.email);
      }

      return { success: true, message: "Message sent successfully" };
    } catch (error) {
      console.error("Email sending error:", error);
      throw new Error("Failed to send message");
    }
  }
}

export const storage = new EmailStorage();
