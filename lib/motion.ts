"use client";

import { useEffect, useState } from "react";
import { useReducedMotion, type Variants } from "framer-motion";

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3, ease: "easeOut" },
  },
};

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
};

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3, ease: "easeOut" },
  },
};

export const reducedMotionVariants: Variants = {
  hidden: { opacity: 1, y: 0 },
  visible: { opacity: 1, y: 0 },
};

function useMounted() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return mounted;
}

/** Avoid hydration mismatch: SSR + first client paint use initial={false}. */
export function useScrollReveal(
  variants: Variants,
  viewport: { once?: boolean; margin?: string } = { once: true, margin: "-80px" },
) {
  const mounted = useMounted();
  const reduceMotion = useReducedMotion();

  if (mounted && reduceMotion) {
    return { initial: false as const, variants: reducedMotionVariants };
  }

  return {
    initial: false as const,
    whileInView: "visible" as const,
    viewport,
    variants,
  };
}

/** For above-the-fold content that animates on page load. */
export function useEntranceAnimation(variants: Variants) {
  const mounted = useMounted();
  const reduceMotion = useReducedMotion();

  if (!mounted || reduceMotion) {
    return { initial: false as const, variants };
  }

  return {
    initial: "hidden" as const,
    animate: "visible" as const,
    variants,
  };
}
