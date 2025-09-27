import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const phoneNumber = "5511921265421"; // Número editável

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          Fotosmagicas24h
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <button onClick={() => scrollToSection('services')} className="text-foreground hover:text-primary transition-smooth">
            Serviços
          </button>
          <button onClick={() => scrollToSection('results')} className="text-foreground hover:text-primary transition-smooth">
            Resultados
          </button>
          <button onClick={() => scrollToSection('packages')} className="text-foreground hover:text-primary transition-smooth">
            Pacotes
          </button>
          <Button 
            variant="whatsapp" 
            size="sm"
            onClick={() => window.open(`https://wa.me/${phoneNumber}?text=Olá! Gostaria de saber mais sobre os serviços da Fotosmagicas24h`, '_blank')}
          >
            WhatsApp
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-background border-t border-border">
          <nav className="flex flex-col space-y-4 p-4">
            <button onClick={() => scrollToSection('services')} className="text-left text-foreground hover:text-primary transition-smooth">
              Serviços
            </button>
            <button onClick={() => scrollToSection('results')} className="text-left text-foreground hover:text-primary transition-smooth">
              Resultados
            </button>
            <button onClick={() => scrollToSection('packages')} className="text-left text-foreground hover:text-primary transition-smooth">
              Pacotes
            </button>
            <Button 
              variant="whatsapp" 
              size="sm"
              onClick={() => window.open(`https://wa.me/${phoneNumber}?text=Olá! Gostaria de saber mais sobre os serviços da Fotosmagicas24h`, '_blank')}
            >
              WhatsApp
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;