"use client";

import { useState } from "react";
import type { InputHTMLAttributes, TextareaHTMLAttributes } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  CheckCircle,
  Facebook,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitter,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Button from "@/components/ui/Button";
import { SECTION_CONTAINER, SECTION_PADDING } from "@/lib/layout";
import {
  hiringInquirySchema,
  jobSeekerSchema,
  type HiringInquiryFormData,
  type JobSeekerFormData,
} from "@/types";

type ContactTab = "hiring" | "job";

function FieldError({ message }: { message?: string }) {
  return message ? <p className="mt-1 text-sm font-semibold text-[#EF4444]">{message}</p> : null;
}

function ContactInfo() {
  const socialLinks = [
    { label: "LinkedIn", icon: Linkedin },
    { label: "Twitter/X", icon: Twitter },
    { label: "Facebook", icon: Facebook },
  ];

  return (
    <div>
      <h2 className="text-3xl font-bold text-text-dark md:text-4xl">Let&apos;s Talk</h2>
      <p className="mt-5 max-w-xl text-base font-medium leading-7 text-text-subtle">
        Reach out and one of our team members will respond within one business day. We work with businesses of all sizes across India.
      </p>
      <div className="mt-8 space-y-6">
        <InfoBlock icon={Phone} label="Phone" value="+91 674 6066050" />
        <InfoBlock icon={Mail} label="Email" value="info@uritechnologies.com" />
        <InfoBlock
          icon={MapPin}
          label="Address"
          value="B-36, 2nd Floor, Rupali Street, Sahid Nagar, Bhubaneswar - 751007, Odisha"
        />
      </div>
      <div className="mt-8 flex gap-3">
        {socialLinks.map((link) => {
          const Icon = link.icon;
          return (
            <a
              key={link.label}
              href="#"
              aria-label={link.label}
              className="border-border rounded-full flex h-11 w-11 items-center justify-center border text-text-medium transition-colors hover:border-brand-blue hover:text-brand-blue"
            >
              <Icon size={18} aria-hidden="true" />
            </a>
          );
        })}
      </div>
    </div>
  );
}

function InfoBlock({
  icon: Icon,
  label,
  value,
}: {
  icon: LucideIcon;
  label: string;
  value: string;
}) {
  return (
    <div className="flex gap-4">
      <div className="rounded-full flex h-11 w-11 shrink-0 items-center justify-center bg-badge-bg text-brand-blue">
        <Icon size={20} aria-hidden="true" />
      </div>
      <div>
        <p className="text-sm font-bold text-text-dark">{label}</p>
        <p className="mt-1 text-sm font-medium leading-6 text-text-subtle">{value}</p>
      </div>
    </div>
  );
}

function HiringForm({ onSuccess }: { onSuccess: () => void }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<HiringInquiryFormData>({
    resolver: zodResolver(hiringInquirySchema),
  });

  return (
    <form onSubmit={handleSubmit(onSuccess)} className="space-y-5">
      <TextInput label="Full Name" required error={errors.fullName?.message} {...register("fullName")} />
      <TextInput label="Company Name" required error={errors.companyName?.message} {...register("companyName")} />
      <TextInput label="Work Email" type="email" required error={errors.workEmail?.message} {...register("workEmail")} />
      <TextInput label="Phone Number" error={errors.phoneNumber?.message} {...register("phoneNumber")} />
      <TextInput label="Number of Positions" type="number" error={errors.positions?.message} {...register("positions")} />
      <TextInput label="Job Role / Department" error={errors.role?.message} {...register("role")} />
      <TextArea
        label="Requirement Details"
        required
        placeholder="Tell us about the role, skills needed, and timeline..."
        error={errors.details?.message}
        {...register("details")}
      />
      <Button type="submit" variant="primary" className="w-full">
        Submit Hiring Inquiry
      </Button>
    </form>
  );
}

function JobSeekerForm({ onSuccess }: { onSuccess: () => void }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<JobSeekerFormData>({
    resolver: zodResolver(jobSeekerSchema),
    defaultValues: { experience: "Fresher" },
  });

  return (
    <form onSubmit={handleSubmit(onSuccess)} className="space-y-5">
      <TextInput label="Full Name" required error={errors.fullName?.message} {...register("fullName")} />
      <TextInput label="Email Address" type="email" required error={errors.email?.message} {...register("email")} />
      <TextInput label="Phone Number" required error={errors.phoneNumber?.message} {...register("phoneNumber")} />
      <TextInput label="Current Location" required error={errors.location?.message} {...register("location")} />
      <label className="block text-sm font-bold text-text-dark">
        Years of Experience
        <select
          className="border-border rounded-card mt-2 h-12 w-full bg-background px-4 text-sm font-semibold text-text-dark outline-none focus:border-brand-blue"
          {...register("experience")}
        >
          {["Fresher", "1-3 yrs", "3-5 yrs", "5-10 yrs", "10+ yrs"].map((option) => (
            <option key={option}>{option}</option>
          ))}
        </select>
        <FieldError message={errors.experience?.message} />
      </label>
      <TextInput
        label="Primary Skills"
        required
        placeholder="e.g. React, Node.js, AWS"
        error={errors.skills?.message}
        {...register("skills")}
      />
      <TextInput label="LinkedIn Profile" type="url" error={errors.linkedin?.message} {...register("linkedin")} />
      <TextArea label="Message" error={errors.message?.message} {...register("message")} />
      <Button type="submit" variant="primary" className="w-full">
        Submit My Profile
      </Button>
    </form>
  );
}

