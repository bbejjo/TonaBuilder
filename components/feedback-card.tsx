"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

import type { FeedbackItem } from "@/lib/site-data";

type FeedbackCardProps = {
  item: FeedbackItem;
  index: number;
};

export function FeedbackCard({ item, index }: FeedbackCardProps) {
  const initials = item.name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2);

  return (
    <motion.article
      className="panel panel-hover industrial-frame flex h-full flex-col rounded-[28px] p-6 text-left sm:p-7"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.55, delay: index * 0.08, ease: "easeOut" }}
    >
      <p className="flex-1 text-base leading-8 text-blue-800">
        &ldquo;{item.quote}&rdquo;
      </p>
      <div className="mt-6 border-t border-blue-200 pt-4">
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-blue-100 text-sm font-bold text-blue-900">
              {initials}
            </div>
            <div>
              <p className="text-lg font-bold text-blue-950">{item.name}</p>
              <p className="mt-1 text-sm text-blue-600">{item.role}</p>
            </div>
          </div>

          <div className="flex items-center gap-1 text-tona-500">
            {Array.from({ length: 5 }).map((_, starIndex) => (
              <Star key={starIndex} className="h-4 w-4 fill-current" />
            ))}
          </div>
        </div>
      </div>
    </motion.article>
  );
}
