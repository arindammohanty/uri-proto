"use client";

import React, { useState } from 'react';
import { Mail, Lock, Eye, EyeOff } from 'lucide-react';
import Link from 'next/link';

type TabType = 'Company' | 'Admin' | 'Team';

export default function CRNPage() {
  const [activeTab, setActiveTab] = useState<TabType>('Company');
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col lg:flex-row font-sans selection:bg-orange-200 selection:text-orange-900">
      
      {/* Left Column: Context / Testimonial */}
      <div className="w-full lg:w-1/2 p-8 md:p-16 lg:p-24 flex flex-col justify-center bg-slate-50 border-b lg:border-b-0 lg:border-r border-slate-200">
        <div className="max-w-xl mx-auto lg:mx-0 w-full relative">
          
          <Link href="/" className="inline-flex items-center mb-12 hover:opacity-80 transition-opacity">
            <span className="text-8xl font-extrabold tracking-tight text-orange-500">URI</span>
            <span className="text-8xl font-extrabold tracking-tight text-slate-900 ml-1">Tech</span>
          </Link>

          <h1 className="text-4xl lg:text-5xl xl:text-[46px] font-extrabold text-slate-900 leading-[1.1] tracking-tight mb-6">
            Streamline your <br />
            recruitment <br />
            workflows easily.
          </h1>
          
          <p className="text-slate-500 text-lg font-medium leading-relaxed mb-12 max-w-[420px]">
            Manage smarter, faster, and secure talent acquisition in seconds with our powerful platform.
          </p>

          <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200 relative z-10">
            {/* UPDATED: Increased text size to text-lg and made text darker (text-slate-800) */}
            <p className="text-slate-800 font-medium leading-relaxed mb-8 text-lg italic">
              &quot;From the initial conversations all the way through to the project&apos;s successful conclusion, URI Technologies has delivered consistently. Their unique strategy has resulted in a discernible rise in our customers&apos; trust and happiness. A great option if you wish to evolve your company&apos;s digital strategy.&quot;
            </p>
            <div className="flex items-center">
              <div className="w-12 h-12 rounded-full bg-orange-50 flex items-center justify-center mr-4 text-orange-500 font-bold text-sm border border-orange-100">
                SS
              </div>
              <div>
                <h4 className="font-extrabold text-slate-900 text-sm">Satya Swarup</h4>
                <p className="text-xs text-slate-500 font-semibold mt-0.5">CEO, Absec Lab</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Column: Clean Form Container */}
      <div className="w-full lg:w-1/2 p-6 sm:p-8 md:p-16 flex items-center justify-center bg-white relative">
        <div className="absolute inset-0 bg-[radial-gradient(#f1f5f9_1px,transparent_1px)] [background-size:24px_24px] opacity-50 z-0"></div>
        <div className="w-full max-w-[440px] bg-white rounded-3xl p-8 sm:p-10 shadow-xl shadow-slate-200/50 border border-slate-200 relative z-10">
          
          <div className="mb-8">
            <h2 className="text-2xl font-extrabold text-slate-900 mb-2">Welcome Back</h2>
            <p className="text-slate-500 font-medium text-sm">Sign in to your account</p>
          </div>

          {/* Form Tabs */}
          <div className="flex p-1 rounded-xl mb-8 border border-slate-200 bg-slate-50">
            {(['Company', 'Admin', 'Team'] as TabType[]).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex-1 py-2 text-xs uppercase tracking-wider font-bold rounded-lg transition-all duration-200 ${
                  activeTab === tab 
                    ? 'bg-white text-slate-900 shadow-sm border border-slate-200' 
                    : 'text-slate-500 hover:text-slate-800'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <form className="space-y-6">
            <div>
              <label className="block text-sm font-bold text-slate-900 mb-2">
                Work Email
              </label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input 
                  type="email" 
                  placeholder="name@company.com" 
                  className="w-full pl-12 pr-4 py-3.5 bg-white border border-slate-200 rounded-xl outline-none focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all font-medium text-slate-900 placeholder:text-slate-400 text-sm"
                />
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="block text-sm font-bold text-slate-900">Password</label>
                <a href="#" className="text-xs font-bold text-orange-500 hover:text-orange-600 transition-colors">Forgot password?</a>
              </div>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input 
                  type={showPassword ? "text" : "password"} 
                  placeholder="password......" 
                  className="w-full pl-12 pr-12 py-3.5 bg-white border border-slate-200 rounded-xl outline-none focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all font-medium text-slate-900 placeholder:text-slate-400 text-sm tracking-wider"
                />
                <button 
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors focus:outline-none"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            <div className="flex items-center pt-1">
              <input 
                type="checkbox" 
                id="remember" 
                className="w-[18px] h-[18px] rounded border-slate-300 text-orange-500 focus:ring-orange-500 cursor-pointer"
              />
              <label htmlFor="remember" className="ml-3 text-sm font-semibold text-slate-600 cursor-pointer select-none">
                Remember me for 30 days
              </label>
            </div>
            
            <button type="submit" className="w-full bg-slate-900 text-white font-bold py-4 rounded-xl hover:bg-slate-800 transition-colors shadow-lg">
              Sign In
            </button>
            
            <div className="relative py-4 flex items-center">
              <div className="flex-grow border-t border-slate-200"></div>
              <span className="flex-shrink-0 mx-4 text-slate-400 text-xs font-bold uppercase tracking-wider">Or continue with</span>
              <div className="flex-grow border-t border-slate-200"></div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <button type="button" className="flex items-center justify-center py-3 px-4 border border-slate-200 rounded-xl bg-white hover:bg-slate-50 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-200">
                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
                <span className="text-sm font-bold text-slate-700">Google</span>
              </button>
              <button type="button" className="flex items-center justify-center py-3 px-4 border border-slate-200 rounded-xl bg-white hover:bg-slate-50 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-200">
                <svg className="w-5 h-5 mr-2" viewBox="0 0 21 21">
                  <rect x="1" y="1" width="9" height="9" fill="#f25022"/>
                  <rect x="11" y="1" width="9" height="9" fill="#7fba00"/>
                  <rect x="1" y="11" width="9" height="9" fill="#00a4ef"/>
                  <rect x="11" y="11" width="9" height="9" fill="#ffb900"/>
                </svg>
                <span className="text-sm font-bold text-slate-700">Microsoft</span>
              </button>
            </div>

            <div className="text-center pt-4">
              <span className="text-sm font-medium text-slate-500">Don&apos;t have an account? </span>
              <a href="#" className="text-sm font-bold text-slate-900 hover:text-orange-500 transition-colors">Create one</a>
            </div>

          </form>

        </div>
      </div>

    </div>
  );
}
