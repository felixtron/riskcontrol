import CtaGenerator from '@/components/dashboard/cta-generator';

export default function CtaGeneratorPage() {
  return (
    <div>
      <h2 className="text-2xl font-bold tracking-tight font-headline mb-1">
        Smart CTA Generator
      </h2>
      <p className="text-muted-foreground mb-6">
        Generate alternative CTAs based on successful patterns and A/B testing data.
      </p>
      <CtaGenerator />
    </div>
  );
}
