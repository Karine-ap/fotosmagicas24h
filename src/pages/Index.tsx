import Header from "@/components/Header";
import Hero from "@/components/Hero";
import BeforeAfter from "@/components/BeforeAfter";
import Statistics from "@/components/Statistics";
import Packages from "@/components/Packages";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    // Smooth scrolling behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Schema.org structured data para SEO
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Fotosmagicas24h",
      "description": "Serviço profissional de melhoria de imagens com IA para anúncios e marketing digital",
      "url": "https://fotosmagicas24h.com.br",
      "telephone": "+5511999999999",
      "priceRange": "R$ 360",
      "serviceType": "Edição de Imagens com Inteligência Artificial",
      "areaServed": "Brasil",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Serviços de Melhoria de Imagens",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Pacote 30 Fotos Profissionais",
              "description": "30 fotos editadas com IA, 2 rodadas de ajuste, entrega em 24h"
            },
            "price": "360",
            "priceCurrency": "BRL"
          }
        ]
      }
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);

    return () => {
      const existingScript = document.querySelector('script[type="application/ld+json"]');
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, []);

  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <section id="services">
        <BeforeAfter />
        <Statistics />
      </section>
      <Packages />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
};

export default Index;
