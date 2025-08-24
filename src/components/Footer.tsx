const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold mb-8">Arbo Automações</h2>

        <div className="space-y-2 mb-8 text-gray-400">
          <p>Seberi, RS</p>
          <p>Telefone: +55 9 99696-1812</p>
          <p>Email: arboautomacoes@gmail.com</p>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-gray-400">
          <p>&copy; 2025 Arbo Automações. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;