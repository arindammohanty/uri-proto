"use client";

import React, { useState, useMemo } from 'react';
import { Search, MapPin, Briefcase, ChevronRight, CheckCircle } from 'lucide-react';
import Link from 'next/link';

// --- COMPONENTS ---
const DottedPattern = () => (
  <div className="absolute inset-0 z-0 pointer-events-none opacity-40" 
       style={{ backgroundImage: `radial-gradient(circle at 2px 2px, #fed7aa 1px, transparent 0)`, backgroundSize: '32px 32px' }}>
  </div>
);

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'dark' | 'outline' | 'ghost';
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
}

const Button = ({ children, variant = 'primary', className = '', onClick, type = 'button' }: ButtonProps) => {
  const baseStyles = "px-6 py-3 rounded-lg font-semibold transition-all duration-200 ease-in-out focus:ring-2 focus:ring-offset-2 inline-flex justify-center items-center";
  const variants = {
    primary: "bg-orange-500 text-white hover:bg-orange-600 focus:ring-orange-500 shadow-sm",
    secondary: "bg-white text-slate-900 border border-slate-200 hover:border-orange-500 hover:text-orange-500 focus:ring-orange-200",
    dark: "bg-slate-800 text-white hover:bg-slate-900 focus:ring-slate-800 shadow-sm",
    outline: "bg-transparent text-slate-700 border border-slate-300 hover:border-orange-500 hover:text-orange-500",
    ghost: "text-slate-600 hover:text-orange-500 hover:bg-orange-50"
  };

  return (
    <button type={type} onClick={onClick} className={`${baseStyles} ${variants[variant]} ${className}`}>
      {children}
    </button>
  );
};

// --- DATA ---
const LIVE_OPENINGS = [
  { 
    id: 1, 
    title: "ServiceNow Developer", 
    company: "URI Technologies", 
    department: "Application Development",
    location: "Bangalore", 
    workMode: "Hybrid",
    type: "Full-Time", 
    experience: "4+ yrs", 
    salary: "15 - 25 LPA INR", 
    salaryMax: 25, 
    tags: ["JavaScript", "HTML/XML", "API Integrations", "ITSM"], 
    posted: "Just Now" 
  },
  { 
    id: 2, 
    title: "Senior Cloud Architect", 
    company: "URI Technologies", 
    department: "Cloud Infrastructure",
    location: "Bhubaneswar", 
    workMode: "On-site",
    type: "Full-Time", 
    experience: "8+ yrs", 
    salary: "30 - 45 LPA INR", 
    salaryMax: 45, 
    tags: ["AWS", "Terraform", "Kubernetes", "Microservices"], 
    posted: "3 days ago" 
  },
  { 
    id: 3, 
    title: "DevSecOps Engineer", 
    company: "URI Technologies", 
    department: "DevOps & Agile",
    location: "Remote", 
    workMode: "Remote",
    type: "Contract", 
    experience: "5+ yrs", 
    salary: "20 - 30 LPA INR", 
    salaryMax: 30, 
    tags: ["CI/CD", "Docker", "Security Automation"], 
    posted: "1 week ago" 
  },
  { 
    id: 4, 
    title: "IT Strategy Consultant", 
    company: "URI Technologies", 
    department: "IT Consulting",
    location: "Remote", 
    workMode: "Remote",
    type: "Full-Time", 
    experience: "6+ yrs", 
    salary: "25 - 40 LPA INR", 
    salaryMax: 40, 
    tags: ["Digital Transformation", "Enterprise Architecture"], 
    posted: "2 days ago" 
  },
];

interface FilterState {
  search: string;
  location: string;
  type: string;
  experience: string;
  departments: string[];
  workModes: string[];
  minSalary: number;
}

const defaultFilters: FilterState = {
  search: '',
  location: 'All Locations',
  type: 'All Types',
  experience: 'All Levels',
  departments: [],
  workModes: [],
  minSalary: 0
};

