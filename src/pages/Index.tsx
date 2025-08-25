import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Sobre from "@/components/Sobre";
import Diagnostico from "@/components/Diagnostico";
import Oportunidades from "@/components/Oportunidades";
import Plano from "@/components/Plano";
import Orcamento from "@/components/Orcamento";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Diagnostico />
      <Oportunidades />
      <Plano />
      <Orcamento />
      <Sobre />
      <Footer />
    </div>
  );
};

export default Index;
