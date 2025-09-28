import Image from 'next/image';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, HardHat, Building, Factory, Truck } from 'lucide-react';
import { PlaceHolderImagesById } from '@/lib/placeholder-images';


const constructionServices = [
    {
        icon: <HardHat className="w-5 h-5 text-primary"/>,
        title: "Obra Civil y Pública",
        description: "Ejecución de infraestructura, garantizando calidad y cumplimiento normativo."
    },
    {
        icon: <Building className="w-5 h-5 text-primary"/>,
        title: "Edificación Residencial",
        description: "Soluciones para desarrolladores, enfocados en la creciente demanda de vivienda."
    },
    {
        icon: <Factory className="w-5 h-5 text-primary"/>,
        title: "Obra Comercial e Industrial",
        description: "Construcción diseñada para el dinamismo comercial y el auge industrial (nearshoring)."
    }
];

const concreteServices = [
    {
        icon: <Truck className="w-5 h-5 text-primary"/>,
        title: "Calidad Asegurada",
        description: "Concretera automatizada que garantiza los requerimientos exactos para sus necesidades."
    },
    {
        icon: <Truck className="w-5 h-5 text-primary"/>,
        title: "Flexibilidad Logística",
        description: "Capacidad de establecer concreteras móviles en cualquier lugar del país."
    },
    {
        icon: <Truck className="w-5 h-5 text-primary"/>,
        title: "Materiales de Calidad",
        description: "Uso de materiales y acabados que cumplen con los más altos estándares."
    }
];

export default function ServicesSection() {
    const generalConstructionImg = PlaceHolderImagesById['service-general-construction'];
    const concreteSupplyImg = PlaceHolderImagesById['service-concrete-supply'];

  return (
    <section id="services" className="w-full py-20 lg:py-32 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-bold">Servicios Especializados</h2>
          <p className="mt-4 text-lg text-muted-foreground">Soluciones integrales para cada fase de su proyecto.</p>
        </div>

        <Tabs defaultValue="construction" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2">
            <TabsTrigger value="construction">Construcción General</TabsTrigger>
            <TabsTrigger value="concrete">Suministro de Concreto</TabsTrigger>
          </TabsList>
          
          <TabsContent value="construction">
            <Card className="mt-6 overflow-hidden">
              <div className="grid md:grid-cols-2 items-center">
                <div className="p-8">
                  <CardHeader className="p-0 mb-4">
                    <CardTitle className="font-headline text-2xl">Construcción de Obra Pública, Privada y Desarrollos</CardTitle>
                    <CardDescription>Dirigido a obra privada, obra civil, y desarrolladores de vivienda.</CardDescription>
                  </CardHeader>
                  <CardContent className="p-0 space-y-4">
                    {constructionServices.map(service => (
                        <div key={service.title} className="flex items-start gap-3">
                            <div className="bg-primary/10 p-2 rounded-full mt-1">{service.icon}</div>
                            <div>
                                <h4 className="font-semibold">{service.title}</h4>
                                <p className="text-sm text-muted-foreground">{service.description}</p>
                            </div>
                        </div>
                    ))}
                     <div className="pt-4 space-y-2">
                        <Button className="w-full sm:w-auto" asChild>
                            <a href="#contact">Asegure la Eficiencia: Consulte Soluciones Tecnológicas <ArrowRight className="ml-2 w-4 h-4" /></a>
                        </Button>
                         <Button variant="outline" className="w-full sm:w-auto" asChild>
                            <a href="#contact">Hable con un Experto en Cumplimiento Normativo <ArrowRight className="ml-2 w-4 h-4" /></a>
                        </Button>
                    </div>
                  </CardContent>
                </div>
                <div className="h-64 md:h-full relative">
                  <Image src={generalConstructionImg.imageUrl} alt={generalConstructionImg.description} fill className="object-cover" data-ai-hint={generalConstructionImg.imageHint} />
                </div>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="concrete">
             <Card className="mt-6 overflow-hidden">
              <div className="grid md:grid-cols-2 items-center">
                 <div className="h-64 md:h-full relative order-last md:order-first">
                  <Image src={concreteSupplyImg.imageUrl} alt={concreteSupplyImg.description} fill className="object-cover" data-ai-hint={concreteSupplyImg.imageHint} />
                </div>
                <div className="p-8">
                  <CardHeader className="p-0 mb-4">
                    <CardTitle className="font-headline text-2xl">Suministro de Concreto de Alta Precisión y Logística Nacional</CardTitle>
                    <CardDescription>Calidad y capacidad para atender proyectos en cualquier lugar del país.</CardDescription>
                  </CardHeader>
                  <CardContent className="p-0 space-y-4">
                     {concreteServices.map(service => (
                        <div key={service.title} className="flex items-start gap-3">
                            <div className="bg-primary/10 p-2 rounded-full mt-1">{service.icon}</div>
                            <div>
                                <h4 className="font-semibold">{service.title}</h4>
                                <p className="text-sm text-muted-foreground">{service.description}</p>
                            </div>
                        </div>
                    ))}
                    <div className="pt-4">
                        <Button className="w-full sm:w-auto" asChild>
                            <a href="#contact">Pida Concreto Automatizado en Cualquier Punto del País <ArrowRight className="ml-2 w-4 h-4" /></a>
                        </Button>
                    </div>
                  </CardContent>
                </div>
              </div>
            </Card>
          </TabsContent>

        </Tabs>
      </div>
    </section>
  );
}
