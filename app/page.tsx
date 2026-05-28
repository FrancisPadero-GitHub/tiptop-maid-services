import { Header } from "@/components/landing-page/header"
import { Hero } from "@/components/landing-page/hero"
import { Features } from "@/components/landing-page/features"
import { Services } from "@/components/landing-page/services"
import { Testimonials } from "@/components/landing-page/testimonials"
import { CtaBanner } from "@/components/landing-page/cta-banner"
import { Footer } from "@/components/landing-page/footer"

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
        <Services />
        <Testimonials />
        <CtaBanner />
      </main>
      <Footer />
    </>
  )
}
