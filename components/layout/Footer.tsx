"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ArrowRight, Facebook, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  const pathname = usePathname();

  if (pathname === '/crn') {
    return null;
  }

  return (
    <footer className="bg-[#F8F9FA] pt-12 pb-12 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="relative bg-[#FF6B35] rounded-[2rem] p-10 md:p-16 lg:p-20 text-center text-white mb-12 overflow-hidden shadow-lg shadow-orange-500/10">
          
          <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="diamonds" width="64" height="64" patternUnits="userSpaceOnUse">
                <path d="M32 0L64 32L32 64L0 32Z" fill="none" stroke="white" strokeOpacity="0.2" strokeWidth="1"/>
                <circle cx="32" cy="0" r="2.5" fill="white" fillOpacity="0.35"/>
                <circle cx="64" cy="32" r="2.5" fill="white" fillOpacity="0.35"/>
                <circle cx="32" cy="64" r="2.5" fill="white" fillOpacity="0.35"/>
                <circle cx="0" cy="32" r="2.5" fill="white" fillOpacity="0.35"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#diamonds)" />
          </svg>
          
          <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 tracking-tight">Ready for Digital Transformation?</h2>
            <p className="text-white/90 text-sm md:text-base mb-8 max-w-2xl mx-auto font-medium">
              Accelerate your growth and future-proof your enterprise with URI Technologies.
            </p>
            <Link 
              href="/contact" 
              className="inline-flex justify-center bg-white text-slate-900 font-semibold px-6 py-3.5 rounded-xl items-center hover:bg-slate-50 transition-colors shadow-sm"
            >
              Consult Experts <ArrowRight className="ml-2 w-4 h-4" strokeWidth={2.5} />
            </Link>
          </div>
        </div>

        <div className="bg-white border border-slate-200 rounded-[2rem] p-8 md:p-12 shadow-sm">
          
          <div className="mb-10">
            <Link href="/" className="flex items-center">
              <span className="text-2xl md:text-3xl font-extrabold tracking-tight text-slate-900">URI</span>
              <span className="text-2xl md:text-3xl font-extrabold tracking-tight text-[#FF6B35] ml-1.5">Technologies</span>
            </Link>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12 w-full items-start">
            
            <div className="flex flex-col">
              <h3 className="font-bold text-slate-900 mb-4 text-[15px] md:text-base">Head office</h3>
              <div className="space-y-1.5 text-slate-500 text-sm font-medium leading-relaxed">
                <p>URI Technologies</p>
                <p>B-36, 2nd Floor, Rupali Street,</p>
                <p>Sahid Nagar, Bhubaneswar</p>
                <p>Odisha 751007</p>
              </div>
            </div>

            <div className="flex flex-col">
              <h3 className="font-bold text-slate-900 mb-4 text-[15px] md:text-base">Contact us</h3>
              <div className="space-y-1.5 text-slate-500 text-sm font-medium leading-relaxed">
                <p>Phone - +91 674 6066050</p>
                <p>Email - info@uritechnologies.com</p>
              </div>
            </div>

            <div className="flex flex-col">
              <h3 className="font-bold text-slate-900 mb-4 text-[15px] md:text-base">Core Services</h3>
              <ul className="space-y-3 text-slate-500 text-sm font-medium">
                <li><Link href="/services/cloud-platform-services" className="hover:text-[#FF6B35] transition-colors">Cloud Platforms</Link></li>
                <li><Link href="/services/cyber-security-platform-services" className="hover:text-[#FF6B35] transition-colors">Cyber Security</Link></li>
                <li><Link href="/services/api-and-microservices-architecture" className="hover:text-[#FF6B35] transition-colors">Microservices</Link></li>
                <li><Link href="/services/devops-and-agile-transformation" className="hover:text-[#FF6B35] transition-colors">DevOps & Agile</Link></li>
              </ul>
            </div>

            <div className="flex flex-col">
              <h3 className="font-bold text-slate-900 mb-4 text-[15px] md:text-base">Company</h3>
              <ul className="space-y-3 text-slate-500 text-sm font-medium">
                <li><Link href="/about" className="hover:text-[#FF6B35] transition-colors">About Us</Link></li>
                <li><Link href="/services" className="hover:text-[#FF6B35] transition-colors">All Services</Link></li>
                <li><Link href="/contact" className="hover:text-[#FF6B35] transition-colors">Contact</Link></li>
              </ul>
            </div>

          </div>

          <div className="mt-12 pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-slate-600 text-sm font-medium text-center md:text-left">
              © {new Date().getFullYear()} URI Technologies. All rights reserved.
            </p>
            <div className="flex items-center space-x-5 text-slate-900">
              <a href="#" aria-label="Facebook" className="hover:text-[#FF6B35] transition-colors">
                <Facebook className="w-5 h-5" fill="currentColor" strokeWidth={0} />
              </a>
              <a href="#" aria-label="Instagram" className="hover:text-[#FF6B35] transition-colors">
                <Instagram className="w-5 h-5" strokeWidth={2.5} />
              </a>
              <a href="#" aria-label="X (Twitter)" className="hover:text-[#FF6B35] transition-colors">
                <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
                </svg>
              </a>
              <a href="#" aria-label="LinkedIn" className="hover:text-[#FF6B35] transition-colors">
                <Linkedin className="w-5 h-5" fill="currentColor" strokeWidth={0} />
              </a>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}
