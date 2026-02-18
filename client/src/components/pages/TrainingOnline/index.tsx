import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Monitor, Clock, Users, CheckCircle, ArrowRight, Wifi, Video, MessageSquare } from "lucide-react";
import { Link } from "wouter";

const benefits = [
  {
    icon: Video,
    title: "Aulas ao Vivo",
    description: "Interação em tempo real com nossos instrutores especializados.",
  },
  {
    icon: Wifi,
    title: "De Qualquer Lugar",
    description: "Participe de qualquer lugar do Brasil com acesso à internet.",
  },
  {
    icon: MessageSquare,
    title: "Suporte Contínuo",
    description: "Tire dúvidas durante e após o treinamento com nossos especialistas.",
  },
];

const topics = [
  "Fundamentos de sistemas de ar comprimido",
  "Seleção e dimensionamento de compressores",
  "Eficiência energética e redução de custos",
  "Qualidade do ar comprimido (ISO 8573)",
  "Manutenção preventiva e preditiva",
  "Segurança e normas regulamentadoras (NR-13)",
];

export function TrainingOnline() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-16 md:pt-20">
        <section className="py-16 md:py-24 bg-gradient-to-br from-[#041F3F] to-[#0a3566]">
          <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
            <Badge className="bg-primary/20 text-primary border-primary/30 mb-4">
              Treinamentos Online
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6" data-testid="online-title">
              Aprenda de Onde Estiver
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto">
              Aulas ao vivo com nossos instrutores, oferecendo flexibilidade para participar de qualquer lugar do Brasil com a mesma qualidade.
            </p>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-16">
              {benefits.map((benefit, index) => (
                <Card
                  key={index}
                  className="p-6 md:p-8 text-center border border-card-border"
                  data-testid={`online-benefit-${index}`}
                >
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-[#041F3F] mb-2">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </Card>
              ))}
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div>
                <Badge className="bg-primary/10 text-primary border-primary/20 mb-4">
                  Em Desenvolvimento
                </Badge>
                <h2 className="text-3xl font-bold text-[#041F3F] mb-4" data-testid="online-courses-title">
                  Cursos Online
                </h2>
                <p className="text-muted-foreground mb-6">
                  Estamos desenvolvendo uma grade completa de cursos online para levar nossa expertise em ar comprimido a profissionais de todo o Brasil. Os cursos serão ministrados ao vivo, com material de apoio e certificado de conclusão.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                    <Clock className="w-5 h-5 text-primary flex-shrink-0" />
                    <div>
                      <p className="text-xs text-muted-foreground">Duração</p>
                      <p className="text-sm font-semibold text-[#041F3F]">4 a 8 horas</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                    <Users className="w-5 h-5 text-primary flex-shrink-0" />
                    <div>
                      <p className="text-xs text-muted-foreground">Turma</p>
                      <p className="text-sm font-semibold text-[#041F3F]">Até 30 pessoas</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-bold text-[#041F3F] mb-2">Temas Abordados</h3>
                {topics.map((topic, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-4 bg-card rounded-lg border border-card-border hover-elevate"
                    data-testid={`online-topic-${index}`}
                  >
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-[#041F3F] font-medium">{topic}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20 bg-muted/30">
          <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
            <Monitor className="w-12 h-12 text-primary mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-[#041F3F] mb-4">
              Quer ser avisado sobre novas turmas?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Entre em contato e cadastre-se para receber informações sobre as próximas turmas de treinamentos online.
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
                data-testid="button-online-cta"
              >
                Cadastrar Interesse
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
