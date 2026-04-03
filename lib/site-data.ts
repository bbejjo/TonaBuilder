export type NavItem = {
  id: string;
  href: string;
  label: string;
};

export type IconKey =
  | "arrow-up-right"
  | "building-2"
  | "circle-gauge"
  | "construction"
  | "hard-hat"
  | "map-pinned"
  | "mountain"
  | "phone-call"
  | "pickaxe"
  | "shield-check"
  | "truck"
  | "wrench";

export type TrustItem = {
  title: string;
  detail: string;
  icon: IconKey;
};

export type ServiceItem = {
  title: string;
  description: string;
  icon: IconKey;
};

export type EquipmentItem = {
  title: string;
  summary: string;
  badge: string;
  icon: IconKey;
};

export type FeatureItem = {
  title: string;
  description: string;
  icon: IconKey;
};

export type ProcessItem = {
  title: string;
  description: string;
};

export type ContactDetail = {
  title: string;
  value: string;
  note: string;
  icon: IconKey;
};

export type FeedbackItem = {
  name: string;
  role: string;
  quote: string;
};

export const navItems: NavItem[] = [
  { id: "main", href: "#main", label: "მთავარი" },
  { id: "services", href: "#services", label: "სერვისები" },
  { id: "about", href: "#about", label: "ჩვენს შესახებ" },
  { id: "why-us", href: "#why-us", label: "რატომ ჩვენ" },
  { id: "feedback", href: "#feedback", label: "შეფასებები" },
  { id: "contact", href: "#contact", label: "კონტაქტი" },
];

export const trustItems: TrustItem[] = [
  {
    title: "პროფესიონალური მომსახურება",
    detail: "კოორდინაცია, მხარდაჭერა და პასუხისმგებლიანი კომუნიკაცია თითოეულ ეტაპზე.",
    icon: "hard-hat",
  },
  {
    title: "სანდო ტექნიკა",
    detail: "სამუშაოსთვის მზადყოფნაში მყოფი სპეცტექნიკა რთული ამოცანებისთვის.",
    icon: "shield-check",
  },
  {
    title: "ოპერატიული რეაგირება",
    detail: "სწრაფი ჩართვა პროექტის ტემპისა და ვადების გათვალისწინებით.",
    icon: "circle-gauge",
  },
];

export const services: ServiceItem[] = [
  {
    title: "ექსკავატორების გაქირავება",
    description: "მიწის სამუშაოებისთვის, ამოთხრებისთვის, დატვირთვისა და ტერიტორიის ფორმირებისთვის.",
    icon: "pickaxe",
  },
  {
    title: "ამწეების გაქირავება",
    description: "მძიმე ელემენტების აწევა, მონტაჟი და სიმაღლეზე შესრულებული სამუშაოების მხარდაჭერა.",
    icon: "construction",
  },
  {
    title: "თვითმცლელების მომსახურება",
    description: "ინერტული მასალის, ნიადაგის და სამშენებლო ნარჩენების ეფექტური გადაზიდვა.",
    icon: "truck",
  },
  {
    title: "სამშენებლო პროექტების მხარდაჭერა",
    description: "ტექნიკის, ლოგისტიკისა და სამუშაო პროცესის სინქრონიზებული ორგანიზება ობიექტზე.",
    icon: "building-2",
  },
  {
    title: "მიწის სამუშაოები და მომზადება",
    description: "ტერიტორიის გასწორება, მოსამზადებელი სამუშაოები და სამშენებლო ეტაპის სწრაფი დაწყება.",
    icon: "mountain",
  },
  {
    title: "ტექნიკის მიწოდება ობიექტზე",
    description: "სამშენებლო რიტმის შესანარჩუნებლად ტექნიკის დროული მობილიზება და ოპერატიული ჩართვა საჭირო დროს.",
    icon: "truck",
  },
];

export const equipmentItems: EquipmentItem[] = [
  {
    title: "ექსკავატორები",
    summary: "საიმედო არჩევანი გათხრების, გასუფთავებისა და ფორმირების სამუშაოებისთვის.",
    badge: "მიწის სამუშაოები",
    icon: "pickaxe",
  },
  {
    title: "ამწეები",
    summary: "სიმაღლეზე სამუშაოების და მძიმე კონსტრუქციების აწევის ორგანიზებული შესრულება.",
    badge: "აწევა და მონტაჟი",
    icon: "construction",
  },
  {
    title: "თვითმცლელები",
    summary: "ობიექტზე მასალის დროული მიწოდება და გატანა სამუშაო რიტმის შეუფერხებლად.",
    badge: "გადაზიდვა",
    icon: "truck",
  },
  {
    title: "სპეცტექნიკა",
    summary: "პროექტის სპეციფიკის მიხედვით შერჩეული ტექნიკა რთული და მოთხოვნადი ამოცანებისთვის.",
    badge: "ინდივიდუალური გადაწყვეტა",
    icon: "wrench",
  },
];

