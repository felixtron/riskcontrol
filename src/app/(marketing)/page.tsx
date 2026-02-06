
import HeroSection from '@/components/landing/hero-section';
import CredibilitySection from '@/components/landing/credibility-section';
import ServicesSection from '@/components/landing/services-section';
import TestimonialsSection from '@/components/landing/testimonials-section';
import ContactSection from '@/components/landing/contact-section';
import FAQSection from '@/components/landing/faq-section';

export default function Home() {
  return (
    <>
      <HeroSection />
      <CredibilitySection />
      <ServicesSection />
      <TestimonialsSection />
      <FAQSection />
      <ContactSection />
    </>
  );
}
