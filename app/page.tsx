import { CheckCircle2 } from "lucide-react";

import { ContactForm } from "@/components/contact-form";
import { FeedbackCard } from "@/components/feedback-card";
import { FeatureCard } from "@/components/feature-card";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { Navbar } from "@/components/navbar";
import { Reveal } from "@/components/reveal";
import { ServiceCard } from "@/components/service-card";
import { getIcon } from "@/lib/icon-map";
import {
  contactDetails,
  feedbackItems,
  features,
  services,
} from "@/lib/site-data";

export default function Home() {
  return (
    <div className="relative overflow-x-clip">
      <Navbar />

      <main>
        <Hero />

        <section id="services" data-section className="section-shell relative">
          <div className="page-shell">
            <div className="text-center">
              <h2 className="text-3xl font-extrabold leading-tight text-blue-950 sm:text-4xl lg:text-[3rem]">
                მომსახურება, რომელიც სამშენებლო პროცესს რეალურად ამარტივებს
              </h2>
              <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-blue-700 sm:text-lg">
                TONA მუშაობს იმ მოთხოვნებზე, სადაც აუცილებელია ტექნიკის სანდოობა, სწრაფი ჩართვა და პასუხისმგებლიანი შესრულება. ჩვენი სერვისები მორგებულია სხვადასხვა მასშტაბის სამშენებლო ამოცანებზე.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {services.map((item, index) => (
                <ServiceCard key={item.title} item={item} index={index} />
              ))}
            </div>
          </div>
        </section>

        <section id="about" data-section className="section-shell relative">
          <div className="section-grid pointer-events-none absolute inset-0 opacity-25" />
          <div className="page-shell relative">
            <div className="mb-10 text-center">
              <h2 className="text-3xl font-extrabold leading-tight text-blue-950 sm:text-4xl lg:text-[3rem]">
                ჩვენს შესახებ
              </h2>
            </div>

            <div className="grid gap-6 lg:grid-cols-[1.12fr_0.88fr] lg:items-center">
            <Reveal>
              <div className="panel industrial-frame flex h-full flex-col rounded-[32px] p-7 sm:p-8">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.24em] text-tona-700">
                      რატომ გვირჩევენ
                    </p>
                    <h3 className="mt-4 max-w-xl text-2xl font-bold text-blue-950 sm:text-[2rem] sm:leading-tight">
                      პროექტზე მორგებული ტექნიკა და ორგანიზებული მომსახურება
                    </h3>
                  </div>
                  <div className="rounded-full border border-tona-300/60 bg-tona-100 px-4 py-2 text-sm font-semibold text-tona-700">
                    TONA
                  </div>
                </div>
                <p className="mt-5 max-w-2xl text-base leading-8 text-blue-700">
                  დამკვეთისთვის მნიშვნელოვანია არა უბრალოდ ტექნიკის მიღება, არამედ კონკრეტული ამოცანისთვის სწორი ტექნიკის სწორ დროს მიღება. სწორედ ამიტომ TONA აერთიანებს ოპერატიულ რეაგირებას, გამოცდილ მიდგომას და სამუშაოსთვის მზადყოფნაში მყოფ ტექნიკურ რესურსს.
                </p>
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  {[
                    "სანდო თანამშრომლობა სხვადასხვა ტიპის პროექტზე",
                    "ამოცანაზე მორგებული ტექნიკის შერჩევა",
                    "პასუხისმგებლიანი მიდგომა ვადებსა და პროცესზე",
                    "მცირე და მასშტაბური სამუშაოების მხარდაჭერა",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-3 rounded-[22px] border border-blue-200 bg-white p-4"
                    >
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-tona-600" />
                      <p className="text-sm leading-6 text-blue-700">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.14}>
              <div className="grid gap-6 self-center">
                <div className="panel industrial-frame rounded-[28px] p-6">
                  <p className="text-sm font-semibold uppercase tracking-[0.24em] text-tona-700">
                    მიდგომა
                  </p>
                  <h3 className="mt-4 text-xl font-bold text-blue-950">
                    პრაქტიკული გადაწყვეტილებები ზედმეტი გართულების გარეშე
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-blue-700">
                    ვაფასებთ რეალურ საჭიროებას და ვთავაზობთ მომსახურებას, რომელიც ობიექტზე შედეგს ქმნის და არა დამატებით სირთულეს.
                  </p>
                </div>
                <div className="panel industrial-frame rounded-[28px] p-6">
                  <p className="text-sm font-semibold uppercase tracking-[0.24em] text-tona-700">
                    ფოკუსი
                  </p>
                  <h3 className="mt-4 text-xl font-bold text-blue-950">
                    ხარისხი, სისწრაფე და პასუხისმგებლობა ერთ სისტემაში
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-blue-700">
                    ჩვენი მომსახურება გათვლილია დეველოპერებზე, კონტრაქტორებზე, სამშენებლო გუნდებზე და კერძო დამკვეთებზე, რომლებსაც სჭირდებათ სანდო ტექნიკური მხარდაჭერა.
                  </p>
                </div>
              </div>
            </Reveal>
            </div>
          </div>
        </section>

        <section id="why-us" data-section className="section-shell relative">
          <div className="section-grid pointer-events-none absolute inset-0 opacity-20" />
          <div className="page-shell relative">
            <div className="text-center">
              <h2 className="text-3xl font-extrabold leading-tight text-blue-950 sm:text-4xl lg:text-[3rem]">
                რატომ ჩვენ
              </h2>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {features.map((item, index) => (
                <FeatureCard key={item.title} item={item} index={index} />
              ))}
            </div>
          </div>
        </section>

        <section id="feedback" data-section className="section-shell relative">
          <div className="page-shell">
            <div className="text-center">
              <h2 className="text-3xl font-extrabold leading-tight text-blue-950 sm:text-4xl lg:text-[3rem]">
                შეფასებები
              </h2>
            </div>

            <div className="mx-auto mt-12 grid max-w-6xl gap-6 lg:grid-cols-3">
              {feedbackItems.map((item, index) => (
                <FeedbackCard key={item.name} item={item} index={index} />
              ))}
            </div>
          </div>
        </section>

        <section id="contact" data-section className="section-shell relative pb-16">
          <div className="page-shell">
            <div className="grid gap-12 lg:grid-cols-[0.88fr_1.12fr] lg:items-center">
              <div>
                <h2 className="max-w-xl text-3xl font-extrabold leading-tight text-blue-950 sm:text-[2.35rem] lg:text-[2.75rem]">
                  დაგვიკავშირდით და შევარჩევთ თქვენს პროექტზე მორგებულ ტექნიკას
                </h2>

                <div className="mt-10 space-y-6">
                  {contactDetails.map((item, index) => {
                    const Icon = getIcon(item.icon);

                    return (
                      <Reveal key={item.title} delay={0.08 * index}>
                        <div className="flex items-start gap-4">
                          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[18px] bg-blue-100 text-tona-600">
                            <Icon className="h-5 w-5" />
                          </div>
                          <div>
                            <p className="text-sm text-blue-500">{item.title}</p>
                            <p className="mt-1 text-lg font-bold text-blue-950">{item.value}</p>
                            <p className="mt-2 text-sm text-blue-700">{item.note}</p>
                          </div>
                        </div>
                      </Reveal>
                    );
                  })}
                </div>
              </div>

              <div className="self-center">
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}





