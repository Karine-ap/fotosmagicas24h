import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Clock, Award } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  const phoneNumber = "5511999999999"; // Número editável

  const scrollToPackages = () => {
    const element = document.getElementById('packages');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center pt-20"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <div className="animate-float">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Transforme Suas Imagens com <span className="bg-gradient-to-r from-accent to-primary-glow bg-clip-text text-transparent">IA</span>
            </h1>
          </div>
          
          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Aumente suas vendas com imagens profissionais de alta resolução. 
            <strong> Comprovadamente aumenta conversões em até 75%</strong>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              variant="hero" 
              size="xl"
              onClick={scrollToPackages}
              className="w-full sm:w-auto"
            >
              Ver Pacotes
              <ArrowRight className="ml-2" />
            </Button>
            <Button 
              variant="outline" 
              size="xl"
              onClick={() => window.open(`https://wa.me/${phoneNumber}?text=Olá! Gostaria de um orçamento personalizado para meu projeto`, '_blank')}
              className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-primary"
            >
              Orçamento Personalizado
            </Button>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="flex flex-col items-center p-6 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 hover-lift">
              <Zap className="w-12 h-12 text-accent mb-4" />
              <h3 className="text-xl font-semibold mb-2">IA Avançada</h3>
              <p className="text-gray-300 text-center">Tecnologia de ponta para resultados profissionais</p>
            </div>
            <div className="flex flex-col items-center p-6 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 hover-lift">
              <Clock className="w-12 h-12 text-accent mb-4" />
              <h3 className="text-xl font-semibold mb-2">Entrega 24h</h3>
              <p className="text-gray-300 text-center">Rapidez sem comprometer a qualidade</p>
            </div>
            <div className="flex flex-col items-center p-6 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 hover-lift">
              <Award className="w-12 h-12 text-accent mb-4" />
              <h3 className="text-xl font-semibold mb-2">Resultados Garantidos</h3>
              <p className="text-gray-300 text-center">2 rodadas de ajuste incluídas</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;