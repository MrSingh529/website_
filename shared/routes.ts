import { z } from 'zod';
import { insertContactSchema, contactSubmissions } from './schema.ts';

const API_BASE_URL = import.meta.env?.VITE_API_BASE_URL || '';

// ============================================
// SHARED ERROR SCHEMAS
// ============================================
export const errorSchemas = {
  validation: z.object({
    message: z.string(),
    field: z.string().optional(),
  }),
  internal: z.object({
    message: z.string(),
  }),
};

// ============================================
// API CONTRACT
// ============================================
export const api = {
  contact: {
    submit: {
      method: 'POST' as const,
      path: `${API_BASE_URL}/api/contact`,
      input: insertContactSchema, // Use the updated schema
      responses: {
        201: z.custom<typeof contactSubmissions.$inferSelect>(),
        400: errorSchemas.validation,
      },
    },
  },
};

// ============================================
// REQUIRED: buildUrl helper
// ============================================
export function buildUrl(path: string, params?: Record<string, string | number>): string {
  let url = path;
  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      if (url.includes(`:${key}`)) {
        url = url.replace(`:${key}`, String(value));
      }
    });
  }
  return `${API_BASE_URL}${url}`;
}

// ============================================
// TYPE HELPERS
// ============================================
export type ContactInput = z.infer<typeof api.contact.submit.input>;
export type ContactResponse = z.infer<typeof api.contact.submit.responses[201]>;