// api/inquiries.js - Serverless function version
import { storage } from '../server/storage';
import { api } from '../shared/routes';
import { z } from 'zod';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const input = api.inquiries.create.input.parse(req.body);
    const inquiry = await storage.createContactInquiry(input);
    res.status(201).json(inquiry);
  } catch (err) {
    if (err instanceof z.ZodError) {
      return res.status(400).json({
        message: err.errors[0].message,
        field: err.errors[0].path.join('.'),
      });
    }
    console.error('Error:', err);
    res.status(500).json({ message: 'Internal server error' });
  }
}