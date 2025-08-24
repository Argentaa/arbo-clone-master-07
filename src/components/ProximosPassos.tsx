import { Button } from "@/components/ui/button";
import { Calendar, MessageCircle, FileText, Rocket } from "lucide-react";

const ProximosPassos = () => {
  const passos = [
    {
      icon: MessageCircle,
      titulo: "Alinhamento",
      descricao: "Conversa inicial para entender necessidades específicas",
      tempo: "30 minutos"
    },
    {
      icon: FileText,
      titulo: "Coleta de Insumos",
      descricao: "Levantamento de dados e documentação atual",
      tempo: "1 semana"
    },
    {
      icon: Calendar,
      titulo: "Workshops de Mapeamento",
      descricao: "Sessões de descoberta e mapeamento de processos",
      tempo: "2 semanas"
    },
    {
      icon: Rocket,
      titulo: "Validação do Blueprint",
      descricao: "Apresentação e refinamento das soluções propostas",
      tempo: "1 semana"
    },
    {
      icon: Rocket,
      titulo: "Proposta Final / Kickoff",
      descricao: "Entrega do plano executivo e início da implementação",
      tempo: "Imediato"
    }
  ];

  return (
    <section id="proximos-passos" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-6">
            Próximos Passos
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Processo simples e transparente para iniciar a transformação digital 
            da sua clínica com soluções de IA personalizadas.
          </p>
        </div>

        {/* Steps */}
        <div className="relative mb-16">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-20 left-0 right-0 h-1 bg-gradient-primary"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {passos.map((passo, index) => (
              <div key={index} className="relative">
                {/* Step Card */}
                <div className="card-arbo text-center relative z-10">
                  {/* Icon */}
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                    <passo.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  {/* Content */}
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {passo.titulo}
                      </h3>
                      <p className="text-gray-700 leading-relaxed text-sm">
                        {passo.descricao}
                      </p>
                    </div>
                    
                    {/* Time */}
                    <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-secondary/10 text-secondary">
                      {passo.tempo}
                    </div>
                  </div>
                </div>

                {/* Step Number */}
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold z-20">
                  {index + 1}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="card-arbo bg-gradient-glow border-0 text-center">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Pronto para Transformar sua Clínica?
            </h3>
            <p className="text-gray-700 mb-8 leading-relaxed">
              Agende uma conversa sem compromisso para entender como a IA pode 
              revolucionar seus processos e multiplicar seus resultados.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" className="text-base px-8 py-3">
                Agendar Alinhamento
              </Button>
              <Button variant="outline" size="lg" className="text-base px-8 py-3">
                Baixar Escopo Modelo (PDF)
              </Button>
            </div>
            
            <div className="mt-8 pt-8 border-t border-gray-200">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-2xl font-bold text-primary mb-1">95%</div>
                  <div className="text-sm text-gray-600">Clientes satisfeitos</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-secondary mb-1">30 dias</div>
                  <div className="text-sm text-gray-600">Para primeiros resultados</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary mb-1">24/7</div>
                  <div className="text-sm text-gray-600">Suporte especializado</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProximosPassos;