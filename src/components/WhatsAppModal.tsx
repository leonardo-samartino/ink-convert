import { useMemo } from "react";
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";

type ArtistContact = {
  name: string;
  whatsappNumberE164: string; // só números com DDI, ex: 5511999999999
  instagramHandle?: string;
};

const contacts: ArtistContact[] = [
  {
    name: "Duda Marques",
    whatsappNumberE164: "5511981267083",
    instagramHandle: "@dudstattoo",
  },
  {
    name: "Yuri Calderano",
    whatsappNumberE164: "5511988536975",
    instagramHandle: "@calderanotattoo",
  },
];

function buildWhatsAppLink(numberE164: string, text: string) {
  const msg = encodeURIComponent(text);
  return `https://wa.me/${numberE164}?text=${msg}`;
}

export function WhatsAppModal() {
  const baseMessage = useMemo(() => {
    return "Olá! Vim pelo site da Vision Tattoo. Gostaria de agendar uma consulta e tirar algumas dúvidas 😊";
  }, []);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="hero" size="xl" className="gap-3">
        <MessageCircle className="w-5 h-5" />
         WhatsApp
        </Button>
</DialogTrigger>

      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Escolha um artista</DialogTitle>
          <DialogDescription>
            Clique em quem você quer chamar no WhatsApp.
          </DialogDescription>
        </DialogHeader>

        <div className="grid gap-3">
          {contacts.map((c) => {
            const text =
              `${baseMessage}\n\nQuero falar com: ${c.name}` +
              (c.instagramHandle ? ` (${c.instagramHandle})` : "");

            return (
              <a
                key={c.whatsappNumberE164}
                href={buildWhatsAppLink(c.whatsappNumberE164, text)}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <Button variant="outline" className="w-full justify-between">
                  <span className="font-medium">{c.name}</span>
                  <span className="text-muted-foreground text-sm">Abrir WhatsApp</span>
                </Button>
              </a>
            );
          })}
        </div>
      </DialogContent>
    </Dialog>
  );
}
