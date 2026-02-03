import { Instagram, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border py-12 px-6">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="font-display text-2xl font-bold tracking-tight">
            <span className="text-foreground">VISION</span>
            <span className="text-primary">TATTOO</span>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5" />
            </a>
          </div>

          <p className="text-muted-foreground font-body text-sm">
            © 2024 Estudio Vision Tattoo. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
