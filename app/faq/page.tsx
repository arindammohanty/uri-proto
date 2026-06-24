"use client";

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const FAQS = [
  { q: "How can I get started with URI Technologies?", a: "Reach out to us via our Business Inquiry form, and our solutions architect team will guide you through our onboarding and discovery process." },
  { q: "What industries do you specialize in?", a: "We cater to various sectors including the Public Sector, Energy & Utility, Industrial, IT & SaaS, Automotive, Healthcare, and Startups." },
  { q: "Do you offer post-deployment support?", a: "Yes, we provide 24/7 post-deployment support, infrastructure monitoring, and continuous optimization for all our enterprise software rollouts." },
  { q: "What cloud platforms do you support?", a: "We hold deep expertise across AWS, Microsoft Azure, and Google Cloud, building secure and compliant multi-cloud and hybrid environments." },
  { q: "How long does a digital transformation audit take?", a: "Initial enterprise risk assessments and capability audits typically run between 2 to 4 weeks depending on the scale of your current infrastructure." }
];

export default function FAQPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 pb-20">
      
      <section className="relative pt-20 pb-16 border-b border-slate-100 bg-slate-50/50 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="flex items-center text-sm font-medium text-slate-500 mb-4">
            <span>Home</span>
            <span className="mx-2 text-slate-300">{'>'}</span>
            <span className="text-orange-500">FAQ</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight">Frequently Asked Questions</h1>
          <p className="text-lg md:text-xl text-slate-500 max-w-2xl leading-relaxed">
            Find answers to common questions about our services, process, and enterprise support structure.
          </p>
        </div>
      </section>

      <section className="py-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-4">
          {FAQS.map((faq, i) => (
            <div key={i} className="border-b border-slate-200 pb-4">
              <button 
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="w-full flex justify-between items-center py-4 text-left focus:outline-none"
              >
                <span className="text-lg font-bold text-slate-900 pr-8">{faq.q}</span>
                <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform duration-300 shrink-0 ${openFaq === i ? 'rotate-180 text-orange-500' : ''}`} />
              </button>
              <div className={`overflow-hidden transition-all duration-300 ease-in-out ${openFaq === i ? 'max-h-40 opacity-100 mb-4' : 'max-h-0 opacity-0'}`}>
                <p className="text-slate-600 leading-relaxed pt-2 pr-8">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
