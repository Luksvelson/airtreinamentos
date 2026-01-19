import { Card } from "@/components/ui/card";
import { Lightbulb, Wrench, Award, TrendingUp, Shield, BookOpen } from "lucide-react";

const features = [
  {
    icon: Lightbulb,
    title: "Eficiência Energética",
    description: "Ensinamos a identificar ineficiências e reduzir a conta de energia elétrica do sistema em até 30% através de ajustes operacionais e correção de vazamentos.",
  },
  {
    icon: Wrench,
    title: "Confiabilidade Operacional",
    description: "Ar de má qualidade destrói válvulas e paralisia a produção. Capacite sua equipe para garantir a pureza do ar (ISO 8573), protegendo o maquinário pneumático e evitando paradas não planejadas.",
  },
  {
    icon: Shield,
    title: "Segurança e NR-13",
    description: "Sistemas pressurizados exigem rigor técnico. Nossos treinamentos cobrem as normas regulamentadoras (NR-13) e as melhores práticas para garantir a integridade física dos colaboradores e evitar multas pesadas.",
  },
  {
    icon: TrendingUp,
    title: "Manutenção de Alta Performance",
    description: "Ensinamos técnicos a realizar diagnósticos precisos de falhas em compressores e secadores, aumentando a disponibilidade dos equipamentos e reduzindo custos de reparo.",
  },
  {
    icon: BookOpen,
    title: "Compras Técnicas Inteligentes",
    description: "Negocie valor, não apenas preço. Compradores aprenderão a calcular o TCO (Total Cost of Ownership). Saiba escolher equipamentos que se economizam ao longo do tempo, em vez de focar apenas no menor preço de etiqueta.",
  },
  {
    icon: Award,
    title: "Sustentabilidade e ESG",
    description: "Um sistema vazando ou mal dimensionado desperdiça recursos naturais. Otimizar o ar comprimido é uma das formas mais rápidas e eficazes de atingir as metas de sustentabilidade da sua empresa.",
  },
];

export function Features() {
  return (
    <section className="py-16 md:py-24 bg-[#041F3F]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#F8F9FA] mb-4" data-testid="features-title">
            Por que investir em conhecimento sobre Ar Comprimido?
          </h2>
          <p className="text-muted max-w-1xl text-[#F8F9FA] mx-auto">
            O ar comprimido é a utilidade mais cara da indústria. Uma gestão inadequada pode levar a desperdícios significativos e riscos operacionais. Nossos treinamentos capacitam sua equipe para otimizar o uso do ar comprimido, resultando em economia, eficiência e segurança.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="p-6 md:p-8 border border-card-border bg-white hover-elevate transition-all duration-200"
              data-testid={`feature-card-${index}`}
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-[#041F3F] mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
