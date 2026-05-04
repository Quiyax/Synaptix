import { Leaf, Instagram, Facebook, MessageCircle } from "lucide-react"

export function Footer() {
  return (
    <footer className="py-12 px-6 bg-background border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <Leaf className="h-5 w-5 text-primary" />
            <span className="font-serif text-lg text-primary">Synaptix</span>
          </div>

          <p className="text-sm text-muted-foreground text-center">Suplemento natural para el bienestar cognitivo</p>

          <div className="flex items-center gap-4">
            <a
              href="https://www.instagram.com/synaptixesencial/#"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a
              href="https://www.facebook.com/people/Synaptix/61582848144274/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Facebook className="h-5 w-5" />
            </a>
            <a
              href="https://wa.me/message/UXKMA6B3PVU4J1"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <MessageCircle className="h-5 w-5" />
            </a>
          </div>
        </div>
        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} Synaptix. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
