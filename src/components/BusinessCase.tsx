import { TrendingUp, Clock, DollarSign, Target } from "lucide-react";

const BusinessCase = () => {
  const kpis = [
    {
      icon: TrendingUp,
      titulo: "Faturamento adicional estimado",
      valor: "+15% a +35%",
      descricao: "Aumento de receita por eficiência e novos pacientes"
    },
    {
      icon: Target,
      titulo: "ROI estimado",
      valor: "3× a 8×",
      descricao: "Retorno sobre investimento no primeiro ano"
    },
    {
      icon: Clock,
      titulo: "Payback",
      valor: "2 a 6 meses",
      descricao: "Tempo para recuperação do investimento"
    },
    {
      icon: DollarSign,
      titulo: "Economia administrativa",
      valor: "40% a 70%",
      descricao: "Redução em processos manuais e retrabalho"
    }
  ];

  const premissas = [
    {
      titulo: "Redução de No-Shows",
      valor: "De 20% para 8%",
      impacto: "Sistema de lembretes inteligentes"
    },
    {
      titulo: "Ticket Médio",
      valor: "R$ 180 por consulta",
      impacto: "Base atual da clínica"
    },
    {
      titulo: "Volume Mensal",
      valor: "800 consultas/mês",
      impacto: "Capacidade atual + crescimento"
    },
    {
      titulo: "Horas Administrativas",
      valor: "120h/mês atuais",
      impacto: "Redução de 60% com automação"
    },
    {
      titulo: "Taxa de Conversão",
      valor: "De 65% para 85%",
      impacto: "Atendimento 24/7 + triagem IA"
    },
    {
      titulo: "Retenção de Pacientes",
      valor: "De 70% para 90%",
      impacto: "Comunicação personalizada"
    }
  ];

  return (
    <section id="business-case" className="section-padding bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-6">
            Business Case (Estimativa)
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Faixas projetadas com base no diagnóstico e nas premissas da clínica. 
            Valores refinados após entrevistas e mapeamento detalhado.
          </p>
        </div>

        {/* KPIs */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {kpis.map((kpi, index) => (
            <div key={index} className="card-arbo text-center group hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <kpi.icon className="w-8 h-8 text-white" />
              </div>
              
              <div className="space-y-3">
                <h3 className="text-lg font-bold text-gray-900 leading-tight">
                  {kpi.titulo}
                </h3>
                
                <div className="text-3xl font-extrabold text-primary">
                  {kpi.valor}
                </div>
                
                <p className="text-gray-600 text-sm leading-relaxed">
                  {kpi.descricao}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Premissas de Cálculo */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Premissas de Cálculo
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {premissas.map((premissa, index) => (
              <div key={index} className="card-arbo bg-white border border-gray-200">
                <div className="space-y-3">
                  <h4 className="text-lg font-bold text-gray-900">
                    {premissa.titulo}
                  </h4>
                  
                  <div className="text-2xl font-bold text-primary">
                    {premissa.valor}
                  </div>
                  
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {premissa.impacto}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Disclaimer */}
        <div className="text-center">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-glow border border-primary/20">
            <span className="text-xs text-gray-600">
              Valores indicativos. As faixas serão refinadas após entrevistas e mapeamento detalhado.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessCase;