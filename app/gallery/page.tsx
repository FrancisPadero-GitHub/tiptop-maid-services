import * as React from "react"
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
        <section className="bg-surface-ice py-16 md:py-24 px-4 md:px-6 text-center">
          <div className="max-w-3xl mx-auto space-y-4 animate-fade-in-up">
            <span className="inline-block bg-tertiary-fixed text-primary px-3 py-1 rounded-full font-semibold text-xs tracking-widest uppercase hover:scale-105 transition-transform duration-200">
              Our Work
            </span>
            <h1 className="font-headline text-4xl md:text-5xl font-extrabold text-primary leading-tight">
              The Tip Top Difference
            </h1>
            <p className="text-sm md:text-base text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
              Experience the transformation. Browse our gallery to see how our meticulous cleaning services breathe new life into homes across Tampa.
            </p>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="py-16 md:py-20 px-4 md:px-6 max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {items.map((item, idx) => (
              <div
                key={idx}
                className="group bg-surface rounded-2xl border border-outline-variant/65 overflow-hidden shadow-level-1 hover:shadow-level-2 hover:-translate-y-1 hover:border-primary/20 transition-all duration-300 flex flex-col h-full animate-scale-up"
              >
                {/* Image Wrap */}
                <div className="relative h-64 overflow-hidden bg-surface-variant">
                  <img
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 select-none"
                    src={item.img}
                  />
                  {/* Floating After Tag */}
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded shadow-sm">
                    <span className="text-xs font-bold text-primary flex items-center gap-1">
                      <span className="material-symbols-outlined text-[16px] text-primary icon-fill animate-pulse">check_circle</span> 
                      After
                    </span>
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-6 flex-grow flex flex-col justify-between">
                  <div className="mb-4 space-y-2">
                    <h3 className="font-headline text-lg font-bold text-primary">
                      {item.title}
                    </h3>
                    <p className="text-xs md:text-sm text-on-surface-variant leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                  
                  {/* Footer Tag */}
                  <div className="flex items-center gap-2 pt-4 border-t border-surface-variant/50 mt-auto">
                    <span className="inline-flex items-center gap-1 bg-surface-ice text-secondary px-2.5 py-1 rounded font-semibold text-xs tracking-wide">
                      <span className="material-symbols-outlined text-sm">{item.icon}</span>
                      {item.tag}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button variant="outline" size="lg" className="bg-surface hover:bg-surface-ice hover:scale-102 active:scale-98 transition-all">
              Load More Projects
            </Button>
          </div>
        </section>

        {/* Ready for a Tip Top Home? CTA Section */}
        <section className="bg-primary-container text-on-primary py-16 md:py-24 px-4 md:px-6 flex items-center justify-center min-h-[380px]">
          <div className="max-w-[800px] text-center w-full space-y-8">
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-white">
              Ready for a Tip Top Home?
            </h2>
            <p className="text-sm md:text-base text-inverse-primary max-w-2xl mx-auto leading-relaxed opacity-90">
              Join hundreds of satisfied homeowners in Tampa who trust us for their residential and commercial cleaning needs.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="/book">
                <button className="w-full sm:w-auto bg-white text-primary hover:bg-surface-ice transition-colors duration-200 font-semibold tracking-wide text-sm px-8 py-4 rounded-md shadow-sm select-none cursor-pointer">
                  Get a Free Quote
                </button>
              </a>
              <a href="/book">
                <button className="w-full sm:w-auto border border-outline hover:bg-white/10 transition-colors duration-200 text-white font-semibold tracking-wide text-sm px-8 py-4 rounded-md select-none cursor-pointer">
                  Contact Us
                </button>
              </a>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
