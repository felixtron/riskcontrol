import type { Metadata } from 'next';
import { PT_Sans, Space_Grotesk } from 'next/font/google';
import { Toaster } from '@/components/ui/toaster';
import './globals.css';
import Header from '@/components/header';
import Footer from '@/components/footer';

const ptSans = PT_Sans({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-pt-sans',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-space-grotesk',
});

export const metadata: Metadata = {
  title: 'Siento44 Construcciones',
  description:
    'En Siento44 Construcciones, creemos que la confianza se construye con hechos. Más de 10 años de experiencia en el sector de la construcción a nivel nacional.',
  icons: {
    icon: 'https://i.postimg.cc/PqMrGxJX/favicon.jpg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body
        className={`${ptSans.variable} ${spaceGrotesk.variable} font-body antialiased`}
      >
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
        <Toaster />
      </body>
    </html>
  );
}
