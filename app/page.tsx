import { HeroSection } from "@/components/hero-section"
import { ProblemSection } from "@/components/problem-section"
import { SolutionSection } from "@/components/solution-section"
import { ProductSection } from "@/components/product-section"
import { HowItWorksSection } from "@/components/how-it-works-section"
import { TrustSection } from "@/components/trust-section"
import { CTASection } from "@/components/cta-section"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <ProductSection />
      <HowItWorksSection />
      <TrustSection />
      <CTASection />
      <Footer />
    </main>
  )
}
