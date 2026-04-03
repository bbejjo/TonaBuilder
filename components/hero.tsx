"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowDownRight, ArrowRight } from "lucide-react";

import craneImage from "@/app/images/crane.jpeg";

export function Hero() {
  return (
    <section
      id="main"
      data-section
      className="section-shell relative overflow-hidden pt-14 sm:pt-20"
    >
      <div className="section-grid pointer-events-none absolute inset-0 opacity-40" />
      <div className="pointer-events-none absolute inset-x-0 top-8 h-px bg-gradient-to-r from-transparent via-blue-300 to-transparent" />

      <div className="page-shell relative">
        <div className="grid min-h-[calc(100svh-8rem)] items-center gap-10 lg:min-h-0 lg:grid-cols-[0.82fr_1.18fr] lg:gap-14">
          <div className="mx-auto flex max-w-4xl flex-col items-center text-center lg:mx-0 lg:items-start lg:text-left">
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.08 }}
              className="max-w-3xl text-4xl font-extrabold leading-[0.95] text-blue-950 sm:text-5xl lg:text-6xl"
            >
              მძიმე ტექნიკის გაქირავება
              <span className="mt-2 block text-tona-600">
                სანდოდ, სწრაფად და პროფესიონალურად
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.16 }}
              className="mt-6 max-w-xl text-base leading-8 text-blue-700 sm:text-lg"
            >
              TONA გთავაზობთ ექსკავატორების, ამწეების, თვითმცლელების და
              სამშენებლო მხარდაჭერის მომსახურებას საქართველოში. როცა პროექტს
              სჭირდება გამართული ტექნიკა, დროული ჩართვა და პასუხისმგებლიანი
              პარტნიორი, არჩევანი უნდა იყოს პრაქტიკული და სანდო.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.24 }}
              className="mt-9 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start"
            >
              <a href="#contact" className="button-primary">
                მოითხოვე კონსულტაცია
                <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#services" className="button-secondary">
                ჩვენი სერვისები
                <ArrowDownRight className="h-4 w-4" />
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 32, scale: 0.98 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.18 }}
            className="relative order-last hidden lg:block"
          >
            <div className="industrial-frame overflow-hidden rounded-[34px] border border-blue-200/80 bg-white/60 shadow-panel backdrop-blur-sm">
              <div className="relative aspect-[4/5] sm:aspect-[16/10] lg:aspect-[6/7]">
                <Image
                  src={craneImage}
                  alt="TONA-ს ამწე ტექნიკა ობიექტზე"
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 42vw"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
