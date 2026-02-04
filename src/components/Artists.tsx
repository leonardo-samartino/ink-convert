import { Instagram } from "lucide-react";
import dudstattooImage from "@/assets/dudstattoo.jpg";
import calderanoImage from "@/assets/calderanotattoo.webp";

const artists = [
  {
    id: 1,
    name: "Duda Marques",
    instagram: "https://www.instagram.com/dudstattoo/",
    instagramHandle: "@dudstattoo",
    image: dudstattooImage,
    bio: "Especialista em fineline e trabalhos florais, Duda traz delicadeza e precisão em cada traço. Seu estilo combina elementos botânicos com referências geek, criando peças únicas e cheias de personalidade.",
    specialties: ["Fineline", "Floral", "Geek"],
  },
  {
    id: 2,
    name: "Yuri Calderano",
    instagram: "https://www.instagram.com/calderanotattoo/",
    instagramHandle: "@calderanotattoo",
    image: calderanoImage,
    bio: "Mestre do realismo preto e cinza, Yuri transforma ideias em obras de arte impressionantes. Especialista em cover-ups e trabalhos ilustrativos, seu domínio de luz e sombra dá vida a cada projeto.",
    specialties: ["Realismo P&B", "Cover-up", "Ilustrativo"],
  },
];

const Artists = () => {
  return (
    <section id="artists" className="section-padding bg-card">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 md:mb-16">
          <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-4">
            Conheça Nossa Equipe
          </p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
            Nossos Artistas
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 max-w-5xl mx-auto">
          {artists.map((artist, index) => (
            <div
              key={artist.id}
              className="group bg-background rounded-xl sm:rounded-2xl overflow-hidden border border-border hover:border-primary/30 transition-all duration-500 hover-lift"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="flex flex-col sm:flex-row">
                {/* Artist Image */}
                <div className="relative w-full sm:w-40 md:w-48 h-48 sm:h-auto min-h-[200px] flex-shrink-0 overflow-hidden">
                  <img
                    src={artist.image}
                    alt={artist.name}
                    className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent sm:bg-gradient-to-r" />
                </div>

                {/* Artist Info */}
                <div className="flex-1 p-5 sm:p-6 md:p-8 flex flex-col justify-center">
                  <h3 className="font-display text-xl sm:text-2xl md:text-3xl font-bold mb-1 text-foreground">
                    {artist.name}
                  </h3>
                  <p className="text-primary font-body text-sm mb-3">
                    {artist.instagramHandle}
                  </p>

                  <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
                    {artist.specialties.map((specialty) => (
                      <span
                        key={specialty}
                        className="px-2 sm:px-3 py-0.5 sm:py-1 bg-primary/10 text-primary text-xs font-body tracking-wide rounded-full"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>

                  <p className="text-muted-foreground font-body text-sm leading-relaxed mb-4 sm:mb-6">
                    {artist.bio}
                  </p>

                  <a
                    href={artist.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-body text-sm tracking-wide group/link"
                  >
                    <Instagram className="w-5 h-5" />
                    <span className="group-hover/link:underline">{artist.instagramHandle}</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Artists;
