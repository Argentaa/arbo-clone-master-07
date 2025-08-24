import { TrendingUp, Clock, Users, DollarSign } from "lucide-react";

const ROI = () => {
  const premissas = [
    {
      icon: Users,
      titulo: "Redução de 60% no tempo administrativo",
      descricao: "Automação de agendamentos, lembretes e triagem inicial",
      economia: "R$ 8.000/mês",
      base: "Considerando 2 funcionários administrativos"
    },
    {
      icon: Clock,
      titulo: "Diminuição de 50% nos no-shows",
      descricao: "Sistema inteligente de lembretes e confirmações",
      economia: "R$ 12.000/mês",
      base: "Baseado em 20% de no-shows atuais"
    },
    {
      icon: TrendingUp,
      titulo: "Aumento de 30% na eficiência médica",
      descricao: "Prontuários digitais e busca inteligente",
      economia: "R$ 15.000/mês",
      base: "Mais consultas por período"
    },
    {
      icon: DollarSign,
      titulo: "Redução de 25% na inadimplência",
      descricao: "Cobrança automatizada e personalizada",
      economia: "R$ 5.000/mês",
      base: "Melhoria no fluxo de caixa"
    }
  ];

  const calculos = {
    investimento: 45000, // Plano Avançado
    economiaAnual: 480000, // 40k/mês x 12
    roiPrimeiro: 966, // ((480000 - 45000) / 45000) * 100
    payback: 1.1 // 45000 / 40000
  };

  return (
    <section id="roi" className="section-padding bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-6">
            Retorno sobre Investimento
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Estimativas conservadoras baseadas em implementações reais em clínicas 
            similares demonstram ROI superior a 400% no primeiro ano.
          </p>
        </div>

        {/* ROI Summary */}
        <div className="card-arbo bg-gradient-primary text-primary-foreground mb-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-extrabold mb-2">
                {calculos.roiPrimeiro}%
              </div>
              <div className="text-sm opacity-90">
                ROI no primeiro ano
              </div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-extrabold mb-2">
                {calculos.payback.toFixed(1)} mês
              </div>
              <div className="text-sm opacity-90">
                Payback do investimento
              </div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-extrabold mb-2">
                R$ {(calculos.economiaAnual / 1000).toFixed(0)}k
              </div>
              <div className="text-sm opacity-90">
                Economia anual estimada
              </div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-extrabold mb-2">
                R$ 40k
              </div>
              <div className="text-sm opacity-90">
                Economia mensal média
              </div>
            </div>
          </div>
        </div>

        {/* Premissas de Cálculo */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Premissas de Cálculo
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {premissas.map((premissa, index) => (
              <div key={index} className="card-arbo">
                <div className="flex items-start mb-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <premissa.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-bold text-gray-900 mb-2">
                      {premissa.titulo}
                    </h4>
                    <p className="text-gray-700 text-sm mb-3 leading-relaxed">
                      {premissa.descricao}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                  <div>
                    <div className="text-2xl font-bold text-primary">
                      {premissa.economia}
                    </div>
                    <div className="text-xs text-gray-500">
                      {premissa.base}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline de Benefícios */}
        <div className="card-arbo bg-gradient-glow border-0">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Timeline de Benefícios
            </h3>
            <p className="text-gray-700">
              Projeção conservadora dos retornos ao longo do tempo
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold">30d</span>
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Primeiros Resultados</h4>
              <p className="text-sm text-gray-600 mb-3">
                Redução imediata em processos manuais e melhoria no atendimento
              </p>
              <div className="text-lg font-bold text-primary">15% economia</div>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold">90d</span>
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Otimização Completa</h4>
              <p className="text-sm text-gray-600 mb-3">
                Todos os sistemas integrados e funcionando em plena capacidade
              </p>
              <div className="text-lg font-bold text-primary">50% economia</div>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold">1a</span>
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Transformação Total</h4>
              <p className="text-sm text-gray-600 mb-3">
                Operação completamente otimizada com aprendizado contínuo da IA
              </p>
              <div className="text-lg font-bold text-primary">100% economia</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ROI;