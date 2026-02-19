import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, Users, MapPin, CheckCircle, ArrowRight } from "lucide-react";
import { Link } from "wouter";

const courses = [
  {
    id: 1,
    title: "Imersão Estratégica",
    subtitle: "Ar Comprimido",
    badge: "Novo",
    description: "Um programa intensivo de dois dias projetado para transformar a forma como sua empresa gerencia sistemas de ar comprimido, focando em eficiência, economia e melhores práticas.",
    details: [
      { icon: Clock, label: "Duração", value: "2 dias (16h)" },
      { icon: Users, label: "Turma", value: "Até 20 pessoas" },
      { icon: MapPin, label: "Local", value: "Rio de Janeiro, RJ" },
    ],
    features: [
      "Diagnóstico e dimensionamento de sistemas",
      "Eficiência energética e redução de custos",
      "Manutenção preventiva e corretiva",
      "Gestão de qualidade do ar comprimido",
      "Análise de casos reais da indústria",
    ],
  },
  {
    id: 2,
    title: "Eficiência Energética",
    subtitle: "em Sistemas de Ar",
    badge: "Em breve",
    description: "Curso focado em otimização energética de sistemas de ar comprimido, identificação de vazamentos, recuperação de calor e estratégias para redução significativa de custos operacionais.",
    details: [
      { icon: Clock, label: "Duração", value: "1 dia (8h)" },
      { icon: Users, label: "Turma", value: "Até 20 pessoas" },
      { icon: MapPin, label: "Local", value: "Rio de Janeiro, RJ" },
    ],
    features: [
      "Auditoria energética de sistemas",
      "Detecção e quantificação de vazamentos",
      "Recuperação de calor do compressor",
      "Dimensionamento correto de tubulações",
      "Análise de demanda e otimização",
    ],
  },
];

export function TrainingPresencial() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-16 md:pt-20">
        <section className="py-16 md:py-24 bg-gradient-to-br from-[#041F3F] to-[#0a3566]">
          <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
            <Badge className="bg-primary/20 text-primary border-primary/30 mb-4">
              Treinamentos Presenciais
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6" data-testid="presencial-title">
              Aprenda na Prática
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto">
              Treinamentos intensivos em nossa sede no Rio de Janeiro, com aulas práticas em laboratório equipado com compressores reais.
            </p>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="space-y-16">
              {courses.map((course) => (
                <div key={course.id} className="grid lg:grid-cols-2 gap-8 items-start">
                  <Card className="overflow-hidden border-none shadow-lg" data-testid={`card-presencial-${course.id}`}>
                    <div className="relative h-48 md:h-64 bg-gradient-to-br from-[#041F3F] to-[#0a3566] flex items-center justify-center">
                      <div className="text-center p-6">
                        <Badge className="bg-primary text-primary-foreground mb-3">
                          {course.badge}
                        </Badge>
                        <h3 className="text-2xl md:text-3xl font-bold text-white">
                          {course.title}
                        </h3>
                        <p className="text-primary text-lg font-medium mt-2">
                          {course.subtitle}
                        </p>
                      </div>
                    </div>

                    <div className="p-6 space-y-6">
                      <div className="grid grid-cols-3 gap-4">
                        {course.details.map((detail, index) => (
                          <div key={index} className="text-center p-3 bg-muted rounded-lg">
                            <detail.icon className="w-5 h-5 mx-auto text-primary mb-2" />
                            <p className="text-xs text-muted-foreground">{detail.label}</p>
                            <p className="text-sm font-semibold text-[#041F3F]">{detail.value}</p>
                          </div>
                        ))}
                      </div>

                      <p className="text-muted-foreground">{course.description}</p>

                      <a
                        href="/#contato"
                        onClick={(e) => {
                          e.preventDefault();
                          window.location.href = "/#contato";
                        }}
                      >
                      </a>
                    </div>
                  </Card>

                  <div className="space-y-6">
                    <h3 className="text-xl font-bold text-[#041F3F]">O que você vai aprender</h3>
                    <div className="space-y-4">
                      {course.features.map((feature, index) => (
                        <div
                          key={index}
                          className="flex items-start gap-3 p-4 bg-card rounded-lg border border-card-border hover-elevate"
                          data-testid={`feature-presencial-${course.id}-${index}`}
                        >
                          <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-[#041F3F] font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20 bg-[#041F3F]">
          <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Quer levar o treinamento até sua empresa?
            </h2>
            <p className="text-white/80 mb-8 max-w-2xl mx-auto">
              Conheça nossos treinamentos In-Company, adaptados para as necessidades da sua equipe.
            </p>
            <Link href="/treinamentos/in-company">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground font-semibold px-8"
                data-testid="button-presencial-cta"
              >
                Treinamentos In-Company
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
