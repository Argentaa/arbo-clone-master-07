import { Button } from "@/components/ui/button";
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
                <span className="text-primary">[Nome da Clínica]</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
                Automação inteligente para elevar a experiência do paciente e 
                otimizar seus processos de ponta a ponta.
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

            {/* Metrics */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-8">
              <div className="text-center sm:text-left">
                <div className="text-3xl md:text-4xl font-extrabold text-primary mb-2">
                  400%
                </div>
                <div className="text-gray-700 font-medium">
                  Retorno sobre investimento no primeiro ano
                </div>
              </div>
              
              <div className="text-center sm:text-left">
                <div className="text-3xl md:text-4xl font-extrabold text-secondary mb-2">
                  24/7
                </div>
                <div className="text-gray-700 font-medium">
                  Atendimento automatizado disponível
                </div>
              </div>
              
              <div className="text-center sm:text-left">
                <div className="text-3xl md:text-4xl font-extrabold text-primary mb-2">
                  1 mês
                </div>
                <div className="text-gray-700 font-medium">
                  Tempo de implementação da primeira fase
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