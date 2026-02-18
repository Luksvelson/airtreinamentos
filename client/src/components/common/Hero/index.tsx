import { Badge } from "@/components/ui/badge";
import { Users, Award, Calendar } from "lucide-react";
import heroBackground from "@assets/generated_images/industrial_air_compressor_machine.png";

const trustIndicators = [
  { icon: Calendar, value: "+20", label: "Anos de experiência" },
  { icon: Users, value: "+500", label: "Profissionais capacitados" },
  { icon: Award, value: "100%", label: "Satisfação garantida" },
];

export function Hero() {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />
      
      <div className="absolute inset-0 bg-gradient-to-r from-[#041F3F]/95 via-[#041F3F]/85 to-[#041F3F]/75" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 py-24 md:py-32">
        <div className="text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight" data-testid="hero-title">
              Capacitação Técnica em
              <span className="block text-primary">Ar Comprimido</span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed" data-testid="hero-subtitle">
              Treinamentos de alto impacto para gestores industriais, engenheiros e equipes técnicas que buscam excelência em sistemas de ar comprimido.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 pt-12 max-w-3xl mx-auto">
            {trustIndicators.map((indicator, index) => (
              <div
                key={index}
                className="flex flex-col items-center gap-2 p-4 rounded-lg bg-white/10 backdrop-blur-sm"
                data-testid={`trust-indicator-${index}`}
              >
                <indicator.icon className="w-6 h-6 text-primary" />
                <span className="text-2xl md:text-3xl font-bold text-white">{indicator.value}</span>
                <span className="text-sm text-white/70">{indicator.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
