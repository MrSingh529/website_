import type { Express } from "express";
import type { Server } from "http";
import { storage } from "./storage.ts";
import { api } from "../shared/routes.ts";
import { z } from "zod";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  
  app.post(api.contact.submit.path, async (req, res) => {
    try {
      const input = api.contact.submit.input.parse(req.body);
      const contact = await storage.createContactSubmission(input);
      res.status(201).json(contact);
    } catch (err) {
      if (err instanceof z.ZodError) {
        return res.status(400).json({
          message: err.errors[0].message,
          field: err.errors[0].path.join('.'),
        });
      }
      throw err;
    }
  });

  await seedDatabase();

  return httpServer;
}

async function seedDatabase() {
  // Check if we have any submissions (not strictly necessary for this app, but good practice)
  // Since we don't have a 'get' method in storage, we can't easily check count without modifying storage.
  // For a contact form, we don't really need to seed data as it's write-only for the public.
  // But I will add a log to indicate the server is ready.
  console.log("Server initialized.");
}
