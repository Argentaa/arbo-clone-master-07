import { Users, Calendar, MessageCircle, BarChart3, DollarSign, Heart } from "lucide-react";

const Oportunidades = () => {
  const areas = [
    {
      icon: Users,
      title: "Gestão de Pacientes",
      situacaoAtual: "Cadastros manuais e busca lenta em prontuários físicos geram atrasos e inconsistências no atendimento.",
      solucaoIA: [
        "Digitalização automática com OCR inteligente",
        "Sistema de busca semântica em prontuários"
      ],
      prioridade: "Alta",
      impacto: "70% redução no tempo de consulta"
    },
    {
      icon: Calendar,
      title: "Agendamentos",
      situacaoAtual: "Sistema telefônico sobrecarregado com alta taxa de no-shows e dificuldade de reagendamentos.",
      solucaoIA: [
        "Chatbot para agendamentos 24/7",
        "Previsão inteligente de no-shows"
      ],
      prioridade: "Alta",
      impacto: "50% redução em no-shows"
    },
    {
      icon: MessageCircle,
      title: "Atendimento",
      situacaoAtual: "Recepção sobrecarregada com dúvidas repetitivas sobre horários, convênios e procedimentos.",
      solucaoIA: [
        "Assistente virtual para FAQ automático",
        "Triagem inteligente por urgência"
      ],
      prioridade: "Média",
      impacto: "60% redução em chamadas"
    },
    {
      icon: BarChart3,
      title: "Analytics",
      situacaoAtual: "Decisões baseadas em intuição sem dados concretos sobre performance e tendências.",
      solucaoIA: [
        "Dashboards preditivos em tempo real",
        "Análise de padrões de demanda"
      ],
      prioridade: "Média",
      impacto: "40% melhoria em decisões"
    },
    {
      icon: DollarSign,
      title: "Financeiro",
      situacaoAtual: "Controle manual de pagamentos e cobrança com alta inadimplência e processos morosos.",
      solucaoIA: [
        "Automação de cobrança personalizada",
        "Score de risco de inadimplência"
      ],
      prioridade: "Baixa",
      impacto: "30% redução em inadimplência"
    },
    {
      icon: Heart,
      title: "Relacionamento",
      situacaoAtual: "Comunicação genérica sem personalização, baixo engajamento e retenção de pacientes.",
      solucaoIA: [
        "Campanhas personalizadas por IA",
        "Análise de satisfação automática"
      ],
      prioridade: "Baixa",
      impacto: "25% aumento em retenção"
    }
  ];

  const getPriorityColor = (prioridade: string) => {
    switch (prioridade) {
      case "Alta": return "badge-priority-alta";
      case "Média": return "badge-priority-media";
      case "Baixa": return "badge-priority-baixa";
      default: return "badge-priority-media";
    }
  };

  return (
    <section id="oportunidades" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-6">
            Oportunidades Identificadas
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Análise detalhada das principais áreas de impacto onde a IA pode 
            transformar sua operação e gerar resultados imediatos.
          </p>
        </div>

        {/* Opportunities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {areas.map((area, index) => (
            <div key={index} className="card-arbo group">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mr-4">
                    <area.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">
                    {area.title}
                  </h3>
                </div>
                <span className={`${getPriorityColor(area.prioridade)}`}>
                  {area.prioridade}
                </span>
              </div>

              {/* Content */}
              <div className="space-y-6">
                {/* Situação Atual */}
                <div>
                  <h4 className="text-sm font-semibold text-gray-700 mb-3 flex items-center">
                    <div className="w-2 h-2 bg-gray-400 rounded-full mr-2"></div>
                    Situação Atual
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {area.situacaoAtual}
                  </p>
                </div>

                {/* Solução IA */}
                <div>
                  <h4 className="text-sm font-semibold text-gray-700 mb-3 flex items-center">
                    <div className="w-2 h-2 bg-secondary rounded-full mr-2"></div>
                    Solução com IA
                  </h4>
                  <ul className="space-y-2">
                    {area.solucaoIA.map((solucao, solIndex) => (
                      <li key={solIndex} className="text-gray-600 text-sm flex items-start">
                        <div className="w-1.5 h-1.5 bg-secondary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        {solucao}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Impacto */}
                <div className="pt-4 border-t border-gray-200">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-medium text-gray-500">
                      Impacto Esperado
                    </span>
                    <span className="text-sm font-bold text-primary">
                      {area.impacto}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Summary */}
        <div className="mt-16">
          <div className="card-arbo bg-gradient-glow border-0">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Potencial de Transformação
              </h3>
              <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
                A implementação completa dessas soluções pode gerar uma transformação 
                radical na eficiência operacional e experiência do paciente.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">85%</div>
                  <div className="text-sm text-gray-600">Redução em processos manuais</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-secondary mb-2">24/7</div>
                  <div className="text-sm text-gray-600">Disponibilidade de atendimento</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">60%</div>
                  <div className="text-sm text-gray-600">Aumento na satisfação</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-secondary mb-2">400%</div>
                  <div className="text-sm text-gray-600">ROI no primeiro ano</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Oportunidades;