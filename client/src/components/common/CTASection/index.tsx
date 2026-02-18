import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";

export function CTASection() {
  return (
    <section className="py-16 md:py-24 bg-[#041F3F]">
      <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4" data-testid="cta-title">
          Conheça Nossos Cursos
        </h2>
        <p className="text-white/80 mb-8 max-w-2xl mx-auto text-lg">
          Explore nossos programas de treinamento presenciais, online e in-company. Encontre a capacitação ideal para sua equipe.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/treinamentos/presenciais">
            <Button
              size="lg"
              className="bg-primary text-primary-foreground font-semibold px-8"
              data-testid="button-cta-cursos"
            >
              Ver Treinamentos
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
          <a
            href="/#contato"
            onClick={(e) => {
              e.preventDefault();
              const element = document.getElementById("contato");
              if (element) {
                element.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            <Button
              size="lg"
              variant="outline"
              className="border-white/30 text-white backdrop-blur-sm px-8"
              data-testid="button-cta-contato"
            >
              Fale Conosco
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
