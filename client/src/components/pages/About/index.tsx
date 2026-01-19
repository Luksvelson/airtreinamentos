import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, Target, Users, Award, Zap, Heart, ChevronRight } from "lucide-react";
import { SiLinkedin } from "react-icons/si";
import { Link } from "wouter";

import logoAirCenter from "@assets/Logo_AirCenter_Nova_1768798137394.jpeg";
import logoAirPressMedical from "@assets/Logo_AirPress_Medical_Group_1768798137394.jpeg";
import logoLojaDoCompressor from "@assets/Logo_Loja_do_Compressor_1768798137395.jpeg";

import instructorLuciano from "@assets/Instrutor_Luciano_Maffeis_1768799441421.jpeg";
import instructorOscar from "@assets/Instrutor_Oscar_Redivo_1768799441421.jpeg";
import instructorRoberto from "@assets/Instrutor_Roberto_Mendes_Invertida_1768799441422.jpeg";
import instructorVandeir from "@assets/Instrutor_Vandeir_Mendes_Invertida_1768799441422.jpeg";

import galleryTrainingRoom from "@assets/generated_images/training_room_with_equipment.png";
import galleryCompressorLab from "@assets/generated_images/compressor_equipment_lab.png";
import galleryConferenceRoom from "@assets/generated_images/corporate_training_conference_room.png";

const groupCompanies = [
  { id: 1, name: "AirCenter Compressores", logo: logoAirCenter },
  { id: 2, name: "AirPress Medical Group", logo: logoAirPressMedical },
  { id: 3, name: "Loja do Compressor", logo: logoLojaDoCompressor },
];

const values = [
  {
    icon: Shield,
    title: "Segurança",
    description: "Priorizamos a segurança em todas as operações e treinamentos, garantindo que nossos alunos aprendam as melhores práticas do mercado.",
  },
  {
    icon: Target,
    title: "Excelência Técnica",
    description: "Buscamos a excelência em cada detalhe, oferecendo conteúdo atualizado e alinhado com as tecnologias mais avançadas.",
  },
  {
    icon: Zap,
    title: "Eficiência",
    description: "Focamos em metodologias práticas que geram resultados imediatos para empresas e profissionais.",
  },
  {
    icon: Heart,
    title: "Compromisso",
    description: "Mantemos um compromisso inabalável com o sucesso de nossos alunos e parceiros.",
  },
];

const instructors = [
  {
    id: 1,
    name: "Luciano Maffeis",
    role: "Diretor Técnico",
    image: instructorLuciano,
    bio: "Mais de 25 anos de experiência em sistemas de ar comprimido. Especialista em eficiência energética e dimensionamento de instalações industriais. Formado em Engenharia Mecânica com MBA em Gestão Industrial.",
    linkedin: "#",
  },
  {
    id: 2,
    name: "Oscar Redivo",
    role: "Instrutor Sênior",
    image: instructorOscar,
    bio: "Engenheiro com 20 anos de atuação no setor industrial. Especialista em manutenção preventiva e corretiva de compressores. Certificado por fabricantes internacionais.",
    linkedin: "#",
  },
  {
    id: 3,
    name: "Roberto Mendes",
    role: "Instrutor Técnico",
    image: instructorRoberto,
    bio: "Técnico especializado com vasta experiência em campo. Expert em diagnóstico de falhas e otimização de sistemas. Mais de 15 anos formando profissionais da indústria.",
    linkedin: "#",
  },
  {
    id: 4,
    name: "Vandeir Mendes",
    role: "Instrutor Técnico",
    image: instructorVandeir,
    bio: "Profissional com ampla experiência em treinamentos corporativos. Especialista em qualidade do ar comprimido e tratamento de ar. Palestrante em eventos do setor.",
    linkedin: "#",
  },
];

const galleryImages = [
  { id: 1, src: galleryTrainingRoom, alt: "Sala de Treinamento" },
  { id: 2, src: galleryCompressorLab, alt: "Laboratório de Compressores" },
  { id: 3, src: galleryConferenceRoom, alt: "Sala de Conferências" },
];

