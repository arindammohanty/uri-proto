"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Briefcase, Clock, FileSearch, MapPin, Search } from "lucide-react";
import Button from "@/components/ui/Button";
import {
  JOB_DEPARTMENTS,
  JOB_EXPERIENCE_OPTIONS,
  JOB_LISTINGS,
  JOB_LOCATION_OPTIONS,
  JOB_TYPE_OPTIONS,
  JOB_WORK_MODES,
} from "@/constants";
import { SECTION_CONTAINER, SECTION_PADDING, SECTION_PADDING_X } from "@/lib/layout";
import { fadeInUp, staggerContainer, staggerItem, useScrollReveal } from "@/lib/motion";
import type { JobListing } from "@/types";

type JobFilters = {
  search: string;
  location: string;
  type: string;
  experience: string;
  departments: string[];
  workModes: string[];
};

const initialFilters: JobFilters = {
  search: "",
  location: "All Locations",
  type: "All Types",
  experience: "All Levels",
  departments: [],
  workModes: [],
};

function SelectField({
  label,
  value,
  options,
  onChange,
}: {
  label: string;
  value: string;
  options: string[];
  onChange: (value: string) => void;
}) {
  return (
    <label className="flex flex-col gap-2 text-xs font-semibold uppercase tracking-normal text-text-muted">
      {label}
      <select
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="border-border rounded-card h-12 bg-background px-4 text-sm font-semibold normal-case text-text-dark outline-none transition-colors focus:border-brand-blue"
      >
        {options.map((option) => (
          <option key={option}>{option}</option>
        ))}
      </select>
    </label>
  );
}

function JobSearchBar({
  filters,
  setFilters,
  clearFilters,
  hasActiveFilters,
}: {
  filters: JobFilters;
  setFilters: (filters: JobFilters) => void;
  clearFilters: () => void;
  hasActiveFilters: boolean;
}) {
  return (
    // --- JOBS SEARCH BAR ---
    <section className="sticky top-[72px] z-40 border-b border-border bg-background">
      <div className={`${SECTION_PADDING_X} py-5`}>
        <div className={`${SECTION_CONTAINER} grid gap-4 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr_auto] lg:items-end`}>
          <label className="relative flex flex-col gap-2 text-xs font-semibold uppercase tracking-normal text-text-muted md:col-span-2 lg:col-span-1">
            Search
            <Search
              className="pointer-events-none absolute bottom-3.5 left-4 text-text-muted"
              size={18}
              aria-hidden="true"
            />
            <input
              value={filters.search}
              onChange={(event) => setFilters({ ...filters, search: event.target.value })}
              placeholder="Job title, skill, or keyword..."
              className="border-border rounded-card h-12 bg-background px-11 text-sm font-semibold normal-case text-text-dark outline-none transition-colors placeholder:text-text-faint focus:border-brand-blue"
            />
          </label>
          <SelectField
            label="Location"
            value={filters.location}
            options={JOB_LOCATION_OPTIONS}
            onChange={(location) => setFilters({ ...filters, location })}
          />
          <SelectField
            label="Job Type"
            value={filters.type}
            options={JOB_TYPE_OPTIONS}
            onChange={(type) => setFilters({ ...filters, type })}
          />
          <SelectField
            label="Experience"
            value={filters.experience}
            options={JOB_EXPERIENCE_OPTIONS}
            onChange={(experience) => setFilters({ ...filters, experience })}
          />
          {hasActiveFilters ? (
            <Button variant="ghost" onClick={clearFilters} className="h-12 whitespace-nowrap">
              Clear Filters
            </Button>
          ) : null}
        </div>
      </div>
    </section>
    // --- END JOBS SEARCH BAR ---
  );
}

