"use client";

import { PhoneCall } from "lucide-react";

export function FloatingCTA() {
  return (
    <a
      href="#contact"
      className="button-primary fixed bottom-4 right-4 z-40 shadow-glow lg:hidden"
    >
      <PhoneCall className="h-4 w-4" />
      კონტაქტი
    </a>
  );
}
