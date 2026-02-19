import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Zap, Award } from "lucide-react";

import galleryTrainingRoom from "@assets/generated_images/training_room_with_equipment.png";
import galleryCompressorLab from "@assets/generated_images/compressor_equipment_lab.png";
import galleryConferenceRoom from "@assets/generated_images/corporate_training_conference_room.png";

const galleryImages = [
  { id: 1, src: galleryTrainingRoom, alt: "Sala de Treinamento" },
  { id: 2, src: galleryCompressorLab, alt: "Laboratório de Compressores" },
  { id: 3, src: galleryConferenceRoom, alt: "Sala de Conferências" },
];

const facilities = [
  {
    icon: Users,
    title: "Salas de Treinamento",
    description: "Capacidade para até 20 participantes por turma",
  },
  {
    icon: Zap,
    title: "Laboratório Prático",
    description: "Equipamentos reais para treinamento hands-on",
  },
  {
    icon: Award,
    title: "Recursos Modernos",
    description: "Tecnologia audiovisual e material didático completo",
  },
];

export function Infrastructure() {
  return (
    <section id="infraestrutura" className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#041F3F] mb-4" data-testid="infrastructure-title">
            Infraestrutura
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
          {facilities.map((facility, index) => (
            <Card
              key={index}
              className="p-6 text-center border-none shadow-md"
              data-testid={`facility-card-${index}`}
            >
              <facility.icon className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="font-bold text-[#041F3F] mb-1">{facility.title}</h3>
              <p className="text-sm text-muted-foreground">{facility.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
