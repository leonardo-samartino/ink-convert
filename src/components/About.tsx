import { Award, Users, Clock } from "lucide-react";

const stats = [
  {
    icon: Award,
    value: "12+",
    label: "Anos de Experiência",
  },
  {
    icon: Users,
    value: "3000+",
    label: "Clientes Satisfeitos",
  },
  {
    icon: Clock,
    value: "5000+",
    label: "Tatuagens Realizadas",
  },
];

const About = () => {
  return (
    <section id="about" className="section-padding bg-card">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-4">
              Quem Somos
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              Arte, Paixão e{" "}
              <span className="text-gradient">Precisão</span>
            </h2>
            <p className="text-muted-foreground font-body text-lg leading-relaxed mb-6">
              No INK NOIR, acreditamos que cada tatuagem é uma expressão única da sua 
              personalidade. Nossa equipe de artistas combina técnica impecável com 
              criatividade para transformar suas ideias em arte permanente.
            </p>
            <p className="text-muted-foreground font-body text-lg leading-relaxed mb-10">
              Trabalhamos exclusivamente com agendamento, garantindo atenção total 
              a cada cliente. Nosso estúdio segue os mais rigorosos padrões de higiene 
              e segurança.
            </p>

            <div className="grid grid-cols-3 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <stat.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                  <div className="font-display text-3xl md:text-4xl font-bold text-foreground mb-1">
                    {stat.value}
                  </div>
                  <div className="text-muted-foreground font-body text-xs uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/5] rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?w=800&h=1000&fit=crop"
                alt="Tattoo studio interior"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 border-2 border-primary rounded-lg" />
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary/10 rounded-lg" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
