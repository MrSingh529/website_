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
// API BASE URL - Works in both client and server
// ============================================
let API_BASE_URL = '';

// Check environment safely
if (typeof process !== 'undefined' && process.env?.VITE_API_BASE_URL) {
  // Node.js/server environment
  API_BASE_URL = process.env.VITE_API_BASE_URL;
} else if (typeof import.meta !== 'undefined' && import.meta.env?.VITE_API_BASE_URL) {
  // Vite/client environment
  API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
}

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
  
  // Determine if we should use API_BASE_URL
  const shouldUseBaseUrl = API_BASE_URL && 
    !API_BASE_URL.includes('localhost') && 
    !API_BASE_URL.includes('127.0.0.1');
  
  return shouldUseBaseUrl ? `${API_BASE_URL}${url}` : url;
}

// ============================================
// TYPE HELPERS
// ============================================
export type ContactInput = z.infer<typeof api.contact.submit.input>;
export type ContactResponse = z.infer<typeof api.contact.submit.responses[201]>;