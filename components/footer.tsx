import { Leaf } from "lucide-react"

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

          <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} Synaptix</p>
        </div>
      </div>
    </footer>
  )
}
