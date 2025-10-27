import Link from 'next/link';
import { Logo } from '@/components/logo';
import { Button } from '@/components/ui/button';
import { MessageCircle, Phone, Linkedin, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <>
      <footer className="bg-primary text-primary-foreground">
        <div className="container mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-start">
              <Link href="/" className="flex items-center gap-2 mb-4">
                <Logo className="w-40 h-auto" />
              </Link>
              <p className="text-sm text-primary-foreground/80">
                10 años de experiencia construyendo confianza.
              </p>
            </div>
            <div>
              <h3 className="font-headline text-lg font-semibold mb-4 text-accent">Contacto</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="tel:5528976334" className="flex items-center gap-2 hover:text-accent transition-colors">
                    <Phone size={16} />
                    <span>55 2897 6334</span>
                  </a>
                </li>
                <li>
                   <a href="https://wa.me/5215528976334" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-accent transition-colors">
                    <MessageCircle size={16} />
                    <span>WhatsApp</span>
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-headline text-lg font-semibold mb-4 text-accent">Síguenos</h3>
              <div className="flex space-x-4">
                <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-primary-foreground/10 hover:text-accent">
                  <Linkedin size={20} />
                </Button>
                <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-primary-foreground/10 hover:text-accent">
                  <Facebook size={20} />
                </Button>
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-primary-foreground/10 text-center text-sm text-primary-foreground/60">
            <p>&copy; {new Date().getFullYear()} Siento44 Construcciones. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
      <div className="sticky bottom-5 w-full flex justify-end pr-5 z-40">
        <a href="https://wa.me/5215528976334?text=Hola,%20quisiera%20recibir%20acompañamiento%20personalizado." target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp">
            <Button size="lg" className="bg-green-500 hover:bg-green-600 text-white shadow-lg rounded-full">
                <MessageCircle className="mr-2"/>
                Hable con Nuestros Expertos
            </Button>
        </a>
      </div>
    </>
  );
};

export default Footer;
