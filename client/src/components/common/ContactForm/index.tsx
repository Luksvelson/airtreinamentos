import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { Send, CheckCircle } from "lucide-react";
import { apiRequest } from "@/lib/queryClient";
import { insertContactSchema, type InsertContact } from "@shared/schema";

export function ContactForm() {
  const { toast } = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<InsertContact>({
    resolver: zodResolver(insertContactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      company: "",
      message: "",
    },
  });

  const submitMutation = useMutation({
    mutationFn: async (data: InsertContact) => {
      return apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      setIsSubmitted(true);
      toast({
        title: "Mensagem enviada!",
        description: "Entraremos em contato em até 24 horas úteis.",
      });
    },
    onError: () => {
      toast({
        title: "Erro ao enviar",
        description: "Tente novamente ou entre em contato por telefone.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: InsertContact) => {
    submitMutation.mutate(data);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    form.reset();
  };

  if (isSubmitted) {
    return (
      <Card className="p-6 md:p-8" data-testid="contact-form-card">
        <div className="text-center py-12">
          <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="w-8 h-8 text-green-600" />
          </div>
          <h3 className="text-xl font-bold text-[#041F3F] mb-2">
            Mensagem Enviada!
          </h3>
          <p className="text-muted-foreground mb-6">
            Obrigado pelo seu contato. Nossa equipe responderá em até 24 horas úteis.
          </p>
          <Button
            variant="outline"
            onClick={handleReset}
            data-testid="button-new-message"
          >
            Enviar Nova Mensagem
          </Button>
        </div>
      </Card>
    );
  }

  return (
    <Card className="p-6 md:p-8" data-testid="contact-form-card">
      <h2 className="text-2xl font-bold text-[#041F3F] mb-6">
        Solicite uma Proposta
      </h2>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nome Completo *</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Seu nome"
                      data-testid="input-name"
                      {...field}
                    />
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
                  <FormLabel>E-mail Corporativo *</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="seu@empresa.com.br"
                      data-testid="input-email"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Telefone</FormLabel>
                  <FormControl>
                    <Input
                      type="tel"
                      placeholder="(11) 99999-9999"
                      data-testid="input-phone"
                      {...field}
                      value={field.value || ""}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="company"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Empresa *</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Nome da empresa"
                      data-testid="input-company"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Mensagem *</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Conte-nos sobre sua necessidade de treinamento..."
                    rows={5}
                    data-testid="input-message"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            type="submit"
            className="w-full bg-primary text-primary-foreground font-semibold"
            disabled={submitMutation.isPending}
            data-testid="button-submit-contact"
          >
            {submitMutation.isPending ? (
              "Enviando..."
            ) : (
              <>
                Enviar Mensagem
                <Send className="w-4 h-4 ml-2" />
              </>
            )}
          </Button>

          <p className="text-xs text-muted-foreground text-center">
            Ao enviar, você concorda com nossa política de privacidade.
          </p>
        </form>
      </Form>
    </Card>
  );
}
