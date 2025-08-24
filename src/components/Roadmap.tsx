import { Calendar, Clock, CheckCircle } from "lucide-react";

const Roadmap = () => {
  const fases = [
    {
      mes: "Mês 1",
      titulo: "Fundação Digital",
      itens: [
        { nome: "Chatbot para Agendamentos", prioridade: "Alta", referencia: "Agendamentos" },
        { nome: "Digitalização de Prontuários", prioridade: "Alta", referencia: "Gestão de Pacientes" },
        { nome: "Dashboard Básico de KPIs", prioridade: "Média", referencia: "Analytics" }
      ]
    },
    {
      mes: "Mês 2",
      titulo: "Automação Inteligente",
      itens: [
        { nome: "IA para Triagem de Atendimento", prioridade: "Alta", referencia: "Atendimento" },
        { nome: "Sistema de Lembretes Automáticos", prioridade: "Média", referencia: "Agendamentos" },
        { nome: "OCR Avançado para Documentos", prioridade: "Média", referencia: "Gestão de Pacientes" }
      ]
    },
    {
      mes: "Mês 3",
      titulo: "Otimização Avançada",
      itens: [
        { nome: "Previsão de No-Shows", prioridade: "Média", referencia: "Agendamentos" },
        { nome: "Analytics Preditivo", prioridade: "Média", referencia: "Analytics" },
        { nome: "Automação de Cobrança", prioridade: "Baixa", referencia: "Financeiro" }
      ]
    },
    {
      mes: "Mês 4+",
      titulo: "Inteligência Estratégica",
      itens: [
        { nome: "IA para Relacionamento", prioridade: "Baixa", referencia: "Relacionamento" },
        { nome: "Score de Inadimplência", prioridade: "Baixa", referencia: "Financeiro" },
        { nome: "Otimização Contínua", prioridade: "Baixa", referencia: "Todos os Sistemas" }
      ]
    }
  ];

  const getPriorityStyle = (prioridade: string) => {
    switch (prioridade) {
      case "Alta": 
        return {
          bg: "bg-primary",
          text: "text-primary-foreground",
          border: "border-primary"
        };
      case "Média": 
        return {
          bg: "bg-primary/10",
          text: "text-primary",
          border: "border-primary/20"
        };
      case "Baixa": 
        return {
          bg: "bg-secondary/10",
          text: "text-secondary",
          border: "border-secondary/20"
        };
      default: 
        return {
          bg: "bg-gray-100",
          text: "text-gray-700",
          border: "border-gray-200"
        };
    }
  };

  return (
    <section id="roadmap" className="section-padding bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-6">
            Roadmap de Implementação
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8">
            Priorizamos ações em ondas de entrega, garantindo valor desde o primeiro mês 
            e construindo uma base sólida para transformação contínua.
          </p>
          
          {/* Priority Legend */}
          <div className="flex justify-center items-center gap-6 flex-wrap">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-primary rounded-full"></div>
              <span className="text-sm font-medium text-gray-700">Alta Prioridade</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-primary/30 rounded-full"></div>
              <span className="text-sm font-medium text-gray-700">Média Prioridade</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-secondary/30 rounded-full"></div>
              <span className="text-sm font-medium text-gray-700">Baixa Prioridade</span>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line - Hidden on mobile */}
          <div className="hidden lg:block absolute top-20 left-0 right-0 h-1 bg-gradient-primary"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {fases.map((fase, index) => (
              <div key={index} className="relative">
                {/* Phase Card */}
                <div className="card-arbo relative z-10">
                  {/* Month Header */}
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                      <Calendar className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {fase.mes}
                    </h3>
                    <p className="text-sm font-medium text-primary">
                      {fase.titulo}
                    </p>
                  </div>

                  {/* Items */}
                  <div className="space-y-4">
                    {fase.itens.map((item, itemIndex) => {
                      const style = getPriorityStyle(item.prioridade);
                      return (
                        <div 
                          key={itemIndex} 
                          className={`p-4 rounded-lg border ${style.border} ${style.bg} transition-all duration-200 hover:shadow-md`}
                        >
                          <div className="flex items-start justify-between mb-2">
                            <h4 className={`font-semibold text-sm ${style.text} leading-tight`}>
                              {item.nome}
                            </h4>
                            <CheckCircle className={`w-4 h-4 ${style.text} flex-shrink-0 ml-2`} />
                          </div>
                          
                          <div className="flex items-center justify-between">
                            <span className={`text-xs ${style.text} opacity-75`}>
                              Ref: {item.referencia}
                            </span>
                            <span className={`text-xs font-medium px-2 py-1 rounded-full ${style.bg} ${style.text} opacity-90`}>
                              {item.prioridade}
                            </span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Phase Number */}
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold z-20">
                  {index + 1}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Implementation Notes */}
        <div className="mt-16">
          <div className="card-arbo bg-gradient-glow border-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Metodologia de Entrega
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <Clock className="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">
                      <strong>Sprints de 2 semanas</strong> - Entregas incrementais com feedback contínuo
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-secondary mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">
                      <strong>Validação em produção</strong> - Testes reais com usuários antes da próxima fase
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Calendar className="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">
                      <strong>Ajustes dinâmicos</strong> - Roadmap flexível baseado em resultados e prioridades
                    </span>
                  </li>
                </ul>
              </div>
              
              <div className="text-center md:text-right">
                <div className="space-y-4">
                  <div>
                    <div className="text-3xl font-bold text-primary mb-1">100%</div>
                    <div className="text-sm text-gray-600">Foco no impacto do negócio</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-secondary mb-1">15 dias</div>
                    <div className="text-sm text-gray-600">Ciclo médio de entrega</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary mb-1">24/7</div>
                    <div className="text-sm text-gray-600">Suporte durante implementação</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;