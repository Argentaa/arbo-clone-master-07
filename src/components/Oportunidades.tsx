import { Mic, CalendarCheck, Repeat, TrendingUp } from "lucide-react";

const Oportunidades = () => {
  return (
    <section id="oportunidades" className="pb-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-6">
            Oportunidades Identificadas
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Principais oportunidades de automação com IA para reduzir gargalos, aumentar eficiência e gerar impacto imediato no faturamento.
          </p>
        </div>

        {/* Opportunities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Análise de Atendimento e Performance */}
          <div className="card-arbo group">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mr-4 flex-shrink-0 flex-grow-0">
                  <Mic className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  Análise de Atendimento e Performance
                </h3>
              </div>
              <span className="badge-priority-alta">Alta</span>
            </div>
            <div className="space-y-6">
              <div>
                <h4 className="text-sm font-semibold text-gray-700 mb-3 flex items-center">
                  <div className="w-2 h-2 bg-gray-400 rounded-full mr-2"></div>
                  Situação Atual
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Dificuldade em avaliar e padronizar a qualidade dos atendimentos. Treinamentos de equipe baseados em observações subjetivas e pontuais, sem métricas claras de performance.
                </p>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-gray-700 mb-3 flex items-center">
                  <div className="w-2 h-2 bg-secondary rounded-full mr-2"></div>
                  Solução com IA
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Sistema que grava, transcreve e analisa o áudio dos atendimentos, pontuando o desempenho da equipe com base na metodologia de vendas SPIN SELLING.
                </p>
              </div>
              <div className="pt-4 border-t border-gray-200">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium text-gray-500">
                    Impacto Esperado
                  </span>
                  <span className="text-sm font-bold text-primary">
                    40% de aumento na conversão de agendamentos
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Agente de Atendimento 24/7 */}
          <div className="card-arbo group">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mr-4 flex-shrink-0 flex-grow-0">
                  <CalendarCheck className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  Agente de Atendimento 24/7
                </h3>
              </div>
              <span className="badge-priority-alta">Alta</span>
            </div>
            <div className="space-y-6">
              <div>
                <h4 className="text-sm font-semibold text-gray-700 mb-3 flex items-center">
                  <div className="w-2 h-2 bg-gray-400 rounded-full mr-2"></div>
                  Situação Atual
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Pacientes não conseguem agendar ou tirar dúvidas fora do horário comercial, resultando em perda de oportunidades. Recepção sobrecarregada com tarefas repetitivas.
                </p>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-gray-700 mb-3 flex items-center">
                  <div className="w-2 h-2 bg-secondary rounded-full mr-2"></div>
                  Solução com IA
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Agente de atendimento 24/7 com IA para marcar, remarcar consultas, tirar dúvidas sobre convênios e explicar procedimentos detalhados para exames.
                </p>
              </div>
              <div className="pt-4 border-t border-gray-200">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium text-gray-500">
                    Impacto Esperado
                  </span>
                  <span className="text-sm font-bold text-primary">
                    90% de redução nas chamadas para agendamento
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Gestão de Comparecimento */}
          <div className="card-arbo group">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mr-4 flex-shrink-0 flex-grow-0">
                  <Repeat className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  Gestão de Comparecimento
                </h3>
              </div>
              <span className="badge-priority-media">Média</span>
            </div>
            <div className="space-y-6">
              <div>
                <h4 className="text-sm font-semibold text-gray-700 mb-3 flex items-center">
                  <div className="w-2 h-2 bg-gray-400 rounded-full mr-2"></div>
                  Situação Atual
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Alta taxa de não comparecimento (no-show) e horários vagos por cancelamentos, sem um processo proativo para reverter a situação e preencher a agenda.
                </p>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-gray-700 mb-3 flex items-center">
                  <div className="w-2 h-2 bg-secondary rounded-full mr-2"></div>
                  Solução com IA
                </h4>
                <ul className="space-y-2">
                  <li className="text-gray-600 text-sm flex items-start">
                    <div className="w-1.5 h-1.5 bg-secondary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Agente para envio de lembretes automáticos e inteligentes.
                  </li>
                  <li className="text-gray-600 text-sm flex items-start">
                    <div className="w-1.5 h-1.5 bg-secondary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Agente de "repescagem" que contata proativamente pacientes que faltaram para tentar remarcar a consulta.
                  </li>
                </ul>
              </div>
              <div className="pt-4 border-t border-gray-200">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium text-gray-500">
                    Impacto Esperado
                  </span>
                  <span className="text-sm font-bold text-primary">
                    60% de redução em no-shows
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Recuperação de Leads */}
          <div className="card-arbo group">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mr-4 flex-shrink-0 flex-grow-0">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  Recuperação de Leads
                </h3>
              </div>
              <span className="badge-priority-media">Média</span>
            </div>
            <div className="space-y-6">
              <div>
                <h4 className="text-sm font-semibold text-gray-700 mb-3 flex items-center">
                  <div className="w-2 h-2 bg-gray-400 rounded-full mr-2"></div>
                  Situação Atual
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Perda de potenciais pacientes que iniciam o processo de agendamento online mas não o concluem, sem um acompanhamento para entender e reverter a desistência.
                </p>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-gray-700 mb-3 flex items-center">
                  <div className="w-2 h-2 bg-secondary rounded-full mr-2"></div>
                  Solução com IA
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Automação de follow-ups específicos com base na etapa exata em que o lead parou no processo de agendamento, incentivando a conclusão.
                </p>
              </div>
              <div className="pt-4 border-t border-gray-200">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium text-gray-500">
                    Impacto Esperado
                  </span>
                  <span className="text-sm font-bold text-primary">
                    35% de aumento na conversão de novos pacientes
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Summary */}
          <div className="card-arbo bg-gradient-glow border-0 lg:col-span-2 mt-8 lg:mt-0">
          <br></br><br></br>
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Potencial de Transformação
              </h3>
              <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
                A implementação completa dessas soluções pode gerar uma transformação
                radical na eficiência operacional e experiência do paciente.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center flex flex-col justify-center items-center">
                  <div className="text-5xl font-bold text-secondary mb-2">70–90%</div>
                  <div className="text-lg text-gray-600">Cobertura de automação 24/7 nas interações de atendimento</div>
                </div>
                <div className="text-center flex flex-col justify-center items-center">
                  <div className="text-5xl font-bold text-primary mb-2">30–60%</div>
                  <div className="text-lg text-gray-600">Redução de no-shows</div>
                </div>
                <div className="text-center flex flex-col justify-center items-center">
                  <div className="text-5xl font-bold text-secondary mb-2">15–35%</div>
                  <div className="text-lg text-gray-600">Aumento na conversão de novos pacientes</div>
                </div>
              </div>
              
              <div className="mt-6">
                <p className="text-sm text-gray-500 text-center">
                  Faixas estimadas; refinadas após o mapeamento.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Oportunidades;
