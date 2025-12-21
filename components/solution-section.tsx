import { Leaf, Beaker, Brain } from "lucide-react"

const features = [
  {
    icon: Leaf,
    title: "Artesanal",
    description: "Formulación cuidada con ingredientes seleccionados y procesos tradicionales.",
  },
  {
    icon: Beaker,
    title: "A base de plantas",
    description: "Origen natural sin aditivos artificiales ni estimulantes sintéticos.",
  },
  {
    icon: Brain,
    title: "Enfoque cognitivo",
    description: "Diseñado específicamente para apoyar la claridad mental y la concentración.",
  },
]

export function SolutionSection() {
  return (
    <section className="py-24 px-6 bg-muted" id="beneficios">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-sm text-muted-foreground tracking-widest uppercase mb-4 block">Nuestra propuesta</span>
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
            Beneficios de la Melena de León para la concentración
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="text-center p-8">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-background mb-6">
                <feature.icon className="h-6 w-6 text-primary" strokeWidth={1.5} />
              </div>
              <h3 className="font-serif text-xl text-foreground mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="max-w-2xl mx-auto">
          <p className="text-muted-foreground text-center mb-6">
            Entre los beneficios tradicionalmente asociados a nuestro producto Melena de León se encuentran:
          </p>
          <ul className="space-y-3">
            {[
              "Apoyo a la concentración sostenida",
              "Acompañamiento de la memoria funcional",
              "Sensación de claridad mental",
              "Fórmula sin estimulantes artificiales",
              "Combinación pensada para favorecer la biodisponibilidad",
            ].map((benefit, index) => (
              <li key={index} className="flex items-center gap-3 text-foreground">
                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                {benefit}
              </li>
            ))}
          </ul>
          <p className="text-sm text-muted-foreground mt-6 text-center">
            Estos beneficios dependen del uso constante y del contexto individual.
          </p>
        </div>
      </div>
    </section>
  )
}
