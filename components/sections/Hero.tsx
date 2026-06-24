// ─── HERO SECTION ───

"use client";

import Image from "next/image";
import { Star } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import Button from "@/components/ui/Button";
import {
  HERO_AVATARS,
  HERO_BADGES,
  HERO_HEADLINE,
  HERO_REVIEW,
  HERO_SUBTEXT,
} from "@/constants";
import { SECTION_CONTAINER, SECTION_PADDING } from "@/lib/layout";
import { fadeInUp, useEntranceAnimation } from "@/lib/motion";

export default function Hero() {
  const entranceProps = useEntranceAnimation(fadeInUp);
  const reduceMotion = useReducedMotion();
  const showDelay = entranceProps.animate === "visible";

  return (
    <section
      id="home"
      className={SECTION_PADDING}
      aria-labelledby="hero-heading"
    >
      <div className={SECTION_CONTAINER}>
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-12 xl:gap-16">
          <motion.div {...entranceProps} className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <div className="mb-6 flex flex-wrap justify-center gap-2 md:mb-8 md:gap-3 lg:justify-start">
              {HERO_BADGES.map((badge) => (
                <span
                  key={badge.label}
                  className="border-border inline-flex items-center rounded-full border px-3.5 py-1.5 text-xs md:px-4 md:py-2 md:text-sm"
                >
                  <span className="text-brand-blue font-semibold">{badge.value}</span>
                  <span className="text-text-medium font-medium"> {badge.label}</span>
                </span>
              ))}
            </div>

            <h1
              id="hero-heading"
              className="text-text-dark text-3xl leading-[1.15] font-bold tracking-tight xs:text-4xl md:text-5xl lg:text-hero-headline"
            >
              <span className="block">{HERO_HEADLINE.prefix}</span>
              <span className="text-brand-blue block">{HERO_HEADLINE.highlight}</span>
            </h1>

            <p className="text-text-medium mt-5 max-w-xl text-sm leading-relaxed md:mt-6 md:text-base lg:text-lg">
              {HERO_SUBTEXT}
            </p>

            <div className="mt-8 flex flex-col gap-3 justify-center xs:flex-row xs:items-center md:mt-10 lg:justify-start">
              <Button variant="primary" href="#contact" className="px-7 py-3.5">
                Hire Talent
              </Button>
              <Button variant="secondary" href="#jobs" className="px-7 py-3.5">
                Find Jobs
              </Button>
            </div>

            <div className="mt-8 flex justify-center items-center gap-4 md:mt-10 lg:justify-start">
              <div className="flex -space-x-3">
                {HERO_AVATARS.map((avatar) => (
                  <Image
                    key={avatar.id}
                    src={avatar.src}
                    alt={avatar.alt}
                    width={40}
                    height={40}
                    className="border-background h-10 w-10 rounded-full border-2 object-cover"
                  />
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <div className="flex items-center gap-0.5" aria-hidden="true">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} size={14} className="fill-star text-star" />
                    ))}
                  </div>
                  <span className="text-text-dark text-sm font-semibold md:text-base">
                    {HERO_REVIEW.rating}
                  </span>
                </div>
                <p className="text-text-muted mt-0.5 text-xs md:text-sm">
                  {HERO_REVIEW.label}
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            {...entranceProps}
            transition={{ delay: showDelay && !reduceMotion ? 0.15 : 0 }}
            className="rounded-card relative w-full overflow-hidden lg:min-h-120 xl:min-h-130"
          >
            <Image
              src="/images/hero-image.jpg"
              alt="Professional team collaborating"
              fill
              className="object-cover"
              priority
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ─── END HERO ───
