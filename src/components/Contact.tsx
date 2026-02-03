import { Button } from "@/components/ui/button";
import { MapPin, Phone, Instagram, MessageCircle } from "lucide-react";

const Contact = () => {
  const whatsappNumber = "5511999999999";
  const whatsappMessage = encodeURIComponent("Olá! Gostaria de agendar uma consulta para tatuagem.");
  const instagramUrl = "https://instagram.com/estudiovisiontattoo";

  return (
    <section id="contact" className="section-padding bg-card">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-4">
            Entre em Contato
          </p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
            Vamos criar sua{" "}
            <span className="text-gradient">próxima arte</span>
          </h2>
          <p className="text-muted-foreground font-body text-base sm:text-lg leading-relaxed mb-8 sm:mb-10">
            Entre em contato pelo WhatsApp ou Instagram para agendar uma consulta gratuita. 
            Discutiremos seu projeto, tiraremos dúvidas e criaremos algo único para você.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              asChild
              variant="hero"
              size="xl"
              className="gap-3"
            >
              <a
                href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp
              </a>
            </Button>

            <Button
              asChild
              variant="heroOutline"
              size="xl"
              className="gap-3"
            >
              <a
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="w-5 h-5" />
                Instagram
              </a>
            </Button>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10 text-muted-foreground">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                <MapPin className="w-4 h-4 text-primary" />
              </div>
              <span className="font-body text-sm">Rua Augusta, 1500 - São Paulo, SP</span>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                <Phone className="w-4 h-4 text-primary" />
              </div>
              <span className="font-body text-sm">(11) 99999-9999</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
