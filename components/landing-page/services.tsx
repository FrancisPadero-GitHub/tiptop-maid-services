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
      image:
        "https://lh3.googleusercontent.com/aida/ADBb0uhrek0t8AME3HMdFYGlj5NQ3XCE4v56IZzfsijAQkbmlNP0b2GqcTqfJhyVsAIJQMHosS_CR4QzZzH8Dxq4FI2ovGB7cubMS7ahZfuExcifoaBtNjR6OK9KDAU5XpFeTHCwDlVGnohKk-tbUi6KT8H8O2IMGj2913Qrzo6RCSPhCsVA6X4gVLkhuUsWPJRaqG-mUNBus7NCpclt5uHO0U-tYaOtaGLhCW6oZE2Ic4_1rbe_iGp6Kk7lk84",
      link: "/services",
    },
    {
      title: "Commercial Cleaning",
      desc: "Professional office cleaning tailored to your schedule, ensuring a productive environment.",
      icon: "business_center",
      image:
        "https://lh3.googleusercontent.com/aida/ADBb0ugJrEnXIWbj4F1teZ-xYRrsrG8HVZU-ZyuovXjWsset6hcY_aJKbebnvntlX_cCjq7gbfFM8t0eb7s1rhTJ3GovUNowj5YLxG_xPkkaFzdRZYu9Sm2pejhG-J0LnK_1Gozn4oQg2VDty5yd-ywlnuD2fwPPjGdXe7AAjHJkQegD7Og9_LvYXcxre5V74DFT62IAJiyEtXQMAAcbhPJ6fiD2qlB0-45akvWokRvJ768zJUgY2rrR7p7_Qg",
      link: "/services",
    },
    {
      title: "Airbnb Turnaround",
      desc: "Fast, reliable turnaround cleaning to keep your property looking guest-ready 5-star quality.",
      icon: "key",
      image:
        "https://lh3.googleusercontent.com/aida/ADBb0uiq6YQjIuyPiDcOEQO_9a_W1VOarvzX0Q_1BHM_kV2mPaRV_eNnBhaqabBUnM_Arna6OEGgXx2FcZIgpdvbiU3nhXR2VjtK3zHHDClG-CX19jBo_mgXpGZWE-bvxWN0QVpoD4AtQdG0CLGm6n-F6CCTYLaIMFozP3hm5YLwuLkc7fOuHE3UB-YiMKnsnAp5-DOsYrJsx9hpgMvErMEF6Z8G7MTa50SU1EIeCJLJBVbDHxVoe2AsZ99nGdI",
      link: "/services",
    },
    {
      title: "Post Renovation",
      desc: "Detailed cleanup of dust and debris, transforming your construction site into a pristine space.",
      icon: "cleaning_services",
      image:
        "https://lh3.googleusercontent.com/aida/ADBb0uiMPCN3iKSAqUCtgth2yrr0Yh51NX1q5l6AsLxgICbwTXnJgshb-wFTVGaDMpnxLEww_s7Gt-EJZanURUe7H6gDnaGcYFqzpUq6fbfIwM2HsyeG2PmrHOBS4gpDLtWhA3Jf5Xjy8PV8PILY82NynEZ7CjisyUHtAudSwSsABiylQsMv68_QcHZvc2I8pon9fzJy96gsyay8WgwlBFULbHoThwmaH8IelQaapDQl46l5Bp_ex60IAOWu3iw",
      link: "/services",
    },
  ]

  return (
    <section id="services" className="bg-surface py-10 md:py-10">
      <div className="mx-auto max-w-[1200px] px-4 md:px-6">
        {/* Header Block */}
        <div className="mb-16 flex flex-col items-start justify-between gap-6 border-b border-outline-variant/60 pb-6 md:flex-row md:items-end">
          <div className="max-w-2xl space-y-4">
            <h2 className="font-headline text-3xl font-bold text-primary md:text-4xl">
              Our Premium Services
            </h2>
            <p className="text-sm leading-relaxed text-on-surface-variant md:text-base">
              Whether you need regular maintenance or a specialized deep clean,
              our high-definition cleaning standards apply across all our
              offerings.
            </p>
          </div>
          <Link href="/services">
            <Button
              variant="outline"
              size="default"
              className="shrink-0 whitespace-nowrap transition-transform duration-200 hover:scale-105 active:scale-95"
            >
              View All Services
            </Button>
          </Link>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {serviceList.map((service, idx) => (
            <Link
              key={idx}
              href={service.link}
              className="group relative flex h-full cursor-pointer flex-col overflow-hidden rounded-2xl border border-outline-variant/65 bg-surface shadow-level-1 transition-all duration-300 hover:-translate-y-1 hover:shadow-level-2"
            >
              {/* Image Header Block */}
              <div className="relative h-44 w-full overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  className="h-full w-full object-cover transition-transform duration-500 select-none group-hover:scale-105"
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0 z-10 bg-gradient-to-t from-primary/30 to-transparent opacity-80"></div>
              </div>

              {/* Card Body */}
              <div className="flex flex-grow flex-col p-6">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg border border-outline-variant/50 bg-surface-ice text-secondary">
                  <span
                    className="material-symbols-outlined"
                    style={{ fontSize: "20px" }}
                  >
                    {service.icon}
                  </span>
                </div>

                <h3 className="font-headline mb-2 text-lg font-bold text-primary transition-colors duration-200 group-hover:text-secondary">
                  {service.title}
                </h3>

                <p className="mb-5 flex-grow text-xs leading-relaxed text-on-surface-variant md:text-sm">
                  {service.desc}
                </p>

                <span className="inline-flex items-center gap-1 text-xs font-semibold tracking-wider text-secondary transition-all group-hover:gap-2">
                  Learn More
                  <span className="material-symbols-outlined text-sm font-bold">
                    arrow_forward
                  </span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
