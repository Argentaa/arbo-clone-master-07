import { Button } from "@/components/ui/button";
import { Eye, TrendingUp, Target } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="pt-32 pb-16 md:pb-24 lg:pb-32 grid-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
                Transformação Digital para{" "}
                <span className="text-primary">Clínica Di Bem</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
                Transformamos a jornada do seu paciente com tecnologia, otimizando cada ponto de contato, para uma experiência de saúde verdadeiramente moderna.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="hero" 
                size="lg"
                onClick={() => scrollToSection('diagnostico')}
                className="text-base px-8 py-3"
              >
                Ver Proposta Completa
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => scrollToSection('orcamento')}
                className="text-base px-8 py-3"
              >
                Ver Investimento
              </Button>
            </div>

            {/* Benefícios Tangíveis */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-8">
              <div className="text-center sm:text-left">
                <div className="flex items-center justify-center sm:justify-start mb-3">
                  <Eye className="w-8 h-8 text-primary" />
                </div>
                <div className="text-lg font-bold text-gray-900 mb-2">
                  Visão clara dos gargalos e desperdícios
                </div>
                <div className="text-gray-600 text-sm">
                  Identificação precisa dos pontos de melhoria
                </div>
              </div>
              
              <div className="text-center sm:text-left">
                <div className="flex items-center justify-center sm:justify-start mb-3">
                  <TrendingUp className="w-8 h-8 text-secondary" />
                </div>
                <div className="text-lg font-bold text-gray-900 mb-2">
                  Plano de aumento de faturamento estruturado
                </div>
                <div className="text-gray-600 text-sm">
                  Estratégia clara para crescimento da receita
                </div>
              </div>
              
              <div className="text-center sm:text-left">
                <div className="flex items-center justify-center sm:justify-start mb-3">
                  <Target className="w-8 h-8 text-primary" />
                </div>
                <div className="text-lg font-bold text-gray-900 mb-2">
                  Prioridades definidas por ROI e impacto
                </div>
                <div className="text-gray-600 text-sm">
                  Foco nas ações que geram maior retorno
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative">
            <div className="card-arbo glow-primary">
              <img
                src={heroImage}
                alt="Consultoria em IA para clínicas - parceria entre médicos e inteligência artificial"
                className="w-full h-auto rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;