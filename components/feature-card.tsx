"use client";

import { motion } from "framer-motion";

import { getIcon } from "@/lib/icon-map";
import type { FeatureItem } from "@/lib/site-data";

type FeatureCardProps = {
  item: FeatureItem;
  index: number;
};

export function FeatureCard({ item, index }: FeatureCardProps) {
  const Icon = getIcon(item.icon);

  return (
    <motion.article
      className="panel panel-hover industrial-frame rounded-[28px] p-6 sm:p-7"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.55, delay: index * 0.08, ease: "easeOut" }}
    >
      <div className="flex items-center gap-4">
        <div className="flex h-14 w-14 items-center justify-center rounded-[22px] bg-blue-100 text-tona-600">
          <Icon className="h-6 w-6" />
        </div>
      </div>
      <h3 className="mt-6 text-2xl font-bold text-blue-950">{item.title}</h3>
      <p className="mt-4 text-base leading-7 text-blue-700">{item.description}</p>
    </motion.article>
  );
}

