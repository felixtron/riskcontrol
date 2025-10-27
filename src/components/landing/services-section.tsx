import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { HardHat, Truck, ClipboardCheck, Briefcase } from 'lucide-react';

const services = [
    {
        icon: <HardHat className="w-8 h-8 text-accent" />,
        title: "Construcción de obra",
        description: "Obras públicas y privadas. Proyectos residenciales, comerciales e industriales. Urbanización, pavimentación, obra civil y estructural."
    },
    {
        icon: <Truck className="w-8 h-8 text-accent" />,
        title: "Suministro y tecnología en concreto",
        description: "Planta concretera automatizada para mezclas precisas. Instalación de concreteras móviles en todo el territorio nacional para proyectos de gran escala."
    },
    {
        icon: <ClipboardCheck className="w-8 h-8 text-accent" />,
        title: "Supervisión y control de calidad",
        description: "Supervisión por personal capacitado, asegurando cumplimiento de normas, calidad de materiales y correcta aplicación de procedimientos."
    },
    {
        icon: <Briefcase className="w-8 h-8 text-accent" />,
        title: "Gestión integral del proyecto",
        description: "Acompañamiento técnico, administrativo y logístico. Ejecución con planeación, eficiencia y total transparencia."
    }
];

export default function ServicesSection() {
  return (
    <section id="services" className="w-full py-20 lg:py-32 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-bold">Nuestros Servicios</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            Ofrecemos un portafolio integral de servicios que cubre todas las etapas del proceso constructivo, desde la planeación y diseño hasta la ejecución final.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="text-center bg-card shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
              <CardHeader className="items-center">
                <div className="bg-primary/10 p-4 rounded-full mb-4">
                  {service.icon}
                </div>
                <CardTitle className="font-headline text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
