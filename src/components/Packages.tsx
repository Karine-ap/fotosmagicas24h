import { Button } from "@/components/ui/button";
import { Check, Zap, Star, Crown, MessageCircle } from "lucide-react";

const Packages = () => {
  const phoneNumber = "5511921265421"; // Número editável

  const openWhatsApp = (packageType: string) => {
    const message = packageType === 'standard' 
      ? `Olá! Gostaria de contratar o Pacote Padrão - 30 Fotos Profissionais por R$ 360. Pode me dar mais detalhes?`
      : `Olá! Preciso de um pacote personalizado para meu projeto. Gostaria de renovar meu cardápio/catálogo inteiro e maximizar os resultados. Pode me ajudar?`;
    
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section id="packages" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Escolha Seu <span className="text-primary">Pacote</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Soluções profissionais para transformar suas imagens e impulsionar suas vendas.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Standard Package */}
          <div className="bg-background rounded-2xl p-8 shadow-primary hover-lift border-2 border-primary/20 relative">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <div className="bg-primary text-primary-foreground px-6 py-2 rounded-full text-sm font-medium flex items-center">
                <Star className="w-4 h-4 mr-2" />
                Mais Popular
              </div>
            </div>
            
            <div className="text-center mb-8">
              <div className="flex items-center justify-center mb-4">
                <Zap className="w-8 h-8 text-primary mr-3" />
                <h3 className="text-2xl font-bold">Pacote Padrão</h3>
              </div>
              
              <div className="mb-6">
                <div className="text-5xl font-bold text-primary mb-2">R$ 360</div>
                <div className="text-lg text-muted-foreground">Valor fixo • Entrega garantida</div>
              </div>
            </div>

            <div className="space-y-4 mb-8">
              <div className="flex items-center">
                <Check className="w-5 h-5 text-accent mr-3 flex-shrink-0" />
                <span className="font-medium">30 Fotos Profissionais</span>
              </div>
              <div className="flex items-center">
                <Check className="w-5 h-5 text-accent mr-3 flex-shrink-0" />
                <span className="font-medium">Edição com IA Avançada</span>
              </div>
              <div className="flex items-center">
                <Check className="w-5 h-5 text-accent mr-3 flex-shrink-0" />
                <span className="font-medium">2 Rodadas de Ajuste</span>
              </div>
              <div className="flex items-center">
                <Check className="w-5 h-5 text-accent mr-3 flex-shrink-0" />
                <span className="font-medium">Entrega em até 24h</span>
              </div>
              <div className="flex items-center">
                <Check className="w-5 h-5 text-accent mr-3 flex-shrink-0" />
                <span className="font-medium">Suporte via WhatsApp</span>
              </div>
              <div className="flex items-center">
                <Check className="w-5 h-5 text-accent mr-3 flex-shrink-0" />
                <span className="font-medium">Qualidade Profissional Garantida</span>
              </div>
            </div>

            <Button 
              variant="hero" 
              size="lg" 
              className="w-full"
              onClick={() => openWhatsApp('standard')}
            >
              Contratar Agora
              <MessageCircle className="ml-2 w-4 h-4" />
            </Button>

            <div className="text-center mt-4 text-sm text-muted-foreground">
              Ideal para cardápios, catálogos e anúncios
            </div>
          </div>

          {/* Custom Package */}
          <div className="bg-gradient-to-br from-secondary to-secondary/80 text-secondary-foreground rounded-2xl p-8 shadow-glow hover-lift relative">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <div className="bg-accent text-accent-foreground px-6 py-2 rounded-full text-sm font-medium flex items-center">
                <Crown className="w-4 h-4 mr-2" />
                Premium
              </div>
            </div>
            
            <div className="text-center mb-8">
              <div className="flex items-center justify-center mb-4">
                <Crown className="w-8 h-8 text-accent mr-3" />
                <h3 className="text-2xl font-bold">Pacote Personalizado</h3>
              </div>
              
              <div className="mb-6">
                <div className="text-5xl font-bold text-accent mb-2">Sob Consulta</div>
                <div className="text-lg opacity-90">Projetos completos • Resultados maximizados</div>
              </div>
            </div>

            <div className="space-y-4 mb-8">
              <div className="flex items-center">
                <Check className="w-5 h-5 text-accent mr-3 flex-shrink-0" />
                <span className="font-medium">Cardápio/Catálogo Completo</span>
              </div>
              <div className="flex items-center">
                <Check className="w-5 h-5 text-accent mr-3 flex-shrink-0" />
                <span className="font-medium">Estratégia Visual Personalizada</span>
              </div>
              <div className="flex items-center">
                <Check className="w-5 h-5 text-accent mr-3 flex-shrink-0" />
                <span className="font-medium">Consultoria de Marketing Visual</span>
              </div>
              <div className="flex items-center">
                <Check className="w-5 h-5 text-accent mr-3 flex-shrink-0" />
                <span className="font-medium">Acompanhamento de Resultados</span>
              </div>
              <div className="flex items-center">
                <Check className="w-5 h-5 text-accent mr-3 flex-shrink-0" />
                <span className="font-medium">Suporte Prioritário</span>
              </div>
              <div className="flex items-center">
                <Check className="w-5 h-5 text-accent mr-3 flex-shrink-0" />
                <span className="font-medium">Revisões Ilimitadas</span>
              </div>
            </div>

            <Button 
              variant="cta" 
              size="lg" 
              className="w-full"
              onClick={() => openWhatsApp('custom')}
            >
              Solicitar Orçamento
              <MessageCircle className="ml-2 w-4 h-4" />
            </Button>

            <div className="text-center mt-4 text-sm opacity-90">
              Para quem quer renovar tudo e maximizar resultados
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-20 max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12">Perguntas Frequentes</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-background rounded-lg p-6 shadow-sm">
              <h4 className="font-semibold mb-2">Como funciona o processo?</h4>
              <p className="text-muted-foreground text-sm">Você envia suas imagens, nossa IA processa e entrega em 24h com qualidade profissional.</p>
            </div>
            <div className="bg-background rounded-lg p-6 shadow-sm">
              <h4 className="font-semibold mb-2">Que tipos de imagem vocês melhoram?</h4>
              <p className="text-muted-foreground text-sm">Fotos de produtos, comida, pessoas, ambientes - qualquer imagem para uso comercial.</p>
            </div>
            <div className="bg-background rounded-lg p-6 shadow-sm">
              <h4 className="font-semibold mb-2">E se eu não ficar satisfeito?</h4>
              <p className="text-muted-foreground text-sm">Oferecemos 2 rodadas de ajuste incluídas para garantir sua total satisfação.</p>
            </div>
            <div className="bg-background rounded-lg p-6 shadow-sm">
              <h4 className="font-semibold mb-2">Qual o prazo de entrega?</h4>
              <p className="text-muted-foreground text-sm">Máximo 24h para o pacote padrão. Pacotes maiores têm prazo personalizado.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Packages;