export function About() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-16 md:pt-20">
        <section className="py-16 md:py-24 bg-gradient-to-br from-[#041F3F] to-[#0a3566]">
          <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6" data-testid="about-title">
              Transformando o Mercado de <span className="text-primary">Ar Comprimido</span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto">
              Há mais de duas décadas capacitando profissionais e empresas com treinamentos de excelência em sistemas de ar comprimido.
            </p>
          </div>
        </section>

        <section className="py-16 md:py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-[#041F3F]" data-testid="history-title">
                  Grupo AirPress
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    A <strong className="text-[#041F3F]">AirTreinamentos</strong> nasceu da expertise acumulada pelo Grupo AirPress ao longo de mais de 20 anos de atuação no mercado brasileiro de ar comprimido e gases medicinais.
                  </p>
                  <p>
                    Identificamos a necessidade do mercado por capacitação técnica especializada e de alto nível. Assim, reunimos os melhores profissionais do setor para desenvolver programas de treinamento que realmente fazem diferença na operação das empresas.
                  </p>
                  <p>
                    Hoje, somos referência em treinamentos técnicos, tendo capacitado mais de 500 profissionais de diversas indústrias em todo o Brasil, sempre com foco em segurança, eficiência e resultados práticos.
                  </p>
                </div>
              </div>
              
              <div className="space-y-6">
                <p className="text-sm font-medium text-muted-foreground text-center">
                  Empresas do Grupo AirPress
                </p>
                <div className="grid grid-cols-1 gap-4">
                  {groupCompanies.map((company) => (
                    <div
                      key={company.id}
                      className="flex items-center justify-center p-6 bg-white rounded-lg"
                      data-testid={`about-logo-${company.id}`}
                    >
                      <img
                        src={company.logo}
                        alt={company.name}
                        className="h-12 md:h-14 w-auto object-contain"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#041F3F] mb-4" data-testid="values-title">
                Missão e Valores
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Nossa missão é capacitar profissionais e empresas para operar sistemas de ar comprimido com máxima eficiência e segurança.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <Card
                  key={index}
                  className="p-6 text-center border-none shadow-md"
                  data-testid={`value-card-${index}`}
                >
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-[#041F3F] mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#041F3F] mb-4" data-testid="instructors-title">
                Nossos Instrutores
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Profissionais com décadas de experiência prática, prontos para compartilhar conhecimento e transformar sua equipe.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {instructors.map((instructor) => (
                <Card
                  key={instructor.id}
                  className="overflow-hidden border-none shadow-lg"
                  data-testid={`instructor-card-${instructor.id}`}
                >
                  <div className="aspect-square overflow-hidden bg-[#041F3F]">
                    <img
                      src={instructor.image}
                      alt={instructor.name}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <div className="p-5 space-y-3">
                    <div>
                      <h3 className="font-bold text-[#041F3F]">{instructor.name}</h3>
                      <p className="text-sm text-primary font-medium">{instructor.role}</p>
                    </div>
                    <p className="text-sm text-muted-foreground line-clamp-4">
                      {instructor.bio}
                    </p>
                    <a
                      href={instructor.linkedin}
                      className="inline-flex items-center gap-2 text-sm text-[#041F3F] font-medium"
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

        <section className="py-16 md:py-20 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#041F3F] mb-4" data-testid="structure-title">
                Nossa Estrutura
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Ambiente moderno e equipado para proporcionar a melhor experiência de aprendizado.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {galleryImages.map((image) => (
                <div
                  key={image.id}
                  className="aspect-video rounded-lg overflow-hidden shadow-lg"
                  data-testid={`gallery-image-${image.id}`}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>

            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <Card className="p-6 text-center border-none shadow-md">
                <Users className="w-8 h-8 text-primary mx-auto mb-3" />
                <h3 className="font-bold text-[#041F3F] mb-1">Salas de Treinamento</h3>
                <p className="text-sm text-muted-foreground">Capacidade para até 20 participantes por turma</p>
              </Card>
              <Card className="p-6 text-center border-none shadow-md">
                <Zap className="w-8 h-8 text-primary mx-auto mb-3" />
                <h3 className="font-bold text-[#041F3F] mb-1">Laboratório Prático</h3>
                <p className="text-sm text-muted-foreground">Equipamentos reais para treinamento hands-on</p>
              </Card>
              <Card className="p-6 text-center border-none shadow-md">
                <Award className="w-8 h-8 text-primary mx-auto mb-3" />
                <h3 className="font-bold text-[#041F3F] mb-1">Recursos Modernos</h3>
                <p className="text-sm text-muted-foreground">Tecnologia audiovisual e material didático completo</p>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20 bg-[#041F3F]">
          <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Pronto para Transformar sua Equipe?
            </h2>
            <p className="text-white/80 mb-8 max-w-2xl mx-auto">
              Entre em contato conosco e descubra como nossos treinamentos podem elevar o nível técnico da sua empresa.
            </p>
            <Link href="/contato">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground font-semibold px-8"
                data-testid="button-about-cta"
              >
                Fale Conosco
                <ChevronRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
