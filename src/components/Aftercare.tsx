import { Droplets, Sun, Hand, Clock, ShieldCheck, Leaf } from "lucide-react";

const tips = [
  {
    icon: Droplets,
    title: "Limpeza",
    description: "Lave a tatuagem 2-3 vezes ao dia com água morna e sabonete neutro. Seque com toalha limpa sem esfregar.",
  },
  {
    icon: Leaf,
    title: "Hidratação",
    description: "Aplique uma camada fina de pomada cicatrizante ou hidratante sem fragrância após cada lavagem.",
  },
  {
    icon: Sun,
    title: "Evite o Sol",
    description: "Mantenha a tatuagem protegida do sol por pelo menos 30 dias. Após cicatrizar, use protetor solar.",
  },
  {
    icon: Hand,
    title: "Não Coce",
    description: "É normal coçar durante a cicatrização. Resista! Coçar pode danificar o desenho e causar infecções.",
  },
  {
    icon: Clock,
    title: "Tempo de Cura",
    description: "A cicatrização completa leva de 2 a 4 semanas. Siga os cuidados durante todo o período.",
  },
  {
    icon: ShieldCheck,
    title: "Evite Imersão",
    description: "Nada de piscina, mar ou banheira por 3 semanas. Banhos rápidos de chuveiro são ok.",
  },
];

const Aftercare = () => {
  return (
    <section id="aftercare" className="section-padding bg-card/30">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-4">
            Cuide da Sua Arte
          </p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
            Cuidados Pós-Tattoo
          </h2>
          <p className="text-muted-foreground font-body mt-4 max-w-2xl mx-auto text-sm sm:text-base">
            Seguir corretamente os cuidados após a sessão garante uma cicatrização perfeita 
            e cores vibrantes por toda a vida.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {tips.map((tip, index) => (
            <div
              key={index}
              className="group card-gradient p-6 sm:p-8 rounded-lg border border-border hover:border-primary/50 transition-all duration-500 hover-lift"
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-primary/20 transition-colors">
                <tip.icon className="w-6 h-6 sm:w-7 sm:h-7 text-primary" />
              </div>
              <h3 className="font-display text-lg sm:text-xl font-semibold text-foreground mb-2 sm:mb-3">
                {tip.title}
              </h3>
              <p className="text-muted-foreground font-body text-sm leading-relaxed">
                {tip.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 md:mt-12 p-6 sm:p-8 bg-primary/5 border border-primary/20 rounded-lg text-center">
          <p className="text-foreground font-body text-sm sm:text-base">
            <strong className="text-primary">Dúvidas?</strong> Entre em contato conosco. 
            Estamos sempre disponíveis para ajudar no pós-tattoo.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Aftercare;
