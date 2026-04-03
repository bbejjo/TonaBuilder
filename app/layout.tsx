import type { Metadata } from "next";
import { Bebas_Neue, Noto_Sans_Georgian } from "next/font/google";

import "./globals.css";
import { cn } from "@/lib/utils";

const displayFont = Bebas_Neue({
  variable: "--font-display",
  subsets: ["latin"],
  weight: "400",
});

const bodyFont = Noto_Sans_Georgian({
  variable: "--font-body",
  subsets: ["georgian"],
  weight: ["400", "500", "700", "800"],
});

export const metadata: Metadata = {
  title: "TONA | მძიმე ტექნიკის გაქირავება საქართველოში",
  description:
    "TONA არის მძიმე ტექნიკის გაქირავებისა და სამშენებლო მხარდაჭერის კომპანია საქართველოში. ექსკავატორები, ამწეები, თვითმცლელები და პროფესიონალური მომსახურება თქვენი პროექტისთვის.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ka" suppressHydrationWarning>
      <body
        className={cn(
          displayFont.variable,
          bodyFont.variable,
          "font-body antialiased",
        )}
      >
        {children}
      </body>
    </html>
  );
}
