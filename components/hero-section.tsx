"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ArrowDown } from "lucide-react"

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-card relative overflow-hidden pt-20">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-primary" />
        <div className="absolute bottom-40 right-20 w-48 h-48 rounded-full bg-accent" />
      </div>

      <div className="max-w-4xl mx-auto px-6 py-20 text-center relative z-10">
        <span className="inline-block text-sm text-muted-foreground tracking-widest uppercase mb-6">
          Suplemento Natural
        </span>

        <motion.h1
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground leading-tight mb-6 text-balance relative"
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 via-yellow-300 to-yellow-500 bg-[length:200%_auto] animate-shine drop-shadow-sm font-bold block md:inline">
            Melena de León:{" "}
          </span>
          <span className="text-foreground">
            Suplemento Natural para Apoyar el Enfoque Mental
          </span>
        </motion.h1>

        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
          Claridad mental y concentración sostenida. Formulado artesanalmente, sin estimulantes artificiales.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            asChild
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-base"
          >
            <a href="#producto">Descubrir el producto</a>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-primary text-primary hover:bg-primary/5 px-8 py-6 text-base bg-transparent"
          >
            <a href="#beneficios">Conocer los beneficios</a>
          </Button>
        </div>

        <div className="mt-20 animate-bounce">
          <ArrowDown className="h-5 w-5 text-muted-foreground mx-auto" />
        </div>
      </div>
    </section>
  )
}
