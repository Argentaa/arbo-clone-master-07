import { Button } from "@/components/ui/button";

const Navbar = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <span className="text-2xl font-bold text-primary">Arbo Automações</span>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('diagnostico')}
              className="text-gray-700 hover:text-primary transition-colors font-medium"
            >
              Diagnóstico
            </button>
            <button
              onClick={() => scrollToSection('oportunidades')}
              className="text-gray-700 hover:text-primary transition-colors font-medium"
            >
              Oportunidades
            </button>
            <button
              onClick={() => scrollToSection('plano')}
              className="text-gray-700 hover:text-primary transition-colors font-medium"
            >
              Plano
            </button>
            <button
              onClick={() => scrollToSection('orcamento')}
              className="text-gray-700 hover:text-primary transition-colors font-medium"
            >
              Orçamento
            </button>
          </div>

          {/* CTA Button */}
          <div className="flex items-center">
            <Button 
              variant="hero" 
              size="lg"
              onClick={() => scrollToSection('orcamento')}
            >
              Iniciar Parceria
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;