import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-tattoo.jpg";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Tattoo artist at work"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-32 md:py-40">
        <div className="max-w-2xl">
          <p className="text-primary font-body text-sm md:text-base tracking-[0.3em] uppercase mb-6 animate-fade-up">
            Estúdio de Tatuagem Premium
          </p>
          
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.9] mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            Arte que{" "}
            <span className="text-gradient">vive</span>
            <br />
            na sua pele
          </h1>
          
          <p className="text-muted-foreground text-lg md:text-xl font-body font-light max-w-lg mb-10 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            Transformamos suas ideias em obras de arte únicas e personalizadas. 
            Cada traço conta uma história.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <Button variant="hero" size="xl" onClick={scrollToContact}>
              Agendar Consulta
              <ArrowRight className="ml-2" />
            </Button>
            <Button variant="heroOutline" size="xl" onClick={() => document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" })}>
              Ver Portfólio
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
