import React from "react";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  id?: string;
  className?: string;
}

export default function SectionHeading({ 
  title, 
  subtitle, 
  id, 
  className = "" 
}: SectionHeadingProps) {
  return (
    <div className={`mb-10 ${className}`}>
      <h2 
        id={id} 
        className="text-3xl font-bold text-text-dark md:text-4xl"
      >
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base font-medium leading-relaxed text-text-subtle max-w-2xl">
          {subtitle}
        </p>
      )}
    </div>
  );
}
