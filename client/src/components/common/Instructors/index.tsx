import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SiLinkedin } from "react-icons/si";

import instructorLuciano from "@assets/Instrutor_Luciano_Maffeis_1768799441421.jpeg";
import instructorOscar from "@assets/Instrutor_Oscar_Redivo_1768799441421.jpeg";
import instructorRoberto from "@assets/Instrutor_Roberto_Mendes_Invertida.jpeg";
import instructorVandeir from "@assets/Instrutor_Vandeir_Mendes_Invertida_1768799441422.jpeg";

const instructors = [
  {
    id: 1,
    name: "Luciano Maffeis",
    role: "Diretor Técnico",
    image: instructorLuciano,
    bio: "Mais de 25 anos de experiência em sistemas de ar comprimido. Especialista em eficiência energética e dimensionamento de instalações industriais.",
    linkedin: "#",
  },
  {
    id: 2,
    name: "Oscar Redivo",
    role: "Instrutor Sênior",
    image: instructorOscar,
    bio: "Engenheiro com 20 anos de atuação no setor industrial. Especialista em manutenção preventiva e corretiva de compressores.",
    linkedin: "#",
  },
  {
    id: 3,
    name: "Roberto Mendes",
    role: "Instrutor Técnico",
    image: instructorRoberto,
    bio: "Técnico especializado com vasta experiência em campo. Expert em diagnóstico de falhas e otimização de sistemas.",
    linkedin: "#",
  },
  {
    id: 4,
    name: "Vandeir Mendes",
    role: "Instrutor Técnico",
    image: instructorVandeir,
    bio: "Profissional com ampla experiência em treinamentos corporativos. Especialista em qualidade do ar comprimido e tratamento de ar.",
    linkedin: "#",
  },
];

export function Instructors() {
  return (
    <section id="professores" className="py-16 md:py-24 bg-[#041F3F]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <Badge className="bg-primary/20 text-primary border-primary/30 mb-4">
            Time de Especialistas
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4" data-testid="instructors-title">
            Nossos Professores
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Profissionais com décadas de experiência prática, prontos para compartilhar conhecimento e transformar sua equipe.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {instructors.map((instructor) => (
            <Card
              key={instructor.id}
              className="overflow-visible border-none shadow-lg bg-white/10"
              data-testid={`instructor-card-${instructor.id}`}
            >
              <div className="aspect-square overflow-hidden bg-white/5 rounded-t-xl">
                <img
                  src={instructor.image}
                  alt={instructor.name}
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="p-5 space-y-3 bg-[#ffffff]">
                <div>
                  <h3 className="font-bold text-white">{instructor.name}</h3>
                  <p className="text-sm text-primary font-medium">{instructor.role}</p>
                </div>
                <p className="text-sm text-white/70 line-clamp-3">
                  {instructor.bio}
                </p>
                <a
                  href={instructor.linkedin}
                  className="inline-flex items-center gap-2 text-sm text-white font-medium"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid={`linkedin-${instructor.id}`}
                >
                  <SiLinkedin className="w-4 h-4" />
                  LinkedIn
                </a>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
