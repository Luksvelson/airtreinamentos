import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { SiLinkedin } from "react-icons/si";
import { Award, BookOpen, Briefcase, GraduationCap } from "lucide-react";

import instructorLuciano from "@assets/Instrutor_Luciano_Maffeis_1768799441421.jpeg";
import instructorOscar from "@assets/Instrutor_Oscar_Redivo_1768799441421.jpeg";
import instructorRoberto from "@assets/Instrutor_Roberto_Mendes_Invertida.jpeg";
import instructorVandeir from "@assets/Instrutor_Vandeir_Mendes_Invertida_1768799441422.jpeg";

interface Instructor {
  id: number;
  name: string;
  role: string;
  image: string;
  bio: string;
  linkedin: string;
  fullBio: string;
  specialties: string[];
  experience: string;
  education: string;
  certifications: string[];
}

const instructors: Instructor[] = [
  {
    id: 1,
    name: "Luciano Maffeis",
    role: "Diretor Técnico",
    image: instructorLuciano,
    bio: "Mais de 25 anos de experiência em sistemas de ar comprimido. Especialista em eficiência energética e dimensionamento de instalações industriais.",
    linkedin: "#",
    fullBio: "Luciano Maffeis é referência nacional em sistemas de ar comprimido, com mais de 25 anos de experiência no setor industrial. Como Diretor Técnico do Grupo AirPress, lidera a equipe de treinamentos e é responsável pelo desenvolvimento de todos os programas de capacitação técnica. Sua expertise abrange desde o dimensionamento de instalações completas até a otimização energética de sistemas existentes, tendo atuado em projetos para grandes indústrias em todo o Brasil.",
    specialties: ["Eficiência Energética", "Dimensionamento de Instalações", "Compressores de Parafuso", "Gestão de Ar Comprimido"],
    experience: "Mais de 25 anos no setor de ar comprimido industrial",
    education: "Engenharia Mecânica com especialização em Sistemas Pneumáticos",
    certifications: ["Auditor de Eficiência Energética em Sistemas de Ar Comprimido", "NR-13 - Inspeção de Vasos de Pressão"],
  },
  {
    id: 2,
    name: "Oscar Redivo",
    role: "Instrutor Sênior",
    image: instructorOscar,
    bio: "Engenheiro com 20 anos de atuação no setor industrial. Especialista em manutenção preventiva e corretiva de compressores.",
    linkedin: "#",
    fullBio: "Oscar Redivo é engenheiro com duas décadas de atuação prática no setor industrial. Como Instrutor Sênior, traz para a sala de aula a vivência real do chão de fábrica, combinando teoria sólida com exemplos práticos do dia a dia. É reconhecido pela didática clara e pela capacidade de traduzir conceitos complexos em linguagem acessível, tornando os treinamentos produtivos para profissionais de todos os níveis.",
    specialties: ["Manutenção Preventiva", "Manutenção Corretiva", "Diagnóstico de Falhas", "Compressores de Pistão"],
    experience: "20 anos de atuação no setor industrial",
    education: "Engenharia Mecânica com MBA em Gestão Industrial",
    certifications: ["Técnico Certificado em Manutenção de Compressores", "Instrutor NR-13"],
  },
  {
    id: 3,
    name: "Roberto Mendes",
    role: "Instrutor Técnico",
    image: instructorRoberto,
    bio: "Técnico especializado com vasta experiência em campo. Expert em diagnóstico de falhas e otimização de sistemas.",
    linkedin: "#",
    fullBio: "Roberto Mendes possui vasta experiência prática em campo, atuando diretamente no diagnóstico e reparo de sistemas de ar comprimido em ambientes industriais. Seu conhecimento hands-on permite oferecer treinamentos extremamente práticos, focados em resolução de problemas reais. É especialista em identificação de falhas complexas e otimização de desempenho de compressores de diversos fabricantes e modelos.",
    specialties: ["Diagnóstico de Falhas", "Otimização de Sistemas", "Reparo de Unidades Compressoras", "Tratamento de Ar"],
    experience: "Mais de 15 anos de experiência prática em campo",
    education: "Técnico em Mecânica Industrial com especializações em Sistemas Pneumáticos",
    certifications: ["Especialista em Diagnóstico de Compressores", "Certificação em Tratamento de Ar Comprimido"],
  },
  {
    id: 4,
    name: "Vandeir Mendes",
    role: "Instrutor Técnico",
    image: instructorVandeir,
    bio: "Profissional com ampla experiência em treinamentos corporativos. Especialista em qualidade do ar comprimido e tratamento de ar.",
    linkedin: "#",
    fullBio: "Vandeir Mendes é especialista em qualidade do ar comprimido e sistemas de tratamento, com ampla experiência em treinamentos corporativos para empresas de diversos segmentos. Sua abordagem de ensino prioriza a aplicação prática imediata, preparando equipes para operar e manter sistemas com máxima eficiência e segurança. É reconhecido pela capacidade de adaptar o conteúdo às necessidades específicas de cada equipe.",
    specialties: ["Qualidade do Ar Comprimido", "Tratamento de Ar", "Refrigeração Industrial", "Treinamentos In Company"],
    experience: "Mais de 18 anos em treinamentos corporativos",
    education: "Engenharia de Produção com especialização em Qualidade Industrial",
    certifications: ["Certificação em Qualidade do Ar Comprimido ISO 8573", "Instrutor Corporativo Certificado"],
  },
];

