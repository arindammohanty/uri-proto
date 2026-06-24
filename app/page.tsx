"use client";
/* eslint-disable @next/next/no-img-element */

import React, { useState } from 'react';
import Link from 'next/link';
import { Star, CheckCircle, ArrowRight } from 'lucide-react';

const MOCK_TESTIMONIALS = [
  { id: 1, name: "David R.", role: "CTO at FinTech Solutions", image: "https://ui-avatars.com/api/?name=David+R&background=f97316&color=fff", content: "URI Technologies fundamentally transformed our monolithic architecture. Their API & Microservices solutions drastically reduced our deployment times and increased system resilience." },
  { id: 2, name: "Sarah M.", role: "VP of Operations", image: "https://ui-avatars.com/api/?name=Sarah+M&background=f97316&color=fff", content: "Integrating their Cloud Platform Services yielded an unprecedented 40% increase in operational efficiency. The transition was seamless with zero downtime." },
  { id: 3, name: "Michael T.", role: "Director of InfoSec", image: "https://ui-avatars.com/api/?name=Michael+T&background=f97316&color=fff", content: "Their Zero-Trust Cyber Security frameworks secured our hybrid environments effortlessly. We now have complete observability and robust compliance controls in place." }
];

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
    <div className="min-h-screen bg-white font-sans text-slate-900 pb-20 selection:bg-orange-200 selection:text-orange-900">
      
      {/* Hero Section */}
      <section className="pt-16 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          <div className="order-2 lg:order-1">
            <div className="inline-flex items-center space-x-2 bg-orange-50 border border-orange-100 px-4 py-2 rounded-full mb-8">
              <span className="text-xs font-bold text-orange-600 uppercase tracking-wider">12+ Years Experience</span>
              <span className="w-1.5 h-1.5 bg-orange-400 rounded-full"></span>
              <span className="text-xs font-bold text-orange-600 uppercase tracking-wider">100+ Global Clients</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 tracking-tight mb-6 leading-[1.1]">
              Empowering <br/>
              Businesses with <br/>
              <span className="text-orange-500">Digital Solutions</span>
            </h1>
            
            <p className="text-xl text-slate-500 mb-10 leading-relaxed max-w-lg font-medium">
              Accelerate growth, enhance agility, and future-proof your enterprise with URI&apos;s intelligent digital solutions and innovation-driven frameworks like NeuDigital and Inculite.
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 mb-12">
              <Link href="/services" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto text-lg px-8 py-4 bg-orange-500 text-white font-bold rounded-xl hover:bg-orange-600 transition-colors shadow-lg shadow-orange-500/20">
                  Explore Services
                </button>
              </Link>
              <Link href="/contact" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto text-lg px-8 py-4 bg-white text-slate-900 border border-slate-200 font-bold rounded-xl hover:border-orange-500 hover:text-orange-500 transition-colors flex items-center justify-center">
                  Consult Experts <ArrowRight className="ml-2 w-5 h-5" />
                </button>
              </Link>
            </div>

            <div className="flex items-center space-x-4">
              <div className="flex -space-x-3">
                {[1,2,3].map(i => (
                  <img key={i} className="w-12 h-12 rounded-full border-4 border-white object-cover bg-slate-100" 
                       src={`/avatars/hero-avatar-${i}.svg`} alt="User" 
                       onError={(e) => { (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=Client+${i}&background=f97316&color=fff` }}/>
                ))}
              </div>
              <div className="flex flex-col items-start">
                <div className="flex text-yellow-400 mb-1">
                  {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 fill-current" />)}
                  <span className="text-slate-800 text-sm font-bold ml-2">ISO Certified</span>
                </div>
                <span className="text-xs text-slate-500 font-medium">500+ Projects Delivered</span>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 w-full flex justify-end">
            <img 
              src="/images/hero-image.jpg" 
              alt="Digital Infrastructure" 
              className="rounded-[2.5rem] shadow-2xl w-full h-auto object-cover"
              onError={(e) => {
                 (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200&h=800";
              }}
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-slate-50 py-24 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-12">About URI Technologies</h2>
          <p className="text-slate-500 text-lg md:text-xl max-w-4xl mx-auto leading-relaxed font-medium mb-16">
            For over a decade, URI Technologies has been a trusted global partner delivering scalable, secure, and future-ready digital solutions. We help clients envision, design, build, and manage tech architectures in an innovative, collaborative, and secure manner.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {[
              { num: '500+', label: 'Projects Delivered' },
              { num: '100+', label: 'Global Clients' },
              { num: '12+', label: 'Years Experience' },
              { num: '24/7', label: 'Dedicated Support' }
            ].map((stat, i) => (
              <div key={i} className="bg-white border border-slate-200 rounded-3xl p-8 text-center shadow-sm hover:border-orange-500 hover:shadow-lg transition-all">
                <div className="text-4xl md:text-5xl font-extrabold text-orange-500 mb-3 tracking-tight">{stat.num}</div>
                <div className="text-sm md:text-base font-bold text-slate-700">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-24 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">Industries We Serve</h2>
            <p className="text-slate-500 text-lg max-w-2xl mx-auto font-medium">Delivering specialized digital transformations across core global sectors.</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 max-w-5xl mx-auto">
            {[
              { name: 'Technology & SaaS', icon: '/industries/it-software.svg' },
              { name: 'Manufacturing & IoT', icon: '/industries/manufacturing.svg' },
              { name: 'Finance & Banking', icon: '/industries/finance.svg' },
              { name: 'Retail & E-Commerce', icon: '/industries/retail.svg' },
              { name: 'Healthcare & Pharma', icon: '/industries/healthcare.svg' }
            ].map((ind, idx) => (
              <div key={idx} className="w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)] bg-white p-8 rounded-[2rem] border border-slate-200 shadow-sm flex flex-col items-center hover:border-orange-500 hover:shadow-xl transition-all cursor-pointer text-center group">
                <div className="w-20 h-20 flex items-center justify-center bg-orange-50 rounded-full text-orange-500 mb-6 group-hover:scale-110 transition-transform">
                  <img src={ind.icon} alt={ind.name} className="w-10 h-10 object-contain" onError={(e) => { e.currentTarget.style.display='none'; }} />
                </div>
                <span className="font-bold text-lg text-slate-900">{ind.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-slate-50 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 rounded-[3rem] my-12 border border-slate-100">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">Why Leading Enterprises Trust Us</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {MOCK_TESTIMONIALS.map((testimonial) => (
            <div key={testimonial.id} className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm flex flex-col justify-between hover:shadow-xl transition-shadow">
              <div>
                <div className="flex text-yellow-400 mb-6">
                  {[1,2,3,4,5].map(i => <Star key={i} className="w-5 h-5 fill-current" />)}
                </div>
                <p className="text-slate-700 mb-8 leading-relaxed font-medium text-[15px]">&quot;{testimonial.content}&quot;</p>
              </div>
              <div className="flex items-center">
                <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full mr-4 bg-orange-100 object-cover" />
                <div>
                  <h4 className="font-bold text-slate-900">{testimonial.name}</h4>
                  <p className="text-sm text-slate-500 font-medium">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Form CTA */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          <div className="sticky top-32">
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">Get In Touch</h2>
            <p className="text-xl text-slate-500 mb-12 font-medium">Ready to future-proof your enterprise? Contact us today to discuss your digital transformation roadmap.</p>
          </div>
          
          <div className="bg-white rounded-[2rem] border border-slate-200 shadow-xl p-8 md:p-10 relative">
            {isSubmitted && (
              <div className="absolute inset-0 bg-white/95 backdrop-blur-sm z-10 flex flex-col items-center justify-center text-center p-8 animate-in fade-in duration-300 rounded-[2rem]">
                <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle className="w-10 h-10 text-green-500" />
                </div>
                <h3 className="text-3xl font-extrabold text-slate-900 mb-2">Inquiry Submitted</h3>
                <p className="text-lg text-slate-500">Thank you! We&apos;ll be in touch shortly.</p>
              </div>
            )}
            
            <form onSubmit={handleContactSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-slate-900 mb-2">Name <span className="text-red-500">*</span></label>
                  <input required type="text" placeholder="John Doe" className="w-full px-5 py-4 rounded-xl border border-slate-200 outline-none focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all text-slate-900 placeholder:text-slate-400 font-medium" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-900 mb-2">Email <span className="text-red-500">*</span></label>
                  <input required type="email" placeholder="johndoe@company.com" className="w-full px-5 py-4 rounded-xl border border-slate-200 outline-none focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all text-slate-900 placeholder:text-slate-400 font-medium" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-bold text-slate-900 mb-2">Company <span className="text-red-500">*</span></label>
                <input required type="text" placeholder="Company name" className="w-full px-5 py-4 rounded-xl border border-slate-200 outline-none focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all text-slate-900 placeholder:text-slate-400 font-medium" value={formData.company} onChange={e => setFormData({...formData, company: e.target.value})} />
              </div>
              
              <div>
                <label className="block text-sm font-bold text-slate-900 mb-2">Project Requirements <span className="text-red-500">*</span></label>
                <textarea required rows={5} placeholder="Tell us about your technical challenges..." className="w-full px-5 py-4 rounded-xl border border-slate-200 outline-none focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all resize-none text-slate-900 placeholder:text-slate-400 font-medium" value={formData.requirement} onChange={e => setFormData({...formData, requirement: e.target.value})}></textarea>
              </div>
              
              <button className="w-full py-4 text-lg font-bold bg-slate-800 text-white hover:bg-slate-900 rounded-xl transition-colors shadow-lg" type="submit">Submit Inquiry</button>
            </form>
          </div>

        </div>
      </section>

    </div>
  );
}
