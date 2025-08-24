import { useState } from "react";
import {
  Award,
  Briefcase,
  ChevronRight,
  Clock,
  Coffee,
  Heart,
  Laptop,
  MapPin,
  Sparkles,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";

import AppNavbar from "@/components/common/AppNavbar";
import Breadcrumbs from "@/components/common/Breadcrumbs";

export default function Careers() {
  const benefits = [
    {
      description: "Comprehensive medical aid and wellness programs",
      icon: <Heart className="text-primary" size={32} />,
      title: "Health & Wellness",
    },
    {
      description: "Learning opportunities and clear advancement paths",
      icon: <TrendingUp className="text-success" size={32} />,
      title: "Career Growth",
    },
    {
      description: "Flexible hours and remote work options",
      icon: <Coffee className="text-warning" size={32} />,
      title: "Work-Life Balance",
    },
    {
      description: "Employee stock options and performance bonuses",
      icon: <Award className="text-info" size={32} />,
      title: "Equity & Recognition",
    },
  ];

  // Add submission details to each position
  const openPositions = [
    {
      department: "Engineering",
      description: "Build scalable backend systems for our mobility platform",
      location: "Cape Town, South Africa",
      requirements: [
        "5+ years experience",
        "Python/Go expertise",
        "Microservices architecture",
      ],
      title: "Senior Software Engineer",
      type: "Full-time",
      submission: {
        deadline: "2025-09-30",
        address: "123 Mobility Ave, Cape Town",
        emails: ["jobs@hareeng.com"],
        contacts: ["+27 21 123 4567"],
        specifications: [
          "Must have a valid work permit",
          "Fluent in English",
          "References required",
        ],
      },
    },
    {
      department: "Product",
      description: "Drive product strategy for our food delivery platform",
      location: "Johannesburg, South Africa",
      requirements: [
        "3+ years PM experience",
        "Marketplace knowledge",
        "Data-driven mindset",
      ],
      title: "Product Manager",
      type: "Full-time",
      submission: {
        deadline: "2025-09-30",
        address: "456 Food Blvd, Johannesburg",
        emails: ["careers@hareeng.com"],
        contacts: ["+27 11 987 6543"],
      },
    },
    {
      department: "Marketing",
      description: "Lead digital marketing campaigns across African markets",
      location: "Remote",
      requirements: [
        "Digital marketing experience",
        "African market knowledge",
        "Campaign management",
      ],
      title: "Marketing Specialist",
      type: "Full-time",
      submission: {
        deadline: "2025-09-30",
        address: "789 Market St, Remote",
        emails: ["joinus@hareeng.com"],
        contacts: ["+27 21 765 4321"],
      },
    },
    {
      department: "Data",
      description: "Analyze rider patterns and optimize our algorithms",
      location: "Cape Town, South Africa",
      requirements: [
        "Machine learning expertise",
        "Python/R proficiency",
        "Statistics background",
      ],
      title: "Data Scientist",
      type: "Full-time",
      submission: {
        deadline: "2025-09-30",
        address: "321 Data Dr, Cape Town",
        emails: ["data@hareeng.com"],
        contacts: ["+27 21 654 3210"],
      },
    },
    {
      department: "Design",
      description: "Design intuitive experiences for our mobile applications",
      location: "Remote",
      requirements: [
        "Mobile design experience",
        "Figma expertise",
        "User research skills",
      ],
      title: "UX Designer",
      type: "Contract",
      submission: {
        deadline: "2025-09-30",
        address: "654 Design Rd, Remote",
        emails: ["design@hareeng.com"],
        contacts: ["+27 21 543 2109"],
      },
    },
    {
      department: "Operations",
      description: "Manage city operations and driver partner relationships",
      location: "Durban, South Africa",
      requirements: [
        "Operations experience",
        "People management",
        "Problem-solving skills",
      ],
      title: "Operations Manager",
      type: "Full-time",
      submission: {
        deadline: "2025-09-30",
        address: "987 Ops Ln, Durban",
        emails: ["ops@hareeng.com"],
        contacts: ["+27 31 123 4567"],
      },
    },
  ];

  const departments = [
    { color: "primary", count: 12, name: "Engineering" },
    { color: "secondary", count: 8, name: "Product" },
    { color: "accent", count: 15, name: "Operations" },
    { color: "success", count: 6, name: "Marketing" },
    { color: "warning", count: 5, name: "Data Science" },
    { color: "info", count: 4, name: "Design" },
  ];

  const values = [
    {
      description: "We ship quickly and iterate based on feedback",
      icon: <Zap className="text-primary" size={24} />,
      title: "Move Fast",
    },
    {
      description: "Every decision starts with our customers",
      icon: <Users className="text-secondary" size={24} />,
      title: "Customer Obsessed",
    },
    {
      description: "We challenge conventions and find new solutions",
      icon: <Sparkles className="text-accent" size={24} />,
      title: "Think Different",
    },
    {
      description: "We care about our impact on communities",
      icon: <Heart className="text-success" size={24} />,
      title: "Care Deeply",
    },
  ];

  // Track which job is expanded
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <>
      <AppNavbar />

      <div className="min-h-screen bg-base-200 pt-16">
        <Breadcrumbs />

        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <img
              alt="Team working together"
              className="h-full w-full object-cover"
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&h=600&fit=crop&crop=center"
            />
          </div>

          <div className="relative mx-auto max-w-7xl px-4 py-24">
            <div className="max-w-4xl">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-secondary-content/20 px-4 py-2">
                <Briefcase size={20} />
                <span className="font-medium">Join 500+ Team Members</span>
              </div>

              <h1 className="mb-6 text-5xl font-bold leading-tight lg:text-6xl">
                Build the future of{" "}
                <span className="text-primary">mobility with us</span>
              </h1>

              <p className="mb-8 text-xl leading-relaxed opacity-90">
                Join a diverse team of innovators, engineers, and dreamers who
                are transforming how people move across Africa. Make an impact
                while growing your career.
              </p>

              <div className="flex flex-col gap-4 sm:flex-row">
                <a href="#open-positions" className="btn btn-primary btn-lg">
                  View Open Roles
                </a>
                <a href="#testimonials" className="btn btn-outline btn-lg">
                  Life at Hareeng
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Departments */}
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-4xl font-bold">Teams at Hareeng</h2>
              <p className="text-xl text-base-content/70">
                Find your place in our growing organization
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3 lg:grid-cols-6">
              {departments.map((dept, index) => (
                <div
                  className={`card bg-${dept.color}/10 border border-${dept.color}/20 cursor-pointer transition-shadow hover:shadow-lg`}
                  key={index}
                >
                  <div className="card-body p-6 text-center">
                    <h3 className="font-semibold">{dept.name}</h3>
                    <p className="text-sm text-base-content/70">
                      {dept.count} open roles
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="bg-base-100 py-16">
          <div className="mx-auto max-w-7xl px-4">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-4xl font-bold">Why Work With Us?</h2>
              <p className="text-xl text-base-content/70">
                Benefits and perks that support your growth
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {benefits.map((benefit, index) => (
                <div className="card bg-base-200 shadow-lg" key={index}>
                  <div className="card-body text-center">
                    <div className="mx-auto mb-4">{benefit.icon}</div>
                    <h3 className="card-title justify-center">
                      {benefit.title}
                    </h3>
                    <p className="text-base-content/70">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2">
              <div className="card border border-primary/20 bg-primary/10">
                <div className="card-body">
                  <Laptop className="mb-4 text-primary" size={32} />
                  <h3 className="card-title text-primary">
                    Remote-First Culture
                  </h3>
                  <p>
                    Work from anywhere in Africa with flexible hours and home
                    office stipend
                  </p>
                </div>
              </div>

              <div className="card border border-success/20 bg-success/10">
                <div className="card-body">
                  <Sparkles className="mb-4 text-success" size={32} />
                  <h3 className="card-title text-success">
                    Learning & Development
                  </h3>
                  <p>
                    Annual learning budget, conference attendance, and
                    mentorship programs
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Company Values */}
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-4xl font-bold">Our Values</h2>
              <p className="text-xl text-base-content/70">
                The principles that guide how we work together
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {values.map((value, index) => (
                <div className="text-center" key={index}>
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-base-100 shadow-lg">
                    {value.icon}
                  </div>
                  <h3 className="mb-2 text-xl font-semibold">{value.title}</h3>
                  <p className="text-base-content/70">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section id="open-positions" className="bg-base-100 py-16">
          <div className="mx-auto max-w-7xl px-4">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-4xl font-bold">Open Positions</h2>
              <p className="text-xl text-base-content/70">
                Join our mission to transform mobility in Africa
              </p>
            </div>

            <div className="space-y-4">
              {openPositions.map((job, index) => (
                <div
                  className="card bg-base-200 shadow-lg transition-shadow hover:shadow-xl"
                  key={index}
                >
                  <div className="card-body">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                      <div className="flex-1">
                        <div className="mb-2 flex flex-wrap items-center gap-4">
                          <h3 className="card-title text-xl">{job.title}</h3>
                          <span className="badge badge-primary">
                            {job.department}
                          </span>
                          <span className="badge badge-outline">
                            {job.type}
                          </span>
                        </div>

                        <div className="mb-3 flex items-center gap-4 text-sm text-base-content/70">
                          <div className="flex items-center gap-1">
                            <MapPin size={16} />
                            <span>{job.location}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock size={16} />
                            <span>{job.type}</span>
                          </div>
                        </div>

                        <p className="mb-3 text-base-content/80">
                          {job.description}
                        </p>

                        <div className="flex flex-wrap gap-2">
                          {job.requirements.map((req, reqIndex) => (
                            <span
                              className="badge badge-ghost badge-sm"
                              key={reqIndex}
                            >
                              {req}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="mt-4 lg:ml-6 lg:mt-0">
                        <button
                          className="btn btn-primary"
                          onClick={() =>
                            setExpandedIndex(
                              expandedIndex === index ? null : index
                            )
                          }
                        >
                          Apply Now
                          <ChevronRight size={16} />
                        </button>
                      </div>
                    </div>
                    {/* Collapsible submission details */}
                    {expandedIndex === index && job.submission && (
                      <div className="mt-6 rounded-xl bg-base-100 p-6 border border-primary/20">
                        <h4 className="mb-2 text-lg font-semibold text-primary">
                          Submission Details
                        </h4>
                        <div className="mb-2">
                          <span className="font-bold">Deadline:</span>{" "}
                          {job.submission.deadline}
                        </div>
                        <div className="mb-2">
                          <span className="font-bold">Address:</span>{" "}
                          {job.submission.address}
                        </div>
                        {job.submission.emails && (
                          <div className="mb-2">
                            <span className="font-bold">Email:</span>{" "}
                            {job.submission.emails.join(", ")}
                          </div>
                        )}
                        {job.submission.contacts && (
                          <div className="mb-2">
                            <span className="font-bold">Contact:</span>{" "}
                            {job.submission.contacts.join(", ")}
                          </div>
                        )}
                        {job.submission.specifications &&
                          job.submission.specifications.length > 0 && (
                            <div className="mb-2">
                              <span className="font-bold">Specifications:</span>
                              <ul className="list-disc ml-6 mt-1 text-base-content/80">
                                {job.submission.specifications.map(
                                  (spec, specIdx) => (
                                    <li key={specIdx}>{spec}</li>
                                  )
                                )}
                              </ul>
                            </div>
                          )}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section id="testimonials" className="py-16">
          <div className="mx-auto max-w-7xl px-4">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-4xl font-bold">What Our Team Says</h2>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              <div className="card bg-base-100 shadow-lg">
                <div className="card-body">
                  <div className="mb-4 flex items-center gap-4">
                    <img
                      alt="Team member"
                      className="h-12 w-12 rounded-full"
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&crop=face"
                    />
                    <div>
                      <h4 className="font-semibold">John Makena</h4>
                      <p className="text-sm text-base-content/70">
                        Senior Engineer
                      </p>
                    </div>
                  </div>
                  <p className="text-base-content/80">
                    Working at Hareeng feels like building the future. The
                    technical challenges are exciting and the impact on
                    communities is real.
                  </p>
                </div>
              </div>

              <div className="card bg-base-100 shadow-lg">
                <div className="card-body">
                  <div className="mb-4 flex items-center gap-4">
                    <img
                      alt="Team member"
                      className="h-12 w-12 rounded-full"
                      src="https://images.unsplash.com/photo-1494790108755-2616b612b1ab?w=60&h=60&fit=crop&crop=face"
                    />
                    <div>
                      <h4 className="font-semibold">Amara Okafor</h4>
                      <p className="text-sm text-base-content/70">
                        Product Manager
                      </p>
                    </div>
                  </div>
                  <p className="text-base-content/80">
                    The collaborative culture here is amazing. Everyones voice
                    is heard and we make decisions together that affect millions
                    of users.
                  </p>
                </div>
              </div>

              <div className="card bg-base-100 shadow-lg">
                <div className="card-body">
                  <div className="mb-4 flex items-center gap-4">
                    <img
                      alt="Team member"
                      className="h-12 w-12 rounded-full"
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&h=60&fit=crop&crop=face"
                    />
                    <div>
                      <h4 className="font-semibold">Michael Stevens</h4>
                      <p className="text-sm text-base-content/70">
                        Data Scientist
                      </p>
                    </div>
                  </div>
                  <p className="text-base-content/80">
                    The learning opportunities are endless. I have grown more in
                    one year here than in my previous three years elsewhere.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
