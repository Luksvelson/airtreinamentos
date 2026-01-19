import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { SiLinkedin } from "react-icons/si";

const instructors = [
  {
    name: "A definir",
    role: "Especialista em Ar Comprimido",
    specialty: "Eficiência Energética",
    initials: "AD",
    placeholder: true,
  },
  {
    name: "A definir",
    role: "Engenheiro de Aplicações",
    specialty: "Sistemas Industriais",
    initials: "AD",
    placeholder: true,
  },
  {
    name: "A definir",
    role: "Consultor Técnico",
    specialty: "Manutenção Industrial",
    initials: "AD",
    placeholder: true,
  },
];

export function Instructors() {
  return (
    <section id="instrutores" className="py-16 md:py-24 bg-[#F8F9FA]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <Badge className="bg-[#041F3F]/10 text-[#041F3F] border-[#041F3F]/20 mb-4">
            Equipe Especializada
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-[#041F3F] mb-4" data-testid="instructors-title">
            Nossos Instrutores
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Profissionais com vasta experiência de mercado, prontos para compartilhar conhecimentos práticos e estratégicos.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {instructors.map((instructor, index) => (
            <Card
              key={index}
              className="p-6 text-center border border-card-border bg-white hover-elevate transition-all duration-200"
              data-testid={`instructor-card-${index}`}
            >
              <Avatar className="w-24 h-24 mx-auto mb-4 bg-[#041F3F]">
                <AvatarFallback className="text-2xl font-bold text-primary bg-[#041F3F]">
                  {instructor.initials}
                </AvatarFallback>
              </Avatar>

              {instructor.placeholder && (
                <Badge variant="secondary" className="mb-3">
                  Em breve
                </Badge>
              )}

              <h3 className="text-lg font-bold text-[#041F3F] mb-1">{instructor.name}</h3>
              <p className="text-primary font-medium text-sm mb-2">{instructor.role}</p>
              <p className="text-muted-foreground text-sm mb-4">{instructor.specialty}</p>

              {!instructor.placeholder && (
                <a
                  href="#"
                  className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-[#041F3F]/5 transition-colors hover-elevate"
                  aria-label="LinkedIn"
                >
                  <SiLinkedin className="w-5 h-5 text-[#041F3F]" />
                </a>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