function CheckboxGroup({
  title,
  options,
  selected,
  onToggle,
}: {
  title: string;
  options: string[];
  selected: string[];
  onToggle: (option: string) => void;
}) {
  return (
    <fieldset className="space-y-3">
      <legend className="mb-4 text-sm font-bold text-text-dark">{title}</legend>
      {options.map((option) => (
        <label key={option} className="flex cursor-pointer items-center gap-3 text-sm font-medium text-text-medium">
          <input
            type="checkbox"
            checked={selected.includes(option)}
            onChange={() => onToggle(option)}
            className="h-4 w-4 rounded border-border text-brand-blue focus:ring-brand-blue"
          />
          {option}
        </label>
      ))}
    </fieldset>
  );
}

function FilterSidebar({
  filters,
  setFilters,
}: {
  filters: JobFilters;
  setFilters: (filters: JobFilters) => void;
}) {
  const toggleValue = (key: "departments" | "workModes", value: string) => {
    const values = filters[key];
    const nextValues = values.includes(value)
      ? values.filter((item) => item !== value)
      : [...values, value];
    setFilters({ ...filters, [key]: nextValues });
  };

  return (
    <aside className="hidden lg:block">
      <div className="border-border rounded-card sticky top-44 space-y-8 border bg-background p-6">
        <h2 className="text-xl font-bold text-text-dark">Filters</h2>
        <CheckboxGroup
          title="Department"
          options={JOB_DEPARTMENTS}
          selected={filters.departments}
          onToggle={(value) => toggleValue("departments", value)}
        />
        <CheckboxGroup
          title="Work Mode"
          options={JOB_WORK_MODES}
          selected={filters.workModes}
          onToggle={(value) => toggleValue("workModes", value)}
        />
        <fieldset className="space-y-4">
          <legend className="text-sm font-bold text-text-dark">Salary Range</legend>
          <label className="block text-xs font-semibold uppercase text-text-muted">
            Min
            <div className="border-border rounded-card mt-2 flex h-11 items-center gap-2 border px-4">
              <span className="text-text-muted">Rs</span>
              <input type="number" className="w-full outline-none" aria-label="Minimum salary" />
            </div>
          </label>
          <label className="block text-xs font-semibold uppercase text-text-muted">
            Max
            <div className="border-border rounded-card mt-2 flex h-11 items-center gap-2 border px-4">
              <span className="text-text-muted">Rs</span>
              <input type="number" className="w-full outline-none" aria-label="Maximum salary" />
            </div>
          </label>
        </fieldset>
        <Button variant="primary" className="w-full">
          Apply Filters
        </Button>
      </div>
    </aside>
  );
}

function JobCard({ job }: { job: JobListing }) {
  return (
    <motion.article
      variants={staggerItem}
      className="border-border rounded-card flex h-full flex-col border bg-background p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-brand-blue/40 hover:shadow-card-hover"
    >
      <div className="mb-4 flex items-start justify-between gap-4 text-xs font-semibold">
        <span className="text-text-muted">{job.company}</span>
        <span className="shrink-0 text-text-faint">{job.posted}</span>
      </div>
      <h3 className="text-lg font-bold text-text-dark">{job.title}</h3>
      <div className="mt-5 flex flex-wrap gap-x-4 gap-y-2 text-sm font-medium text-text-subtle">
        <span className="flex items-center gap-1.5"><MapPin size={16} />{job.location}</span>
        <span className="flex items-center gap-1.5"><Briefcase size={16} />{job.type}</span>
        <span className="flex items-center gap-1.5"><Clock size={16} />{job.experience}</span>
      </div>
      <div className="mt-5">
        <span className="rounded-full bg-badge-bg px-4 py-2 text-sm font-semibold text-brand-blue">
          {job.salary}
        </span>
      </div>
      <div className="mt-5 flex flex-wrap gap-2">
        {job.tags.map((tag) => (
          <span key={tag} className="rounded-full bg-[#F5F5F5] px-3 py-1 text-xs font-semibold text-text-medium">
            {tag}
          </span>
        ))}
      </div>
      <div className="mt-auto flex items-center justify-between gap-3 pt-6">
        <Button variant="ghost" className="px-0">
          View Details
        </Button>
        <Button variant="primary">Apply Now</Button>
      </div>
    </motion.article>
  );
}

