"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import { getIcon } from "@/lib/icon-map";
import type { ServiceItem } from "@/lib/site-data";

type ServiceCardProps = {
  item: ServiceItem;
  index: number;
};

export function ServiceCard({ item, index }: ServiceCardProps) {
  const Icon = getIcon(item.icon);

  return (
    <motion.article
      className="group panel panel-hover industrial-frame h-full rounded-[24px] p-5 sm:p-6"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.55, delay: index * 0.08, ease: "easeOut" }}
      whileHover={{ y: -6 }}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[18px] bg-blue-100 text-tona-600">
            <Icon className="h-5 w-5" />
          </div>
          <h3 className="text-xl font-bold leading-tight text-blue-950">{item.title}</h3>
        </div>
        <ArrowUpRight className="h-5 w-5 text-blue-400 transition duration-700 group-hover:text-blue-700" />
      </div>
      <p className="mt-4 text-sm leading-6 text-blue-700 sm:text-[15px]">{item.description}</p>
      <div className="mt-4 h-px bg-gradient-to-r from-blue-300 to-transparent" />
    </motion.article>
  );
}

