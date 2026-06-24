import type { ButtonHTMLAttributes, ReactNode } from "react";
import type { LucideIcon } from "lucide-react";
import { z } from "zod";

export interface NavLink {
  label: string;
  href: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface Stat {
  id: string;
  value: string;
  label: string;
}

export interface Industry {
  id: string;
  label: string;
  icon: string;
  alt: string;
}

export interface Testimonial {
  id: string;
  name: string;
  title: string;
  quote: string;
  avatar: string;
}

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterColumn {
  title: string;
  links?: FooterLink[];
  content?: string[];
}

export interface SocialLink {
  label: string;
  href: string;
  icon: LucideIcon;
}

export interface JobListing {
  id: string;
  title: string;
  company: string;
  location: string;
  locationFilter: string;
  type: string;
  experience: string;
  experienceFilter: string;
  salary: string;
  tags: string[];
  posted: string;
  department: string;
  workMode: string;
}

export interface ServiceDetail {
  id: string;
  title: string;
  subhead: string;
  body: string;
  features: string[];
  cta: string;
  icon: LucideIcon;
}

export interface ProcessStep {
  id: string;
  title: string;
  description: string;
}

export interface ValueCard {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface TeamMember {
  id: string;
  name: string;
  title: string;
  quote: string;
  initials: string;
}

export interface FeatureRow {
  id: string;
  title: string;
  description: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface HeroBadge {
  value: string;
  label: string;
}

export interface HeroAvatar {
  id: string;
  src: string;
  alt: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  company: string;
  requirement: string;
}

export const hiringInquirySchema = z.object({
  fullName: z.string().min(2, "Enter your full name."),
  companyName: z.string().min(2, "Enter your company name."),
  workEmail: z.string().email("Enter a valid work email."),
  phoneNumber: z.string().optional(),
  positions: z.coerce.number().min(1, "Enter at least 1 position.").optional().or(z.literal("")),
  role: z.string().optional(),
  details: z.string().min(10, "Share a few details about your requirement."),
});

export const jobSeekerSchema = z.object({
  fullName: z.string().min(2, "Enter your full name."),
  email: z.string().email("Enter a valid email address."),
  phoneNumber: z.string().min(7, "Enter a valid phone number."),
  location: z.string().min(2, "Enter your current location."),
  experience: z.enum(["Fresher", "1-3 yrs", "3-5 yrs", "5-10 yrs", "10+ yrs"]),
  skills: z.string().min(2, "Add your primary skills."),
  linkedin: z.string().url("Enter a valid URL.").optional().or(z.literal("")),
  message: z.string().optional(),
});

export type HiringInquiryFormData = z.infer<typeof hiringInquirySchema>;
export type JobSeekerFormData = z.infer<typeof jobSeekerSchema>;

export type ButtonVariant = "primary" | "secondary" | "ghost";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  href?: string;
  children: ReactNode;
  className?: string;
}
