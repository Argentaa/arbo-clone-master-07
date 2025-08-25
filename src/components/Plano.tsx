import { ClipboardList, ListChecks, Workflow, GitBranch, Target, CheckCircle, Shield, AlertTriangle } from "lucide-react";

const Plano = () => {
  const fases = [
    {
      titulo: "Coleta Inicial & Kickoff de Dados",
      duracao: "≈ 3–5 dias",
      icon: ClipboardList,
      objetivos: [
        "Capturar contexto, metas de faturamento e dados mínimos para guiar o mapeamento"
      ],
      atividades: [
        "Roteiro de coleta + cronograma curto",
        "Baseline de KPIs AS-IS (volume, ticket, no-show, ocupação, conversão, receita por serviço)",
        "Checklist de dados/acessos priorizado (agenda/CRM/financeiro)"
      ],
      entregaveis: [
        "Interações rápidas: 1 call inicial de 20–30 min + envio de relatórios/prints",
        "Critérios de aceite: KPIs validados, dados mínimos disponíveis e pagamento inicial confirmado"
      ]
    },
    {
      titulo: "Mapeamento Profundo & Diagnóstico de Vazamentos",
      duracao: "≈ 7–10 dias", 
      icon: Workflow,
      objetivos: [
        "Mapear o AS-IS ponta a ponta, identificar gargalos e onde a receita vaza"
      ],
      atividades: [
        "Fluxos AS-IS dos 6–8 processos núcleo (captação → agendamento/confirm. → atendimento → cobrança/pós)",
        "Heatmap de vazamentos (taxa, ponto do funil e impacto em R$/mês)",
        "Versões TO-BE por processo com pontos de IA aderentes",
        "Ranking de alavancas por Impacto×Esforço e score ICE/RICE (Alta/Média/Baixa)"
      ],
      entregaveis: [
        "Entrevistas com pessoas-chave da operação (quantidade conforme necessidade), ex.: recepção, atendimento, faturamento, coordenação",
        "Acesso supervisionado à agenda/CRM/financeiro para amostras e conferências",
        "Esclarecimentos pontuais por chat/e-mail durante o mapeamento",
        "Critérios de aceite: fluxos AS-IS validados pelos responsáveis e principais gargalos priorizados"
      ]
    },
    {
      titulo: "Soluções Propostas & Priorização por ROI",
      duracao: "≈ 5–7 dias",
      icon: Target,
      objetivos: [
        "Converter o diagnóstico em plano de ganho priorizado por ROI e payback"
      ],
      atividades: [
        "3–5 one-pagers de soluções (objetivo, dado necessário, integração alto nível, fluxo)",
        "Matriz Impacto×Esforço + ROI/Payback (faixas) por solução",
        "Roadmap 30/60/90 com metas financeiras e KPIs",
        "Business Case em faixas (ganho mensal R$X–R$Y, ROI A–B×, payback C–D meses) com premissas",
        "Dossiê final (PDF/Notion) e apresentação executiva"
      ],
      entregaveis: [
        "Reunião de apresentação do mapeamento e das soluções (20–30 min): visão dos gargalos, ganhos estimados e roadmap 30/60/90",
        "Registro de dúvidas e ajustes finais no documento",
        "Definição de responsáveis (owners) e metas por KPI",
        "Critérios de aceite: dossiê final (PDF/Notion) entregue e roadmap de 90 dias validado pela clínica"
      ]
    }
  ];

  const subcards = [
    {
      titulo: "Governança & Comunicação",
      icon: Shield,
      conteudo: [
        "Rituais: kickoff, weeklies de status, steering committee mensal",
        "Canais: Slack/Teams dedicado, dashboards de progresso, relatórios executivos",
        "RACI: responsabilidades claras entre ARBO, clínica e eventuais fornecedores"
      ]
    },
    {
      titulo: "Escopo & Limites",
      icon: CheckCircle,
      conteudo: [
        "Incluído: diagnóstico, mapeamento, blueprint IA, plano executivo, governança",
        "Excluído: implementação técnica, desenvolvimento de código, integrações",
        "Opcionais: POCs, MVP, acompanhamento de execução (cotados separadamente)"
      ]
    },
    {
      titulo: "Riscos & Mitigações",
      icon: AlertTriangle,
      conteudo: [
        "Dados: qualidade/disponibilidade limitada → auditoria prévia e plano B",
        "Agenda: indisponibilidade de stakeholders → flexibilidade e sessões gravadas",
        "Sistemas: restrições técnicas → mapeamento de APIs e alternativas"
      ]
    }
  ];

  return (
    <section id="plano" className="pb-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-6">
            Plano de Consultoria & Mapeamento
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Fases, atividades e entregáveis para transformar o diagnóstico em plano executivo 
            com soluções de IA personalizadas e roadmap de implementação.
          </p>
        </div>

        {/* Phases Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {fases.map((fase, index) => (
            <div key={index} className="card-arbo group hover:shadow-xl transition-all duration-300">
              {/* Header */}
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 rounded-full flex items-center justify-center mr-4" style={{ backgroundColor: '#E6F0FB' }}>
                  <fase.icon className="w-6 h-6 text-primary" strokeWidth={2} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">
                    {fase.titulo}
                  </h3>
                </div>
              </div>

              {/* Objetivos */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-gray-700 mb-3 flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
                  Objetivos
                </h4>
                <ul className="space-y-2">
                  {fase.objetivos.map((objetivo, objIndex) => (
                    <li key={objIndex} className="text-gray-600 text-sm flex items-start">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      {objetivo}
                    </li>
                  ))}
                </ul>
              </div>

                {/* Você recebe */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-700 mb-3 flex items-center">
                    <div className="w-2 h-2 bg-secondary rounded-full mr-2"></div>
                    Você recebe
                  </h4>
                <ul className="space-y-2">
                  {fase.atividades.map((atividade, atIndex) => (
                    <li key={atIndex} className="text-gray-600 text-sm flex items-start">
                      <div className="w-1.5 h-1.5 bg-secondary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      {atividade}
                    </li>
                  ))}
                </ul>
              </div>

                {/* Participação & Critérios */}
                <div className="pt-4 border-t border-gray-200">
                  <h4 className="text-sm font-semibold text-gray-700 mb-3 flex items-center">
                    <CheckCircle className="w-4 h-4 text-primary mr-2" />
                    Participação & Critérios
                  </h4>
                <ul className="space-y-2">
                  {fase.entregaveis.map((entregavel, entIndex) => (
                    <li key={entIndex} className="text-gray-600 text-sm flex items-start">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      {entregavel}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Plano;