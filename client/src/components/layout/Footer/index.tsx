import { Phone, Mail, MapPin } from "lucide-react";
import { SiLinkedin, SiInstagram, SiYoutube } from "react-icons/si";

const quickLinks = [
  { label: "Início", href: "/" },
  { label: "Treinamentos", href: "/#treinamentos" },
  { label: "Instrutores", href: "/#instrutores" },
  { label: "Contato", href: "/#contato" },
];

const socialLinks = [
  { icon: SiLinkedin, href: "#", label: "LinkedIn" },
  { icon: SiInstagram, href: "https://www.instagram.com/airtreinamentos/", label: "Instagram" },
  { icon: SiYoutube, href: "#", label: "YouTube" },
];

export function Footer() {
  return (
    <footer className="bg-[#041F3F] text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div className="space-y-4">
            <div className="flex items-center" data-testid="footer-logo">
              <span className="text-xl font-bold text-white">Air</span>
              <span className="text-xl font-bold text-primary">Treinamentos</span>
            </div>
            <p className="text-white/70 text-sm leading-relaxed">
              Unidade de treinamentos técnicos do Grupo AirCenter, especializada em capacitação profissional em ar comprimido.
            </p>
            <p className="text-white/50 text-xs">
              Uma empresa do Grupo AirPress
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Links Rápidos</h4>
            <nav className="flex flex-col gap-2">
              {quickLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-white/70 hover:text-primary transition-colors text-sm"
                  data-testid={`footer-link-${link.label.toLowerCase()}`}
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Contato</h4>
            <div className="flex flex-col gap-3">
              <a
                href="tel:+5521985521685"
                className="flex items-center gap-3 text-white/70 hover:text-primary transition-colors text-sm"
                data-testid="footer-phone"
              >
                <Phone className="w-4 h-4 flex-shrink-0" />
                <span>(21) 98552-1685</span>
              </a>
              <a
                href="mailto:roberto@airtreinamentos.com"
                className="flex items-center gap-3 text-white/70 hover:text-primary transition-colors text-sm"
                data-testid="footer-email"
              >
                <Mail className="w-4 h-4 flex-shrink-0" />
                <span>roberto@airtreinamentos.com</span>
              </a>
              <div className="flex items-start gap-3 text-white/70 text-sm">
                <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <span>São Paulo, SP - Brasil</span>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Redes Sociais</h4>
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 flex items-center justify-center rounded-lg bg-white/10 text-white transition-colors hover-elevate"
                  aria-label={social.label}
                  data-testid={`footer-social-${social.label.toLowerCase()}`}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/50">
            <p data-testid="footer-copyright">
              © {new Date().getFullYear()} AirTreinamentos. Todos os direitos reservados.
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="hover:text-white/70 transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="hover:text-white/70 transition-colors">
                Termos de Uso
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
