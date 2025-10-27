import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, ShieldCheck, Zap, Bot, Handshake, TrendingUp } from 'lucide-react';

const principles = [
  {
    icon: <CheckCircle className="w-8 h-8 text-accent" />,
    title: 'Cumplimiento y eficiencia',
    description: 'Entregamos en tiempo y forma, respetando presupuestos y cronogramas.',
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-accent" />,
    title: 'Calidad y precisión',
    description: 'Aplicamos procesos automatizados y materiales certificados que garantizan resultados seguros y duraderos.',
  },
  {
    icon: <Zap className="w-8 h-8 text-accent" />,
    title: 'Innovación y tecnología',
    description: 'Integramos sistemas digitales, maquinaria moderna y control automatizado en nuestros proyectos.',
  },
];

export default function CredibilitySection() {
  return (
    <section id="credibility" className="w-full py-20 lg:py-32">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-bold">Nuestro Compromiso: Excelencia como Estándar</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            Cada proyecto representa la oportunidad de reafirmar nuestra reputación basada en la responsabilidad, la innovación y la calidad. Nos guiamos por principios que definen nuestra esencia.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {principles.map((principle, index) => (
            <Card key={index} className="text-center bg-card shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="items-center">
                <div className="bg-primary/10 p-4 rounded-full mb-4">
                  {principle.icon}
                </div>
                <CardTitle className="font-headline text-xl">{principle.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{principle.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
