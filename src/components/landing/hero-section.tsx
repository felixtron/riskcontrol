import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { PlaceHolderImagesById } from '@/lib/placeholder-images';
import { ArrowDown } from 'lucide-react';

export default function HeroSection() {
  const heroImage = PlaceHolderImagesById['hero-image'];
  return (
    <section className="relative w-full h-[80vh] min-h-[600px] flex items-center justify-center text-center text-white">
      <Image
        src={heroImage.imageUrl}
        alt={heroImage.description}
        fill
        className="object-cover"
        priority
        data-ai-hint={heroImage.imageHint}
      />
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 container mx-auto px-6 max-w-4xl">
        <h1 className="font-headline text-4xl md:text-6xl font-bold tracking-tight">
          Siento44 Construcciones: La Nueva Cara de la Construcción Eficiente.
        </h1>
        <p className="mt-4 text-lg md:text-xl text-white/90">
          10 Años de Experiencia Construyendo Confianza.
        </p>
        <p className="mt-6 text-base md:text-lg max-w-3xl mx-auto">
          Transformamos su visión de Obra Civil, Residencial, Comercial o Industrial en proyectos ejecutados con honestidad, tecnología y cumplimiento normativo.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-lg" asChild>
            <a href="#contact">Solicite una Cotización Honesta y Transparente</a>
          </Button>
          <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-primary" asChild>
            <a href="#services">
              Ver Servicios
              <ArrowDown className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
