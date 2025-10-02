import { Globe, Video, CheckCircle2 } from "lucide-react";

const SolucoesDigitais = () => {
  return (
    <section id="solucoes-digitais" className="section-padding bg-gray-50/50 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-6">
            Soluções Digitais para{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Di Bem
            </span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Desenvolvemos sites modernos com as tecnologias mais atuais do mercado, garantindo segurança robusta e total compatibilidade com qualquer dispositivo.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Card 1: Website Institucional Profissional */}
          <div className="card-arbo group relative overflow-hidden transition-all duration-300 ease-in-out hover:shadow-xl hover:-translate-y-2">
            {/* Efeito de brilho no hover */}
            <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-40 group-hover:animate-shine" />
            
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mr-4 flex-shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  Website Institucional
                </h3>
              </div>
            </div>
            <div className="space-y-6">
              <div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Presença online moderna e profissional para fortalecer sua marca e alcançar mais pacientes.
                </p>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-gray-700 mb-3 flex items-center">
                  Recursos Principais
                </h4>
                <ul className="space-y-3">
                  <li className="flex items-start text-gray-600 hover:text-primary transition-colors duration-200">
                    <CheckCircle2 className="w-5 h-5 text-secondary mr-3 mt-px flex-shrink-0" />
                    <span>Design responsivo e otimizado para SEO</span>
                  </li>
                  <li className="flex items-start text-gray-600 hover:text-primary transition-colors duration-200">
                    <CheckCircle2 className="w-5 h-5 text-secondary mr-3 mt-px flex-shrink-0" />
                    <span>Formulário de contato e agendamento</span>
                  </li>
                  <li className="flex items-start text-gray-600 hover:text-primary transition-colors duration-200">
                    <CheckCircle2 className="w-5 h-5 text-secondary mr-3 mt-px flex-shrink-0" />
                    <span>Integração com Google Maps e WhatsApp</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Card 2: Plataforma de Telemedicina */}
          <div className="card-arbo group relative overflow-hidden transition-all duration-300 ease-in-out hover:shadow-xl hover:-translate-y-2">
            {/* Efeito de brilho no hover */}
            <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-40 group-hover:animate-shine" />

            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mr-4 flex-shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                  <Video className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  Plataforma de Telemedicina
                </h3>
              </div>
            </div>
            <div className="space-y-6">
              <div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Ofereça atendimento remoto seguro e conveniente, expandindo o alcance da sua clínica.
                </p>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-gray-700 mb-3 flex items-center">
                  Recursos Principais
                </h4>
                <ul className="space-y-3">
                  <li className="flex items-start text-gray-600 hover:text-primary transition-colors duration-200">
                    <CheckCircle2 className="w-5 h-5 text-secondary mr-3 mt-px flex-shrink-0" />
                    <span>Portal seguro para paciente e profissional</span>
                  </li>
                  <li className="flex items-start text-gray-600 hover:text-primary transition-colors duration-200">
                    <CheckCircle2 className="w-5 h-5 text-secondary mr-3 mt-px flex-shrink-0" />
                    <span>Videochamada criptografada e chat integrado</span>
                  </li>
                  <li className="flex items-start text-gray-600 hover:text-primary transition-colors duration-200">
                    <CheckCircle2 className="w-5 h-5 text-secondary mr-3 mt-px flex-shrink-0" />
                    <span>Agendamento e visualização de consultas</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolucoesDigitais;