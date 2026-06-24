"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import Button from "@/components/ui/Button";
import SectionHeading from "@/components/ui/SectionHeading";
import { HOW_WE_WORK_STEPS, INDUSTRIES, SERVICE_DETAILS, SERVICES, STATS } from "@/constants";
import { SECTION_CONTAINER, SECTION_PADDING, SECTION_PADDING_X } from "@/lib/layout";
import { fadeInUp, staggerContainer, staggerItem, useScrollReveal } from "@/lib/motion";

function ServicesOverview() {
  const motionProps = useScrollReveal(fadeInUp);

  return (
    // --- SERVICES OVERVIEW ---
    <section className={SECTION_PADDING} aria-labelledby="services-overview-heading">
      <motion.div className={`${SECTION_CONTAINER} grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center`} {...motionProps}>
        <div>
          <p className="text-sm font-bold uppercase text-brand-blue">Our Services</p>
          <h2 id="services-overview-heading" className="mt-3 max-w-2xl text-3xl font-bold text-text-dark md:text-4xl">
            Tailored Staffing Solutions for Every Business Need
          </h2>
          <p className="mt-5 max-w-2xl text-base font-medium leading-7 text-text-subtle">
            Whether you need to scale your tech team quickly, find a permanent leadership hire, or optimize your HR function, URI Tech delivers the right talent at the right time.
          </p>
        </div>
        <ul className="border-border rounded-card border bg-background">
          {SERVICES.map((service) => (
            <li key={service.id} className="border-border flex items-center gap-4 border-b p-6 last:border-b-0">
              <Check className="text-brand-blue" size={22} aria-hidden="true" />
              <span className="text-lg font-bold text-text-dark">{service.title}</span>
            </li>
          ))}
        </ul>
      </motion.div>
    </section>
    // --- END SERVICES OVERVIEW ---
  );
}

function ServiceDetailCards() {
  const motionProps = useScrollReveal(staggerContainer, { once: true, margin: "-60px" });

  return (
    // --- SERVICE DETAIL CARDS ---
    <section className={`${SECTION_PADDING_X} pb-12`} aria-labelledby="service-detail-heading">
      <div className={SECTION_CONTAINER}>
        <h2 id="service-detail-heading" className="sr-only">Service Details</h2>
        <motion.div className="space-y-8" {...motionProps}>
          {SERVICE_DETAILS.map((service, index) => {
            const Icon = service.icon;
            const reversed = index % 2 === 1;

            return (
              <motion.article
                key={service.id}
                variants={staggerItem}
                className={`border-border rounded-card flex flex-col gap-8 border bg-background p-6 md:p-8 lg:items-center lg:p-10 ${reversed ? "lg:flex-row-reverse" : "lg:flex-row"}`}
              >
                <div className="flex justify-center lg:w-5/12">
                  <div className="rounded-card flex aspect-square w-full max-w-xs items-center justify-center bg-linear-to-br from-brand-blue to-[#6C8BFF] text-background">
                    <Icon size={72} strokeWidth={1.7} aria-hidden="true" />
                  </div>
                </div>
                <div className="lg:w-7/12">
                  <h3 className="text-3xl font-bold text-text-dark">{service.title}</h3>
                  <p className="mt-2 text-lg font-semibold text-brand-blue">{service.subhead}</p>
                  <p className="mt-4 text-base font-medium leading-7 text-text-subtle">{service.body}</p>
                  <ul className="mt-6 grid gap-3 md:grid-cols-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex gap-3 text-sm font-semibold text-text-medium">
                        <Check className="mt-0.5 shrink-0 text-brand-blue" size={18} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link href="/contact" className="mt-7 inline-flex text-sm font-bold text-brand-blue hover:underline">
                    {service.cta}
                  </Link>
                </div>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
    // --- END SERVICE DETAIL CARDS ---
  );
}

function HowItWorks() {
  const motionProps = useScrollReveal(staggerContainer, { once: true, margin: "-60px" });

  return (
    // --- HOW IT WORKS ---
    <section className={SECTION_PADDING} aria-labelledby="how-we-work-heading">
      <div className={SECTION_CONTAINER}>
        <SectionHeading
          id="how-we-work-heading"
          title="How We Work"
          subtitle="A simple, transparent process from first call to first day."
        />
        <motion.ol className="relative grid gap-8 lg:grid-cols-4 lg:gap-6" {...motionProps}>
          <div className="absolute left-5 top-5 hidden h-px w-[calc(100%-2.5rem)] border-t border-dashed border-brand-blue/40 lg:block" />
          {HOW_WE_WORK_STEPS.map((step, index) => (
            <motion.li key={step.id} variants={staggerItem} className="relative flex gap-5 lg:block">
              <div className="absolute left-5 top-10 h-full border-l border-dashed border-brand-blue/40 lg:hidden" />
              <span className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-blue text-sm font-bold text-background">
                {index + 1}
              </span>
              <div className="lg:mt-5">
                <h3 className="text-lg font-bold text-text-dark">{step.title}</h3>
                <p className="mt-2 text-sm font-medium leading-6 text-text-subtle">{step.description}</p>
              </div>
            </motion.li>
          ))}
        </motion.ol>
      </div>
    </section>
    // --- END HOW IT WORKS ---
  );
}

function IndustriesStaffed() {
  const motionProps = useScrollReveal(staggerContainer, { once: true, margin: "-60px" });

  return (
    // --- INDUSTRIES STAFFED ---
    <section className={`${SECTION_PADDING_X} pb-16`} aria-labelledby="industries-staffed-heading">
      <div className={SECTION_CONTAINER}>
        <SectionHeading id="industries-staffed-heading" title="Industries We Serve" />
        <motion.ul className="flex flex-wrap justify-center gap-3" {...motionProps}>
          {INDUSTRIES.map((industry) => (
            <motion.li
              key={industry.id}
              variants={staggerItem}
              className="border-border rounded-full border bg-background px-6 py-3 text-sm font-bold text-text-medium"
            >
              {industry.label}
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
    // --- END INDUSTRIES STAFFED ---
  );
}

function StatsBar() {
  return (
    // --- STATS BAR ---
    <section className={`${SECTION_PADDING_X} bg-[#F4F7FF] py-12`} aria-label="URI Tech results">
      <div className={`${SECTION_CONTAINER} grid grid-cols-2 gap-6 lg:grid-cols-4`}>
        {STATS.map((stat) => (
          <div key={stat.id} className="text-center">
            <p className="text-3xl font-bold text-brand-blue md:text-4xl">{stat.value}</p>
            <p className="mt-2 text-sm font-semibold text-text-subtle">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
    // --- END STATS BAR ---
  );
}

function ServicesCta() {
  return (
    // --- SERVICES CTA ---
    <section className={SECTION_PADDING} aria-labelledby="services-cta-heading">
      <div className={`${SECTION_CONTAINER} text-center`}>
        <h2 id="services-cta-heading" className="text-3xl font-bold text-text-dark md:text-4xl">
          Ready to Build Your Team?
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base font-medium text-text-subtle">
          Tell us what you need and we&apos;ll get back to you within 24 hours.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Button href="/contact" variant="primary">Get Started</Button>
          <Button href="/jobs" variant="secondary" className="rounded-card">View Open Jobs</Button>
        </div>
      </div>
    </section>
    // --- END SERVICES CTA ---
  );
}

export default function ServicesPageSections() {
  return (
    <>
      <ServicesOverview />
      <ServiceDetailCards />
      <HowItWorks />
      <IndustriesStaffed />
      <StatsBar />
      <ServicesCta />
    </>
  );
}
