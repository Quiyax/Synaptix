import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { FadeIn } from "@/components/ui/fade-in"

export function ProductSection() {
  return (
    <section className="py-24 px-6 bg-card" id="producto">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <FadeIn>
            <span className="text-sm text-muted-foreground tracking-widest uppercase mb-4 block">Nuestro producto</span>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground">
              Ingredientes del suplemento de Melena de León
            </h2>
          </FadeIn>
        </div>

        <div className="max-w-md mx-auto">
          <FadeIn delay={0.2}>
            <Card className="bg-background border-border shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-8">
                <div className="aspect-square bg-muted rounded-lg mb-6 flex items-center justify-center overflow-hidden">
                  <img
                    src="/synaptix-melena-de-leon.jpg"
                    alt="Suplemento Synaptix Melena de León en frasco ámbar con tapa dorada - 50 cápsulas"
                    className="w-full h-full object-cover"
                  />
                </div>

                <h3 className="font-serif text-2xl text-foreground mb-2">Melena de León</h3>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Apoyo natural para la concentración y claridad mental en 50 cápsulas.
                </p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Ingredientes:</span>
                  </div>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2 text-foreground">
                      <span className="w-1 h-1 rounded-full bg-accent" />
                      Melena de León (Hericium erinaceus)
                    </li>
                    <li className="flex items-center gap-2 text-foreground">
                      <span className="w-1 h-1 rounded-full bg-accent" />
                      Pimienta negra (Piper nigrum)
                    </li>
                    <li className="flex items-center gap-2 text-foreground">
                      <span className="w-1 h-1 rounded-full bg-accent" />
                      Vitamina C
                    </li>
                  </ul>
                  <p className="text-xs text-muted-foreground italic">
                    La formulación busca sinergia funcional y uso responsable.
                  </p>
                </div>

                <Button
                  asChild
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 py-6"
                  size="lg"
                >
                  <a
                    href="https://wa.me/message/UXKMA6B3PVU4J1"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Compra ahora
                  </a>
                </Button>
              </CardContent>
            </Card>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
