import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertContactSchema, type InsertContactSubmission } from "@shared/schema";
import { useCreateContact } from "@/hooks/use-contact";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Loader2, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

export function ContactForm() {
  const { mutate, isPending, isSuccess } = useCreateContact();

  const form = useForm<InsertContactSubmission>({
    resolver: zodResolver(insertContactSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      industry: "",
      businessNeeds: "",
      techStackPreferences: "",
    },
  });

  function onSubmit(data: InsertContactSubmission) {
    mutate(data, {
      onSuccess: () => {
        form.reset();
      },
    });
  }

  if (isSuccess) {
    return (
      <Card className="w-full max-w-lg mx-auto shadow-xl border-t-4 border-accent">
        <CardContent className="pt-10 pb-10 text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="flex justify-center mb-6"
          >
            <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center">
              <CheckCircle2 className="w-10 h-10 text-green-600" />
            </div>
          </motion.div>
          <h3 className="text-2xl font-bold text-primary mb-2">Message Received!</h3>
          <p className="text-muted-foreground">
            Thank you for reaching out. Our automation experts will review your needs and contact you shortly.
          </p>
          <Button 
            variant="outline" 
            className="mt-6"
            onClick={() => window.location.reload()}
          >
            Send Another Message
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="w-full max-w-xl mx-auto shadow-2xl shadow-primary/5 border-none">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl font-bold text-primary">Get a Quote</CardTitle>
        <CardDescription>
          Tell us about your automation needs and we'll build a custom strategy for you.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full Name <span className="text-red-500">*</span></FormLabel>
                    <FormControl>
                      <Input placeholder="John Doe" {...field} className="bg-background/50" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email Address <span className="text-red-500">*</span></FormLabel>
                    <FormControl>
                      <Input placeholder="john@company.com" {...field} className="bg-background/50" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="company"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Company Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Acme Corp" {...field} value={field.value || ""} className="bg-background/50" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="industry"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Industry</FormLabel>
                    <FormControl>
                      <Input placeholder="Finance, Healthcare..." {...field} value={field.value || ""} className="bg-background/50" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="businessNeeds"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Business Needs & Goals <span className="text-red-500">*</span></FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="Describe the processes you want to automate..." 
                      className="min-h-[120px] bg-background/50"
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="techStackPreferences"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Current Tech Stack (Optional)</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="e.g. AWS, Salesforce, SAP..." 
                      {...field} 
                      value={field.value || ""} 
                      className="bg-background/50"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button 
              type="submit" 
              className="w-full bg-accent hover:bg-accent/90 text-white font-semibold py-6 text-lg shadow-lg shadow-accent/20 transition-all hover:-translate-y-0.5"
              disabled={isPending}
            >
              {isPending ? (
                <>
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                  Submitting Request...
                </>
              ) : (
                "Request Consultation"
              )}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
