import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "./button"

export function Services() {
  const serviceList = [
    {
      title: "Residential Cleaning",
      desc: "Maintain a healthy, welcoming home with our customizable standard and deep cleaning plans.",
      icon: "home",
      image: "https://lh3.googleusercontent.com/aida/ADBb0uhrek0t8AME3HMdFYGlj5NQ3XCE4v56IZzfsijAQkbmlNP0b2GqcTqfJhyVsAIJQMHosS_CR4QzZzH8Dxq4FI2ovGB7cubMS7ahZfuExcifoaBtNjR6OK9KDAU5XpFeTHCwDlVGnohKk-tbUi6KT8H8O2IMGj2913Qrzo6RCSPhCsVA6X4gVLkhuUsWPJRaqG-mUNBus7NCpclt5uHO0U-tYaOtaGLhCW6oZE2Ic4_1rbe_iGp6Kk7lk84",
      link: "/services",
    },
    {
      title: "Commercial Cleaning",
      desc: "Professional office cleaning tailored to your schedule, ensuring a productive environment.",
      icon: "business_center",
      image: "https://lh3.googleusercontent.com/aida/ADBb0ugJrEnXIWbj4F1teZ-xYRrsrG8HVZU-ZyuovXjWsset6hcY_aJKbebnvntlX_cCjq7gbfFM8t0eb7s1rhTJ3GovUNowj5YLxG_xPkkaFzdRZYu9Sm2pejhG-J0LnK_1Gozn4oQg2VDty5yd-ywlnuD2fwPPjGdXe7AAjHJkQegD7Og9_LvYXcxre5V74DFT62IAJiyEtXQMAAcbhPJ6fiD2qlB0-45akvWokRvJ768zJUgY2rrR7p7_Qg",
      link: "/services",
    },
    {
      title: "Airbnb Turnaround",
      desc: "Fast, reliable turnaround cleaning to keep your property looking guest-ready 5-star quality.",
      icon: "key",
      image: "https://lh3.googleusercontent.com/aida/ADBb0uiq6YQjIuyPiDcOEQO_9a_W1VOarvzX0Q_1BHM_kV2mPaRV_eNnBhaqabBUnM_Arna6OEGgXx2FcZIgpdvbiU3nhXR2VjtK3zHHDClG-CX19jBo_mgXpGZWE-bvxWN0QVpoD4AtQdG0CLGm6n-F6CCTYLaIMFozP3hm5YLwuLkc7fOuHE3UB-YiMKnsnAp5-DOsYrJsx9hpgMvErMEF6Z8G7MTa50SU1EIeCJLJBVbDHxVoe2AsZ99nGdI",
      link: "/services",
    },
    {
      title: "Post Renovation",
      desc: "Detailed cleanup of dust and debris, transforming your construction site into a pristine space.",
      icon: "cleaning_services",
      image: "https://lh3.googleusercontent.com/aida/ADBb0uiMPCN3iKSAqUCtgth2yrr0Yh51NX1q5l6AsLxgICbwTXnJgshb-wFTVGaDMpnxLEww_s7Gt-EJZanURUe7H6gDnaGcYFqzpUq6fbfIwM2HsyeG2PmrHOBS4gpDLtWhA3Jf5Xjy8PV8PILY82NynEZ7CjisyUHtAudSwSsABiylQsMv68_QcHZvc2I8pon9fzJy96gsyay8WgwlBFULbHoThwmaH8IelQaapDQl46l5Bp_ex60IAOWu3iw",
      link: "/services",
    },
  ]

  return (
    <section id="services" className="bg-surface py-16 md:py-24">
      <div className="max-w-[1200px] mx-auto px-4 md:px-6">
        {/* Header Block */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 border-b border-outline-variant/60 pb-6 gap-6">
          <div className="max-w-2xl space-y-4">
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary">
              Our Premium Services
            </h2>
            <p className="text-sm md:text-base text-on-surface-variant leading-relaxed">
              Whether you need regular maintenance or a specialized deep clean, our high-definition cleaning standards apply across all our offerings.
            </p>
          </div>
          <Link href="/services">
            <Button variant="outline" size="default" className="whitespace-nowrap shrink-0 hover:scale-105 active:scale-95 transition-transform duration-200">
              View All Services
            </Button>
          </Link>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {serviceList.map((service, idx) => (
            <Link
              key={idx}
              href={service.link}
              className="group relative bg-surface border border-outline-variant/65 rounded-2xl overflow-hidden shadow-level-1 hover:shadow-level-2 transition-all duration-300 flex flex-col h-full cursor-pointer hover:-translate-y-1"
            >
              {/* Image Header Block */}
              <div className="h-44 w-full relative overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 select-none"
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent opacity-80 z-10"></div>
              </div>

              {/* Card Body */}
              <div className="flex flex-col flex-grow p-6">
                <div className="bg-surface-ice text-secondary w-10 h-10 rounded-lg flex items-center justify-center mb-4 border border-outline-variant/50">
                  <span className="material-symbols-outlined" style={{ fontSize: "20px" }}>
                    {service.icon}
                  </span>
                </div>
                
                <h3 className="font-headline text-lg font-bold text-primary mb-2 group-hover:text-secondary transition-colors duration-200">
                  {service.title}
                </h3>
                
                <p className="text-xs md:text-sm text-on-surface-variant flex-grow mb-5 leading-relaxed">
                  {service.desc}
                </p>
                
                <span className="font-semibold text-xs tracking-wider text-secondary inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                  Learn More 
                  <span className="material-symbols-outlined text-sm font-bold">arrow_forward</span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
