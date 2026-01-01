import "dotenv/config";
import nodemailer from "nodemailer";
import { type InsertContactSubmission } from "@shared/schema";

export interface IStorage {
  createContactSubmission(contact: InsertContactSubmission): Promise<{ success: boolean; message: string }>;
}

export class EmailStorage implements IStorage {
  private transporter: nodemailer.Transporter;

  constructor() {
    // Debug: Check if env vars are loaded
    const emailUser = process.env.EMAIL_USER || "sales@automataxpro.site";
    const emailPass = process.env.EMAIL_PASS;
    
    console.log("Email config:", { 
      user: emailUser, 
      hasPass: !!emailPass,
      passLength: emailPass?.length 
    });

    if (!emailPass) {
      throw new Error("EMAIL_PASS environment variable is required");
    }

    this.transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: emailUser,
        pass: emailPass,
      },
    });
  }

  async createContactSubmission(contact: InsertContactSubmission): Promise<{ success: boolean; message: string }> {
    try {
      console.log("Attempting to send email for:", contact.email);
      
      // Email to you (admin notification)
      await this.transporter.sendMail({
        from: `"Automatax Contact" <${process.env.EMAIL_FROM || "sales@automataxpro.site"}>`,
        to: process.env.EMAIL_TO || "sales@automataxpro.site",
        subject: `New Contact Form Submission from ${contact.name}`,
        html: `
          <h3>New Contact Form Submission</h3>
          <p><strong>Name:</strong> ${contact.name}</p>
          <p><strong>Email:</strong> ${contact.email}</p>
          <p><strong>Company:</strong> ${contact.company || "Not provided"}</p>
          <p><strong>Message:</strong></p>
          <p>${contact.message}</p>
          <hr>
          <p>Received at: ${new Date().toLocaleString()}</p>
        `,
      });

      console.log("Admin email sent");

      // Optional: Auto-reply to the user
      if (contact.email) {
        await this.transporter.sendMail({
          from: `"Automatax" <${process.env.EMAIL_FROM || "sales@automataxpro.site"}>`,
          to: contact.email,
          subject: "Thank you for contacting Automatax",
          html: `
            <h3>Thank you for your message!</h3>
            <p>Hi ${contact.name},</p>
            <p>We've received your inquiry and will get back to you within 24 hours.</p>
            <p><strong>Your message:</strong></p>
            <p><em>${contact.message.substring(0, 200)}...</em></p>
            <br>
            <p>Best regards,</p>
            <p>The Automatax Team</p>
          `,
        });
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