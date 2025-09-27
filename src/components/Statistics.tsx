import { TrendingUp, Users, ShoppingCart, Eye } from "lucide-react";

const Statistics = () => {
  const stats = [
    {
      icon: <TrendingUp className="w-8 h-8 text-accent" />,
      value: "87%",
      label: "dos consumidores consideram a qualidade visual como fator decisivo na compra",
      source: "Fonte: Adobe Visual Trends Report 2024"
    },
    {
      icon: <ShoppingCart className="w-8 h-8 text-accent" />,
      value: "75%",
      label: "aumento na taxa de conversão com imagens de alta qualidade",
      source: "Fonte: E-commerce Image Quality Study 2024"
    },
    {
      icon: <Eye className="w-8 h-8 text-accent" />,
      value: "3x",
      label: "mais engajamento em redes sociais com imagens profissionais",
      source: "Fonte: Social Media Marketing Research 2024"
    },
    {
      icon: <Users className="w-8 h-8 text-accent" />,
      value: "94%",
      label: "das primeiras impressões estão relacionadas ao design visual",
      source: "Fonte: Stanford Web Credibility Research"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Por que <span className="text-primary">Qualidade</span> Importa?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Dados comprovam: a qualidade visual das suas imagens impacta diretamente no sucesso do seu negócio.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="bg-background rounded-xl p-8 shadow-primary hover-lift border border-border"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 p-3 bg-accent/10 rounded-lg">
                  {stat.icon}
                </div>
                <div className="flex-1">
                  <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
                  <p className="text-lg text-foreground mb-3 font-medium">{stat.label}</p>
                  <p className="text-sm text-muted-foreground italic">{stat.source}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-secondary text-secondary-foreground rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-4">
              Não Deixe Imagens de Baixa Qualidade Prejudicarem Seu Faturamento
            </h3>
            <p className="text-lg mb-6 opacity-90">
              A cada dia que passa com imagens amadoras, você está perdendo vendas para a concorrência. 
              Invista em qualidade e veja a diferença nos resultados.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="bg-white/20 p-4 rounded-lg backdrop-blur-sm">
                <div className="text-2xl font-bold">24h</div>
                <div className="text-sm">Entrega Rápida</div>
              </div>
              <div className="bg-white/20 p-4 rounded-lg backdrop-blur-sm">
                <div className="text-2xl font-bold">100%</div>
                <div className="text-sm">Satisfação</div>
              </div>
              <div className="bg-white/20 p-4 rounded-lg backdrop-blur-sm">
                <div className="text-2xl font-bold">+500</div>
                <div className="text-sm">Clientes Atendidos</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Statistics;