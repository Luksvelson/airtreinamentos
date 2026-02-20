import { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Clock, MapPin, Monitor, Filter } from "lucide-react";
import { Link } from "wouter";
import { courses, categoryLabels, modalityLabels, type Category, type Modality } from "@/data/courses";

type FilterType = "all" | Modality | Category;

const filters: { value: FilterType; label: string }[] = [
  { value: "all", label: "Todos" },
  { value: "presencial", label: "Presencial" },
  { value: "online", label: "Online" },
  { value: "manutencao", label: "Manutenção" },
  { value: "eletrica", label: "Elétrica" },
  { value: "normas", label: "Normas" },
  { value: "gestao", label: "Gestão" },
];

export function TrainingCatalog() {
  const [activeFilter, setActiveFilter] = useState<FilterType>("all");

  const filteredCourses = courses.filter((course) => {
    if (activeFilter === "all") return true;
    if (activeFilter === "presencial" || activeFilter === "online") {
      return course.modality === activeFilter;
    }
    return course.categories.includes(activeFilter as Category);
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-16 md:pt-20">
        <section className="py-16 md:py-24 bg-gradient-to-br from-[#041F3F] to-[#0a3566]">
          <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6" data-testid="catalog-title">
              Nossos <span className="text-primary">Treinamentos</span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto">
              Programas desenvolvidos por especialistas com décadas de experiência em sistemas de ar comprimido industrial.
            </p>
          </div>
        </section>

        <section className="py-12 md:py-16 bg-background">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="flex items-center gap-3 mb-8 flex-wrap">
              <Filter className="w-5 h-5 text-muted-foreground" />
              <div className="flex flex-wrap gap-2">
                {filters.map((filter) => (
                  <Button
                    key={filter.value}
                    variant={activeFilter === filter.value ? "default" : "outline"}
                    className={activeFilter === filter.value ? "bg-[#041F3F] text-white" : ""}
                    onClick={() => setActiveFilter(filter.value)}
                    data-testid={`filter-${filter.value}`}
                  >
                    {filter.label}
                  </Button>
                ))}
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCourses.map((course) => (
                <Card
                  key={course.id}
                  className="flex flex-col border border-card-border hover-elevate transition-all duration-200"
                  data-testid={`course-card-${course.slug}`}
                >
                  <div className="relative h-48 w-full">
                    <img
                      src={course.image}
                      alt={course.name}
                      className="h-full w-full object-cover rounded-t-md"
                      data-testid={`course-image-${course.slug}`}
                    />
                    <div className="absolute top-3 left-3 right-3 flex items-start justify-between flex-wrap gap-2">
                      <div className="flex flex-wrap gap-1.5">
                        {course.categories.map((cat) => (
                          <Badge key={cat} className="bg-white/90 text-[#041F3F] border-none text-xs shadow-sm">
                            {categoryLabels[cat]}
                          </Badge>
                        ))}
                      </div>
                      <Badge className={`text-xs border-none shadow-sm ${course.modality === "presencial" ? "bg-[#041F3F] text-white" : "bg-emerald-600 text-white"}`}>
                        {modalityLabels[course.modality]}
                      </Badge>
                    </div>
                  </div>

                  <div className="p-5 flex flex-col flex-1">
                    <h3 className="text-lg font-bold text-[#041F3F] dark:text-white mb-2" data-testid={`course-name-${course.slug}`}>
                      {course.name}
                    </h3>

                    <p className="text-sm text-muted-foreground mb-4 flex-1 line-clamp-3">
                      {course.shortDescription}
                    </p>

                    <div className="flex items-center gap-4 mb-3 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1.5">
                        <Clock className="w-4 h-4" />
                        {course.duration}
                      </span>
                      <span className="flex items-center gap-1.5">
                        {course.modality === "presencial" ? (
                          <MapPin className="w-4 h-4" />
                        ) : (
                          <Monitor className="w-4 h-4" />
                        )}
                        {modalityLabels[course.modality]}
                      </span>
                    </div>

                    <div className="mb-5 space-y-1" data-testid={`course-prices-${course.slug}`}>
                      {course.pricePresencial && (
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-muted-foreground">Presencial:</span>
                          <span className="font-bold text-[#041F3F] dark:text-white">{course.pricePresencial}</span>
                        </div>
                      )}
                      {course.priceOnline && (
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-muted-foreground">Online:</span>
                          <span className="font-bold text-[#041F3F] dark:text-white">{course.priceOnline}</span>
                        </div>
                      )}
                    </div>

                    <Link href={`/treinamentos/${course.slug}`}>
                      <Button
                        variant="outline"
                        className="w-full border-[#041F3F] text-[#041F3F]"
                        data-testid={`button-saiba-mais-${course.slug}`}
                      >
                        Saiba Mais
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </Link>
                  </div>
                </Card>
              ))}
            </div>

            {filteredCourses.length === 0 && (
              <div className="text-center py-12">
                <p className="text-muted-foreground text-lg">Nenhum curso encontrado para o filtro selecionado.</p>
              </div>
            )}
          </div>
        </section>

        <section className="py-16 md:py-20 bg-[#041F3F]">
          <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4" data-testid="catalog-cta-title">
              Não encontrou o que procura?
            </h2>
            <p className="text-white/80 mb-8 max-w-2xl mx-auto text-lg">
              Desenvolvemos treinamentos personalizados para atender as necessidades específicas da sua empresa e equipe.
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
                data-testid="button-catalog-contato"
              >
                Fale Conosco
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
