'use client';

import { supabase } from '@/lib/supabase';
import React, { useState } from 'react';
import { Eye, EyeOff, Loader2, Mail, Lock } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

type TabMode = 'Company' | 'Talent';

export default function CRNLoginPage() {
  const [activeTab, setActiveTab] = useState<TabMode>('Company');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const publicDomains = ['gmail.com', 'yahoo.com', 'hotmail.com', 'outlook.com', 'aol.com'];

  const handleTabSwitch = (tab: TabMode) => {
    console.log(`Analytics Event: tab_switch - Selected ${tab}`);
    setActiveTab(tab);
    setErrorMsg('');
  };

  const localValidation = () => {
    if (!email.trim()) {
      setErrorMsg(activeTab === 'Company' ? 'Work email is required' : 'Email is required');
      return false;
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setErrorMsg('Please enter a valid email address');
      return false;
    }

    const domain = email.split('@')[1]?.toLowerCase();
    
    if (activeTab === 'Company' && publicDomains.includes(domain)) {
      setErrorMsg('Please use your work email address. Public email providers are not accepted.');
      return false;
    }

    if (!password) {
      setErrorMsg('Password is required');
      return false;
    }

    return true;
  };

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');
    console.log('Analytics Event: login_attempt');

    if (!localValidation()) return;

    setLoading(true);

    try {
      if (activeTab === 'Company') {
        const checkDomain = await fetch('/api/validate-domain', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email, type: activeTab }),
        });

        const validationResponse = await checkDomain.json();

        if (!checkDomain.ok) {
          setErrorMsg(validationResponse.error || 'Domain verification failed.');
          console.log('Analytics Event: login_failure - Reason: Domain verification failed');
          setLoading(false);
          return;
        }
      }

      const { data, error } = await supabase.auth.signInWithPassword({
        email: email,
        password: password,
      });

      if (error) {
        throw new Error(error.message); 
      }

      const { data: profileData, error: profileError } = await supabase
        .from('user_profiles')
        .select('role')
        .eq('id', data.user.id)
        .single();

      if (profileData && profileData.role !== activeTab) {
         await supabase.auth.signOut();
         throw new Error(`This account is registered as ${profileData.role}, not ${activeTab}.`);
      }

      console.log('Analytics Event: login_success');
      window.location.href = activeTab === 'Company' ? '/dashboard/company' : '/dashboard/talent';
      
    } catch (error: any) {
       console.log('Analytics Event: login_failure - Reason:', error.message);
       if (error.message === 'Invalid login credentials') {
         setErrorMsg('Invalid email or password. Please try again.');
       } else {
         setErrorMsg(error.message || 'Something went wrong. Please check your connection and try again.');
       }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white font-sans text-slate-800 p-6 lg:p-12">
      <div className="w-full max-w-[1280px] mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

        {/* Left Side: Branding & Testimonial */}
        <div className="w-full lg:w-1/2 space-y-8">
          
          {/* Logo Representation */}
          <div className="w-[88px] h-[88px] bg-[#222222] rounded-2xl flex flex-col items-center justify-center text-white shadow-sm">
            <div className="flex items-baseline text-4xl font-bold tracking-tighter">
              UR<span className="text-[#FF6B4A]">I</span>
            </div>
            <div className="text-[0.45rem] tracking-[0.2em] uppercase mt-0.5 text-slate-300">
              Technologies
            </div>
          </div>

          <h1 className="text-[3.5rem] lg:text-[4rem] font-bold tracking-tight text-[#2D333A] leading-[1.1]">
            Streamline your <br />
            <span className="text-[#FF6B4A]">recruitment</span> <br />
            workflows easily
          </h1>
          
          <p className="text-lg text-slate-500 max-w-md leading-relaxed font-medium">
            Manage smarter, faster, and secure talent acquisition in seconds with our powerful SaaS platform.
          </p>

          <div className="border border-slate-200 rounded-[2rem] p-8 max-w-xl relative mt-12 shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
            <p className="text-[#A0A4A8] leading-relaxed mb-8 font-medium">
              From the initial conversations all the way through to the project's successful conclusion, URI Technologies has delivered consistently. Their unique strategy have resulted in a discernible rise in our customers' trust and happiness. URI Technologies is a great option if you wish to evolve your company's digital strategy.
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full overflow-hidden bg-slate-100 flex-shrink-0">
                {/* Fallback avatar if the image doesn't load */}
                <div className="w-full h-full bg-slate-200 flex items-center justify-center">
                   <span className="text-slate-500 font-bold">SS</span>
                </div>
              </div>
              <div>
                <p className="font-bold text-[#2D333A]">Satya Swarup</p>
                <p className="text-sm text-slate-500 font-medium">CEO, Absec Lab</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Auth Card */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
          <div className="w-full max-w-[460px] border border-slate-200 rounded-[2rem] p-8 sm:p-10 shadow-[0_8px_30px_rgba(0,0,0,0.04)] bg-white">
            
            <h2 className="text-3xl font-bold text-[#2D333A]">Welcome Back</h2>
            <p className="text-slate-500 mt-1.5 mb-8 font-medium">Sign in to your account</p>

            {/* Pill Tab Switcher */}
            <div className="flex border border-slate-200 p-1 rounded-2xl mb-8">
              <button
                type="button"
                onClick={() => handleTabSwitch('Company')}
                className={`flex-1 py-2.5 rounded-xl text-sm font-bold transition-all duration-200 ${
                  activeTab === 'Company' 
                    ? 'bg-[#FFDFD6] text-[#2D333A]' 
                    : 'text-slate-500 hover:text-slate-900'
                }`}
              >
                Company
              </button>
              <button
                type="button"
                onClick={() => handleTabSwitch('Talent')}
                className={`flex-1 py-2.5 rounded-xl text-sm font-bold transition-all duration-200 ${
                  activeTab === 'Talent' 
                    ? 'bg-[#FFDFD6] text-[#2D333A]' 
                    : 'text-slate-500 hover:text-slate-900'
                }`}
              >
                Talent
              </button>
            </div>

            {errorMsg && (
              <div className="mb-6 p-3.5 text-sm font-medium text-red-600 bg-red-50 border border-red-100 rounded-xl">
                {errorMsg}
              </div>
            )}

            <form onSubmit={handleSignIn} className="space-y-6">
              
              <div className="space-y-2">
                <label className="text-[13px] font-bold text-[#2D333A]" htmlFor="email">
                  {activeTab === 'Company' ? 'Work Email' : 'Email'}
                </label>
                <div className="relative">
                  <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 w-[18px] h-[18px]" />
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-white border border-slate-200 rounded-xl text-[#2D333A] placeholder-slate-400 focus:outline-none focus:border-[#FF6B4A] focus:ring-1 focus:ring-[#FF6B4A] transition-all text-sm font-medium"
                    placeholder={activeTab === 'Company' ? 'name@company.com' : 'johnsmith@gmail.com'}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label className="text-[13px] font-bold text-[#2D333A]" htmlFor="password">
                    Password
                  </label>
                  <Link 
                    href="#" 
                    onClick={() => console.log('Analytics Event: forgot_password_click')}
                    className="text-[13px] font-semibold text-[#2D333A] underline decoration-slate-300 underline-offset-4 hover:decoration-[#2D333A] transition-colors"
                  >
                    Forgot password?
                  </Link>
                </div>
                <div className="relative">
                  <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 w-[18px] h-[18px]" />
                  <input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full pl-10 pr-12 py-3 bg-white border border-slate-200 rounded-xl text-[#2D333A] placeholder-slate-400 focus:outline-none focus:border-[#FF6B4A] focus:ring-1 focus:ring-[#FF6B4A] transition-all text-sm font-medium"
                    placeholder="password......"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>

              <label className="flex items-center space-x-3 cursor-pointer group">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="w-[18px] h-[18px] rounded-[4px] border-2 border-slate-300 text-[#2D333A] focus:ring-0 checked:border-[#2D333A] checked:bg-[#2D333A] transition-all cursor-pointer"
                />
                <span className="text-[13px] font-semibold text-[#2D333A]">
                  Remember me for 30 days
                </span>
              </label>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#FF6B4A] text-white py-3.5 rounded-xl font-bold text-sm hover:bg-[#F25C3A] focus:outline-none focus:ring-4 focus:ring-[#FF6B4A]/20 transition-all duration-200 disabled:opacity-70 flex items-center justify-center"
              >
                {loading ? (
                  <Loader2 className="w-5 h-5 animate-spin" />
                ) : (
                  `Sign In as ${activeTab}`
                )}
              </button>
            </form>

            <div className="relative my-8">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-slate-200"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-white text-[#A0A4A8] font-medium">Or continue with</span>
              </div>
            </div>

            <div className="flex gap-4 mb-8">
              <button 
                type="button"
                className="flex-1 py-2.5 border border-slate-200 rounded-xl flex items-center justify-center gap-2 hover:bg-slate-50 transition-colors font-semibold text-sm text-[#2D333A]"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                </svg>
                Google
              </button>
              <button 
                type="button"
                className="flex-1 py-2.5 border border-slate-200 rounded-xl flex items-center justify-center gap-2 hover:bg-slate-50 transition-colors font-semibold text-sm text-[#2D333A]"
              >
                <svg className="w-5 h-5" viewBox="0 0 21 21">
                  <path fill="#f25022" d="M1 1h9v9H1z" />
                  <path fill="#00a4ef" d="M1 11h9v9H1z" />
                  <path fill="#7fba00" d="M11 1h9v9h-9z" />
                  <path fill="#ffb900" d="M11 11h9v9h-9z" />
                </svg>
                Microsoft
              </button>
            </div>

            <div className="text-center">
              <span className="text-[13px] font-semibold text-[#2D333A]">Don't have an account? </span>
              <Link 
                href="#" 
                onClick={() => console.log('Analytics Event: create_account_click')}
                className="text-[13px] font-bold text-[#0CA678] hover:text-[#099268] underline decoration-transparent hover:decoration-[#099268] transition-all ml-1"
              >
                Create one
              </Link>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
