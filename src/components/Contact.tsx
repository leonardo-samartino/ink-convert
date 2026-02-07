import { Button } from "@/components/ui/button";
import { MapPin, Phone, Instagram } from "lucide-react";
import { WhatsAppModal } from "@/components/WhatsAppModal";

const Contact = () => {
  const instagramUrl = "https://www.instagram.com/studiovisiontattoo/";

  return (
    <section id="contact" className="section-padding bg-card">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-4">
            Entre em Contato
          </p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
            Vamos criar sua <span className="text-gradient">próxima arte</span>
          </h2>
          <p className="text-muted-foreground font-body text-base sm:text-lg leading-relaxed mb-8 sm:mb-10">
            Entre em contato pelo WhatsApp ou Instagram para agendar uma consulta gratuita.
            Discutiremos seu projeto, tiraremos dúvidas e criaremos algo único para você.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            {/* WhatsApp (abre modal com escolha do artista) */}
            <WhatsAppModal />

            <Button asChild variant="heroOutline" size="xl" className="gap-3">
              <a href={instagramUrl} target="_blank" rel="noopener noreferrer">
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
              <span className="font-body text-sm"><a href= "https://www.google.com/maps/place/START+OFFICES/@-23.6187382,-46.7725409,3a,75y,0.56h,83.26t/data=!3m7!1e1!3m5!1sObUtPJMHyXe-8bb8gC2ijQ!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fcb_client%3Dmaps_sv.tactile%26w%3D900%26h%3D600%26pitch%3D6.743445393785393%26panoid%3DObUtPJMHyXe-8bb8gC2ijQ%26yaw%3D0.562206627480359!7i16384!8i8192!4m16!1m9!3m8!1s0x94ce54696741de97:0xd39328b00da46cc1!2sEstr.+São+Francisco,+1820+-+Parque+Fernanda,+Taboão+da+Serra+-+SP,+06765-000!3b1!8m2!3d-23.6186782!4d-46.7725217!10e5!16s%2Fg%2F11c4yt5l9h!3m5!1s0x94ce55f5f45d7169:0x5888a796df2ba932!8m2!3d-23.6184871!4d-46.7725375!16s%2Fg%2F11fn9vjmvp?entry=ttu&g_ep=EgoyMDI2MDIwNC4wIKXMDSoASAFQAw%3D%3D" target="blank" >Estr. São Francisco, 1820 - Taboão da Serra, SP </a></span>
            </div>

            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;