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
          SIENTO44 CONSTRUCCIONES
        </h1>
        <p className="mt-6 text-lg md:text-xl max-w-3xl mx-auto text-white/90">
          En Siento44 Construcciones, creemos que la confianza se construye con hechos.
        </p>
        <p className="mt-4 text-base md:text-lg">
          Somos una empresa joven en imagen, pero con más de 10 años de experiencia en el sector de la construcción a nivel nacional. Nuestra renovación representa una nueva etapa: más dinámica, más tecnológica y con una visión enfocada en ofrecer soluciones modernas, seguras y sostenibles para cada proyecto.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-lg" asChild>
            <a href="#contact">Solicite una Cotización</a>
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
