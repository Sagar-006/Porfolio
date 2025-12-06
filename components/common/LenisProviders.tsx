"use client";

import { ReactNode } from "react";
import { ReactLenis } from "@studio-freight/react-lenis";

export function LenisProvider({ children }: { children: ReactNode }) {
  return <ReactLenis root>{children}</ReactLenis>;
}
