// ─── ABOUT SECTION ───

"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import StatCard from "@/components/ui/StatCard";
import { ABOUT_PARAGRAPHS, STATS } from "@/constants";
import { SECTION_CONTAINER, SECTION_PADDING } from "@/lib/layout";
import { fadeInUp, staggerContainer, staggerItem, useScrollReveal } from "@/lib/motion";

export default function AboutUs() {
  const textMotion = useScrollReveal(fadeInUp);
  const statsMotion = useScrollReveal(staggerContainer, { once: true, margin: "-60px" });

  return (
    <section
      id="about"
      className={SECTION_PADDING}
      aria-labelledby="about-heading"
    >
      <div className={SECTION_CONTAINER}>
        <SectionHeading id="about-heading" title="About Us" />

        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-2 lg:gap-16">
          <motion.div {...textMotion}>
            {ABOUT_PARAGRAPHS.map((paragraph, index) => (
              <p
                key={index}
                className="text-text-medium mb-4 text-sm leading-relaxed last:mb-0 md:text-base"
              >
                {paragraph}
              </p>
            ))}
          </motion.div>

          <motion.div
            className="grid grid-cols-2 gap-4 md:gap-6"
            {...statsMotion}
          >
            {STATS.map((stat) => (
              <motion.div key={stat.id} variants={staggerItem}>
                <StatCard stat={stat} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ─── END ABOUT ───
