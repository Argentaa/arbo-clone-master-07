import { CheckCircle, Target } from "lucide-react";

const Diagnostico = () => {

  const problemasAtuais = [
    "Processos manuais consomem 40% do tempo da equipe",
    "Agendamento majoritariamente por telefone",
    "Ausência de dashboard de KPIs e métricas",
    "Prontuários físicos dificultam busca de informações",
    "Comunicação reativa sem automação"
  ];

  const solucoesIA = [
    "IA para Agendamentos Inteligentes",
    "IA para Prontuários (OCR + classificação)",
    "IA para CRM e retorno de pacientes",
    "Analytics preditivo e dashboards em tempo real",
    "Chatbots para atendimento 24/7",
    "Automação de processos administrativos"
  ];


  return (
    <section id="diagnostico" className="section-padding bg-background scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            Diagnóstico Inicial
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-6">
            Análise Completa da sua Clínica
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Identificamos oportunidades específicas de automação e otimização baseadas em IA para transformar sua operação.
          </p>
        </div>

        {/* Executive Block */}
        <div className="card-arbo mb-16">
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Alavancas de Transformação
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              Nossa consultoria identifica e implementa soluções de IA que geram impacto imediato na eficiência operacional, 
              experiência do paciente e resultados financeiros da sua clínica.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Diagnóstico Atual */}
            <div>
              <h4 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                <Target className="w-6 h-6 text-primary mr-3" />
                Diagnóstico Atual
              </h4>
              <ul className="space-y-4">
                {problemasAtuais.map((problema, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-gray-400 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                    <span className="text-gray-700">{problema}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* To-be Solutions */}
            <div>
              <h4 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                <CheckCircle className="w-6 h-6 text-secondary mr-3" />
                To-be (Soluções com IA)
              </h4>
              <ol className="space-y-4">
                {solucoesIA.map((solucao, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-6 h-6 bg-gradient-primary text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 flex-shrink-0">
                      {index + 1}
                    </div>
                    <span className="text-gray-700">{solucao}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Diagnostico;