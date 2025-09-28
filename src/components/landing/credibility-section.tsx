import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ClipboardCheck, Handshake, Leaf } from 'lucide-react';

const usps = [
  {
    icon: <ClipboardCheck className="w-8 h-8 text-accent" />,
    title: 'Ejecución Responsable y Eficiente',
    description: 'Aseguramos la entrega de proyectos con eficiencia y responsabilidad, cumpliendo estrictamente con las normativas vigentes.',
  },
  {
    icon: <Handshake className="w-8 h-8 text-accent" />,
    title: 'Transparencia Total',
    description: 'Garantizamos honestidad y transparencia, con un acompañamiento personal en todo el desarrollo del proyecto.',
  },
  {
    icon: <Leaf className="w-8 h-8 text-accent" />,
    title: 'Tecnología y Sostenibilidad',
    description: 'Aplicamos la tecnología y la sostenibilidad en nuestros procesos, cruciales para los estándares modernos, especialmente en proyectos industriales.',
  },
];

export default function CredibilitySection() {
  return (
    <section id="credibility" className="w-full py-20 lg:py-32">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-bold">10 Años de Trayectoria, Un Enfoque Renovado</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            Combinamos una década de experiencia con innovación para ofrecerle confianza, tranquilidad y profesionalismo en cada proyecto.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {usps.map((usp, index) => (
            <Card key={index} className="text-center bg-card shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="items-center">
                <div className="bg-primary/10 p-4 rounded-full mb-4">
                  {usp.icon}
                </div>
                <CardTitle className="font-headline text-xl">{usp.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{usp.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
