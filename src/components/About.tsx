import { Droplet, PenTool, Users, Clock } from "lucide-react";
import aboutImage from "@/assets/about-tattoo.png";

const stats = [
  {
    icon: Clock,
    value: "8+",
    label: "Anos de Experiência",
  },
  {
    icon: Users,
    value: "3000+",
    label: "Clientes Satisfeitos",
  },
  {
    icon: PenTool,
    value: "5000+",
    label: "Tatuagens Realizadas",
  },
];

const About = () => {
  return (
    <section id="about" className="section-padding bg-card">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-center">
          <div>
            <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-4">
              Quem Somos
            </p>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
              Arte, Paixão e{" "}
              <span className="text-gradient">Precisão</span>
            </h2>
            <p className="text-muted-foreground font-body text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
              No Vision Tattoo, cada tatuagem nasce da união entre técnica, identidade e propósito.
Acreditamos que a arte na pele deve refletir a personalidade de cada cliente, por isso nosso estúdio reúne artistas com estilos distintos e complementares. 
            </p>
            <p className="text-muted-foreground font-body text-base sm:text-lg leading-relaxed mb-8 sm:mb-10">
              Do traço delicado e preciso do fineline e floral, às composições intensas e expressivas do realismo preto e cinza, cada projeto é desenvolvido de forma personalizada, respeitando a estética, a história e a ideia de quem nos procura.
            </p>
            <p className="text-muted-foreground font-body text-base sm:text-lg leading-relaxed mb-8 sm:mb-10">
              Trabalhamos exclusivamente com agendamento para garantir atenção total em cada etapa do processo. Do primeiro contato ao resultado final, priorizamos conforto, segurança e excelência, seguindo rigorosamente os mais altos padrões de higiene e cuidado profissional.
            </p>

            <div className="grid grid-cols-3 gap-4 sm:gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <stat.icon className="w-6 h-6 sm:w-8 sm:h-8 text-primary mx-auto mb-2 sm:mb-3" />
                  <div className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-1">
                    {stat.value}
                  </div>
                  <div className="text-muted-foreground font-body text-[10px] sm:text-xs uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative hidden lg:block">
            {/* Decorative corner elements */}
            <div className="absolute -top-4 -left-4 w-20 h-20 border-t-2 border-l-2 border-primary rounded-tl-lg" />
            <div className="absolute -top-4 -right-4 w-20 h-20 border-t-2 border-r-2 border-primary rounded-tr-lg" />
            <div className="absolute -bottom-4 -left-4 w-20 h-20 border-b-2 border-l-2 border-primary rounded-bl-lg" />
            <div className="absolute -bottom-4 -right-4 w-20 h-20 border-b-2 border-r-2 border-primary rounded-br-lg" />
            
            {/* Glow effect */}
            <div className="absolute inset-0 -z-10 bg-primary/20 blur-2xl scale-90 rounded-full" />
            
            <div className="aspect-[4/5] rounded-lg overflow-hidden border border-primary/30 shadow-2xl shadow-primary/20">
              <img
                src={aboutImage}
                alt="Tatuagem artística de pegasus"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
