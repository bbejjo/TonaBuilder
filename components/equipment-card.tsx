"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import { getIcon } from "@/lib/icon-map";
import type { EquipmentItem } from "@/lib/site-data";

type EquipmentCardProps = {
  item: EquipmentItem;
  index: number;
};

export function EquipmentCard({ item, index }: EquipmentCardProps) {
  const Icon = getIcon(item.icon);

  return (
    <motion.article
      className="panel panel-hover industrial-frame overflow-hidden rounded-[30px]"
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.55, delay: index * 0.08, ease: "easeOut" }}
    >
      <div className="relative h-52 overflow-hidden border-b border-blue-200/70 bg-gradient-to-br from-white via-blue-50 to-tona-100 p-6">
        <div className="absolute inset-0 bg-grid bg-[size:42px_42px] opacity-10" />
        <div className="absolute -right-10 bottom-0 h-40 w-40 rounded-full bg-blue-300/20 blur-3xl" />
        <div className="absolute left-6 top-6 rounded-full border border-tona-300/60 bg-tona-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-tona-700">
          {item.badge}
        </div>
        <div className="relative flex h-full items-end justify-between">
          <div className="rounded-[24px] border border-blue-200 bg-white/90 p-4">
            <Icon className="h-14 w-14 text-blue-800" />
          </div>
          <div className="rounded-full border border-blue-200 bg-white/90 p-3 text-blue-700">
            <ArrowUpRight className="h-5 w-5" />
          </div>
        </div>
      </div>
      <div className="p-6 sm:p-7">
        <h3 className="text-2xl font-bold text-blue-950">{item.title}</h3>
        <p className="mt-4 text-base leading-7 text-blue-700">{item.summary}</p>
      </div>
    </motion.article>
  );
}

