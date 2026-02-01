import { z } from 'zod';
import { insertContactSchema, contactSubmissions } from './schema.ts';

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
      path: '/api/contact',
      input: insertContactSchema,
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
  let url = path.startsWith('/') ? path : `/${path}`;
  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      if (url.includes(`:${key}`)) {
        url = url.replace(`:${key}`, String(value));
      }
    });
  }
  
  // For client-side, we'll pass the full URL from the client
  // For server-side, it's relative
  return url;
}

// ============================================
// TYPE HELPERS
// ============================================
export type ContactInput = z.infer<typeof api.contact.submit.input>;
export type ContactResponse = z.infer<typeof api.contact.submit.responses[201]>;