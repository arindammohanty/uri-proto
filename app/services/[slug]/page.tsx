"use client";

import React from 'react';
import { useParams, notFound } from 'next/navigation';
import Link from 'next/link';
import { CheckCircle, ArrowLeft, Mail, Globe, ShieldCheck } from 'lucide-react';

interface ServiceDetail {
  title: string;
  tagline: string;
  intro: string;
  provisions: string[];
  justifications: string[];
  industries: string[];
}

const SERVICE_DATA_STORE: Record<string, ServiceDetail> = {
  "it-consultant-and-advisory": {
    title: "IT Consultant & Advisory",
    tagline: "Expert Guidance, Real Results.",
    intro: "Strategic IT consulting services to align your technology ecosystem with business objectives, delivering measurable outcomes through transformation planning, audits, and modernization strategies.",
    provisions: [
      "Technology Strategy & Roadmap Development: Designing high-performance long-term IT blueprints.",
      "IT Assessments & Audits: Evaluating systems, infrastructure, and workflows to identify risks and inefficiencies.",
      "Digital Transformation Consulting: Guiding businesses through cloud adoption and data architecture redesign.",
      "Enterprise Architecture & Governance: Implementing scalable architecture frameworks ensuring secure governance."
    ],
    justifications: [
      "Business-Aligned Expertise: Tangible ROI by aligning tech decisions with core business priorities.",
      "360° View: Evaluating people, processes, and technology for complete strategic clarity.",
      "Flexible Engagement Models: Project-based, retainer, or on-demand advisory models."
    ],
    industries: ["Financial Services & Banking", "Healthcare & Pharmaceuticals", "Manufacturing & Supply Chain", "Public Sector"]
  },
  "agile-it-operations": {
    title: "Agile IT Operations",
    tagline: "Reliable Tech, Always On.",
    intro: "In fast-paced digital environments, operational engineering must remain resilient. Our services empower businesses to operate without disruption through comprehensive monitoring and maintenance.",
    provisions: [
      "IT Infrastructure Management: From servers to devices, we manage and monitor your IT landscape.",
      "Helpdesk & End-User Support: Round-the-clock IT support for troubleshooting and ticket resolution.",
      "Software Development & Maintenance: Building secure software tailored to business goals."
    ],
    justifications: [
      "24/7 Monitoring & Response: Always-on support to resolve issues proactively.",
      "Security First: Following best practices to protect your data and reputation.",
      "Tailored Solutions: Customized infrastructure, security, and scalability requirements."
    ],
    industries: ["Information Technology", "BFSI", "Manufacturing", "Retail & E-commerce"]
  },
  "cloud-platform-services": {
    title: "Cloud Platform Services",
    tagline: "Scalable, Secure, and Future-Ready.",
    intro: "The cloud is the foundation of agile enterprises. We empower businesses to innovate through cloud-native application development, secure migrations, and multi-cloud environments.",
    provisions: [
      "Cloud-Native Application Development: Microservices, containers, and serverless computing.",
      "Cloud Migration & Modernization: Moving legacy systems efficiently with maximum ROI.",
      "Infrastructure as Code (IaC): Automating infrastructure via Terraform and AWS CloudFormation."
    ],
    justifications: [
      "Cloud-First Expertise: Deep experience across AWS, Azure, and Google Cloud.",
      "Security-Driven: Data integrity and protection are at the core of deployments.",
      "Agile Methodology: Rapid development and iterative continuous improvement."
    ],
    industries: ["Technology & SaaS", "Finance & Fintech", "Healthcare & Pharma", "Education"]
  },
  "cyber-security-platform-services": {
    title: "Cyber Security Platform Services",
    tagline: "Secure Today, Safeguard Tomorrow.",
    intro: "From digital risk management to advanced threat defense, we deliver strategic advisory, platform implementation, and managed security operations (SOC) against evolving cyber threats.",
    provisions: [
      "Security Strategy & Advisory: CISO advisory, risk assessments, and compliance planning.",
      "Cloud & Infrastructure Security: Multi-layered defense mechanisms across cloud, IoT, and endpoints.",
      "Threat & Vulnerability Management: SAST, DAST, VAPT, and red teaming simulations.",
      "Security Operations & MDR: Establish 24/7 SOC powered by threat intelligence and SOAR."
    ],
    justifications: [
      "Risk-Driven Methodology: Structuring defenses to counter high-probability attacks.",
      "Cloud-First, Enterprise-Ready: Native cloud integrations.",
      "Full-Spectrum Expertise: End-to-end coverage."
    ],
    industries: ["Banking Frameworks", "Industrial IoT", "Telecommunications", "Public Sector Services"]
  },
  "devops-and-agile-transformation": {
    title: "DevOps & Agile Transformation",
    tagline: "Speed Meets Stability.",
    intro: "We help organizations accelerate software delivery and enhance reliability by integrating DevOps best practices with Agile frameworks, fostering automation across the lifecycle.",
    provisions: [
      "CI/CD Pipeline Implementation: Streamline releases with continuous integration/delivery.",
      "Infrastructure Automation: Ansible, Jenkins, Docker, and Kubernetes deployment.",
      "Agile Coaching & Framework Design: Scrum, SAFe, Kanban implementations.",
      "DevSecOps Integration: Embed security into the pipeline to detect vulnerabilities early."
    ],
    justifications: [
      "Toolchain Expertise: GitLab, Azure DevOps, Bitbucket, Jenkins, Terraform.",
      "Faster Time-to-Market: Deliver features reliably without compromising compliance.",
      "Culture-Driven Change: Building a collaborative culture of ownership and feedback."
    ],
    industries: ["Software & SaaS", "Financial Services", "Telecommunications", "EdTech"]
  },
  "api-and-microservices-architecture": {
    title: "API & Microservices Architecture",
    tagline: "Smarter Architecture, Agile Growth.",
    intro: "Monolithic systems slow innovation. We modernize architecture with flexible, scalable API and microservices solutions, unlocking agility, reusability, and speed.",
    provisions: [
      "Microservices Architecture Design: Break down legacy applications into loosely coupled services.",
      "API Development & Integration: Robust RESTful and GraphQL API constructions.",
      "Service Mesh & Orchestration: Managing communication and security via Istio and Kubernetes.",
      "Event-Driven Architecture: Asynchronous communication using Kafka and RabbitMQ."
    ],
    justifications: [
      "Modular Scalability: Scale components independently based on load needs.",
      "Secure & Compliant APIs: Built-in OAuth2, rate limiting, and logging policies.",
      "Domain-Driven Design: Microservices architected around real business functions."
    ],
    industries: ["Fintech APIs", "Complex Mobility Networks", "SaaS Enterprise Panels", "High-Volume Retail Hubs"]
  }
};

