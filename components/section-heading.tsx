"use client";

import { motion } from "framer-motion";

import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionHeadingProps) {
  const isCentered = align === "center";

  return (
    <motion.div
      className={cn(
        "max-w-3xl",
        isCentered && "mx-auto text-center",
        className,
      )}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-tona-300/60 bg-tona-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.3em] text-tona-700">
        {eyebrow}
      </span>
      <h2 className="text-3xl font-extrabold leading-tight text-blue-950 sm:text-4xl lg:text-[3rem]">
        {title}
      </h2>
      <p className="mt-5 text-base leading-8 text-blue-700 sm:text-lg">
        {description}
      </p>
    </motion.div>
  );
}

