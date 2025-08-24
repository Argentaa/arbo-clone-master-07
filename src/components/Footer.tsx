import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white section-padding">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="mb-6">
              <span className="text-3xl font-bold text-white">ARBO</span>
              <p className="text-gray-400 mt-2 max-w-md">
                Consultoria especializada em IA para transformação digital de clínicas. 
                Automatizamos processos e otimizamos resultados através de inteligência artificial.
              </p>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center text-gray-400">
                <Mail className="w-5 h-5 mr-3" />
                <span>contato@arbo.com.br</span>
              </div>
              <div className="flex items-center text-gray-400">
                <Phone className="w-5 h-5 mr-3" />
                <span>(11) 9999-9999</span>
              </div>
              <div className="flex items-center text-gray-400">
                <MapPin className="w-5 h-5 mr-3" />
                <span>São Paulo, SP</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Serviços</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Consultoria em IA</li>
              <li>Automação de Processos</li>
              <li>Chatbots Inteligentes</li>
              <li>Analytics Preditivo</li>
              <li>Implementação</li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Empresa</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Sobre Nós</li>
              <li>Cases de Sucesso</li>
              <li>Blog</li>
              <li>Contato</li>
              <li>Carreiras</li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2024 ARBO. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;