function EmptyState({ clearFilters }: { clearFilters: () => void }) {
  return (
    <div className="border-border rounded-card col-span-full flex flex-col items-center border bg-background p-12 text-center">
      <FileSearch size={44} className="text-brand-blue" aria-hidden="true" />
      <h3 className="mt-5 text-xl font-bold text-text-dark">No jobs match your filters.</h3>
      <Button variant="primary" onClick={clearFilters} className="mt-6">
        Clear Filters
      </Button>
    </div>
  );
}

export default function JobsPageSections() {
  const [filters, setFilters] = useState<JobFilters>(initialFilters);
  const listMotion = useScrollReveal(staggerContainer, { once: true, margin: "-60px" });
  const headingMotion = useScrollReveal(fadeInUp);
  const hasActiveFilters = JSON.stringify(filters) !== JSON.stringify(initialFilters);
  const clearFilters = () => setFilters(initialFilters);

  const filteredJobs = useMemo(() => {
    const search = filters.search.trim().toLowerCase();
    return JOB_LISTINGS.filter((job) => {
      const matchesSearch =
        !search ||
        job.title.toLowerCase().includes(search) ||
        job.tags.some((tag) => tag.toLowerCase().includes(search));
      const matchesLocation =
        filters.location === "All Locations" || job.locationFilter === filters.location;
      const matchesType = filters.type === "All Types" || job.type === filters.type;
      const matchesExperience =
        filters.experience === "All Levels" || job.experienceFilter === filters.experience;
      const matchesDepartment =
        filters.departments.length === 0 || filters.departments.includes(job.department);
      const matchesWorkMode =
        filters.workModes.length === 0 || filters.workModes.includes(job.workMode);

      return (
        matchesSearch &&
        matchesLocation &&
        matchesType &&
        matchesExperience &&
        matchesDepartment &&
        matchesWorkMode
      );
    });
  }, [filters]);

  return (
    <>
      <JobSearchBar
        filters={filters}
        setFilters={setFilters}
        clearFilters={clearFilters}
        hasActiveFilters={hasActiveFilters}
      />

      <section className={SECTION_PADDING} aria-labelledby="jobs-listings-heading">
        <div className={`${SECTION_CONTAINER} grid gap-8 lg:grid-cols-[280px_1fr]`}>
          <FilterSidebar filters={filters} setFilters={setFilters} />
          <div>
            <motion.div className="mb-8" {...headingMotion}>
              <p className="text-sm font-bold uppercase text-brand-blue">Open Roles</p>
              <h2 id="jobs-listings-heading" className="mt-2 text-3xl font-bold text-text-dark">
                Job Listings
              </h2>
            </motion.div>
            <motion.div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3" {...listMotion}>
              {filteredJobs.length > 0 ? (
                filteredJobs.map((job) => <JobCard key={job.id} job={job} />)
              ) : (
                <EmptyState clearFilters={clearFilters} />
              )}
            </motion.div>
          </div>
        </div>
      </section>

      <section className={`${SECTION_PADDING_X} pb-16`}>
        <div className={`${SECTION_CONTAINER} rounded-card bg-brand-blue p-8 text-background md:p-12 lg:flex lg:items-center lg:justify-between lg:gap-10`}>
          <div>
            <h2 className="text-3xl font-bold">Don&apos;t see your perfect role?</h2>
            <p className="mt-3 max-w-2xl text-base font-medium text-white/85">
              Submit your CV and we&apos;ll reach out when something matches.
            </p>
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row lg:mt-0">
            <Button variant="secondary" className="border-white bg-background text-brand-blue hover:border-white">
              Upload Your CV
            </Button>
            <Button variant="ghost" className="border border-white text-background hover:text-background">
              Talk to a Recruiter
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
