"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Star, CheckCircle, ArrowRight, Briefcase, HelpCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const MOCK_TESTIMONIALS = [
  { id: 1, name: "David R.", role: "CTO at FinTech Solutions", image: "https://ui-avatars.com/api/?name=David+R&background=FF824D&color=fff", content: "URI Technologies fundamentally transformed our monolithic architecture. Their API & Microservices solutions drastically reduced our deployment times and increased system resilience." },
  { id: 2, name: "Sarah M.", role: "VP of Operations", image: "https://ui-avatars.com/api/?name=Sarah+M&background=0F172A&color=fff", content: "Integrating their Cloud Platform Services yielded an unprecedented 40% increase in operational efficiency. The transition was seamless with zero downtime." },
  { id: 3, name: "Michael T.", role: "Director of InfoSec", image: "https://ui-avatars.com/api/?name=Michael+T&background=FF824D&color=fff", content: "Their Zero-Trust Cyber Security frameworks secured our hybrid environments effortlessly. We now have complete observability and robust compliance controls in place." }
];

const ABOUT_IMAGES = [
  { src: '/images/500_Projects.png', alt: '500+ Projects Delivered', title: '500+', desc: 'PROJECTS DELIVERED' },
  { src: '/images/100_clients.png', alt: '100+ Global Clients', title: '100+', desc: 'GLOBAL CLIENTS' },
  { src: '/images/iso_certified.png', alt: 'ISO Certified', title: 'ISO', desc: 'CERTIFIED AGENCY' },
  { src: '/images/dedicated_support.png', alt: '24/7 Dedicated Support', title: '24/7', desc: 'DEDICATED SUPPORT' }
];

const INDUSTRIES = [
  { name: 'Technology & SaaS', desc: 'Scalable cloud architectures, agile DevOps pipelines, and robust microservices.', icon: '/industries/it-software.svg' },
  { name: 'Manufacturing & IoT', desc: 'Smart factory automation, supply chain visibility, and real-time sensor analytics.', icon: '/industries/manufacturing.svg' },
  { name: 'Finance & Banking', desc: 'Secure, compliant, and high-frequency transactional processing systems.', icon: '/industries/finance.svg' },
  { name: 'Retail & E-Commerce', desc: 'High-availability platforms, unified customer experiences, and load balancing.', icon: '/industries/retail.svg' },
  { name: 'Healthcare & Pharma', desc: 'HIPAA-compliant data pipelines, telehealth solutions, and secure portals.', icon: '/industries/healthcare.svg' },
  { name: 'Telecommunications', desc: 'Low-latency networks, 5G infrastructure management, and OSS/BSS integrations.', icon: '/industries/it-software.svg' }
];

const CLIENT_LOGOS = ["IBM", "Salesforce", "SAP", "Oracle", "Microsoft", "Amazon Web Services", "Cisco"];

