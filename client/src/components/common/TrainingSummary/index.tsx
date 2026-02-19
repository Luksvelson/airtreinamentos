import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Monitor, MapPin, Building } from "lucide-react";
import { Link } from "wouter";

const trainingTypes = [
  {
    icon: MapPin,
    title: "Presenciais",
    description: "Treinamentos intensivos em nossa sede no Rio de Janeiro, com aulas práticas em laboratório equipado com compressores reais.",
    href: "/treinamentos/presenciais",
    badge: "Mais Popular",
  },
  {
    icon: Monitor,
    title: "Online",
    description: "Aulas ao vivo com nossos instrutores, oferecendo flexibilidade para participar de qualquer lugar do Brasil com a mesma qualidade.",
    href: "/treinamentos/online",
    badge: "Novo",
  },
  {
    icon: Building,
    title: "In-Company",
    description: "Treinamentos personalizados nas instalações da sua empresa, adaptados às necessidades específicas da sua equipe e equipamentos.",
    href: "/treinamentos/in-company",
    badge: "Personalizado",
  },
];

export function TrainingSummary() {
  return (
    <section id="treinamentos" className="py-16 md:py-24 bg-[#041F3F]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4" data-testid="training-summary-title">
            Nossos Treinamentos
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Programas desenvolvidos por especialistas com décadas de experiência em sistemas de ar comprimido industrial.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {trainingTypes.map((type, index) => (
            <Card
              key={index}
              className="p-6 md:p-8 bg-white/10 border border-white/15 hover-elevate transition-all duration-200 flex flex-col"
              data-testid={`training-type-card-${index}`}
            >
              <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
                <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
                  <type.icon className="w-6 h-6 text-primary" />
                </div>
                <Badge className="bg-white/15 text-white border-white/20 text-xs">
                  {type.badge}
                </Badge>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{type.title}</h3>
              <p className="text-white/70 text-sm leading-relaxed mb-6 flex-1">
                {type.description}
              </p>
              <Link href={type.href}>
                <Button
                  variant="outline"
                  className="w-full border-white/30 text-[#ffffff] bg-[#FEB23D]"
                  data-testid={`button-ver-${type.title.toLowerCase()}`}
                >
                  Saiba Mais
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
