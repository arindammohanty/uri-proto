// ─── SERVICES SECTION ───

"use client";

import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import { SERVICES } from "@/constants";
import { SECTION_CONTAINER, SECTION_PADDING } from "@/lib/layout";
import { staggerContainer, staggerItem, useScrollReveal } from "@/lib/motion";

export default function Services() {
  const containerMotion = useScrollReveal(staggerContainer, {
    once: true,
    margin: "-60px",
  });

  return (
    <section
      id="services"
      className={SECTION_PADDING}
      aria-labelledby="services-heading"
    >
      <div className={SECTION_CONTAINER}>
        <SectionHeading id="services-heading" title="Services We Offer" />

        <motion.div
          className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8"
          {...containerMotion}
        >
          {SERVICES.map((service) => {
            const Icon = service.icon;
            return (
              <motion.article
                key={service.id}
                variants={staggerItem}
                className="border-border rounded-card group hover:border-text-faint border bg-background p-8 transition-colors duration-300 md:p-10"
              >
                <div className="mb-8 flex items-start justify-between gap-4">
                  <Icon
                    size={32}
                    strokeWidth={1.5}
                    className="text-brand-blue shrink-0"
                    aria-hidden="true"
                  />
                  <span
                    className="border-border group-hover:border-text-faint flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border transition-colors duration-300"
                    aria-hidden="true"
                  >
                    <ArrowUpRight
                      size={18}
                      strokeWidth={2}
                      className="text-brand-blue"
                    />
                  </span>
                </div>
                <h3 className="text-text-dark mb-2 text-lg font-bold md:text-xl">
                  {service.title}
                </h3>
                <p className="text-text-subtle text-sm leading-relaxed md:text-base">
                  {service.description}
                </p>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

// ─── END SERVICES ───
