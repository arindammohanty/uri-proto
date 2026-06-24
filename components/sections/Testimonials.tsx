// ─── TESTIMONIALS SECTION ───

"use client";

import Image from "next/image";
import { Star } from "lucide-react";
import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import { TESTIMONIALS } from "@/constants";
import { SECTION_CONTAINER, SECTION_PADDING } from "@/lib/layout";
import { staggerContainer, staggerItem, useScrollReveal } from "@/lib/motion";

export default function Testimonials() {
  const gridMotion = useScrollReveal(staggerContainer, { once: true, margin: "-60px" });

  return (
    <section
      id="testimonials"
      className={SECTION_PADDING}
      aria-labelledby="testimonials-heading"
    >
      <div className={SECTION_CONTAINER}>
        <SectionHeading id="testimonials-heading" title="What Our Clients Say" />

        <motion.div
          className="columns-1 gap-6 md:columns-2 lg:columns-3 lg:gap-8"
          {...gridMotion}
        >
          {TESTIMONIALS.map((testimonial) => (
            <motion.article
              key={testimonial.id}
              variants={staggerItem}
              className="border-border rounded-card mb-6 break-inside-avoid border bg-background p-8"
            >
              <div
                className="mb-5 flex items-center gap-0.5"
                aria-label="5 out of 5 stars"
              >
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className="fill-star text-star"
                    aria-hidden="true"
                  />
                ))}
              </div>

              <blockquote className="text-text-medium mb-8 text-sm leading-relaxed md:text-base">
                {testimonial.quote}
              </blockquote>

              <footer className="flex items-center gap-3">
                <Image
                  src={testimonial.avatar}
                  alt={`${testimonial.name}, ${testimonial.title}`}
                  width={40}
                  height={40}
                  className="h-10 w-10 rounded-full object-cover"
                />
                <div>
                  <cite className="text-text-dark text-sm font-bold not-italic md:text-base">
                    {testimonial.name}
                  </cite>
                  <p className="text-text-muted mt-0.5 text-xs md:text-sm">
                    {testimonial.title}
                  </p>
                </div>
              </footer>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ─── END TESTIMONIALS ───
