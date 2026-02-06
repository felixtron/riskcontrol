
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "¿Tienen cobertura en todo México?",
    answer: "Sí, contamos con capacidad logística para atender proyectos de obra pública y privada en cualquier parte del territorio nacional, incluyendo la instalación de plantas móviles de concreto."
  },
  {
    question: "¿Qué tipo de proyectos de construcción realizan?",
    answer: "Realizamos proyectos residenciales, comerciales e industriales, así como urbanización, pavimentación y obra civil estructural."
  },
  {
    question: "¿Cómo garantizan la calidad del concreto?",
    answer: "Contamos con una planta concretera automatizada que asegura mezclas precisas. Además, cada fase es supervisada por personal capacitado siguiendo normas técnicas estrictas."
  },
  {
    question: "¿Ofrecen asesoría en la planeación del proyecto?",
    answer: "Sí, brindamos una gestión integral que incluye acompañamiento técnico, administrativo y logístico desde la conceptualización hasta la entrega final."
  }
];

export default function FAQSection() {
  return (
    <section className="w-full py-20 lg:py-32">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-bold">Preguntas Frecuentes</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Resolvemos las dudas más comunes sobre nuestros procesos y servicios.
          </p>
        </div>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-semibold">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