export const features: FeatureItem[] = [
  {
    title: "პროფესიონალური მიდგომა",
    description: "ვაფასებთ ვადებს, სამუშაოს მოცულობას და პროექტის ტექნიკურ რეალობას გადაწყვეტილების მიღებამდე.",
    icon: "hard-hat",
  },
  {
    title: "ხარისხიანი ტექნიკა",
    description: "TONA ორიენტირებულია ტექნიკის სანდოობაზე, გამართულობაზე და სამუშაოსთვის შესაბამისობაზე.",
    icon: "shield-check",
  },
  {
    title: "დროული მომსახურება",
    description: "სწრაფი რეაგირება და ორგანიზებული მიწოდება განსაკუთრებით მნიშვნელოვანია აქტიურ სამშენებლო ობიექტებზე.",
    icon: "circle-gauge",
  },
  {
    title: "პასუხისმგებლობა პროექტზე",
    description: "ჩვენთვის ტექნიკის მიწოდება მხოლოდ დასაწყისია, მთავარი შედეგია სამუშაოს გამართული შესრულება.",
    icon: "arrow-up-right",
  },
  {
    title: "მომხმარებელზე მორგებული სერვისი",
    description: "მცირე, საშუალო და მასშტაბური პროექტებისთვის ვირჩევთ პრაქტიკულ და რეალურ გადაწყვეტას.",
    icon: "phone-call",
  },
  {
    title: "ოპერატიული მხარდაჭერა",
    description: "კომუნიკაცია და ჩართვა მიმდინარეობს სწრაფად, რათა პროექტის ტემპი არ შეფერხდეს.",
    icon: "truck",
  },
];

export const processItems: ProcessItem[] = [
  {
    title: "დაგვიკავშირდით",
    description: "გვიამბეთ პროექტის შესახებ, სამუშაოს ტიპზე და საჭირო ვადებზე.",
  },
  {
    title: "შეგირჩევთ შესაბამის ტექნიკას",
    description: "ვაფასებთ მოთხოვნას და გთავაზობთ ტექნიკის სწორ კომბინაციას.",
  },
  {
    title: "ვგეგმავთ სამუშაო პროცესს",
    description: "ვათანხმებთ მომსახურების ფორმატს, მიწოდებას და ობიექტის სპეციფიკას.",
  },
  {
    title: "ვიწყებთ მომსახურებას",
    description: "ტექნიკა და მხარდაჭერა ერთიანად ერთვება პროექტის დროული შესრულებისთვის.",
  },
];

export const contactDetails: ContactDetail[] = [
  {
    title: "ტელეფონი",
    value: "+995 5XX XX XX XX",
    note: "სწრაფი პასუხისთვის დაგვირეკეთ",
    icon: "phone-call",
  },
  {
    title: "ელფოსტა",
    value: "info@tona.ge",
    note: "მოგვწერეთ შეთავაზების ან შეკითხვისთვის",
    icon: "arrow-up-right",
  },
];

export const feedbackItems: FeedbackItem[] = [
  {
    name: "გიორგი მ.",
    role: "დეველოპერი",
    quote:
      "TONA-სთან თანამშრომლობა მარტივი და ზუსტი იყო. ტექნიკა დროულად მივიღეთ და ობიექტზე პროცესიც შეფერხების გარეშე გაგრძელდა.",
  },
  {
    name: "ლევან კ.",
    role: "კონტრაქტორი",
    quote:
      "რაც დაგვჭირდა, იმ სამუშაოზე ზუსტად შესაბამისი ტექნიკა შეგვირჩიეს. კომუნიკაცია სწრაფი იყო და გუნდი პასუხისმგებლიანად მუშაობდა.",
  },
  {
    name: "ნიკა ა.",
    role: "მენეჯერი",
    quote:
      "მნიშვნელოვანი იყო სისწრაფე და საიმედოობა. TONA-მ ორივე გაგვიმართლა და პროექტის ტემპი სრულად შევინარჩუნეთ.",
  },
];