export default function JobsPage() {
  // 1. DRAFT STATE: Updates immediately as the user clicks/types
  const [draftFilters, setDraftFilters] = useState<FilterState>(defaultFilters);
  
  // 2. APPLIED STATE: Only updates when "Apply Filters" is clicked
  const [appliedFilters, setAppliedFilters] = useState<FilterState>(defaultFilters);

  // Helper to toggle arrays (checkboxes) in the draft state
  const toggleDraftArray = (key: 'departments' | 'workModes', value: string) => {
    setDraftFilters(prev => {
      const currentArray = prev[key];
      const newArray = currentArray.includes(value) 
        ? currentArray.filter(item => item !== value)
        : [...currentArray, value];
      return { ...prev, [key]: newArray };
    });
  };

  // Push draft state to applied state
  const handleApplyFilters = () => {
    setAppliedFilters(draftFilters);
  };

  // 3. FILTERING LOGIC: Runs against the APPLIED state only
  const filteredJobs = useMemo(() => {
    return LIVE_OPENINGS.filter(job => {
      const s = appliedFilters.search.toLowerCase();
      const matchesSearch = !s || job.title.toLowerCase().includes(s) || 
                            job.tags.some(tag => tag.toLowerCase().includes(s));
                            
      const matchesLocation = appliedFilters.location === 'All Locations' || 
                              job.location === appliedFilters.location || 
                              job.workMode === appliedFilters.location;
                              
      const matchesType = appliedFilters.type === 'All Types' || job.type === appliedFilters.type;
      
      const matchesSalary = (job.salaryMax || 0) >= appliedFilters.minSalary;

      const matchesDept = appliedFilters.departments.length === 0 || 
                          appliedFilters.departments.includes(job.department);
                          
      const matchesWorkMode = appliedFilters.workModes.length === 0 || 
                              appliedFilters.workModes.includes(job.workMode);

      return matchesSearch && matchesLocation && matchesType && matchesSalary && matchesDept && matchesWorkMode;
    });
  }, [appliedFilters]);

  return (
    <div className="min-h-screen bg-slate-50 animate-in fade-in duration-500 pb-20">
      
      <style dangerouslySetInnerHTML={{__html: `
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}} />

      {/* Hero Header */}
      <div className="bg-white border-b border-slate-200 relative pt-12 pb-16">
        <DottedPattern />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-sm font-medium text-slate-500 mb-4">
            <Link href="/" className="hover:text-orange-500 transition-colors">Home</Link> 
            <ChevronRight className="w-3 h-3 inline mx-1"/> 
            <span className="text-orange-500">Jobs</span>
          </div>
          <h1 className="text-4xl font-extrabold text-slate-900 mb-3">Find Your Next Opportunity</h1>
          <p className="text-slate-600 text-lg">Browse live IT and enterprise architecture roles at URI Technologies.</p>
        </div>
      </div>

      {/* Sticky Search Bar */}
      <div className="bg-white border-b border-slate-200 sticky top-0 md:top-20 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="relative">
              <label className="block text-xs font-bold text-slate-500 mb-1 uppercase tracking-wider">Search</label>
              <div className="relative">
                <Search className="w-4 h-4 absolute left-4 top-3.5 text-slate-400" />
                <input 
                  type="text" 
                  placeholder="Job title, skills..." 
                  className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg text-sm outline-none focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                  value={draftFilters.search}
                  onChange={(e) => setDraftFilters({ ...draftFilters, search: e.target.value })}
                />
              </div>
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-500 mb-1 uppercase tracking-wider">Location</label>
              <select 
                className="w-full px-4 py-3 border border-slate-300 rounded-lg text-sm outline-none focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 appearance-none bg-white"
                value={draftFilters.location}
                onChange={(e) => setDraftFilters({ ...draftFilters, location: e.target.value })}
              >
                <option value="All Locations">All Locations</option>
                <option value="Bangalore">Bangalore</option>
                <option value="Bhubaneswar">Bhubaneswar</option>
                <option value="Remote">Remote</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-500 mb-1 uppercase tracking-wider">Job Type</label>
              <select 
                className="w-full px-4 py-3 border border-slate-300 rounded-lg text-sm outline-none focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 appearance-none bg-white"
                value={draftFilters.type}
                onChange={(e) => setDraftFilters({ ...draftFilters, type: e.target.value })}
              >
                <option value="All Types">All Types</option>
                <option value="Full-Time">Full-Time</option>
                <option value="Contract">Contract</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-500 mb-1 uppercase tracking-wider">Experience</label>
              <select 
                className="w-full px-4 py-3 border border-slate-300 rounded-lg text-sm outline-none focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 appearance-none bg-white"
                value={draftFilters.experience}
                onChange={(e) => setDraftFilters({ ...draftFilters, experience: e.target.value })}
              >
                <option value="All Levels">All Levels</option>
                <option value="Mid Level (3-5 yrs)">Mid Level (3-5 yrs)</option>
                <option value="Senior (5+ yrs)">Senior (5+ yrs)</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Sidebar */}
          <aside className="w-full lg:w-64 shrink-0">
            <div className="bg-white rounded-2xl border border-slate-200 p-6 sticky top-48 shadow-sm">
              <h2 className="font-bold text-slate-900 mb-6 text-lg">Filters</h2>
              
              <div className="mb-6">
                <h3 className="text-sm font-bold text-slate-800 mb-3">Department</h3>
                <div className="space-y-3">
                  {['Cloud Infrastructure', 'Cyber Security', 'DevOps & Agile', 'IT Consulting', 'Application Development'].map(dept => (
                    <label key={dept} className="flex items-center space-x-3 cursor-pointer group">
                      <input 
                        type="checkbox" 
                        checked={draftFilters.departments.includes(dept)}
                        onChange={() => toggleDraftArray('departments', dept)}
                        className="w-4 h-4 rounded border-slate-300 text-orange-500 focus:ring-orange-500" 
                      />
                      <span className="text-slate-600 text-sm group-hover:text-orange-500">{dept}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-sm font-bold text-slate-800 mb-3">Work Mode</h3>
                <div className="space-y-3">
                  {['On-site', 'Remote', 'Hybrid'].map(mode => (
                    <label key={mode} className="flex items-center space-x-3 cursor-pointer group">
                      <input 
                        type="checkbox" 
                        checked={draftFilters.workModes.includes(mode)}
                        onChange={() => toggleDraftArray('workModes', mode)}
                        className="w-4 h-4 rounded border-slate-300 text-orange-500 focus:ring-orange-500" 
                      />
                      <span className="text-slate-600 text-sm group-hover:text-orange-500">{mode}</span>
                    </label>
                  ))}
                </div>
              </div>
              
              <div className="mb-8">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-sm font-bold text-slate-800">Min Salary</h3>
                  <span className="text-xs font-bold text-orange-500 bg-orange-50 px-2 py-1 rounded">{draftFilters.minSalary > 0 ? `${draftFilters.minSalary} LPA+` : 'Any'}</span>
                </div>
                <input
                  type="range" min="0" max="50" step="1" 
                  value={draftFilters.minSalary}
                  onChange={(e) => setDraftFilters({ ...draftFilters, minSalary: parseInt(e.target.value) })}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-orange-500"
                />
              </div>

              <Button onClick={handleApplyFilters} className="w-full py-2 text-sm">
                Apply Filters
              </Button>
            </div>
          </aside>

          {/* Job Results */}
          <div className="flex-1">
            <h2 className="text-sm font-bold text-orange-500 uppercase tracking-wider mb-4">Open Roles ({filteredJobs.length})</h2>
            
            {filteredJobs.length === 0 ? (
               <div className="text-center py-20 bg-white rounded-2xl border border-slate-200 shadow-sm">
                 <h3 className="text-xl font-bold text-slate-900 mb-2">No jobs found</h3>
                 <p className="text-slate-500">We couldn&apos;t find any positions matching your search criteria.</p>
                 <Button onClick={() => { setDraftFilters(defaultFilters); setAppliedFilters(defaultFilters); }} variant="outline" className="mt-6">
                   Clear Filters
                 </Button>
               </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {filteredJobs.map(job => (
                  <div key={job.id} className="bg-white p-6 rounded-2xl border border-slate-200 hover:border-orange-300 hover:shadow-md transition-all flex flex-col h-full">
                    <div className="flex justify-between items-start mb-2">
                      <p className="text-slate-500 text-xs font-medium">{job.company}</p>
                      <span className="text-slate-400 text-xs">{job.posted}</span>
                    </div>
                    <h3 className="font-bold text-slate-900 text-lg mb-4">{job.title}</h3>
                    
                    <div className="grid grid-cols-2 gap-y-2 text-sm text-slate-600 mb-4">
                      <div className="flex items-center"><MapPin className="w-4 h-4 mr-2 text-slate-400" /> {job.location}</div>
                      <div className="flex items-center"><Briefcase className="w-4 h-4 mr-2 text-slate-400" /> {job.type}</div>
                      <div className="flex items-center col-span-2"><CheckCircle className="w-4 h-4 mr-2 text-slate-400" /> Exp: {job.experience}</div>
                    </div>

                    <div className="mb-6">
                      <span className="inline-block px-3 py-1 bg-orange-50 text-orange-600 font-semibold text-xs rounded-full">
                        {job.salary}
                      </span>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-6 mt-auto">
                      {job.tags.map(tag => (
                        <span key={tag} className="px-2 py-1 bg-slate-50 border border-slate-100 text-slate-600 rounded text-xs font-medium">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center space-x-3 pt-4 border-t border-slate-100">
                      {/* View Details dynamically routing to the job ID */}
                      <Link 
                        href={`/jobs/${job.id}`} 
                        className="flex-1 text-center py-2 text-sm font-semibold text-slate-600 hover:text-orange-500 transition-colors inline-block"
                      >
                        View Details
                      </Link>
                      {/* Apply Now routing directly to CRN login */}
                      <Link 
                        href="/crn" 
                        className="flex-1 bg-orange-500 text-center text-white py-2 rounded-lg text-sm font-semibold hover:bg-orange-600 transition-colors shadow-sm inline-block"
                      >
                        Apply Now
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            )}

            <div className="mt-12 bg-orange-500 rounded-2xl p-8 text-white flex flex-col md:flex-row items-center justify-between shadow-lg">
              <div>
                <h3 className="text-2xl font-bold mb-2">Don&apos;t see your perfect role?</h3>
                <p className="text-orange-100">Submit your CV and we&apos;ll reach out when something matches.</p>
              </div>
              <div className="mt-6 md:mt-0 flex space-x-4">
                <button className="bg-white text-orange-600 font-semibold px-6 py-2.5 rounded-lg hover:bg-orange-50 transition-colors shadow-sm">
                  Upload Your CV
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
