import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';
import { PlaceHolderImagesById } from '@/lib/placeholder-images';

const testimonials = [
  {
    name: 'Cliente Satisfecho 1',
    company: 'Desarrollos Urbanos S.A. de C.V.',
    avatarId: 'testimonial-avatar-1',
    quote: 'Nos brindaron un acompañamiento personal inigualable, asegurando la eficiencia y la calidad en los materiales. Su profesionalismo nos dio la tranquilidad que necesitábamos.',
  },
  {
    name: 'Cliente Satisfecho 2',
    company: 'Infraestructura Civil del Norte',
    avatarId: 'testimonial-avatar-2',
    quote: 'La transparencia en cada etapa del proyecto fue excepcional. Siento44 es sinónimo de confianza y cumplimiento.',
  },
  {
    name: 'Cliente Satisfecho 3',
    company: 'Parques Industriales Tech',
    avatarId: 'testimonial-avatar-3',
    quote: 'Su enfoque tecnológico y sostenible fue clave para nuestro proyecto de nearshoring. Cumplieron con todos los estándares internacionales.',
  },
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="w-full py-20 lg:py-32">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-bold">Validando Confianza, Tranquilidad y Profesionalismo</h2>
          <p className="mt-4 text-lg text-muted-foreground">Lo que nuestros clientes dicen de nosotros.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => {
            const avatar = PlaceHolderImagesById[testimonial.avatarId];
            return (
              <Card key={index} className="flex flex-col justify-between shadow-lg hover:scale-105 transition-transform duration-300">
                <CardContent className="pt-6">
                  <div className="flex text-accent mb-2">
                    {[...Array(5)].map((_, i) => <Star key={i} fill="currentColor" className="w-5 h-5" />)}
                  </div>
                  <blockquote className="italic text-muted-foreground">"{testimonial.quote}"</blockquote>
                </CardContent>
                <div className="bg-secondary p-4 flex items-center gap-4 rounded-b-lg">
                    <Image 
                        src={avatar.imageUrl} 
                        alt={testimonial.name}
                        width={50}
                        height={50}
                        className="rounded-full"
                        data-ai-hint={avatar.imageHint}
                    />
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
