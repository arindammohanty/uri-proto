"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import {
  CLIENT_LOGOS,
  CORE_VALUES,
  STATS,
  TEAM_MEMBERS,
  WHY_CHOOSE_FEATURES,
} from "@/constants";
import { SECTION_CONTAINER, SECTION_PADDING, SECTION_PADDING_X } from "@/lib/layout";
import { fadeInUp, staggerContainer, staggerItem, useScrollReveal } from "@/lib/motion";

function OurStory() {
  const motionProps = useScrollReveal(fadeInUp);

  return (
    // --- OUR STORY ---
    <section className={SECTION_PADDING} aria-labelledby="our-story-heading">
      <motion.div className={`${SECTION_CONTAINER} grid gap-12 lg:grid-cols-2 lg:items-center`} {...motionProps}>
        <div className="relative">
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-card aspect-[3/4] bg-[#F4F7FF]" />
            <div className="rounded-card aspect-[3/4] bg-badge-bg" />
            <div className="rounded-card col-span-2 aspect-[16/7] bg-[#F4F7FF]" />
          </div>
          <div className="rounded-card absolute bottom-6 left-6 bg-brand-blue px-5 py-4 text-sm font-bold text-background shadow-card-hover">
            Est. 2009 - Bhubaneswar, India
          </div>
        </div>
        <div>
          <p className="text-sm font-bold uppercase text-brand-blue">Our Story</p>
          <h2 id="our-story-heading" className="mt-3 text-3xl font-bold text-text-dark md:text-4xl">
            Built on the Belief That the Right Hire Changes Everything
          </h2>
          <p className="mt-5 text-base font-medium leading-7 text-text-subtle">
            URI Tech was founded in Bhubaneswar, Odisha with a single mission: to bridge the gap between exceptional tech talent and the forward-thinking companies that need them. What started as a small recruitment desk has grown into a trusted staffing partner for over 200 companies across India.
          </p>
          <p className="mt-4 text-base font-medium leading-7 text-text-subtle">
            We understand the unique pressures of the tech industry: the pace of change, the demand for niche skills, the cost of a bad hire. That&apos;s why every placement we make is backed by a rigorous screening process, deep industry knowledge, and a genuine commitment to long-term fit.
          </p>
        </div>
      </motion.div>
    </section>
    // --- END OUR STORY ---
  );
}

function AboutStats() {
  return (
    // --- ABOUT STATS ---
    <section className={`${SECTION_PADDING_X} border-y border-border py-10`} aria-label="URI Tech company stats">
      <div className={`${SECTION_CONTAINER} grid grid-cols-2 gap-8 lg:grid-cols-4`}>
        {STATS.map((stat) => (
          <div key={stat.id} className="text-center">
            <p className="text-3xl font-bold text-brand-blue md:text-4xl">{stat.value}</p>
            <p className="mt-2 text-sm font-semibold text-text-subtle">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
    // --- END ABOUT STATS ---
  );
}

function MissionVision() {
  return (
    // --- MISSION VISION ---
    <section className={SECTION_PADDING} aria-labelledby="mission-vision-heading">
      <div className={`${SECTION_CONTAINER} grid gap-6 lg:grid-cols-2`}>
        <h2 id="mission-vision-heading" className="sr-only">Mission and Vision</h2>
        <article className="rounded-card bg-brand-blue p-8 text-background md:p-12">
          <p className="text-sm font-bold uppercase text-white/75">Our Mission</p>
          <h3 className="mt-4 text-2xl font-bold md:text-3xl">
            To connect the right talent with the right opportunity, every time.
          </h3>
          <p className="mt-5 text-base font-medium leading-7 text-white/85">
            We exist to make hiring less painful and more precise. We do this by investing deeply in candidate relationships, staying current on industry trends, and maintaining honest, transparent communication with every client and candidate we work with.
          </p>
        </article>
        <article className="rounded-card bg-[#F4F7FF] p-8 text-text-dark md:p-12">
          <p className="text-sm font-bold uppercase text-brand-blue">Our Vision</p>
          <h3 className="mt-4 text-2xl font-bold md:text-3xl">
            To be India&apos;s most trusted IT staffing and recruitment partner.
          </h3>
          <p className="mt-5 text-base font-medium leading-7 text-text-subtle">
            We&apos;re building toward a future where no great technologist goes undiscovered, and no company struggles to find the talent they need to grow. We want to be the bridge that makes Indian tech thrive.
          </p>
        </article>
      </div>
    </section>
    // --- END MISSION VISION ---
  );
}

function CoreValues() {
  const motionProps = useScrollReveal(staggerContainer, { once: true, margin: "-60px" });

  return (
    // --- CORE VALUES ---
    <section className={`${SECTION_PADDING_X} pb-16`} aria-labelledby="core-values-heading">
      <div className={SECTION_CONTAINER}>
        <div className="mb-10 text-center">
          <h2 id="core-values-heading" className="text-3xl font-bold text-text-dark md:text-4xl">
            What We Stand For
          </h2>
        </div>
        <motion.div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3" {...motionProps}>
          {CORE_VALUES.map((value) => {
            const Icon = value.icon;
            return (
              <motion.article key={value.id} variants={staggerItem} className="border-border rounded-card border bg-background p-7 transition-shadow hover:shadow-card-hover">
                <Icon className="text-brand-blue" size={30} aria-hidden="true" />
                <h3 className="mt-5 text-xl font-bold text-text-dark">{value.title}</h3>
                <p className="mt-3 text-sm font-medium leading-6 text-text-subtle">{value.description}</p>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
    // --- END CORE VALUES ---
  );
}

function Team() {
  return (
    // --- TEAM ---
    <section className={SECTION_PADDING} aria-labelledby="team-heading">
      <div className={SECTION_CONTAINER}>
        <div className="mb-10 text-center">
          <h2 id="team-heading" className="text-3xl font-bold text-text-dark md:text-4xl">
            The People Behind URI Tech
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {TEAM_MEMBERS.map((member) => (
            <article key={member.id} className="border-border rounded-card border bg-background p-7 text-center">
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-badge-bg text-xl font-bold text-brand-blue">
                {member.initials}
              </div>
              <h3 className="mt-5 text-xl font-bold text-text-dark">{member.name}</h3>
              <p className="mt-1 text-sm font-semibold text-text-muted">{member.title}</p>
              <p className="mt-4 text-sm font-medium italic leading-6 text-text-subtle">&quot;{member.quote}&quot;</p>
            </article>
          ))}
        </div>
      </div>
    </section>
    // --- END TEAM ---
  );
}

function WhyChooseUs() {
  return (
    // --- WHY CHOOSE US ---
    <section className={`${SECTION_PADDING_X} bg-[#F4F7FF] py-16 md:py-20`} aria-labelledby="why-choose-heading">
      <div className={`${SECTION_CONTAINER} grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start`}>
        <div>
          <h2 id="why-choose-heading" className="text-3xl font-bold text-text-dark md:text-4xl">
            Why Leading Companies Hire Through URI Tech
          </h2>
          <p className="mt-5 text-base font-medium leading-7 text-text-subtle">
            Hiring teams choose us for focused shortlists, honest communication, and recruiters who understand the real work behind every role.
          </p>
        </div>
        <div className="space-y-5">
          {WHY_CHOOSE_FEATURES.map((feature) => (
            <div key={feature.id} className="flex gap-4">
              <CheckCircle className="mt-1 shrink-0 text-brand-blue" size={24} aria-hidden="true" />
              <div>
                <h3 className="font-bold text-text-dark">{feature.title}</h3>
                <p className="mt-1 text-sm font-medium leading-6 text-text-subtle">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    // --- END WHY CHOOSE US ---
  );
}

function ClientLogos() {
  const marqueeItems = [...CLIENT_LOGOS, ...CLIENT_LOGOS];

  return (
    // --- CLIENT LOGOS ---
    <section className={SECTION_PADDING} aria-labelledby="client-logos-heading">
      <div className={SECTION_CONTAINER}>
        <h2 id="client-logos-heading" className="text-center text-3xl font-bold text-text-dark md:text-4xl">
          Trusted by Companies Across India
        </h2>
        <div className="mt-10 overflow-hidden">
          <div className="flex w-max animate-[marquee_28s_linear_infinite] gap-4 hover:[animation-play-state:paused]">
            {marqueeItems.map((logo, index) => (
              <span key={`${logo}-${index}`} className="border-border rounded-full border bg-background px-7 py-3 text-sm font-bold text-text-muted">
                {logo}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
    // --- END CLIENT LOGOS ---
  );
}

export default function AboutPageSections() {
  return (
    <>
      <OurStory />
      <AboutStats />
      <MissionVision />
      <CoreValues />
      <Team />
      <WhyChooseUs />
      <ClientLogos />
    </>
  );
}
