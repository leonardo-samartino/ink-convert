import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="font-display text-2xl font-bold tracking-tight">
          <span className="text-foreground">VISION</span>
          <span className="text-primary">TATTOO</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <button
            onClick={() => scrollToSection("portfolio")}
            className="text-muted-foreground hover:text-foreground transition-colors font-body text-sm tracking-wide uppercase"
          >
            Instagram
          </button>
          <button
            onClick={() => scrollToSection("artists")}
            className="text-muted-foreground hover:text-foreground transition-colors font-body text-sm tracking-wide uppercase"
          >
            Artistas
          </button>
          <button
            onClick={() => scrollToSection("about")}
            className="text-muted-foreground hover:text-foreground transition-colors font-body text-sm tracking-wide uppercase"
          >
            Sobre
          </button>
          <button
            onClick={() => scrollToSection("services")}
            className="text-muted-foreground hover:text-foreground transition-colors font-body text-sm tracking-wide uppercase"
          >
            Serviços
          </button>
          <Button
            variant="hero"
            size="sm"
            onClick={() => scrollToSection("contact")}
          >
            Agendar
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden bg-background border-b border-border px-6 py-4 flex flex-col gap-4 animate-fade-in">
          <button
            onClick={() => scrollToSection("portfolio")}
            className="text-muted-foreground hover:text-foreground transition-colors font-body text-sm tracking-wide uppercase text-left"
          >
            Instagram
          </button>
          <button
            onClick={() => scrollToSection("artists")}
            className="text-muted-foreground hover:text-foreground transition-colors font-body text-sm tracking-wide uppercase text-left"
          >
            Artistas
          </button>
          <button
            onClick={() => scrollToSection("about")}
            className="text-muted-foreground hover:text-foreground transition-colors font-body text-sm tracking-wide uppercase text-left"
          >
            Sobre
          </button>
          <button
            onClick={() => scrollToSection("services")}
            className="text-muted-foreground hover:text-foreground transition-colors font-body text-sm tracking-wide uppercase text-left"
          >
            Serviços
          </button>
          <Button
            variant="hero"
            size="sm"
            onClick={() => scrollToSection("contact")}
            className="w-full"
          >
            Agendar
          </Button>
        </nav>
      )}
    </header>
  );
};

export default Header;
