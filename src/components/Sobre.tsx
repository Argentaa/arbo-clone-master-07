import { Card, CardContent } from "@/components/ui/card";

const Sobre = () => {
  return (
    <section id="sobre" className="pb-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6 order-1 lg:order-1">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
              Arbo Automações
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              A Arbo Automações é uma empresa especializada em soluções de automação com inteligência artificial, focada em otimizar processos e aumentar a produtividade de empresas de todos os portes. Atuamos com inovação, tecnologia de ponta e um profundo conhecimento das necessidades do mercado moderno.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              Nossa missão é transformar a maneira como as empresas operam, implementando tecnologias avançadas de IA que simplificam tarefas complexas e liberam o potencial humano para atividades estratégicas. Acreditamos que a automação inteligente não apenas reduz custos e erros operacionais, mas também promove um ambiente corporativo mais eficiente, ágil e orientado para resultados.
            </p>
            
            <blockquote className="text-gray-600 text-lg italic border-l-4 border-primary pl-4">
              "Transformamos processos manuais em fluxos inteligentes, impulsionando a eficiência e inovação do seu negócio."
            </blockquote>
            <div className="space-y-3">
              <div className="flex items-center text-gray-700 text-lg">
                <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Automação de processos com tecnologia de ponta.
              </div>
              <div className="flex items-center text-gray-700 text-lg">
                <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Soluções personalizadas com foco em resultados.
              </div>
              <div className="flex items-center text-gray-700 text-lg">
                <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Parceria completa: da análise à implementação e suporte.
              </div>
            </div>

          </div>

          {/* Logo */}
          <div className="flex justify-center lg:justify-start order-2 lg:order-2">
            <img
              src="src/assets/logo.png"
              alt="Arbo Automações Logo"
              className="max-w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sobre;