// client/src/hooks/use-inquiries.ts
import { useMutation } from "@tanstack/react-query";
import axios from "axios";

interface ContactFormData {
  name: string;
  email: string;
  company: string;
  message: string;
}

export function useContactInquiry() {
  return useMutation({
    mutationFn: async (data: ContactFormData) => {
      const response = await axios.post("/api/inquiries", data);
      return response.data;
    },
  });
}