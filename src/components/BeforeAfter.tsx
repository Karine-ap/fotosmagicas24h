import beforeAfterFood from "@/assets/before-after-food.jpg";
import beforeAfterFashion from "@/assets/before-after-fashion.jpg";

const BeforeAfter = () => {
  return (
    <section id="results" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Resultados que <span className="text-primary">Impressionam</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Veja a transformação que fazemos em suas imagens. A diferença é visível e os resultados são mensuráveis.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Food Before/After */}
          <div className="bg-background rounded-2xl p-8 shadow-primary hover-lift">
            <div className="mb-6">
              <h3 className="text-2xl font-semibold mb-2">Restaurante</h3>
              <p className="text-muted-foreground">Transformação de foto de cardápio</p>
            </div>
            <div className="relative rounded-lg overflow-hidden mb-6">
              <img 
                src={beforeAfterFood} 
                alt="Antes e depois - foto de comida melhorada com IA" 
                className="w-full h-80 object-cover"
              />
              <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                ANTES
              </div>
              <div className="absolute top-4 right-4 bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-medium">
                DEPOIS
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="bg-red-50 p-3 rounded-lg">
                <div className="font-semibold text-red-700">Antes</div>
                <div className="text-red-600">• Baixa resolução</div>
                <div className="text-red-600">• Cores desbotadas</div>
                <div className="text-red-600">• Aparência não apetitosa</div>
              </div>
              <div className="bg-green-50 p-3 rounded-lg">
                <div className="font-semibold text-green-700">Depois</div>
                <div className="text-green-600">• Alta definição</div>
                <div className="text-green-600">• Cores vibrantes</div>
                <div className="text-green-600">• Aspecto profissional</div>
              </div>
            </div>
          </div>

          {/* Fashion Before/After */}
          <div className="bg-background rounded-2xl p-8 shadow-primary hover-lift">
            <div className="mb-6">
              <h3 className="text-2xl font-semibold mb-2">E-commerce</h3>
              <p className="text-muted-foreground">Produto de moda otimizado</p>
            </div>
            <div className="relative rounded-lg overflow-hidden mb-6">
              <img 
                src={beforeAfterFashion} 
                alt="Antes e depois - foto de produto de moda melhorada com IA" 
                className="w-full h-80 object-cover"
              />
              <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                ANTES
              </div>
              <div className="absolute top-4 right-4 bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-medium">
                DEPOIS
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="bg-red-50 p-3 rounded-lg">
                <div className="font-semibold text-red-700">Antes</div>
                <div className="text-red-600">• Imagem pixelizada</div>
                <div className="text-red-600">• Detalhes perdidos</div>
                <div className="text-red-600">• Pouco atrativa</div>
              </div>
              <div className="bg-green-50 p-3 rounded-lg">
                <div className="font-semibold text-green-700">Depois</div>
                <div className="text-green-600">• Nitidez perfeita</div>
                <div className="text-green-600">• Detalhes realçados</div>
                <div className="text-green-600">• Conversão otimizada</div>
              </div>
            </div>
          </div>
        </div>

        {/* Impact Stats */}
        <div className="mt-16 bg-primary text-primary-foreground rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-6">Impacto Real nos Negócios</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="text-4xl font-bold text-accent mb-2">+75%</div>
              <div className="text-lg">Aumento na Taxa de Conversão</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent mb-2">+60%</div>
              <div className="text-lg">Mais Cliques nos Anúncios</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent mb-2">+45%</div>
              <div className="text-lg">Aumento no Faturamento</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfter;