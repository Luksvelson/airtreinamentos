import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const contactInfo = [
  {
    icon: Phone,
    title: "Telefone",
    value: "(11) 99999-9999",
    href: "tel:+5511999999999",
  },
  {
    icon: Mail,
    title: "E-mail",
    value: "contato@airtreinamentos.com.br",
    href: "mailto:contato@airtreinamentos.com.br",
  },
  {
    icon: MapPin,
    title: "Localização",
    value: "São Paulo, SP - Brasil",
  },
  {
    icon: Clock,
    title: "Horário de Atendimento",
    value: "Segunda a Sexta, 8h às 18h",
  },
];

export function ContactInfo() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-[#041F3F] mb-6">
        Informações de Contato
      </h2>
      <div className="space-y-6 mb-8">
        {contactInfo.map((info, index) => (
          <div
            key={index}
            className="flex items-start gap-4"
            data-testid={`contact-info-${index}`}
          >
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
              <info.icon className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">{info.title}</p>
              {info.href ? (
                <a
                  href={info.href}
                  className="text-[#041F3F] font-medium hover:text-primary transition-colors"
                >
                  {info.value}
                </a>
              ) : (
                <p className="text-[#041F3F] font-medium">{info.value}</p>
              )}
            </div>
          </div>
        ))}
      </div>

      <Card className="p-6 bg-[#041F3F] text-white border-none">
        <h3 className="font-bold text-lg mb-2">Treinamento In-Company</h3>
        <p className="text-white/80 text-sm mb-4">
          Oferecemos treinamentos personalizados nas instalações da sua empresa. Entre em contato para saber mais sobre condições especiais para grupos.
        </p>
        <Button
          variant="outline"
          className="border-white/30 text-white"
          data-testid="button-incompany"
        >
          Saiba Mais
        </Button>
      </Card>
    </div>
  );
}
