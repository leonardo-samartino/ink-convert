import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Instagram, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Mensagem enviada!",
      description: "Entraremos em contato em breve para agendar sua consulta.",
    });

    setFormData({ name: "", email: "", phone: "", message: "" });
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="section-padding bg-card">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          <div>
            <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-4">
              Entre em Contato
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              Vamos criar sua{" "}
              <span className="text-gradient">próxima arte</span>
            </h2>
            <p className="text-muted-foreground font-body text-lg leading-relaxed mb-10">
              Preencha o formulário para agendar uma consulta gratuita. 
              Discutiremos seu projeto, tiraremos dúvidas e criaremos 
              algo único para você.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-foreground font-body font-medium">Endereço</p>
                  <p className="text-muted-foreground font-body text-sm">
                    Rua Augusta, 1500 - São Paulo, SP
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-foreground font-body font-medium">Telefone</p>
                  <p className="text-muted-foreground font-body text-sm">
                    (11) 99999-9999
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-foreground font-body font-medium">Email</p>
                  <p className="text-muted-foreground font-body text-sm">
                    contato@inknoir.com.br
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Instagram className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-foreground font-body font-medium">Instagram</p>
                  <p className="text-muted-foreground font-body text-sm">
                    @inknoir.tattoo
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="card-gradient p-8 md:p-10 rounded-lg border border-border">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="text-foreground font-body text-sm font-medium mb-2 block">
                  Nome completo
                </label>
                <Input
                  type="text"
                  placeholder="Seu nome"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="bg-background border-border focus:border-primary"
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="text-foreground font-body text-sm font-medium mb-2 block">
                    Email
                  </label>
                  <Input
                    type="email"
                    placeholder="seu@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="bg-background border-border focus:border-primary"
                  />
                </div>
                <div>
                  <label className="text-foreground font-body text-sm font-medium mb-2 block">
                    Telefone
                  </label>
                  <Input
                    type="tel"
                    placeholder="(11) 99999-9999"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                    className="bg-background border-border focus:border-primary"
                  />
                </div>
              </div>

              <div>
                <label className="text-foreground font-body text-sm font-medium mb-2 block">
                  Descreva sua ideia
                </label>
                <Textarea
                  placeholder="Conte sobre o projeto que você tem em mente, referências, tamanho aproximado, local do corpo..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={5}
                  className="bg-background border-border focus:border-primary resize-none"
                />
              </div>

              <Button
                type="submit"
                variant="hero"
                size="xl"
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  "Enviando..."
                ) : (
                  <>
                    Solicitar Consulta Gratuita
                    <Send className="ml-2 w-4 h-4" />
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
