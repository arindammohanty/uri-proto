// ─── CONTACT SECTION ───

"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import { CONTACT_SUBTEXT } from "@/constants";
import type { ContactFormData } from "@/types";
import { SECTION_CONTAINER, SECTION_PADDING } from "@/lib/layout";
import { fadeInUp, useScrollReveal } from "@/lib/motion";

const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().min(1, "Email is required").email("Please enter a valid email"),
  company: z.string().min(1, "Company is required"),
  requirement: z.string().min(1, "Requirement is required"),
});

const inputStyles =
  "border-border text-text-dark placeholder:text-text-faint w-full rounded-card border bg-background px-4 py-3 text-sm transition-colors focus:border-brand-blue focus:outline-none md:text-base";

export default function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const textMotion = useScrollReveal(fadeInUp);
  const formMotion = useScrollReveal(fadeInUp, { once: true, margin: "-60px" });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      requirement: "",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    await new Promise((resolve) => setTimeout(resolve, 800));
    console.log("Form submitted:", data);
    setIsSubmitted(true);
    reset();
    setTimeout(() => setIsSubmitted(false), 4000);
  };

  return (
    <section
      id="contact"
      className={SECTION_PADDING}
      aria-labelledby="contact-heading"
    >
      <div className={SECTION_CONTAINER}>
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-2 lg:gap-16">
        <motion.div {...textMotion}>
          <h2
            id="contact-heading"
            className="text-text-dark mb-4 text-2xl font-bold tracking-tight md:text-3xl lg:text-4xl"
          >
            Get In Touch
          </h2>
          <p className="text-text-subtle text-sm leading-relaxed md:text-base">
            {CONTACT_SUBTEXT}
          </p>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-4"
          {...formMotion}
          noValidate
        >
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div>
              <label htmlFor="name" className="sr-only">
                Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="Name"
                className={inputStyles}
                aria-invalid={!!errors.name}
                aria-describedby={errors.name ? "name-error" : undefined}
                {...register("name")}
              />
              {errors.name && (
                <p id="name-error" className="text-brand-blue mt-1 text-xs" role="alert">
                  {errors.name.message}
                </p>
              )}
            </div>
            <div>
              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="Email"
                className={inputStyles}
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? "email-error" : undefined}
                {...register("email")}
              />
              {errors.email && (
                <p id="email-error" className="text-brand-blue mt-1 text-xs" role="alert">
                  {errors.email.message}
                </p>
              )}
            </div>
          </div>

          <div>
            <label htmlFor="company" className="sr-only">
              Company
            </label>
            <input
              id="company"
              type="text"
              placeholder="Company"
              className={inputStyles}
              aria-invalid={!!errors.company}
              aria-describedby={errors.company ? "company-error" : undefined}
              {...register("company")}
            />
            {errors.company && (
              <p id="company-error" className="text-brand-blue mt-1 text-xs" role="alert">
                {errors.company.message}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="requirement" className="sr-only">
              Requirement
            </label>
            <textarea
              id="requirement"
              rows={5}
              placeholder="Requirement"
              className={`${inputStyles} resize-y`}
              aria-invalid={!!errors.requirement}
              aria-describedby={errors.requirement ? "requirement-error" : undefined}
              {...register("requirement")}
            />
            {errors.requirement && (
              <p
                id="requirement-error"
                className="text-brand-blue mt-1 text-xs"
                role="alert"
              >
                {errors.requirement.message}
              </p>
            )}
          </div>

          <Button
            type="submit"
            variant="primary"
            className="w-full"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Submit Inquiry"}
          </Button>

          {isSubmitted && (
            <p className="text-text-dark text-center text-sm font-medium" role="status">
              Thank you! We&apos;ll be in touch shortly.
            </p>
          )}
        </motion.form>
        </div>
      </div>
    </section>
  );
}

// ─── END CONTACT ───
