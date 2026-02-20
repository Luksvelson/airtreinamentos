import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  ArrowRight,
  Clock,
  MapPin,
  Monitor,
  CheckCircle,
  Users,
  Award,
  BookOpen,
  Star,
  ChevronLeft,
  HelpCircle,
  Target,
  Sparkles,
} from "lucide-react";
import { Link, useParams, Redirect } from "wouter";
import { getCourseBySlug, modalityLabels, categoryLabels } from "@/data/courses";

export function TrainingDetail() {
  const { slug } = useParams<{ slug: string }>();
  const course = getCourseBySlug(slug || "");

  if (!course) {
    return <Redirect to="/treinamentos" />;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-16 md:pt-20">
        <section className="py-16 md:py-24 bg-gradient-to-br from-[#041F3F] to-[#0a3566]">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <Link href="/treinamentos">
              <Button variant="ghost" className="text-white/70 mb-6 -ml-2" data-testid="button-voltar-cursos">
                <ChevronLeft className="w-4 h-4 mr-1" />
                Voltar aos cursos
              </Button>
            </Link>
            <div className="flex flex-wrap gap-2 mb-4">
              <Badge className={`text-sm border-none ${course.modality === "presencial" ? "bg-white/20 text-white" : "bg-emerald-500/20 text-emerald-300"}`}>
                {course.modality === "presencial" ? (
                  <MapPin className="w-3.5 h-3.5 mr-1.5" />
                ) : (
                  <Monitor className="w-3.5 h-3.5 mr-1.5" />
                )}
                {modalityLabels[course.modality]}
              </Badge>
              <Badge className="bg-white/20 text-white text-sm border-none">
                <Clock className="w-3.5 h-3.5 mr-1.5" />
                {course.duration}
              </Badge>
              {course.categories.map((cat) => (
                <Badge key={cat} className="bg-primary/20 text-primary text-sm border-primary/30">
                  {categoryLabels[cat]}
                </Badge>
              ))}
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4" data-testid="detail-title">
              {course.name}
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-3xl">
              {course.heroSubtitle}
            </p>
          </div>
        </section>

        <section className="py-12 md:py-16 bg-background">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="grid lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2 space-y-12">
                <div data-testid="section-sobre">
                  <div className="flex items-center gap-3 mb-4">
                    <BookOpen className="w-6 h-6 text-primary" />
                    <h2 className="text-2xl md:text-3xl font-bold text-[#041F3F]">Sobre o Curso</h2>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{course.about}</p>
                </div>

                <div data-testid="section-conteudo">
                  <div className="flex items-center gap-3 mb-4">
                    <Target className="w-6 h-6 text-primary" />
                    <h2 className="text-2xl md:text-3xl font-bold text-[#041F3F]">Conteúdo Programático</h2>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {course.syllabus.map((item, index) => (
                      <div key={index} className="flex items-start gap-3 p-3 bg-muted/30 rounded-lg">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div data-testid="section-publico">
                  <div className="flex items-center gap-3 mb-4">
                    <Users className="w-6 h-6 text-primary" />
                    <h2 className="text-2xl md:text-3xl font-bold text-[#041F3F]">Público-Alvo</h2>
                  </div>
                  <div className="space-y-3">
                    {course.audience.map((item, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                        <span className="text-muted-foreground">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div data-testid="section-diferenciais">
                  <div className="flex items-center gap-3 mb-4">
                    <Sparkles className="w-6 h-6 text-primary" />
                    <h2 className="text-2xl md:text-3xl font-bold text-[#041F3F]">Diferenciais</h2>
                  </div>
                  <div className="space-y-3">
                    {course.differentials.map((item, index) => (
                      <div key={index} className="flex items-start gap-3 p-3 bg-muted/30 rounded-lg">
                        <Star className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div data-testid="section-faq">
                  <div className="flex items-center gap-3 mb-4">
                    <HelpCircle className="w-6 h-6 text-primary" />
                    <h2 className="text-2xl md:text-3xl font-bold text-[#041F3F]">Perguntas Frequentes</h2>
                  </div>
                  <Accordion type="single" collapsible className="space-y-2">
                    {course.faq.map((item, index) => (
                      <AccordionItem key={index} value={`faq-${index}`} className="border rounded-lg px-4">
                        <AccordionTrigger className="text-left text-[#041F3F] font-medium" data-testid={`faq-trigger-${index}`}>
                          {item.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground">
                          {item.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              </div>

              <div className="space-y-6">
                <Card className="p-6 border border-card-border sticky top-24" data-testid="sidebar-info">
                  <div className="space-y-5">
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Modalidade</p>
                      <div className="space-y-1.5">
                        <div className="flex items-center gap-2">
                          {course.modality === "presencial" ? (
                            <MapPin className="w-4 h-4 text-primary" />
                          ) : (
                            <Monitor className="w-4 h-4 text-primary" />
                          )}
                          <span className="font-medium text-[#041F3F] dark:text-white">{modalityLabels[course.modality]}</span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Carga Horária</p>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-primary" />
                        <span className="font-medium text-[#041F3F]">{course.duration}</span>
                      </div>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Certificação</p>
                      <div className="flex items-start gap-2">
                        <Award className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        <p className="text-sm text-muted-foreground">{course.certification}</p>
                      </div>
                    </div>
                    <a
                      href="/#contato"
                      onClick={(e) => {
                        e.preventDefault();
                        window.location.href = "/#contato";
                      }}
                    >
                      <Button
                        className="w-full bg-primary text-primary-foreground font-semibold mt-2"
                        data-testid="button-sidebar-contato"
                      >
                        Quero me Inscrever
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </a>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20 bg-[#041F3F]">
          <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4" data-testid="detail-cta-title">
              Invista no Desenvolvimento da sua Equipe
            </h2>
            <p className="text-white/80 mb-8 max-w-2xl mx-auto text-lg">
              Entre em contato para saber mais sobre datas, valores e condições especiais para grupos e empresas.
            </p>
            <a
              href="/#contato"
              onClick={(e) => {
                e.preventDefault();
                window.location.href = "/#contato";
              }}
            >
              <Button
                size="lg"
                className="bg-primary text-primary-foreground font-semibold px-8"
                data-testid="button-detail-cta"
              >
                Entre em Contato
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
