import { Badge } from "@/components/ui/badge";
import logoAirCenter from "@assets/Logo_AirCenter_Nova_1768798137394.jpeg";
import logoAirPressMedical from "@assets/Logo_AirPress_Medical_Group_1768798137394.jpeg";
import logoLojaDoCompressor from "@assets/Logo_Loja_do_Compressor_1768798137395.jpeg";

const companies = [
  {
    id: 1,
    name: "AirCenter Compressores",
    logo: logoAirCenter,
  },
  {
    id: 2,
    name: "AirPress Medical Group",
    logo: logoAirPressMedical,
  },
  {
    id: 3,
    name: "Loja do Compressor",
    logo: logoLojaDoCompressor,
  },
];

export function GroupCompanies() {
  return (
    <section className="py-12 md:py-16 bg-muted/30 border-y border-border">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-10">
          <Badge className="bg-[#041F3F]/10 text-[#041F3F] border-[#041F3F]/20 mb-4">
            Grupo AirPress
          </Badge>
          <h2 className="text-2xl md:text-3xl font-bold text-[#041F3F] mb-3" data-testid="group-companies-title">
            Uma Empresa do Grupo AirPress
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A AirTreinamentos faz parte do Grupo AirPress, referência nacional em soluções de ar comprimido e gases medicinais.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
          {companies.map((company) => (
            <div
              key={company.id}
              className="flex items-center justify-center p-4 bg-white rounded-lg shadow-sm hover-elevate"
              data-testid={`logo-company-${company.id}`}
            >
              <img
                src={company.logo}
                alt={company.name}
                className="h-12 md:h-16 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
