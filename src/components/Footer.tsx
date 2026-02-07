import { Instagram } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border py-8 sm:py-12 px-4 sm:px-6">
      <div className="container mx-auto">
        <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
          <div className="flex items-center gap-2 sm:gap-3">
            <img src={logo} alt="Vision Tattoo Logo" className="w-8 h-8 sm:w-10 sm:h-10" />
            <div className="font-display text-xl sm:text-2xl font-bold tracking-tight">
              <span className="text-foreground">VISION</span>
              <span className="text-primary">TATTOO</span>
            </div>
          </div>

          <a
            href="https://www.instagram.com/studiovisiontattoo/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="Instagram"
          >
            <Instagram className="w-5 h-5" />
          </a>

          <p className="text-muted-foreground font-body text-xs sm:text-sm text-center">
            © 2024 Estudio Vision Tattoo. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
