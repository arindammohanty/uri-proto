"use client";

import React from 'react';
import { 
  Eye, Zap, Gem, Shield, Handshake, Users, CheckCircle
} from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 pb-20">
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 border-b border-slate-100 bg-slate-50/50 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="flex items-center text-sm font-medium text-slate-500 mb-4">
            <span>Home</span>
            <span className="mx-2 text-slate-300">{'>'}</span>
            <span className="text-orange-500">About Us</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight">About URI Technologies</h1>
          <p className="text-lg md:text-xl text-slate-500 max-w-2xl leading-relaxed">
            Delivering scalable, secure, and future-ready digital solutions for over a decade.
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 lg:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="grid grid-cols-2 gap-4 h-[400px] md:h-[500px]">
            <div className="bg-slate-100 rounded-3xl h-full w-full object-cover"></div>
            <div className="grid grid-rows-2 gap-4 h-full">
              <div className="bg-slate-100 rounded-3xl h-full w-full object-cover"></div>
              <div className="bg-orange-500 rounded-3xl h-full w-full flex items-center justify-center p-6 text-center text-white font-bold shadow-lg shadow-orange-500/20">
                Est. 2013 - Bhubaneswar, India
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold text-orange-500 uppercase tracking-wider mb-3">Our Story</h4>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6 leading-tight">
              Shaping Smarter Enterprises for Tomorrow
            </h2>
            <div className="space-y-5 text-slate-600 text-lg leading-relaxed">
              <p>
                Established in 2013, URI Technologies is a global leader in digital services and solutions. Founded by a team of professionals with diverse industry expertise, we are dedicated to helping clients envision, design, build, and manage digital solutions in an innovative, collaborative, and secure manner.
              </p>
              <p>
                Our commitment to best practices in governance, quality, compliance, and risk management ensures that we deliver excellence in every project. We manage operational complexity so you can focus on scale and innovation.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Stats Row */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
          {[
            { num: '500+', label: 'Projects Delivered' },
            { num: '100+', label: 'Global Clients' },
            { num: '12+', label: 'Years Experience' },
            { num: '24/7', label: 'Post-Project Support' }
          ].map((stat, i) => (
            <div key={i} className="bg-white border border-slate-100 p-8 rounded-3xl shadow-sm text-center hover:border-orange-200 transition-colors">
              <div className="text-4xl md:text-5xl font-extrabold text-orange-500 mb-2">{stat.num}</div>
              <div className="text-sm md:text-base font-bold text-slate-700">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Mission & Vision Split */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-orange-500 p-10 md:p-14 rounded-[2rem] text-white shadow-xl shadow-orange-500/10">
            <h4 className="text-orange-100 font-bold tracking-wider text-sm uppercase mb-4">Our Mission</h4>
            <h3 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">Managing operational complexity for long-term business value.</h3>
            <p className="text-orange-50 text-lg leading-relaxed">To empower organizations by managing operational complexity through agile, reliable, and compliant solutions. We craft technology that creates measurable, sustainable impact across global enterprise boundaries.</p>
          </div>
          
          <div className="bg-slate-50 border border-slate-100 p-10 md:p-14 rounded-[2rem]">
            <h4 className="text-orange-500 font-bold tracking-wider text-sm uppercase mb-4">Our Vision</h4>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">To be a global center of excellence in digital transformation.</h3>
            <p className="text-slate-600 text-lg leading-relaxed">We aim to become the premier partner for digital transformation and managed services, shaping smarter enterprises for tomorrow through our commitment to innovation, quality, and rigorous security standards.</p>
          </div>
        </div>
      </section>

      {/* What We Stand For */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-12 text-center">What We Stand For</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { icon: Eye, title: 'Transparency', desc: 'Clear communication, ethical practices, and measurable accountability across all tech deployments.' },
            { icon: Shield, title: 'Security-First', desc: 'Embedded compliance and zero-trust architectures to safeguard critical corporate assets.' },
            { icon: Gem, title: 'Excellence', desc: 'Adhering to strict ISO-certified processes to guarantee the highest quality software delivery.' },
            { icon: Zap, title: 'Agility', desc: 'Responsive operational frameworks built to adapt rapidly to evolving market demands.' },
            { icon: Handshake, title: 'Collaboration', desc: 'We act as an extension of your internal engineering teams, not just a service vendor.' },
            { icon: Users, title: 'Human-Centric', desc: 'Solutions designed with end-users in mind, balancing complex logic with intuitive UX.' }
          ].map((value, i) => (
            <div key={i} className="p-8 border border-slate-200 rounded-3xl bg-white hover:border-orange-500 hover:shadow-lg transition-all group">
              <div className="w-12 h-12 bg-orange-50 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <value.icon className="w-6 h-6 text-orange-500" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{value.title}</h3>
              <p className="text-slate-500 leading-relaxed">{value.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Process Highlights */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6 leading-tight">
              Our Proven Working Process
            </h2>
            <p className="text-slate-500 text-lg leading-relaxed mb-8">
              At URI Technologies, we follow a highly structured approach to deliver optimal, error-free solutions that align strictly with business goals.
            </p>
          </div>
          
          <div className="space-y-8">
            {[
              { title: '01. Identify Challenges', desc: 'We begin by understanding specific constraints and operational blockers.' },
              { title: '02. Analyze Requirements', desc: 'Conducting thorough evaluations to map business objectives with tech infrastructure.' },
              { title: '03. Deliver Solutions', desc: 'Building and deploying solutions that drive efficiency, innovation, and growth.' },
              { title: '04. Monitor & Optimize', desc: 'Providing 24/7 post-deployment support and iterative refinement loops.' }
            ].map((item, i) => (
              <div key={i} className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <CheckCircle className="w-6 h-6 text-orange-500" />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-bold text-slate-900">{item.title}</h4>
                  <p className="text-slate-500 mt-1">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
