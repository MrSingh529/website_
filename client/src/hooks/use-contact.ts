import { useMutation, useQueryClient } from "@tanstack/react-query";
import { api, type ContactInput } from "@shared/routes";
import { useToast } from "@/hooks/use-toast";

export function useCreateContact() {
  const queryClient = useQueryClient();
  const { toast } = useToast();

  return useMutation({
    mutationFn: async (data: ContactInput) => {
      const validated = api.contact.submit.input.parse(data);
      
      // Determine API URL based on environment
      const baseUrl = import.meta.env?.VITE_API_BASE_URL || '';
      const apiUrl = `${baseUrl}${api.contact.submit.path}`;
      
      const res = await fetch(apiUrl, {
        method: api.contact.submit.method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(validated),
      });

      if (!res.ok) {
        if (res.status === 400) {
          const error = api.contact.submit.responses[400].parse(await res.json());
          throw new Error(error.message);
        }
        throw new Error("Failed to submit inquiry");
      }

      return api.contact.submit.responses[201].parse(await res.json());
    },
    onSuccess: () => {
      toast({
        title: "Inquiry Received",
        description: "Thank you for contacting AutomataX. Our experts will be in touch shortly.",
        variant: "default",
      });
    },
    onError: (error) => {
      toast({
        title: "Submission Failed",
        description: error.message,
        variant: "destructive",
      });
    },
  });
}