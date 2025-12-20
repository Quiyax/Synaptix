import { ShieldCheck, Leaf, AlertCircle } from "lucide-react"

const trustPoints = [
  {
    icon: Leaf,
    title: "Proceso artesanal",
    description: "Cada lote es preparado con cuidado y atención a los detalles.",
  },
  {
    icon: ShieldCheck,
    title: "Uso responsable",
    description: "Promovemos un enfoque consciente y realista del bienestar.",
  },
  {
    icon: AlertCircle,
    title: "Sin promesas milagro",
    description: "Comunicamos con honestidad los alcances de nuestro producto.",
  },
]

export function TrustSection() {
  return (
    <section className="py-24 px-6 bg-card">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-sm text-muted-foreground tracking-widest uppercase mb-4 block">Compromiso</span>
          <h2 className="font-serif text-3xl md:text-4xl text-foreground">Uso responsable y advertencias</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {trustPoints.map((point, index) => (
            <div key={index} className="text-center p-6">
              <point.icon className="h-5 w-5 text-accent mx-auto mb-4" strokeWidth={1.5} />
              <h3 className="text-sm font-medium text-foreground mb-2">{point.title}</h3>
              <p className="text-sm text-muted-foreground">{point.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center p-6 bg-muted rounded-lg space-y-3">
          <p className="text-sm text-muted-foreground leading-relaxed">
            Este producto no es un medicamento y no sustituye una alimentación equilibrada ni hábitos de vida
            saludables.
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Se recomienda un uso informado y responsable. En caso de duda, consultar con un profesional de la salud.
          </p>
        </div>
      </div>
    </section>
  )
}
