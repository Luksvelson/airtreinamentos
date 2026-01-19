import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Users, MapPin, CheckCircle, ArrowRight, Gauge, Zap } from "lucide-react";

const courses = [
  {
    id: 1,
    title: "Imersão Estratégica",
    subtitle: "Ar Comprimido",
    badge: "Mais Procurado",
    description: "Um programa intensivo de dois dias projetado para transformar a forma como sua empresa gerencia sistemas de ar comprimido, focando em eficiência, economia e melhores práticas.",
    details: [
      { icon: Clock, label: "Duração", value: "2 dias (16h)" },
      { icon: Users, label: "Formato", value: "Presencial" },
      { icon: MapPin, label: "Local", value: "São Paulo, SP" },
    ],
    features: [
      "Diagnóstico e dimensionamento de sistemas",
      "Eficiência energética e redução de custos",
      "Manutenção preventiva e corretiva",
      "Gestão de qualidade do ar comprimido",
      "Análise de casos reais da indústria",
      "Certificado de participação",
    ],
  },
  {
    id: 2,
    title: "Eficiência Energética",
    subtitle: "em Sistemas de Ar",
    badge: "Novo",
    description: "Curso focado em otimização energética de sistemas de ar comprimido, identificação de vazamentos, recuperação de calor e estratégias para redução significativa de custos operacionais.",
    details: [
      { icon: Clock, label: "Duração", value: "1 dia (8h)" },
      { icon: Users, label: "Formato", value: "Presencial" },
      { icon: MapPin, label: "Local", value: "São Paulo, SP" },
    ],
    features: [
      "Auditoria energética de sistemas",
      "Detecção e quantificação de vazamentos",
      "Recuperação de calor do compressor",
      "Dimensionamento correto de tubulações",
      "Análise de demanda e otimização",
      "Certificado de participação",
    ],
  },
];

export function TrainingOverview() {
  return (
    <section id="treinamentos" className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <Badge className="bg-primary/10 text-primary border-primary/20 mb-4">
            Treinamentos Disponíveis
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-[#041F3F] mb-4" data-testid="training-title">
            Nossos Treinamentos
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Programas desenvolvidos por especialistas com décadas de experiência em sistemas de ar comprimido industrial.
          </p>
        </div>

        <div className="space-y-16">
          {courses.map((course, courseIndex) => (
            <div key={course.id} className="grid lg:grid-cols-2 gap-8 items-start">
              {courseIndex % 2 === 0 ? (
                <>
                  <Card className="overflow-hidden border-none shadow-lg" data-testid={`card-training-${course.id}`}>
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

                      <p className="text-muted-foreground">
                        {course.description}
                      </p>

                      <Button
                        className="w-full bg-primary text-primary-foreground font-semibold"
                        data-testid={`button-ver-ementa-${course.id}`}
                      >
                        Ver Ementa Completa
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  </Card>

                  <div className="space-y-6">
                    <h3 className="text-xl font-bold text-[#041F3F]">
                      O que você vai aprender
                    </h3>

                    <div className="space-y-4">
                      {course.features.map((feature, index) => (
                        <div
                          key={index}
                          className="flex items-start gap-3 p-4 bg-card rounded-lg border border-card-border hover-elevate"
                          data-testid={`feature-${course.id}-${index}`}
                        >
                          <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-[#041F3F] font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="space-y-6 order-2 lg:order-1">
                    <h3 className="text-xl font-bold text-[#041F3F]">
                      O que você vai aprender
                    </h3>

                    <div className="space-y-4">
                      {course.features.map((feature, index) => (
                        <div
                          key={index}
                          className="flex items-start gap-3 p-4 bg-card rounded-lg border border-card-border hover-elevate"
                          data-testid={`feature-${course.id}-${index}`}
                        >
                          <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-[#041F3F] font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Card className="overflow-hidden border-none shadow-lg order-1 lg:order-2" data-testid={`card-training-${course.id}`}>
                    <div className="relative h-48 md:h-64 bg-gradient-to-br from-[#0a3566] to-[#041F3F] flex items-center justify-center">
                      <div className="text-center p-6">
                        <Badge className="bg-green-500 text-white mb-3">
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

                      <p className="text-muted-foreground">
                        {course.description}
                      </p>

                      <Button
                        className="w-full bg-primary text-primary-foreground font-semibold"
                        data-testid={`button-ver-ementa-${course.id}`}
                      >
                        Ver Ementa Completa
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  </Card>
                </>
              )}
            </div>
          ))}
        </div>

        <Card className="p-6 bg-[#041F3F] text-white border-none mt-12">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
              <Users className="w-8 h-8 text-primary-foreground" />
            </div>
            <div className="text-center md:text-left flex-1">
              <p className="font-semibold text-lg">Turmas Reduzidas</p>
              <p className="text-white/70">
                Máximo de 15 participantes por turma para garantir atenção individualizada e melhor aproveitamento do conteúdo.
              </p>
            </div>
            <Button
              variant="outline"
              className="border-white/30 text-white"
              data-testid="button-agendar-turma"
            >
              Agendar Turma
            </Button>
          </div>
        </Card>
      </div>
    </section>
  );
}
