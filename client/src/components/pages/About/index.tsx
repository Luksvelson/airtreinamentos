import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Target, Award, Zap, Heart, Eye, ChevronRight, Star } from "lucide-react";
import { Link } from "wouter";

import logoAirCenter from "@assets/Logo_AirCenter_Nova_1768798137394.jpeg";
import logoAirPressMedical from "@assets/Logo_AirPress_Medical_Group_1768798137394.jpeg";
import logoLojaDoCompressor from "@assets/Logo_Loja_do_Compressor_1768798137395.jpeg";

const groupCompanies = [
  { id: 1, name: "AirCenter Compressores", logo: logoAirCenter },
  { id: 2, name: "AirPress Medical Group", logo: logoAirPressMedical },
  { id: 3, name: "Loja do Compressor", logo: logoLojaDoCompressor },
];

const valores = [
  {
    icon: Star,
    title: "Excelência Técnica",
    description: "Compromisso com a precisão, atualização e profundidade do conteúdo oferecido.",
  },
  {
    icon: Target,
    title: "Aplicabilidade Prática",
    description: "Formação orientada para a realidade operacional das empresas.",
  },
  {
    icon: Heart,
    title: "Integridade e Transparência",
    description: "Relacionamentos pautados pela ética e clareza.",
  },
  {
    icon: Zap,
    title: "Eficiência e Sustentabilidade",
    description: "Foco na redução de desperdícios e no uso inteligente de recursos.",
  },
  {
    icon: Award,
    title: "Desenvolvimento Contínuo",
    description: "Valorização do aprendizado constante e da evolução profissional.",
  },
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
            <div className="grid lg:grid-cols-2 gap-12 mb-16">
              <Card className="p-8 border-none shadow-md" data-testid="missao-card">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Target className="w-6 h-6 text-primary" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-[#041F3F]">Missão</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Capacitar profissionais e empresas para operar e gerenciar sistemas de ar comprimido com excelência técnica, eficiência energética e visão estratégica de longo prazo.
                </p>
              </Card>

              <Card className="p-8 border-none shadow-md" data-testid="visao-card">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Eye className="w-6 h-6 text-primary" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-[#041F3F]">Visão</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Tornar-se referência nacional em treinamento técnico em ar comprimido, contribuindo para a evolução da gestão industrial e da confiabilidade operacional no Brasil.
                </p>
              </Card>
            </div>

            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-[#041F3F]" data-testid="values-title">
                Valores
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
              {valores.map((valor, index) => (
                <Card
                  key={index}
                  className="p-6 text-center border-none shadow-md"
                  data-testid={`value-card-${index}`}
                >
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <valor.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-[#041F3F] mb-2">{valor.title}</h3>
                  <p className="text-sm text-muted-foreground">{valor.description}</p>
                </Card>
              ))}
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
            <Link href="/treinamentos/presenciais">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground font-semibold px-8"
                data-testid="button-about-cta"
              >
                Conheça Nossos Cursos
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
