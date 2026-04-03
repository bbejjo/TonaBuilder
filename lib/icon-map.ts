import type { LucideIcon } from "lucide-react";
import {
  ArrowUpRight,
  Building2,
  CircleGauge,
  Construction,
  HardHat,
  MapPinned,
  Mountain,
  PhoneCall,
  Pickaxe,
  ShieldCheck,
  Truck,
  Wrench,
} from "lucide-react";

import type { IconKey } from "@/lib/site-data";

const iconMap: Record<IconKey, LucideIcon> = {
  "arrow-up-right": ArrowUpRight,
  "building-2": Building2,
  "circle-gauge": CircleGauge,
  construction: Construction,
  "hard-hat": HardHat,
  "map-pinned": MapPinned,
  mountain: Mountain,
  "phone-call": PhoneCall,
  pickaxe: Pickaxe,
  "shield-check": ShieldCheck,
  truck: Truck,
  wrench: Wrench,
};

export function getIcon(key: IconKey) {
  return iconMap[key] ?? CircleGauge;
}
