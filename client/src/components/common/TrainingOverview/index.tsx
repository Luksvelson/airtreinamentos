import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Users, MapPin, CheckCircle, ArrowRight } from "lucide-react";

const courseFeatures = [
  "Diagnóstico e dimensionamento de sistemas",
  "Eficiência energética e redução de custos",
  "Manutenção preventiva e corretiva",
  "Gestão de qualidade do ar comprimido",
  "Análise de casos reais da indústria",
  "Certificado de participação",
];

const courseDetails = [
  { icon: Clock, label: "Duração", value: "2 dias (16h)" },
  { icon: Users, label: "Formato", value: "Presencial" },
  { icon: MapPin, label: "Local", value: "São Paulo, SP" },
];

export function TrainingOverview() {
  return (
    <section id="treinamentos" className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <Badge className="bg-primary/10 text-primary border-primary/20 mb-4">
            Treinamento Disponível
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-[#041F3F] mb-4" data-testid="training-title">
            Nossos Treinamentos
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Programas desenvolvidos por especialistas com décadas de experiência em sistemas de ar comprimido industrial.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          <Card className="overflow-hidden border-none shadow-lg" data-testid="card-training-immersion">
            <div className="relative h-48 md:h-64 bg-gradient-to-br from-[#041F3F] to-[#0a3566] flex items-center justify-center">
              <div className="text-center p-6">
                <Badge className="bg-primary text-primary-foreground mb-3">
                  Mais Procurado
                </Badge>
                <h3 className="text-2xl md:text-3xl font-bold text-white">
                  Imersão Estratégica
                </h3>
                <p className="text-primary text-lg font-medium mt-2">
                  Ar Comprimido
                </p>
              </div>
            </div>

            <div className="p-6 space-y-6">
              <div className="grid grid-cols-3 gap-4">
                {courseDetails.map((detail, index) => (
                  <div key={index} className="text-center p-3 bg-muted rounded-lg">
                    <detail.icon className="w-5 h-5 mx-auto text-primary mb-2" />
                    <p className="text-xs text-muted-foreground">{detail.label}</p>
                    <p className="text-sm font-semibold text-[#041F3F]">{detail.value}</p>
                  </div>
                ))}
              </div>

              <p className="text-muted-foreground">
                Um programa intensivo de dois dias projetado para transformar a forma como sua empresa gerencia sistemas de ar comprimido, focando em eficiência, economia e melhores práticas.
              </p>

              <Button
                className="w-full bg-primary text-primary-foreground font-semibold"
                data-testid="button-ver-ementa"
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
              {courseFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-4 bg-card rounded-lg border border-card-border hover-elevate"
                  data-testid={`feature-${index}`}
                >
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-[#041F3F] font-medium">{feature}</span>
                </div>
              ))}
            </div>

            <Card className="p-6 bg-[#041F3F] text-white border-none">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <p className="font-semibold">Turmas Reduzidas</p>
                  <p className="text-white/70 text-sm">
                    Máximo de 15 participantes para garantir atenção individualizada
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
