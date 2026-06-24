"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { SECTION_CONTAINER, SECTION_PADDING_X } from "@/lib/layout";
import { fadeInUp, useEntranceAnimation } from "@/lib/motion";

interface PageHeroProps {
  title: string;
  description: string;
  breadcrumb: string;
}

export default function PageHero({ title, description, breadcrumb }: PageHeroProps) {
  const motionProps = useEntranceAnimation(fadeInUp);

  return (
    <section
      className={`${SECTION_PADDING_X} border-border relative overflow-hidden border-b bg-[#F4F7FF] py-16 md:py-20 lg:py-24`}
      aria-labelledby={`${breadcrumb.toLowerCase().replace(/\s+/g, "-")}-heading`}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(36,84,255,0.14)_1px,transparent_0)] bg-[length:22px_22px]" />
      <motion.div
        className={`${SECTION_CONTAINER} relative z-10`}
        {...motionProps}
      >
        <nav className="mb-6 flex items-center gap-2 text-sm font-semibold text-text-subtle">
          <Link href="/" className="transition-colors hover:text-brand-blue">
            Home
          </Link>
          <ChevronRight size={16} aria-hidden="true" />
          <span className="text-brand-blue">{breadcrumb}</span>
        </nav>
        <h1
          id={`${breadcrumb.toLowerCase().replace(/\s+/g, "-")}-heading`}
          className="max-w-4xl text-4xl font-bold tracking-normal text-text-dark md:text-5xl lg:text-[56px]"
        >
          {title}
        </h1>
        <p className="mt-5 max-w-2xl text-base font-medium leading-7 text-text-subtle md:text-lg">
          {description}
        </p>
      </motion.div>
    </section>
  );
}