function TextInput({
  label,
  error,
  required,
  ...props
}: InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  error?: string;
}) {
  return (
    <label className="block text-sm font-bold text-text-dark">
      {label}
      {required ? <span className="text-[#EF4444]"> *</span> : null}
      <input
        className="border-border rounded-card mt-2 h-12 w-full bg-background px-4 text-sm font-semibold text-text-dark outline-none transition-colors placeholder:text-text-faint focus:border-brand-blue"
        {...props}
      />
      <FieldError message={error} />
    </label>
  );
}

function TextArea({
  label,
  error,
  required,
  ...props
}: TextareaHTMLAttributes<HTMLTextAreaElement> & {
  label: string;
  error?: string;
}) {
  return (
    <label className="block text-sm font-bold text-text-dark">
      {label}
      {required ? <span className="text-[#EF4444]"> *</span> : null}
      <textarea
        rows={5}
        className="border-border rounded-card mt-2 w-full resize-none bg-background px-4 py-3 text-sm font-semibold text-text-dark outline-none transition-colors placeholder:text-text-faint focus:border-brand-blue"
        {...props}
      />
      <FieldError message={error} />
    </label>
  );
}

function ContactFormTabs() {
  const [activeTab, setActiveTab] = useState<ContactTab>("hiring");
  const [submitted, setSubmitted] = useState(false);

  const setTab = (tab: ContactTab) => {
    setActiveTab(tab);
    setSubmitted(false);
  };

  return (
    <div className="border-border rounded-card border bg-background p-5 md:p-7">
      <div className="mb-7 grid grid-cols-2 rounded-full bg-[#F5F5F5] p-1">
        <button
          type="button"
          onClick={() => setTab("hiring")}
          className={`rounded-full px-4 py-3 text-sm font-bold transition-colors ${activeTab === "hiring" ? "bg-brand-blue text-background" : "text-text-medium"}`}
        >
          I&apos;m Hiring
        </button>
        <button
          type="button"
          onClick={() => setTab("job")}
          className={`rounded-full px-4 py-3 text-sm font-bold transition-colors ${activeTab === "job" ? "bg-brand-blue text-background" : "text-text-medium"}`}
        >
          I&apos;m Looking for a Job
        </button>
      </div>
      {submitted ? (
        <div className="flex min-h-[420px] flex-col items-center justify-center text-center">
          <CheckCircle size={54} className="text-green-600" aria-hidden="true" />
          <h3 className="mt-5 text-2xl font-bold text-text-dark">We&apos;ve received your message.</h3>
          <p className="mt-3 max-w-sm text-sm font-medium leading-6 text-text-subtle">
            Expect a reply within 1 business day.
          </p>
        </div>
      ) : activeTab === "hiring" ? (
        <HiringForm onSuccess={() => setSubmitted(true)} />
      ) : (
        <JobSeekerForm onSuccess={() => setSubmitted(true)} />
      )}
    </div>
  );
}

function ContactMain() {
  return (
    // --- CONTACT MAIN ---
    <section className={SECTION_PADDING} aria-labelledby="contact-main-heading">
      <div className={`${SECTION_CONTAINER} grid gap-12 lg:grid-cols-[0.9fr_1.1fr]`}>
        <div id="contact-main-heading" className="sr-only">Contact URI Tech</div>
        <ContactInfo />
        <ContactFormTabs />
      </div>
    </section>
    // --- END CONTACT MAIN ---
  );
}

function MapSection() {
  return (
    // --- MAP SECTION ---
    <section className="border-y border-border bg-[#F4F7FF]" aria-label="URI Tech location">
      <div className="flex h-[400px] flex-col items-center justify-center px-4 text-center">
        <MapPin size={54} className="text-brand-blue" aria-hidden="true" />
        <h2 className="mt-5 text-2xl font-bold text-text-dark">Bhubaneswar, Odisha</h2>
        <p className="mt-2 max-w-xl text-sm font-semibold leading-6 text-text-subtle">
          B-36, 2nd Floor, Rupali Street, Sahid Nagar, Bhubaneswar - 751007, Odisha
        </p>
      </div>
    </section>
    // --- END MAP SECTION ---
  );
}

export default function ContactPageSections() {
  return (
    <>
      <ContactMain />
      <MapSection />
    </>
  );
}
