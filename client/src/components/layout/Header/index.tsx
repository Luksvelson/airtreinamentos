import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoAirTreinamentos from "@assets/Logotipo_AirTreinamentos_1768803746054.png";

const navItems = [
  { label: "Início", href: "/" },
  { label: "Treinamentos", href: "/#treinamentos" },
  { label: "Quem Somos", href: "/quem-somos" },
  { label: "Contato", href: "/#contato" },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [location] = useLocation();

  const scrollToSection = (href: string) => {
    setIsMenuOpen(false);
    if (href.startsWith("/#")) {
      const sectionId = href.replace("/#", "");
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-16 md:h-20 gap-4">
          <Link href="/" className="flex items-center gap-2">
            <img
              src={logoAirTreinamentos}
              alt="AirTreinamentos"
              className="h-10 md:h-12 w-auto"
              data-testid="logo-airtreinamentos"
            />
            <div className="flex items-center">
              <span className="text-xl md:text-2xl font-bold text-[#041F3F]">Air</span>
              <span className="text-xl md:text-2xl font-bold text-primary">Treinamentos</span>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-8" data-testid="nav-desktop">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  if (item.href.startsWith("/#")) {
                    e.preventDefault();
                    scrollToSection(item.href);
                  }
                }}
                className="text-sm font-medium text-[#041F3F] hover:text-primary transition-colors duration-200 relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all hover:after:w-full"
                data-testid={`nav-link-${item.label.toLowerCase()}`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <a
              href="/#contato"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("/#contato");
              }}
            >
              <Button
                className="bg-primary text-primary-foreground font-semibold"
                data-testid="button-solicitar-proposta"
              >
                Solicitar Proposta
              </Button>
            </a>
          </div>

          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
            data-testid="button-mobile-menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-[#041F3F]" />
            ) : (
              <Menu className="w-6 h-6 text-[#041F3F]" />
            )}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-border" data-testid="nav-mobile">
          <nav className="flex flex-col p-4 gap-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  if (item.href.startsWith("/#")) {
                    e.preventDefault();
                    scrollToSection(item.href);
                  }
                  setIsMenuOpen(false);
                }}
                className="text-base font-medium text-[#041F3F] hover:text-primary transition-colors py-3 px-4 rounded-lg hover:bg-muted"
                data-testid={`nav-mobile-link-${item.label.toLowerCase()}`}
              >
                {item.label}
              </a>
            ))}
            <a
              href="/#contato"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("/#contato");
              }}
            >
              <Button
                className="mt-4 bg-primary text-primary-foreground font-semibold w-full"
                data-testid="button-mobile-solicitar-proposta"
              >
                Solicitar Proposta
              </Button>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
