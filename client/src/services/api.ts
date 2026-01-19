import { apiRequest } from "@/lib/queryClient";
import type { InsertContact, ContactSubmission } from "@shared/schema";

export const contactService = {
  async submitContactForm(data: InsertContact): Promise<ContactSubmission> {
    const response = await apiRequest<ContactSubmission>("POST", "/api/contact", data);
    return response;
  },
};