export function Instructors() {
  const [selectedInstructor, setSelectedInstructor] = useState<Instructor | null>(null);

  return (
    <section id="professores" className="py-16 md:py-24 bg-[#041F3F]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
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
              className="overflow-visible border-none shadow-lg bg-white/10 cursor-pointer hover-elevate transition-all duration-200"
              data-testid={`instructor-card-${instructor.id}`}
              onClick={() => setSelectedInstructor(instructor)}
            >
              <div className="aspect-square overflow-hidden bg-white/5 rounded-t-md">
                <img
                  src={instructor.image}
                  alt={instructor.name}
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="p-5 space-y-3 bg-[#ffffff] rounded-b-md">
                <div>
                  <h3 className="font-bold text-[#001f3d]">{instructor.name}</h3>
                  <p className="text-sm text-primary font-medium">{instructor.role}</p>
                </div>
                <p className="text-sm line-clamp-3 text-[#001f3d]">
                  {instructor.bio}
                </p>
                <Button
                  variant="ghost"
                  size="sm"
                  className="p-0 h-auto text-sm font-medium text-primary"
                  data-testid={`button-ver-perfil-${instructor.id}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedInstructor(instructor);
                  }}
                >
                  Ver Perfil Completo
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>

      <Dialog open={!!selectedInstructor} onOpenChange={(open) => !open && setSelectedInstructor(null)}>
        {selectedInstructor && (
          <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto" data-testid="instructor-modal">
            <DialogHeader>
              <DialogTitle className="sr-only">{selectedInstructor.name}</DialogTitle>
              <DialogDescription className="sr-only">Perfil completo do instrutor {selectedInstructor.name}</DialogDescription>
            </DialogHeader>

            <div className="flex flex-col sm:flex-row gap-6 items-start">
              <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-md overflow-hidden flex-shrink-0 mx-auto sm:mx-0">
                <img
                  src={selectedInstructor.image}
                  alt={selectedInstructor.name}
                  className="w-full h-full object-cover object-top"
                  data-testid="modal-instructor-image"
                />
              </div>
              <div className="flex-1 text-center sm:text-left">
                <h2 className="text-2xl font-bold text-[#041F3F] dark:text-white" data-testid="modal-instructor-name">
                  {selectedInstructor.name}
                </h2>
                <Badge className="bg-primary/20 text-primary border-primary/30 mt-1.5">
                  {selectedInstructor.role}
                </Badge>
                <a
                  href={selectedInstructor.linkedin}
                  className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground mt-3 ml-2"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid="modal-linkedin"
                  onClick={(e) => e.stopPropagation()}
                >
                  <SiLinkedin className="w-4 h-4" />
                  LinkedIn
                </a>
              </div>
            </div>

            <div className="space-y-5 mt-2">
              <div>
                <h3 className="font-semibold text-[#041F3F] dark:text-white flex items-center gap-2 mb-2">
                  <BookOpen className="w-4 h-4 text-primary" />
                  Sobre
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed" data-testid="modal-instructor-bio">
                  {selectedInstructor.fullBio}
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-[#041F3F] dark:text-white flex items-center gap-2 mb-2">
                  <Briefcase className="w-4 h-4 text-primary" />
                  Experiência
                </h3>
                <p className="text-sm text-muted-foreground" data-testid="modal-instructor-experience">
                  {selectedInstructor.experience}
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-[#041F3F] dark:text-white flex items-center gap-2 mb-2">
                  <GraduationCap className="w-4 h-4 text-primary" />
                  Formação
                </h3>
                <p className="text-sm text-muted-foreground" data-testid="modal-instructor-education">
                  {selectedInstructor.education}
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-[#041F3F] dark:text-white flex items-center gap-2 mb-2">
                  <Award className="w-4 h-4 text-primary" />
                  Especialidades
                </h3>
                <div className="flex flex-wrap gap-2" data-testid="modal-instructor-specialties">
                  {selectedInstructor.specialties.map((specialty) => (
                    <Badge key={specialty} variant="outline" className="text-xs">
                      {specialty}
                    </Badge>
                  ))}
                </div>
              </div>

              {selectedInstructor.certifications.length > 0 && (
                <div>
                  <h3 className="font-semibold text-[#041F3F] dark:text-white flex items-center gap-2 mb-2">
                    <Award className="w-4 h-4 text-primary" />
                    Certificações
                  </h3>
                  <ul className="space-y-1.5" data-testid="modal-instructor-certifications">
                    {selectedInstructor.certifications.map((cert) => (
                      <li key={cert} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0 mt-1.5" />
                        {cert}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <div className="mt-2">
              <a
                href="/#contato"
                onClick={(e) => {
                  e.preventDefault();
                  setSelectedInstructor(null);
                  setTimeout(() => {
                    const contactSection = document.getElementById("contato");
                    if (contactSection) {
                      contactSection.scrollIntoView({ behavior: "smooth" });
                    }
                  }, 300);
                }}
              >
                <Button
                  className="w-full bg-[#041F3F] text-white"
                  data-testid="modal-button-contato"
                >
                  Agende um Treinamento
                </Button>
              </a>
            </div>
          </DialogContent>
        )}
      </Dialog>
    </section>
  );
}
