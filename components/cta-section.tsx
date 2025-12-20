import { Button } from "@/components/ui/button"

export function CTASection() {
  return (
    <section className="py-24 px-6 bg-primary">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="font-serif text-3xl md:text-4xl text-primary-foreground mb-4">
          Comienza tu camino hacia la claridad mental
        </h2>

        <p className="text-primary-foreground/80 mb-10 leading-relaxed">
          Incorpora la Melena de León a tu rutina diaria y experimenta un enfoque más natural hacia el bienestar
          cognitivo.
        </p>

        <Button
          asChild
          size="lg"
          className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 px-10 py-6 text-base"
        >
          <a href="#producto">Descubrir el producto</a>
        </Button>
      </div>
    </section>
  )
}
