import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight, Building, Settings, Target, Clock, Users, MapPin } from "lucide-react";

const advantages = [
  {
    icon: Building,
    title: "Na Sua Empresa",
    description: "Treinamento realizado nas suas instalações, com foco nos seus equipamentos e desafios reais.",
  },
  {
    icon: Settings,
    title: "Conteúdo Personalizado",
    description: "Programa adaptado às necessidades específicas da sua equipe e operação.",
  },
  {
    icon: Target,
    title: "Resultados Imediatos",
    description: "Aplicação prática imediata do conhecimento adquirido no dia a dia da operação.",
  },
];

const includedItems = [
  "Diagnóstico prévio das necessidades da empresa",
  "Material didático personalizado",
  "Exercícios práticos com equipamentos reais",
  "Certificado de conclusão para todos os participantes",
  "Relatório de recomendações pós-treinamento",
  "Suporte técnico por 30 dias após o treinamento",
];

const steps = [
  { number: "01", title: "Contato Inicial", description: "Você entra em contato e nos conta sobre sua operação e necessidades." },
  { number: "02", title: "Diagnóstico", description: "Nossos especialistas avaliam seus equipamentos e desafios." },
  { number: "03", title: "Proposta", description: "Desenvolvemos um programa personalizado para sua equipe." },
  { number: "04", title: "Treinamento", description: "Realizamos o treinamento nas suas instalações com nossos instrutores." },
];

export function TrainingInCompany() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-16 md:pt-20">
        <section className="py-16 md:py-24 bg-gradient-to-br from-[#041F3F] to-[#0a3566]">
          <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
            <Badge className="bg-primary/20 text-primary border-primary/30 mb-4">
              Treinamentos In-Company
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6" data-testid="incompany-title">
              Treinamento na Sua Empresa
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto">
              Levamos nossos especialistas até sua empresa para uma capacitação totalmente personalizada, focada nos seus equipamentos e desafios reais.
            </p>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-16">
              {advantages.map((advantage, index) => (
                <Card
                  key={index}
                  className="p-6 md:p-8 text-center border border-card-border"
                  data-testid={`incompany-advantage-${index}`}
                >
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <advantage.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-[#041F3F] mb-2">{advantage.title}</h3>
                  <p className="text-sm text-muted-foreground">{advantage.description}</p>
                </Card>
              ))}
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div>
                <h2 className="text-3xl font-bold text-[#041F3F] mb-4" data-testid="incompany-included-title">
                  O Que Está Incluso
                </h2>
                <p className="text-muted-foreground mb-6">
                  Cada treinamento In-Company é desenvolvido sob medida. Confira o que está incluso em todos os programas:
                </p>
                <div className="space-y-4">
                  {includedItems.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 p-4 bg-card rounded-lg border border-card-border hover-elevate"
                      data-testid={`incompany-item-${index}`}
                    >
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-[#041F3F] font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-[#041F3F] mb-4">
                  Como Funciona
                </h2>
                <p className="text-muted-foreground mb-6">
                  Um processo simples e eficiente para garantir o melhor resultado para sua equipe.
                </p>
                <div className="space-y-6">
                  {steps.map((step, index) => (
                    <div key={index} className="flex items-start gap-4" data-testid={`incompany-step-${index}`}>
                      <div className="w-12 h-12 rounded-lg bg-[#041F3F] flex items-center justify-center flex-shrink-0">
                        <span className="text-primary font-bold text-sm">{step.number}</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-[#041F3F]">{step.title}</h4>
                        <p className="text-sm text-muted-foreground">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4 mt-12">
              <div className="flex items-center gap-3 p-4 bg-muted/50 rounded-lg justify-center">
                <Clock className="w-5 h-5 text-primary flex-shrink-0" />
                <div>
                  <p className="text-xs text-muted-foreground">Duração</p>
                  <p className="text-sm font-semibold text-[#041F3F]">1 a 3 dias</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 bg-muted/50 rounded-lg justify-center">
                <Users className="w-5 h-5 text-primary flex-shrink-0" />
                <div>
                  <p className="text-xs text-muted-foreground">Participantes</p>
                  <p className="text-sm font-semibold text-[#041F3F]">5 a 30 pessoas</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 bg-muted/50 rounded-lg justify-center">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0" />
                <div>
                  <p className="text-xs text-muted-foreground">Local</p>
                  <p className="text-sm font-semibold text-[#041F3F]">Sua empresa</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20 bg-[#041F3F]">
          <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Solicite uma Proposta Personalizada
            </h2>
            <p className="text-white/80 mb-8 max-w-2xl mx-auto">
              Fale com nossa equipe e receba uma proposta sob medida para as necessidades da sua empresa.
            </p>
            <a
              href="/#contato"
              onClick={(e) => {
                e.preventDefault();
                window.location.href = "/#contato";
              }}
            >
              <Button
                size="lg"
                className="bg-primary text-primary-foreground font-semibold px-8"
                data-testid="button-incompany-cta"
              >
                Fale Conosco
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
