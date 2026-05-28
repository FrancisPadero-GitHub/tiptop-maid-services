import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { Header } from "@/components/landing-page/header"
import { Footer } from "@/components/landing-page/footer"
import { Button } from "@/components/landing-page/button"

export default function GalleryPage() {
  const items = [
    {
      title: "Modern Living Space",
      desc: "A deep clean restored the vibrant colors of the upholstery and left the hardwood floors gleaming, creating a truly inviting atmosphere.",
      img: "https://lh3.googleusercontent.com/aida/ADBb0ugQuoZBxlwjFFrpi3y9vQwpHF65r40ioIHv88NyM8qhid673dZFCmSQ6qq3ujTWLKrCd9UhiJtvYIAUVSiWHFUUT-nfFH6tnf9r_eP_rg3lQxnyHb_aQSfPAKovrVOxlcC3zurnXev-o6Gr1YG85Tw4K94RymW17vazM8fLsnVVCAP5QQgvw9KlbB0YQDLGDrG3qEFa75kfzcot-RQ3d2dqf6k7t_zv27KG4eVe26b6yTLb9vkgAH5QU18",
      tag: "Deep Clean",
      icon: "auto_awesome",
    },
    {
      title: "Detailed Floor Care",
      desc: "Intensive scrubbing and specialized treatments removed years of grime, revealing the original texture and brightness of the surfaces.",
      img: "https://lh3.googleusercontent.com/aida/ADBb0uiFyxR7_x_e3vmXwwjcaAIRk7grHY2mSRioysZ4TEBV-SihjZohfhlEm_EnTHBpvVKHhsci_m9Bbuy8zC_LsmIk7-_6Gt_e7ho-7aOp_1iAsrLFTAxYMqnAjuTj1FjY7__4-JRhqglznEZqGNIZRbkRyt-pUoJkvxA4YQPMrBIhimD73EBUjPn5SCZveBvmosAGGhUAcX2LHOvb8DH5BDS2RWIxEsRibumAIv12Xufvn-u8q9Osz76qKg",
      tag: "Floor Treatment",
      icon: "mop",
    },
    {
      title: "Gourmet Kitchen",
      desc: "Degreased surfaces, polished stainless steel appliances, and sanitized countertops make this kitchen ready for culinary perfection.",
      img: "https://lh3.googleusercontent.com/aida/ADBb0ugQuoZBxlwjFFrpi3y9vQwpHF65r40ioIHv88NyM8qhid673dZFCmSQ6qq3ujTWLKrCd9UhiJtvYIAUVSiWHFUUT-nfFH6tnf9r_eP_rg3lQxnyHb_aQSfPAKovrVOxlcC3zurnXev-o6Gr1YG85Tw4K94RymW17vazM8fLsnVVCAP5QQgvw9KlbB0YQDLGDrG3qEFa75kfzcot-RQ3d2dqf6k7t_zv27KG4eVe26b6yTLb9vkgAH5QU18",
      tag: "Move In/Out",
      icon: "countertops",
    },
  ]

  return (
    <>
      <Header />
      <main className="flex-grow">
        {/* Header Section */}
        <section className="bg-surface-ice px-4 py-10 text-center md:px-6 md:py-10">
          <div className="mx-auto max-w-3xl animate-fade-in-up space-y-4">
            <span className="bg-tertiary-fixed inline-block rounded-full px-3 py-1 text-xs font-semibold tracking-widest text-primary uppercase transition-transform duration-200 hover:scale-105">
              Our Work
            </span>
            <h1 className="font-headline text-4xl leading-tight font-extrabold text-primary md:text-5xl">
              The Tip Top Difference
            </h1>
            <p className="mx-auto max-w-2xl text-sm leading-relaxed text-on-surface-variant md:text-base">
              Experience the transformation. Browse our gallery to see how our
              meticulous cleaning services breathe new life into homes across
              Tampa.
            </p>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="mx-auto max-w-[1200px] px-4 py-12 md:px-6 md:py-12">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {items.map((item, idx) => (
              <div
                key={idx}
                className="group flex h-full animate-scale-up flex-col overflow-hidden rounded-2xl border border-outline-variant/65 bg-surface shadow-level-1 transition-all duration-300 hover:-translate-y-1 hover:border-primary/20 hover:shadow-level-2"
              >
                {/* Image Wrap */}
                <div className="bg-surface-variant relative h-64 overflow-hidden">
                  <Image
                    alt={item.title}
                    className="h-full w-full object-cover transition-transform duration-500 select-none group-hover:scale-105"
                    src={item.img}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  {/* Floating After Tag */}
                  <div className="absolute top-4 left-4 rounded bg-white/90 px-3 py-1 shadow-sm backdrop-blur-sm">
                    <span className="flex items-center gap-1 text-xs font-bold text-primary">
                      <span className="material-symbols-outlined icon-fill animate-pulse text-[16px] text-primary">
                        check_circle
                      </span>
                      After
                    </span>
                  </div>
                </div>

                {/* Body Content */}
                <div className="flex flex-grow flex-col justify-between p-6">
                  <div className="mb-4 space-y-2">
                    <h3 className="font-headline text-lg font-bold text-primary">
                      {item.title}
                    </h3>
                    <p className="text-xs leading-relaxed text-on-surface-variant md:text-sm">
                      {item.desc}
                    </p>
                  </div>

                  {/* Footer Tag */}
                  <div className="border-surface-variant/50 mt-auto flex items-center gap-2 border-t pt-4">
                    <span className="inline-flex items-center gap-1 rounded bg-surface-ice px-2.5 py-1 text-xs font-semibold tracking-wide text-secondary">
                      <span className="material-symbols-outlined text-sm">
                        {item.icon}
                      </span>
                      {item.tag}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button
              variant="outline"
              size="lg"
              className="bg-surface transition-all hover:scale-102 hover:bg-surface-ice active:scale-98"
            >
              Load More Projects
            </Button>
          </div>
        </section>

        {/* Ready for a Tip Top Home? CTA Section */}
        <section className="flex min-h-[380px] items-center justify-center bg-primary-container px-4 py-10 text-on-primary md:px-6 md:py-10">
          <div className="w-full max-w-[800px] space-y-8 text-center">
            <h2 className="font-headline text-3xl font-bold text-white md:text-4xl">
              Ready for a Tip Top Home?
            </h2>
            <p className="text-inverse-primary mx-auto max-w-2xl text-sm leading-relaxed opacity-90 md:text-base">
              Join hundreds of satisfied homeowners in Tampa who trust us for
              their residential and commercial cleaning needs.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Link href="/book" className="w-full sm:w-auto">
                <button className="w-full cursor-pointer rounded-md bg-white px-8 py-4 text-sm font-semibold tracking-wide text-primary shadow-sm transition-colors duration-200 select-none hover:bg-surface-ice sm:w-auto">
                  Get a Free Quote
                </button>
              </Link>
              <Link href="/book" className="w-full sm:w-auto">
                <button className="w-full cursor-pointer rounded-md border border-outline px-8 py-4 text-sm font-semibold tracking-wide text-white transition-colors duration-200 select-none hover:bg-white/10 sm:w-auto">
                  Contact Us
                </button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
