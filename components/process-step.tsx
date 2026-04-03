"use client";

import { motion } from "framer-motion";

import type { ProcessItem } from "@/lib/site-data";

type ProcessStepProps = {
  item: ProcessItem;
  index: number;
};

export function ProcessStep({ item, index }: ProcessStepProps) {
  return (
    <motion.article
      className="panel industrial-frame relative rounded-[28px] p-6 sm:p-7"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.55, delay: index * 0.08, ease: "easeOut" }}
    >
      <div className="flex items-center gap-4">
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-[22px] bg-blue-800 text-lg font-extrabold text-tona-300">
          {index + 1}
        </div>
        <div>
          <h3 className="text-xl font-bold text-blue-950">{item.title}</h3>
          <p className="mt-3 text-base leading-7 text-blue-700">{item.description}</p>
        </div>
      </div>
    </motion.article>
  );
}

