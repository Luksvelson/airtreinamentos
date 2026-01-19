import { Phone, Mail, MapPin } from "lucide-react";
import { SiLinkedin, SiInstagram, SiYoutube, SiWhatsapp } from "react-icons/si";
import logoImage from "@assets/Logotipo_AirTreinamentos.png";

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
    <footer className="bg-white text-[#041F3F] pt-16 pb-8" translate="no">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 mb-6">
              <img
                src={logoImage}
                alt="AirTreinamentos"
                className="h-10 w-auto"
              />
              <span className="font-bold text-xl tracking-tight text-[#041F3F]">
                Air Treinamentos
              </span>
            </div>
            <p className="text-[#041F3F] text-sm leading-relaxed">
              Capacitando profissionais para a máxima eficiência em sistemas de
              ar comprimido industrial.
            </p>
            <div className="flex gap-4 pt-2">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#FEB23D] hover:text-[#041F3F] transition-all"
              >
                <SiLinkedin className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/airtreinamentos/"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#FEB23D] hover:text-[#041F3F] transition-all"
              >
                <SiInstagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[#041F3F] font-bold text-lg mb-6">Contato</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-[#041F3F]">
                <MapPin className="w-5 h-5 text-[#041F3F] shrink-0 mt-0.5" />
                <span className="text-sm">
                  Avenida Das Americas 04200 Blc 1 Sala 305 Barra da Tijuca
                  <br /> Rio de Janeiro - RJ <br />
                  CEP: 22640-907
                </span>
              </li>
              <li className="flex items-center gap-3 text-blue-100">
                <a
                  href="https://wa.me/5521985521685"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 hover:text-[#FEB23D] transition-colors"
                >
                  <SiWhatsapp className="w-5 h-5 text-[#041F3F] shrink-0" />
                  <span className="text-sm text-[#041F3F]">(21) 98552-1685</span>
                </a>
              </li>
              <li className="flex items-center gap-3 text-blue-100">
                <a
                  href="https://wa.me/5521997991685"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 hover:text-[#FEB23D] transition-colors"
                >
                  <SiWhatsapp className="w-5 h-5 text-[#041F3F] shrink-0" />
                  <span className="text-sm text-[#041F3F]">(21) 99799-1685</span>
                </a>
              </li>
              <li className="flex items-center gap-3 text-[#041F3F]">
                <Mail className="w-5 h-5 text-[#041F3F] shrink-0" />
                <span className="text-sm">roberto@airtreinamentos.com</span>
              </li>
            </ul>
          </div>

          {/* Group */}
          <div>
            <h4 className="text-[#041F3F] font-bold text-lg mb-6">
              Grupo Air Press
            </h4>
            <p className="text-[#041F3F] text-sm mb-4">
              Soluções completas em ar comprimido e gases industriais.
            </p>
            <div className="p-4 rounded-lg bg-[#041F3F]/5 border border-[#041F3F]/10">
              <p className="text-xs text-[#041F3F] font-medium">
                Uma nova mentalidade, soprando energia e riqueza.
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs font-bold text-[#041F3F]">
            © {new Date().getFullYear()} AirTreinamentos. Todos os direitos
            reservados.
          </p>
          <p className="text-xs font-bold text-[#041F3F]">
            Desenvolvido por
            <a
              href="https://setos.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#FEB23D] hover:underline ml-1"
            >
              Setos Consultoria
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
