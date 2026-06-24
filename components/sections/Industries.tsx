// ─── INDUSTRIES SECTION ───

"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import { INDUSTRIES, INDUSTRIES_SUBTEXT } from "@/constants";
import { SECTION_CONTAINER, SECTION_PADDING } from "@/lib/layout";
import { staggerContainer, staggerItem, useScrollReveal } from "@/lib/motion";

export default function Industries() {
  const listMotion = useScrollReveal(staggerContainer, { once: true, margin: "-60px" });
  const lastIndex = INDUSTRIES.length - 1;

  return (
    <section
      id="industries"
      className={SECTION_PADDING}
      aria-labelledby="industries-heading"
    >
      <div className={SECTION_CONTAINER}>
        <SectionHeading
          id="industries-heading"
          title="Industries We Serve"
          subtitle={INDUSTRIES_SUBTEXT}
        />

        <motion.ul
          className="mx-auto grid max-w-4xl grid-cols-1 gap-6 md:grid-cols-2 md:gap-8"
          role="list"
          {...listMotion}
        >
          {INDUSTRIES.map((industry, index) => {
            const isLastCentered = index === lastIndex;

            return (
              <motion.li
                key={industry.id}
                variants={staggerItem}
                className={isLastCentered ? "md:col-span-2 md:flex md:justify-center" : ""}
              >
                <article
                  className={`border-border rounded-card flex w-full items-center gap-5 border bg-background p-8 md:gap-6 md:p-10 ${
                    isLastCentered ? "md:max-w-[calc(50%-1rem)]" : ""
                  }`}
                >
                  <Image
                    src={industry.icon}
                    alt={industry.alt}
                    width={64}
                    height={64}
                    className="h-14 w-14 shrink-0 md:h-16 md:w-16"
                  />
                  <h3 className="text-text-dark text-base font-bold md:text-lg">
                    {industry.label}
                  </h3>
                </article>
              </motion.li>
            );
          })}
        </motion.ul>
      </div>
    </section>
  );
}

// ─── END INDUSTRIES ───