export default function HomePage() {
  const [formData, setFormData] = useState({ name: '', email: '', company: '', requirement: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setFormData({ name: '', email: '', company: '', requirement: '' });
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <div className="min-h-screen bg-[linear-gradient(to_bottom,#ffffff_0%,#ffffff_10%,#FF824D_45%,#FF824D_55%,#F8F9FA_90%,#F8F9FA_100%)] font-sans text-slate-900 pb-0 selection:bg-[#0B1120] selection:text-white overflow-hidden">
      
      <section className="pt-16 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="order-2 lg:order-1">
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight mb-6 leading-[1.15]">
              Empowering Businesses with <br/>
              <span className="text-[#FF824D] drop-shadow-sm">Digital Solutions</span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-700 mb-8 leading-relaxed max-w-lg font-medium">
              Accelerate growth, enhance agility, and future-proof your enterprise with URI&apos;s intelligent digital solutions and innovation-driven frameworks.
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 mb-6">
              <Link href="/services" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto text-base px-8 py-3.5 bg-[#FF824D] text-white font-semibold rounded-lg hover:bg-orange-500 transition-colors shadow-lg shadow-orange-500/30">
                  Explore Services
                </button>
              </Link>
              <Link href="/contact" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto text-base px-8 py-3.5 bg-slate-900 text-white font-semibold rounded-lg hover:bg-slate-800 transition-colors flex items-center justify-center shadow-lg shadow-slate-900/20">
                  Consult Experts <ArrowRight className="ml-2 w-4 h-4" />
                </button>
              </Link>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="flex -space-x-3">
                {[1,2,3].map(i => (
                  <img key={i} className="w-10 h-10 rounded-full border-2 border-white object-cover bg-slate-100 shadow-md" 
                       src={`/avatars/hero-avatar-${i}.svg`} alt="User" 
                       onError={(e) => { (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=Client+${i}&background=0F172A&color=fff` }}/>
                ))}
              </div>
              <div className="flex flex-col items-start">
                <div className="flex items-center text-[#FF824D] mb-0.5">
                  <div className="flex mr-2">
                    {[1,2,3,4,5].map(i => <Star key={i} className="w-3.5 h-3.5 fill-current" />)}
                  </div>
                  <span className="text-slate-900 text-sm font-extrabold">ISO Certified</span>
                </div>
                <span className="text-[10px] text-slate-600 font-bold uppercase tracking-wider">500+ Projects Delivered</span>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 w-full flex justify-end relative h-[400px] lg:h-[600px]">
            <Image 
              src="/images/hero-image.jpg" 
              alt="Digital Infrastructure" 
              fill
              className="rounded-[2rem] shadow-2xl object-cover"
              priority
            />
          </div>
        </div>
      </section>

      <section className="py-8 flex flex-col lg:flex-row items-center overflow-hidden relative border-y border-white/20 bg-white/10 backdrop-blur-md shadow-sm">
        
        <div className="z-20 px-6 lg:px-12 mb-4 lg:mb-0 lg:border-r border-slate-900/10 flex-shrink-0 flex items-center">
          <span className="text-sm md:text-base font-bold text-slate-900 uppercase tracking-widest">
            Trusted by Global <span className="text-[#FF824D] drop-shadow-sm">Pioneers</span>
          </span>
        </div>

        <div className="flex-1 overflow-hidden relative flex items-center w-full px-8 md:px-16">
          <motion.div
            className="flex space-x-16 md:space-x-24 items-center"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, ease: "linear", duration: 40 }}
          >
            {[...CLIENT_LOGOS, ...CLIENT_LOGOS, ...CLIENT_LOGOS].map((logo, i) => (
              <div key={i} className="flex-shrink-0 text-2xl md:text-3xl font-extrabold text-slate-900/50 hover:text-slate-900/90 transition-colors cursor-default select-none tracking-tight">
                {logo}
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-24 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6 tracking-tight drop-shadow-sm">About URI Technologies</h2>
            <p className="text-slate-800 text-lg md:text-xl max-w-4xl mx-auto leading-relaxed font-medium mb-8">
              For over a decade, URI Technologies has been a trusted global partner delivering scalable, secure, and future-ready digital solutions. We help clients envision, design, build, and manage tech architectures in an innovative, collaborative, and secure manner.
            </p>
            <Link href="/about" className="inline-flex items-center text-slate-900 font-extrabold text-[15px] hover:text-white transition-colors bg-white/20 px-6 py-2 rounded-full backdrop-blur-md border border-white/40">
              Read Our Full Story <ArrowRight className="ml-1.5 w-4 h-4" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mt-12">
            {ABOUT_IMAGES.map((img, i) => (
              <div key={i} className="bg-white/70 backdrop-blur-xl border border-white/50 rounded-3xl p-3 flex flex-col items-center text-center shadow-xl shadow-orange-900/5 hover:-translate-y-1 hover:shadow-2xl transition-all group">
                <div className="relative w-full h-48 sm:h-56 lg:h-64 overflow-hidden rounded-2xl bg-white/50">
                  <Image src={img.src} alt={img.alt} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 overflow-hidden relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight drop-shadow-md">Industries We Serve</h2>
              <p className="text-white/90 text-lg font-medium drop-shadow-sm">Delivering specialized digital transformations across core global sectors tailored to extreme operational demands.</p>
            </div>
            <Link href="/services" className="hidden md:inline-flex items-center text-slate-900 font-extrabold hover:text-white transition-colors pb-1 drop-shadow-sm">
              View All Services <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {INDUSTRIES.map((ind, idx) => {
              const isLeftColumn = idx % 2 === 0;
              const xOrigin = isLeftColumn ? -100 : 100;

              return (
                <motion.div 
                  key={idx} 
                  initial={{ opacity: 0, x: xOrigin }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, type: "spring", bounce: 0.2 }}
                  className="relative bg-[#0B1120]/95 backdrop-blur-2xl p-8 md:p-10 rounded-[2rem] border border-white/10 flex flex-col items-start hover:-translate-y-1 shadow-2xl transition-all cursor-pointer group overflow-hidden"
                >
                  <div className="relative mb-8 inline-flex items-center justify-center">
                    <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 blur-xl rounded-full transition-opacity duration-500 pointer-events-none scale-[2.0]"></div>
                    <div className="w-16 h-16 flex items-center justify-center bg-slate-800 border border-slate-700 rounded-2xl text-white group-hover:bg-white group-hover:border-white transition-all duration-300 shadow-md relative z-10">
                      <img src={ind.icon} alt={ind.name} className="w-8 h-8 object-contain invert brightness-0 group-hover:invert-0 group-hover:brightness-100 transition-all duration-300" onError={(e) => { e.currentTarget.style.display='none'; }} />
                    </div>
                  </div>
                  
                  <div className="relative z-10 text-left">
                    <span className="font-extrabold text-2xl text-white tracking-wide mb-3 block">{ind.name}</span>
                    <p className="text-slate-400 font-medium leading-relaxed">{ind.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
          
          <div className="mt-10 text-center md:hidden">
            <Link href="/services" className="inline-flex items-center text-slate-900 font-extrabold hover:text-white transition-colors drop-shadow-sm">
              View All Services <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-24 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">Why Leading Enterprises <span className="text-[#FF824D]">Trust</span> Us</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {MOCK_TESTIMONIALS.map((testimonial) => (
              <div key={testimonial.id} className="bg-white/80 backdrop-blur-xl p-8 rounded-3xl border border-white/60 shadow-xl shadow-slate-200/50 flex flex-col justify-between hover:-translate-y-1 transition-transform relative overflow-hidden group">
                <div>
                  <div className="flex text-[#FF824D] mb-6">
                    {[1,2,3,4,5].map(i => <Star key={i} className="w-5 h-5 fill-current" />)}
                  </div>
                  <p className="text-slate-900 mb-8 leading-relaxed font-bold text-[15px]">&quot;{testimonial.content}&quot;</p>
                </div>
                <div className="flex items-center">
                  <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full mr-4 bg-slate-200 object-cover" />
                  <div>
                    <h4 className="font-extrabold text-slate-900">{testimonial.name}</h4>
                    <p className="text-sm text-slate-600 font-bold">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start relative">
            
            <div className="lg:col-span-5 h-fit sticky top-24 bg-[#0B1120] rounded-[2.5rem] p-10 md:p-12 text-white shadow-2xl border border-slate-800 overflow-hidden relative">
              <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(#fff_1px,transparent_1px),linear-gradient(90deg,#fff_1px,transparent_1px)] [background-size:32px_32px]"></div>
              
              <div className="relative z-10">
                <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">Let&apos;s Build <br/><span className="text-[#FF824D]">Together.</span></h2>
                <p className="text-lg text-slate-400 mb-12 font-medium leading-relaxed">
                  Ready to future-proof your enterprise? Provide your details, and our systems architects will reach out to discuss your transformation roadmap.
                </p>

                <div className="space-y-6">
                  <div className="bg-[#1E293B] p-6 rounded-2xl border border-slate-700">
                    <h3 className="font-bold text-[#FF824D] mb-2 flex items-center">
                      <HelpCircle className="w-5 h-5 mr-2" /> General Inquiries
                    </h3>
                    <p className="text-sm text-slate-300 mb-4">Not sure what you need yet? Check out our frequently asked questions.</p>
                    <Link href="/faq" className="text-sm font-bold text-white hover:text-[#FF824D] underline decoration-white hover:decoration-[#FF824D] decoration-2 underline-offset-4 transition-all">
                      Visit FAQ Page
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-7 bg-white/95 backdrop-blur-2xl rounded-[2.5rem] border border-white shadow-2xl shadow-slate-200/50 p-8 md:p-12 relative">
              {isSubmitted && (
                <div className="absolute inset-0 bg-white/95 backdrop-blur-sm z-10 flex flex-col items-center justify-center text-center p-8 animate-in fade-in duration-300 rounded-[2.5rem]">
                  <div className="w-24 h-24 bg-[#FF824D]/10 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle className="w-12 h-12 text-[#FF824D]" />
                  </div>
                  <h3 className="text-3xl font-extrabold text-slate-900 mb-2">Inquiry Submitted</h3>
                  <p className="text-lg text-slate-600 font-medium">Thank you! Our engineering team will be in touch shortly.</p>
                </div>
              )}
              
              <div className="mb-10">
                <h3 className="text-3xl font-extrabold text-slate-900">Project Requirements</h3>
                <p className="text-slate-500 mt-2 font-medium">Fill out the fields below accurately to help us route your request.</p>
              </div>

              <form onSubmit={handleContactSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-slate-900 mb-2">Full Name <span className="text-[#FF824D]">*</span></label>
                    <input 
                      required 
                      type="text" 
                      placeholder="John Doe" 
                      className="w-full px-5 py-4 rounded-xl bg-[#F8F9FA] border border-slate-200 outline-none focus:bg-white focus:border-slate-900 focus:ring-1 focus:ring-slate-900 transition-all text-slate-900 placeholder:text-slate-400 font-medium" 
                      value={formData.name} 
                      onChange={e => setFormData({...formData, name: e.target.value})}
                      onInvalid={e => (e.target as HTMLInputElement).setCustomValidity('Please fill out all mandatory fields.')}
                      onInput={e => (e.target as HTMLInputElement).setCustomValidity('')}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-900 mb-2">Work Email <span className="text-[#FF824D]">*</span></label>
                    <input 
                      required 
                      type="email" 
                      placeholder="john@company.com" 
                      className="w-full px-5 py-4 rounded-xl bg-[#F8F9FA] border border-slate-200 outline-none focus:bg-white focus:border-slate-900 focus:ring-1 focus:ring-slate-900 transition-all text-slate-900 placeholder:text-slate-400 font-medium" 
                      value={formData.email} 
                      onChange={e => setFormData({...formData, email: e.target.value})}
                      onInvalid={e => (e.target as HTMLInputElement).setCustomValidity('Please fill out all mandatory fields.')}
                      onInput={e => (e.target as HTMLInputElement).setCustomValidity('')}
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-900 mb-2">Company Name <span className="text-[#FF824D]">*</span></label>
                  <input 
                    required 
                    type="text" 
                    placeholder="Enterprise Inc." 
                    className="w-full px-5 py-4 rounded-xl bg-[#F8F9FA] border border-slate-200 outline-none focus:bg-white focus:border-slate-900 focus:ring-1 focus:ring-slate-900 transition-all text-slate-900 placeholder:text-slate-400 font-medium" 
                    value={formData.company} 
                    onChange={e => setFormData({...formData, company: e.target.value})}
                    onInvalid={e => (e.target as HTMLInputElement).setCustomValidity('Please fill out all mandatory fields.')}
                    onInput={e => (e.target as HTMLInputElement).setCustomValidity('')}
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-900 mb-2">Technical Challenges <span className="text-[#FF824D]">*</span></label>
                  <textarea 
                    required 
                    rows={5} 
                    placeholder="Describe the operational blockers or cloud requirements..." 
                    className="w-full px-5 py-4 rounded-xl bg-[#F8F9FA] border border-slate-200 outline-none focus:bg-white focus:border-slate-900 focus:ring-1 focus:ring-slate-900 transition-all resize-none text-slate-900 placeholder:text-slate-400 font-medium" 
                    value={formData.requirement} 
                    onChange={e => setFormData({...formData, requirement: e.target.value})}
                    onInvalid={e => (e.target as HTMLTextAreaElement).setCustomValidity('Please fill out all mandatory fields.')}
                    onInput={e => (e.target as HTMLTextAreaElement).setCustomValidity('')}
                  ></textarea>
                </div>
                <button className="w-full py-5 text-lg font-bold bg-[#FF824D] text-white hover:bg-orange-500 rounded-xl transition-all shadow-lg shadow-orange-500/20" type="submit">
                  Submit Architecture Inquiry
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
