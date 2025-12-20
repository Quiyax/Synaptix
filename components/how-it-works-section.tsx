const steps = [
  {
    number: "01",
    title: "Apoyo cognitivo progresivo",
    description:
      "La Melena de León actúa como un suplemento de uso diario. Su efecto no es inmediato, sino progresivo.",
  },
  {
    number: "02",
    title: "Fórmula con sinergia funcional",
    description:
      "La inclusión de pimienta negra (Piper nigrum) y vitamina C se realiza con el objetivo de apoyar la biodisponibilidad de los compuestos naturales de la Melena de León, sin alterar su perfil natural.",
  },
  {
    number: "03",
    title: "Sin estimulantes",
    description: "No contiene cafeína ni otros estimulantes artificiales.",
  },
]

export function HowItWorksSection() {
  return (
    <section className="py-24 px-6 bg-background" id="como-funciona">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-sm text-muted-foreground tracking-widest uppercase mb-4 block">Metodología</span>
          <h2 className="font-serif text-3xl md:text-4xl text-foreground">¿Cómo funciona este suplemento?</h2>
        </div>

        <div className="space-y-12">
          {steps.map((step, index) => (
            <div key={index} className="flex gap-8 items-start">
              <span className="text-4xl font-serif text-accent/50 flex-shrink-0">{step.number}</span>
              <div>
                <h3 className="font-serif text-xl text-foreground mb-2">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 p-8 bg-muted rounded-lg">
          <h3 className="font-serif text-xl text-foreground mb-4">¿Para quién es la Melena de León?</h3>
          <p className="text-muted-foreground mb-4">Este suplemento es adecuado para personas que:</p>
          <ul className="space-y-2 text-muted-foreground">
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
              Buscan un suplemento natural para la concentración
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
              Prefieren fórmulas sin estimulantes
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
              Valoran combinaciones funcionales bien formuladas
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
              Buscan acompañar hábitos cognitivos saludables
            </li>
          </ul>
          <p className="text-sm text-muted-foreground mt-4">
            No está diseñado para sustituir tratamientos médicos ni generar efectos inmediatos.
          </p>
        </div>

        <div className="mt-12 p-8 bg-card rounded-lg border border-border">
          <h3 className="font-serif text-xl text-foreground mb-4">Cómo tomar Melena de León</h3>
          <p className="text-muted-foreground">
            <span className="font-medium text-foreground">Modo de uso sugerido:</span> Tomar 1 a 2 cápsulas al día,
            preferiblemente en la mañana, junto con alimentos.
          </p>
          <p className="text-sm text-muted-foreground mt-4">
            El uso constante favorece la integración del suplemento dentro de una rutina diaria.
          </p>
        </div>
      </div>
    </section>
  )
}
