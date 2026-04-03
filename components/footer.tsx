import { contactDetails, navItems } from "@/lib/site-data";

export function Footer() {
  return (
    <footer className="border-t border-blue-200 py-10">
      <div className="page-shell grid gap-10 lg:grid-cols-[1.1fr_0.6fr_0.7fr]">
        <div>
          <a href="#main" className="font-display text-3xl tracking-[0.18em] text-blue-950">
            TONA
          </a>
          <p className="mt-4 max-w-md text-base leading-7 text-blue-700">
            მძიმე ტექნიკის გაქირავება და სამშენებლო მხარდაჭერა საქართველოში.
            პროფესიონალური მომსახურება, სანდო ტექნიკა და შედეგზე ორიენტირებული
            მიდგომა.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.24em] text-tona-700">
            სწრაფი ბმულები
          </h3>
          <div className="mt-4 flex flex-col gap-3">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                className="text-sm text-blue-700 transition hover:text-blue-950"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.24em] text-tona-700">
            კონტაქტი
          </h3>
          <div className="mt-4 space-y-4">
            {contactDetails.map((item) => (
              <div key={item.title}>
                <p className="text-sm text-blue-500">{item.title}</p>
                <p className="mt-1 text-sm font-medium text-blue-950">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="page-shell mt-10 border-t border-blue-200 pt-6 text-sm text-blue-500">
        © 2026 TONA. ყველა უფლება დაცულია.
      </div>
    </footer>
  );
}

