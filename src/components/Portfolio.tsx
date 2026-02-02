const portfolioItems = [
  {
    id: 1,
    title: "Realismo",
    image: "https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?w=600&h=600&fit=crop",
  },
  {
    id: 2,
    title: "Blackwork",
    image: "https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?w=600&h=600&fit=crop",
  },
  {
    id: 3,
    title: "Fineline",
    image: "https://images.unsplash.com/photo-1565058379802-bbe93b2f703a?w=600&h=600&fit=crop",
  },
  {
    id: 4,
    title: "Neo Traditional",
    image: "https://images.unsplash.com/photo-1590246815117-2c4c0f80f7c0?w=600&h=600&fit=crop",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="section-padding bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-4">
            Nosso Trabalho
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold">
            Portfólio
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {portfolioItems.map((item, index) => (
            <div
              key={item.id}
              className="group relative aspect-square overflow-hidden rounded-lg cursor-pointer hover-lift"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <h3 className="font-display text-xl font-semibold text-foreground">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
