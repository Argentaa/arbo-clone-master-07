import { Button } from "@/components/ui/button";
import { Globe, Video, Package } from "lucide-react";

const Orcamento = () => {
  const planos = [
    {
      icon: Globe,
      title: "Site Institucional",
      desenvolvimento: "R$ 3.800,00",
      desenvolvimentoLabel: "(pagamento único)",
      manutencao: "R$ 80,00",
      manutencaoLabel: "(mensal)",
    },
    {
      icon: Video,
      title: "Plataforma de Telemedicina",
      desenvolvimento: "R$ 8.500,00",
      desenvolvimentoLabel: "(pagamento único)",
      manutencao: "R$ 550,00",
      manutencaoLabel: "(mensal)",
    },
    {
      icon: Package,
      title: "Pacote Combo",
      desenvolvimento: "R$ 11.000,00",
      desenvolvimentoLabel: "(R$ 1300 de desconto)",
      manutencao: "R$ 450,00",
      manutencaoLabel: "(mensal)",
    },
  ];

  return (
    <section id="orcamento" className="pb-32 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-6">
            Planos de Desenvolvimento e Manutenção
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Escolha a solução ideal para sua clínica com total transparência e foco em resultados.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {planos.map((plano, index) => (
            <div
              key={index}
              className="card-arbo group relative overflow-hidden transition-all duration-300 ease-in-out flex flex-col h-full hover:shadow-xl hover:-translate-y-2"
            >
              {/* Efeito de brilho no hover */}
              <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-40 group-hover:animate-shine" />

              <div className="text-center p-6 flex-grow flex flex-col">
                <div className="w-16 h-16 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                  <plano.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {plano.title}
                </h3>

                <div className="space-y-6 flex-grow mt-4">
                  <div className="text-center">
                    <div className="text-sm text-gray-600 mb-1">Desenvolvimento</div>
                    <div className="text-3xl font-bold text-gray-800">{plano.desenvolvimento}</div>
                    <div className="text-xs text-gray-500">{plano.desenvolvimentoLabel}</div>
                  </div>
                  <div className="text-center pt-6 border-t border-gray-200">
                    <div className="text-sm text-gray-600 mb-1">Manutenção</div>
                    <div className="text-3xl font-bold text-gray-800">{plano.manutencao}</div>
                    <div className="text-xs text-gray-500">{plano.manutencaoLabel}</div>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Orcamento;