'use client';

import { useEffect, useActionState } from 'react';
import { useFormStatus } from 'react-dom';
import { submitContactForm, ContactFormState } from '@/app/actions';
import { useToast } from '@/hooks/use-toast';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Loader2, Phone, MessageCircle } from 'lucide-react';

const initialState: ContactFormState = {
  message: '',
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" className="w-full" disabled={pending}>
      {pending ? <Loader2 className="animate-spin" /> : 'Enviar Mensaje'}
    </Button>
  );
}

export default function ContactSection() {
  const [state, formAction] = useActionState(submitContactForm, initialState);
  const { toast } = useToast();

  useEffect(() => {
    if (state.message === 'success') {
      toast({
        title: 'Mensaje Enviado',
        description: 'Gracias por contactarnos. Nos pondremos en contacto con usted en breve.',
      });
    } else if (state.message && state.message !== 'success') {
       const description = state.errors ? 
        Object.values(state.errors).flat().join('\n') : 
        'Ocurrió un error. Por favor, intente de nuevo.';
      toast({
        variant: 'destructive',
        title: 'Error al enviar',
        description,
      });
    }
  }, [state, toast]);

  return (
    <section id="contact" className="w-full py-20 lg:py-32 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-bold">Proyecte su Éxito con Siento44</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            ¿Listo para comenzar? Contáctenos para una consulta y cotización honesta y transparente.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
            <Card>
                <form action={formAction}>
                    <CardHeader>
                        <CardTitle>Solicite una Cotización</CardTitle>
                        <CardDescription>Complete el formulario y uno de nuestros expertos se pondrá en contacto.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="space-y-1">
                            <Label htmlFor="name">Nombre</Label>
                            <Input id="name" name="name" placeholder="Su nombre completo" required />
                            {state.errors?.name && <p className="text-sm text-destructive">{state.errors.name[0]}</p>}
                        </div>
                        <div className="space-y-1">
                            <Label htmlFor="email">Email</Label>
                            <Input id="email" name="email" type="email" placeholder="sudireccion@email.com" required />
                             {state.errors?.email && <p className="text-sm text-destructive">{state.errors.email[0]}</p>}
                        </div>
                        <div className="space-y-1">
                            <Label htmlFor="phone">Teléfono (Opcional)</Label>
                            <Input id="phone" name="phone" placeholder="Su número de teléfono" />
                        </div>
                        <div className="space-y-1">
                            <Label htmlFor="message">Mensaje</Label>
                            <Textarea id="message" name="message" placeholder="Cuéntenos sobre su proyecto..." required />
                             {state.errors?.message && <p className="text-sm text-destructive">{state.errors.message[0]}</p>}
                        </div>
                        <SubmitButton />
                    </CardContent>
                </form>
            </Card>

            <div className="space-y-8">
                <h3 className="font-headline text-2xl font-semibold">O contáctenos directamente</h3>
                <div className="space-y-4">
                    <div className="flex items-start gap-4">
                        <div className="bg-primary text-primary-foreground p-3 rounded-md">
                            <Phone />
                        </div>
                        <div>
                            <h4 className="font-semibold">Teléfono</h4>
                            <a href="tel:5528976334" className="text-muted-foreground hover:text-primary">55 2897 6334</a>
                        </div>
                    </div>
                     <div className="flex items-start gap-4">
                        <div className="bg-primary text-primary-foreground p-3 rounded-md">
                            <MessageCircle />
                        </div>
                        <div>
                            <h4 className="font-semibold">WhatsApp</h4>
                            <a href="https://wa.me/5215528976334" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">55 2897 6334</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}
