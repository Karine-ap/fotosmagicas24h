import { Button } from "@/components/ui/button";
import { MessageCircle, Mail, Clock, Shield } from "lucide-react";

const Footer = () => {
  const phoneNumber = "5511999999999"; // Número editável
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="text-2xl font-bold mb-6 bg-gradient-to-r from-accent to-primary-glow bg-clip-text text-transparent">
              Fotosmagicas24h
            </div>
            <p className="text-primary-foreground/80 mb-6">
              Democratizando o acesso à publicidade digital de alta performance com o poder da Inteligência Artificial.
            </p>
            <div className="space-y-3">
              <div className="flex items-center text-sm">
                <Clock className="w-4 h-4 mr-2 text-accent" />
                Atendimento 24h
              </div>
              <div className="flex items-center text-sm">
                <Shield className="w-4 h-4 mr-2 text-accent" />
                Resultados Garantidos
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Nossos Serviços</h3>
            <ul className="space-y-3 text-primary-foreground/80">
              <li>• Melhoria de Resolução com IA</li>
              <li>• Edição Profissional</li>
              <li>• Otimização para Anúncios</li>
              <li>• Consultoria Visual</li>
              <li>• Pacotes Personalizados</li>
            </ul>
          </div>

          {/* Results */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Nossos Resultados</h3>
            <ul className="space-y-3 text-primary-foreground/80">
              <li>• +75% Taxa de Conversao</li>
              <li>• +60% Cliques em Anúncios</li>
              <li>• +45% Aumento no Faturamento</li>
              <li>• +500 Clientes Satisfeitos</li>
              <li>• 24h Entrega Garantida</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Entre em Contato</h3>
            <div className="space-y-4">
              <Button 
                variant="cta" 
                size="lg" 
                className="w-full"
                onClick={() => window.open(`https://wa.me/${phoneNumber}?text=Olá! Gostaria de saber mais sobre os serviços da Fotosmagicas24h`, '_blank')}
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                WhatsApp
              </Button>
              <div className="text-primary-foreground/80 text-sm">
                <div className="flex items-center mb-2">
                  <Mail className="w-4 h-4 mr-2 text-accent" />
                  contato@fotosmagicas24h.com.br
                </div>
                <p>Resposta em até 2 horas</p>
              </div>
            </div>
          </div>
        </div>

        {/* Mission Statement */}
        <div className="border-t border-primary-foreground/20 mt-12 pt-8">
          <div className="bg-secondary/20 rounded-lg p-6 mb-8">
            <h4 className="font-semibold text-lg mb-3 text-accent">Nossa Missão</h4>
            <p className="text-primary-foreground/90 leading-relaxed">
              Oferecer soluções inovadoras em criação de conteúdo visual para anúncios, combinando a eficiência da IA 
              com a expertise humana em estratégia e criatividade, garantindo resultados tangíveis para nossos clientes.
            </p>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-primary-foreground/20 pt-8 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-primary-foreground/60 text-sm">
              © {currentYear} Fotosmagicas24h. Todos os direitos reservados.
            </div>
            <div className="flex space-x-6 text-primary-foreground/60 text-sm">
              <button className="hover:text-accent transition-smooth">Termos de Uso</button>
              <button className="hover:text-accent transition-smooth">Política de Privacidade</button>
              <button className="hover:text-accent transition-smooth">Contato</button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;