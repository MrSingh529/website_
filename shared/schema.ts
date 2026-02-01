import { pgTable, text, serial, timestamp, varchar } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// === TABLE DEFINITIONS ===
export const contactSubmissions = pgTable("contact_submissions", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  company: text("company"),
  phone: text("phone"),
  industry: text("industry"),
  businessNeeds: text("business_needs"), // Changed from .notNull() to allow empty
  technologies: text("technologies"), // New field
  message: text("message"), // New field
  inquiryType: text("inquiry_type"), // New field: 'expert' or 'proposal'
  createdAt: timestamp("created_at").defaultNow(),
});

// === BASE SCHEMAS ===
export const insertContactSchema = createInsertSchema(contactSubmissions, {
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  company: z.string().optional(),
  phone: z.string().optional(),
  industry: z.string().optional(),
  businessNeeds: z.string().optional(),
  technologies: z.string().optional(),
  message: z.string().optional(),
  inquiryType: z.enum(['expert', 'proposal']).optional(),
}).omit({
  id: true,
  createdAt: true,
});

// === EXPLICIT API CONTRACT TYPES ===
export type ContactSubmission = typeof contactSubmissions.$inferSelect;
export type InsertContactSubmission = z.infer<typeof insertContactSchema>;

export type CreateContactRequest = InsertContactSubmission;
export type ContactResponse = ContactSubmission;