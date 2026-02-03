import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";
import Artists from "@/components/Artists";
import About from "@/components/About";
import Services from "@/components/Services";
import Aftercare from "@/components/Aftercare";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Portfolio />
        <Artists />
        <About />
        <Services />
        <Aftercare />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
