import Link from 'next/link';
import { Logo } from '@/components/logo';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur-sm">
      <div className="container mx-auto flex h-20 items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-2">
          <Logo className="w-28 h-auto" />
        </Link>
        <nav className="hidden md:flex gap-6 text-sm font-medium">
          <Link href="#services" className="hover:text-primary transition-colors">Servicios</Link>
          <Link href="#credibility" className="hover:text-primary transition-colors">Nosotros</Link>
          <Link href="#contact" className="hover:text-primary transition-colors">Contacto</Link>
        </nav>
        <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground">
          <a href="#contact">
            Solicite una Cotización
            <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </Button>
      </div>
    </header>
  );
};

export default Header;
