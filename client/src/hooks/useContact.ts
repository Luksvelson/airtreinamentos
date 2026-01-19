import { useMutation } from "@tanstack/react-query";
import { contactService } from "@/services/api";
import type { InsertContact } from "@shared/schema";

export function useContactSubmit() {
  return useMutation({
    mutationFn: (data: InsertContact) => contactService.submitContactForm(data),
  });
}
