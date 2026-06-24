"use client";

import React from 'react';
import Link from 'next/link';
import { 
  Briefcase, Cloud, Shield, Cpu, Code, Database, ArrowRight, Layers 
} from 'lucide-react';

const ENTERPRISE_SERVICES = [
  {
    slug: "it-consultant-and-advisory",
    title: "IT Consultant & Advisory",
    desc: "Strategic IT consulting services to align technology infrastructure with core business objectives, covering transformation frameworks and tech audits.",
    icon: Briefcase
  },
  {
    slug: "agile-it-operations",
    title: "Agile IT Operations",
    desc: "Comprehensive engineering management encompassing cloud environments, persistent helpdesk operations, and proactive infrastructure stability.",
    icon: Cpu
  },
  {
    slug: "cloud-platform-services",
    title: "Cloud Platform Services",
    desc: "Modernize legacy infrastructure deployment with secure, scalable, multi-cloud architectures built around continuous integration models.",
    icon: Cloud
  },
  {
    slug: "cyber-security-platform-services",
    title: "Cyber Security Platform Services",
    desc: "Full-spectrum digital risk management, compliance auditing, zero-trust architecture blueprints, and round-the-clock SOC management.",
    icon: Shield
  },
  {
    slug: "devops-and-agile-transformation",
    title: "DevOps & Agile Transformation",
    desc: "Accelerate software delivery and enhance reliability by integrating CI/CD pipelines, test automation, and robust Agile coaching frameworks.",
    icon: Layers
  },
  {
    slug: "api-and-microservices-architecture",
    title: "API & Microservices Architecture",
    desc: "Deconstruct brittle monolithic applications into highly scalable, containerized, loosely coupled services for unprecedented agility.",
    icon: Code
  },
  {
    slug: "data-platforms-and-ai-solutions",
    title: "Data Platforms & AI Solutions",
    desc: "Leveraging cognitive machine learning tools and distributed analytical databases to unlock real-time intelligence streams.",
    icon: Database
  }
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 pb-20">
      
      <section className="relative pt-20 pb-16 border-b border-slate-100 bg-slate-50/50 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="flex items-center text-sm font-medium text-slate-500 mb-4">
            <Link href="/" className="hover:text-orange-500 transition-colors">Home</Link>
            <span className="mx-2 text-slate-300">{'>'}</span>
            <span className="text-orange-500">Services</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight">Our Services</h1>
          <p className="text-lg md:text-xl text-slate-500 max-w-2xl leading-relaxed font-medium">
            Empowering global corporations through sophisticated digital engineering and future-proof technological evolution models.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ENTERPRISE_SERVICES.map((service) => {
            const IconComponent = service.icon;
            return (
              <div key={service.slug} className="p-8 border border-slate-200 rounded-[2rem] bg-white hover:border-orange-500 hover:shadow-xl transition-all group flex flex-col justify-between h-full">
                <div>
                  <div className="w-14 h-14 bg-orange-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <IconComponent className="w-7 h-7 text-orange-500" />
                  </div>
                  <h3 className="text-2xl font-extrabold text-slate-900 mb-4 tracking-tight leading-tight">{service.title}</h3>
                  <p className="text-slate-500 leading-relaxed font-medium mb-6 text-[15px]">{service.desc}</p>
                </div>
                <Link href={`/services/${service.slug}`} className="inline-flex items-center text-orange-500 font-bold hover:text-orange-600 transition-colors mt-4">
                  Explore Capabilities <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            );
          })}
        </div>
      </section>

    </div>
  );
}
