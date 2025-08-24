import { Search, AlertTriangle, Lightbulb, Activity } from "lucide-react";

const Processo = () => {
  const etapas = [
    {
      icon: Search,
      title: "Mapeamento Detalhado",
      descricao: "Análise profunda dos processos atuais",
      tempo: "1-2 semanas",
      badge: "Diagnóstico"
    },
    {
      icon: AlertTriangle,
      title: "Identificação de Gargalos",
      descricao: "Localização de pontos críticos",
      tempo: "1 semana",
      badge: "Análise"
    },
    {
      icon: Lightbulb,
      title: "Desenho das Soluções",
      descricao: "Criação de estratégias personalizadas",
      tempo: "2-3 semanas",
      badge: "Estratégia"
    },
    {
      icon: Activity,
      title: "Acompanhamento",
      descricao: "Monitoramento e otimização contínua",
      tempo: "contínuo",
      badge: "Execução"
    }
  ];

  return (
    <section id="processo" className="section-padding bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-6">
            Nossa Metodologia
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Processo estruturado e comprovado para identificar, priorizar e implementar 
            soluções de IA que geram resultados concretos.
          </p>
        </div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-20 left-0 right-0 h-0.5 bg-gradient-primary transform translate-y-1/2"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {etapas.map((etapa, index) => (
              <div key={index} className="relative">
                {/* Step Card */}
                <div className="card-arbo text-center relative z-10">
                  {/* Icon */}
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                    <etapa.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  {/* Content */}
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {etapa.title}
                      </h3>
                      <p className="text-gray-700 leading-relaxed">
                        {etapa.descricao}
                      </p>
                    </div>
                    
                    {/* Time Badge */}
                    <div className="flex flex-col items-center gap-2">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-secondary/10 text-secondary">
                        {etapa.badge}
                      </span>
                      <span className="text-sm font-semibold text-primary">
                        {etapa.tempo}
                      </span>
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

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="card-arbo max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Resultados Garantidos
            </h3>
            <p className="text-gray-700 mb-6">
              Nossa metodologia é baseada em cases reais e comprovados. 
              Entregamos valor desde a primeira semana de implementação.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-2xl font-bold text-primary mb-1">95%</div>
                <div className="text-sm text-gray-600">Taxa de sucesso</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-secondary mb-1">30 dias</div>
                <div className="text-sm text-gray-600">Primeiros resultados</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary mb-1">24/7</div>
                <div className="text-sm text-gray-600">Suporte dedicado</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Processo;