export default function ServiceSubPage() {
  const params = useParams();
  const slug = typeof params?.slug === 'string' ? params.slug : '';
  const service = SERVICE_DATA_STORE[slug];

  if (!service) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 pb-20">
      <section className="relative pt-20 pb-16 border-b border-slate-100 bg-slate-50/50 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="flex items-center text-sm font-medium text-slate-500 mb-6">
            <Link href="/services" className="hover:text-orange-500 flex items-center transition-colors">
              <ArrowLeft className="w-4 h-4 mr-1.5" /> Back to Services
            </Link>
          </div>
          <h4 className="text-sm font-bold text-orange-500 uppercase tracking-wider mb-3">{service.tagline}</h4>
          <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">{service.title}</h1>
          <p className="text-lg text-slate-500 max-w-3xl leading-relaxed font-medium">
            {service.intro}
          </p>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          <div className="lg:col-span-2 space-y-16">
            <div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-8 border-b border-slate-100 pb-3">Core Operational Capabilities</h2>
              <div className="space-y-6">
                {service.provisions.map((prov, index) => (
                  <div key={index} className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <CheckCircle className="w-5 h-5 text-orange-500" />
                    </div>
                    <p className="ml-4 text-slate-600 font-medium leading-relaxed">{prov}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-8 border-b border-slate-100 pb-3">Strategic Framework Value</h2>
              <div className="space-y-6">
                {service.justifications.map((just, index) => (
                  <div key={index} className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <ShieldCheck className="w-5 h-5 text-orange-500" />
                    </div>
                    <p className="ml-4 text-slate-600 font-medium leading-relaxed">{just}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <aside className="space-y-8">
            <div className="bg-slate-50 border border-slate-100 p-8 rounded-[2rem]">
              <h3 className="text-lg font-bold text-slate-900 mb-4">Industries Served</h3>
              <div className="flex flex-wrap gap-2">
                {service.industries.map((ind, index) => (
                  <span key={index} className="px-4 py-2 bg-white border border-slate-200 text-slate-600 text-xs font-bold rounded-xl shadow-sm">
                    {ind}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-orange-500 p-8 rounded-[2rem] text-white shadow-xl shadow-orange-500/10">
              <h3 className="text-xl font-bold mb-3">Initiate Integration</h3>
              <p className="text-orange-50 text-sm font-medium leading-relaxed mb-6">
                Connect with our systems architects to evaluate infrastructure requirements and coordinate transformation steps.
              </p>
              <div className="space-y-3 text-sm font-bold">
                <div className="flex items-center text-orange-50"><Mail className="w-4 h-4 mr-2" /> info@uritechnologies.com</div>
                <div className="flex items-center text-orange-50"><Globe className="w-4 h-4 mr-2" /> Sahid Nagar, Bhubaneswar</div>
              </div>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}
