import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Star, Award, Users, ShieldCheck, Clock, Handshake, ListChecks } from 'lucide-react';
import { PlaceHolderImagesById } from '@/lib/placeholder-images';

const whyChooseUs = [
  {
    icon: <Award className="w-6 h-6 text-accent" />,
    text: 'Más de 10 años de experiencia en el sector construcción.',
  },
  {
    icon: <Users className="w-6 h-6 text-accent" />,
    text: 'Equipo especializado y en constante capacitación.',
  },
    {
    icon: <ShieldCheck className="w-6 h-6 text-accent" />,
    text: 'Cobertura nacional, con capacidad de instalación de plantas móviles de concreto.',
  },
  {
    icon: <Clock className="w-6 h-6 text-accent" />,
    text: 'Procesos eficientes que garantizan ahorro de tiempo y recursos.',
  },
  {
    icon: <Handshake className="w-6 h-6 text-accent" />,
    text: 'Compromiso real con la satisfacción del cliente.',
  },
  {
    icon: <ListChecks className="w-6 h-6 text-accent" />,
    text: 'Atención personalizada en cada proyecto.',
  },
];


export default function TestimonialsSection() {
  return (
    <section id="why-choose-us" className="w-full py-20 lg:py-32">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-bold">¿Por qué Elegirnos?</h2>
           <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            Nuestra trayectoria y compromiso son su mejor garantía. Siento44 Construcciones nace como una empresa nueva, impulsada por un equipo con más de 10 años de trayectoria en construcción a nivel nacional.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {whyChooseUs.map((item, index) => (
            <Card key={index} className="bg-card shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="pt-6 flex items-center gap-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                        {item.icon}
                    </div>
                    <p className="text-muted-foreground">{item.text}</p>
                </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
