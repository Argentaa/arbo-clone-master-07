import { Mic, CalendarCheck, Repeat, TrendingUp } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";

const Oportunidades = () => {
  return (
    <section id="oportunidades" className="pb-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Soluções Principais */}
        <div className="mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Solução 1 */}
            <div className="card-arbo group">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Solução 1: Sua Clínica Online - Website Institucional Profissional
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Crie uma presença online moderna para apresentar sua clínica, seus serviços e facilitar o primeiro contato de novos pacientes com um design responsivo e profissional.
                </p>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-gray-700 mb-3 flex items-center">
                  <div className="w-2 h-2 bg-secondary rounded-full mr-2"></div>
                  Recursos Principais
                </h4>
                <ul className="space-y-2">
                  <li className="text-gray-600 text-sm flex items-start">
                    <div className="w-1.5 h-1.5 bg-secondary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Design moderno adaptado para celulares, tablets e computadores.
                  </li>
                  <li className="text-gray-600 text-sm flex items-start">
                    <div className="w-1.5 h-1.5 bg-secondary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Até 5 páginas (Início, Sobre, Serviços, Corpo Clínico, Contato).
                  </li>
                  <li className="text-gray-600 text-sm flex items-start">
                    <div className="w-1.5 h-1.5 bg-secondary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Formulário de contato e agendamento para captação de pacientes.
                  </li>
                  <li className="text-gray-600 text-sm flex items-start">
                    <div className="w-1.5 h-1.5 bg-secondary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Mapa de localização integrado e otimização inicial para Google (SEO).
                  </li>
                </ul>
              </div>
            </div>

            {/* Solução 2 */}
            <div className="card-arbo group">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Solução 2: Atendimento Sem Fronteiras - Plataforma de Telemedicina
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Ofereça atendimento remoto de forma segura e integrada, quebrando barreiras geográficas e proporcionando mais conveniência aos seus pacientes.
                </p>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-gray-700 mb-3 flex items-center">
                  <div className="w-2 h-2 bg-secondary rounded-full mr-2"></div>
                  Recursos Principais
                </h4>
                <ul className="space-y-2">
                  <li className="text-gray-600 text-sm flex items-start">
                    <div className="w-1.5 h-1.5 bg-secondary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Portal exclusivo para paciente e profissional de saúde.
                  </li>
                  <li className="text-gray-600 text-sm flex items-start">
                    <div className="w-1.5 h-1.5 bg-secondary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Videochamadas seguras e criptografadas para as consultas.
                  </li>
                  <li className="text-gray-600 text-sm flex items-start">
                    <div className="w-1.5 h-1.5 bg-secondary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Emissão de prescrições e atestados digitais.
                  </li>
                  <li className="text-gray-600 text-sm flex items-start">
                    <div className="w-1.5 h-1.5 bg-secondary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Agenda de teleconsultas integrada.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

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
          <Card className="lg:col-span-2 mt-8 lg:mt-0 bg-gradient-glow border-0 p-8">
            <CardHeader className="text-center p-0 mb-8">
              <CardTitle className="text-3xl font-extrabold text-gray-900 mb-4">
                Potencial de Transformação
              </CardTitle>
              <CardDescription className="text-lg text-gray-700 max-w-2xl mx-auto">
                A implementação completa dessas soluções pode gerar uma transformação
                radical na eficiência operacional e experiência do paciente.
              </CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center flex flex-col justify-center items-center">
                  <div className="text-6xl font-extrabold text-primary mb-2" style={{
                    fontWeight: 800,
                    lineHeight: '1.05',
                    letterSpacing: '-0.01em'
                  }}>70 – 90%</div>
                  <div className="text-lg text-muted-foreground font-medium max-w-[20ch] mx-auto mt-1.5" style={{
                    fontWeight: 500,
                    lineHeight: '1.3'
                  }}>Automação no atendimento</div>
                </div>
                <div className="text-center flex flex-col justify-center items-center">
                  <div className="text-6xl font-extrabold text-primary mb-2" style={{
                    fontWeight: 800,
                    lineHeight: '1.05',
                    letterSpacing: '-0.01em'
                  }}>30 – 60%</div>
                  <div className="text-lg text-muted-foreground font-medium max-w-[20ch] mx-auto mt-1.5" style={{
                    fontWeight: 500,
                    lineHeight: '1.3'
                  }}>Redução de no-shows</div>
                </div>
                <div className="text-center flex flex-col justify-center items-center">
                  <div className="text-6xl font-extrabold text-primary mb-2" style={{
                    fontWeight: 800,
                    lineHeight: '1.05',
                    letterSpacing: '-0.01em'
                  }}>15 – 35%</div>
                  <div className="text-lg text-muted-foreground font-medium max-w-[20ch] mx-auto mt-1.5" style={{
                    fontWeight: 500,
                    lineHeight: '1.3'
                  }}>Aumento de conversões</div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="mt-8 p-0 justify-center">
              <p className="text-sm text-gray-500 text-center">
                Faixas estimadas; refinadas após o mapeamento.
              </p>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Oportunidades;
