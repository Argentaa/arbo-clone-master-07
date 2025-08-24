import { Button } from "@/components/ui/button";
import { Check, Star, Clock, FileText, Users, Brain, TrendingUp, Shield, Target, DollarSign } from "lucide-react";

const Orcamento = () => {
  const entregaveis = [
    { icon: Users, label: "Descoberta com stakeholders (3–5 entrevistas)" },
    { icon: FileText, label: "Mapeamento AS-IS e TO-BE (6–8 processos núcleo)" },
    { icon: Brain, label: "Blueprint de IA (aplicações, dados, integrações — alto nível)" },
    { icon: Target, label: "Matriz de Oportunidades (Impacto × Esforço) e priorização (ICE/RICE)" },
    { icon: TrendingUp, label: "Plano de aumento de faturamento (quick wins 30 dias; metas 60–90 dias)" },
    { icon: DollarSign, label: "Estimativas de ganho de receita e ROI (faixas com premissas)" },
    { icon: Target, label: "Plano de medição (KPIs e metas)" },
    { icon: FileText, label: "Dossiê documentado (PDF/Notion) + apresentação executiva" }
  ];

  return (
    <section id="orcamento" className="pb-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-6">
            Orçamento Personalizado
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Investimento estruturado para consultoria completa e mapeamento profundo. 
            O diagnóstico apresentado acima foi simplificado - o mapeamento inclui análise detalhada de todos os processos.
          </p>
        </div>

        {/* Single Pricing Card */}
        <div className="max-w-4xl mx-auto">
          <div className="card-arbo relative ring-2 ring-primary glow-primary">

            {/* Pricing Header */}
            <div className="text-center mb-8 pt-4">
              <div className="mb-6">
                <span className="text-5xl md:text-6xl font-extrabold text-gray-900">
                  R$ 6.900
                </span>
                <span className="text-gray-600 text-xl block mt-2">
                  / projeto
                </span>
              </div>
              <p className="text-gray-600 text-lg leading-relaxed max-w-2xl mx-auto">
                Consultoria de mapeamento (sem implementação técnica)
              </p>
            </div>

            {/* Entregáveis Grid */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">
                Entregáveis Incluídos
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {entregaveis.map((entregavel, index) => (
                  <div key={index} className="flex items-start p-3 rounded-lg bg-gray-50 border border-gray-200">
                    <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                      <entregavel.icon className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-gray-700 text-sm leading-relaxed">
                      {entregavel.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Prazo */}
            <div className="flex items-center justify-center mb-8 py-4 bg-gray-50 rounded-lg border border-gray-200">
              <Clock className="w-5 h-5 text-primary mr-3" />
              <span className="text-gray-700 font-medium">
                Prazo estimado: 2–3 semanas
              </span>
            </div>

            {/* Condições Comerciais */}
            <div className="mb-8">
              <div className="card-arbo bg-gradient-glow border-0">
                <h3 className="text-lg font-bold text-gray-900 mb-4 text-center">
                  Condições Comerciais
                </h3>
                <p className="text-gray-700 text-center text-sm leading-relaxed">
                  50% na entrada • 50% na entrega • Validade 30 dias • Escopo sem implementação técnica (POCs/integr. opcionais)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Orcamento;