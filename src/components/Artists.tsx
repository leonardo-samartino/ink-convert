import { Instagram } from "lucide-react";

const artists = [
  {
    id: 1,
    name: "Dudstattoo",
    instagram: "https://www.instagram.com/dudstattoo/",
    instagramHandle: "@dudstattoo",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    bio: "Especialista em realismo e blackwork, Duds traz mais de 8 anos de experiência transformando visões em arte permanente. Seu trabalho é marcado pela atenção aos detalhes e técnicas de sombreamento que dão vida a cada peça.",
    specialties: ["Realismo", "Blackwork", "Cover-up"],
  },
  {
    id: 2,
    name: "Calderano Tattoo",
    instagram: "https://www.instagram.com/calderanotattoo/",
    instagramHandle: "@calderanotattoo",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
    bio: "Com um estilo único que mistura neo-tradicional e fineline, Calderano é conhecido por criar peças elegantes e atemporais. Sua abordagem artística combina criatividade com precisão técnica impecável.",
    specialties: ["Neo-tradicional", "Fineline", "Ilustrativo"],
  },
];

const Artists = () => {
  return (
    <section id="artists" className="section-padding bg-card">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-4">
            Conheça Nossa Equipe
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold">
            Nossos Artistas
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
          {artists.map((artist, index) => (
            <div
              key={artist.id}
              className="group bg-background rounded-2xl overflow-hidden border border-border hover:border-primary/30 transition-all duration-500 hover-lift"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="flex flex-col md:flex-row">
                {/* Artist Image */}
                <div className="relative w-full md:w-48 h-64 md:h-auto flex-shrink-0 overflow-hidden">
                  <img
                    src={artist.image}
                    alt={artist.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent md:bg-gradient-to-r" />
                </div>

                {/* Artist Info */}
                <div className="flex-1 p-6 md:p-8 flex flex-col justify-center">
                  <h3 className="font-display text-2xl md:text-3xl font-bold mb-3 text-foreground">
                    {artist.name}
                  </h3>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {artist.specialties.map((specialty) => (
                      <span
                        key={specialty}
                        className="px-3 py-1 bg-primary/10 text-primary text-xs font-body tracking-wide rounded-full"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>

                  <p className="text-muted-foreground font-body text-sm leading-relaxed mb-6">
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
