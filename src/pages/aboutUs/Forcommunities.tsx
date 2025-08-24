import {
  Building,
  GraduationCap,
  Heart,
  MapPin,
  TreePine,
  TrendingUp,
  Users,
} from "lucide-react";

import AppNavbar from "@/components/common/AppNavbar";
import Breadcrumbs from "@/components/common/Breadcrumbs";

export default function ForCommunities() {
  const impactAreas = [
    {
      description:
        "Creating income opportunities for drivers, delivery partners, and local businesses",
      icon: <TrendingUp className="text-primary" size={32} />,
      stats: "25K+ earning partners",
      title: "Economic Empowerment",
    },
    {
      description:
        "Reducing carbon emissions through shared mobility and electric vehicles",
      icon: <TreePine className="text-success" size={32} />,
      stats: "30% emission reduction",
      title: "Environmental Impact",
    },
    {
      description:
        "Training programs for drivers, entrepreneurs, and digital literacy",
      icon: <GraduationCap className="text-info" size={32} />,
      stats: "10K+ people trained",
      title: "Skills Development",
    },
    {
      description:
        "Supporting local initiatives, education, and social development projects",
      icon: <Heart className="text-warning" size={32} />,
      stats: "R5M+ invested",
      title: "Community Support",
    },
  ];

  const programs = [
    {
      beneficiaries: "5,000+ graduates",
      description:
        "Comprehensive training program covering driving skills, customer service, and digital literacy for aspiring drivers.",
      image:
        "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=400&h=300&fit=crop&crop=center",
      impact: "85% job placement rate",
      title: "Hareeng Drivers Academy",
    },
    {
      beneficiaries: "2,500+ businesses",
      description:
        "Helping local restaurants and retailers digitize their operations and reach new customers through our platform.",
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop&crop=center",
      impact: "40% average revenue increase",
      title: "Small Business Support",
    },
    {
      beneficiaries: "15 cities",
      description:
        "Promoting electric vehicles and sustainable transportation options in partnership with local governments.",
      image:
        "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=300&fit=crop&crop=center",
      impact: "1,000+ electric vehicles",
      title: "Green Mobility Initiative",
    },
    {
      beneficiaries: "1,200+ students",
      description:
        "Scholarship programs and technology education initiatives for underprivileged youth in our operational cities.",
      image:
        "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&h=300&fit=crop&crop=center",
      impact: "R2M+ in scholarships",
      title: "Youth Education Support",
    },
  ];

  const partnerships = [
    {
      focus: "Regulatory compliance and urban mobility planning",
      logo: "🏛️",
      organization: "Department of Transport",
      type: "Government",
    },
    {
      focus: "Research on sustainable urban transportation",
      logo: "🎓",
      organization: "University of Cape Town",
      type: "Academic",
    },
    {
      focus: "Clean energy and electric vehicle adoption",
      logo: "🌱",
      organization: "GreenCape",
      type: "Environmental",
    },
    {
      focus: "Supporting SME digitization and growth",
      logo: "🏢",
      organization: "Local Business Chambers",
      type: "Business",
    },
  ];

  const cityPrograms = [
    {
      city: "Cape Town",
      impact: "8,000+ jobs created",
      population: "4.7M",
      programs: ["Driver Academy", "Green Mobility", "Business Support"],
    },
    {
      city: "Johannesburg",
      impact: "12,000+ beneficiaries",
      population: "5.6M",
      programs: ["Youth Education", "Small Business", "Safety Training"],
    },
    {
      city: "Durban",
      impact: "6,500+ participants",
      population: "3.9M",
      programs: ["Skills Development", "Environmental", "Community Health"],
    },
  ];

  const testimonials = [
    {
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b612b1ab?w=100&h=100&fit=crop&crop=face",
      name: "Nomsa Mbeki",
      quote:
        "Hareeng has transformed our community by providing job opportunities and supporting local businesses. Young people now have a path to income and dignity.",
      role: "Community Leader, Soweto",
    },
    {
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      name: "Pastor John Khumalo",
      quote:
        "The youth scholarship program has given hope to families in our community. Education is the key to breaking the cycle of poverty.",
      role: "Local Church Leader",
    },
    {
      image:
        "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100&h=100&fit=crop&crop=face",
      name: "Fatima Ahmed",
      quote:
        "Joining Hareeng Eats doubled our customer base. The training they provided helped us improve our service and grow our business significantly.",
      role: "Restaurant Owner",
    },
  ];

  return (
    <>
      <AppNavbar />

      <div className="min-h-screen bg-base-200 pt-16">
        <Breadcrumbs />

        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <img
              alt="Community gathering"
              className="h-full w-full object-cover"
              src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=1200&h=600&fit=crop&crop=center"
            />
          </div>

          <div className="relative mx-auto max-w-7xl px-4 py-24">
            <div className="max-w-4xl">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-success-content/20 px-4 py-2">
                <Heart size={20} />
                <span className="font-medium">Impacting 50+ Communities</span>
              </div>

              <h1 className="mb-6 text-5xl font-bold leading-tight lg:text-6xl">
                Building stronger{" "}
                <span className="text-primary">communities together</span>
              </h1>

              <p className="mb-8 text-xl leading-relaxed opacity-90">
                At Hareeng, we believe in creating shared value. Beyond
                mobility, we are committed to empowering communities, supporting
                local economies, and building a sustainable future for all.
              </p>

              <div className="flex flex-col gap-4 sm:flex-row">
                <a href="#community-programs" className="btn btn-primary btn-lg">
                  See Our Impact
                </a>
                <a href="/contact-us" className="btn btn-outline btn-lg">
                  Partner With Us
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Impact Areas */}
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-4xl font-bold">Our Community Impact</h2>
              <p className="text-xl text-base-content/70">
                Creating positive change across multiple dimensions
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {impactAreas.map((area, index) => (
                <div className="card bg-base-100 shadow-lg" key={index}>
                  <div className="card-body text-center">
                    <div className="mx-auto mb-4">{area.icon}</div>
                    <h3 className="card-title mb-2 justify-center">
                      {area.title}
                    </h3>
                    <p className="mb-4 text-base-content/70">
                      {area.description}
                    </p>
                    </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Community Programs */}
        <section id="community-programs" className="bg-base-100 py-16">
          <div className="mx-auto max-w-7xl px-4">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-4xl font-bold">Community Programs</h2>
              <p className="text-xl text-base-content/70">
                Initiatives designed to empower and uplift communities
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              {programs.map((program, index) => (
                <div className="card bg-base-200 shadow-lg" key={index}>
                  <figure className="h-48">
                    <img
                      alt={program.title}
                      className="h-full w-full object-cover"
                      src={program.image}
                    />
                  </figure>
                  <div className="card-body">
                    <h3 className="card-title">{program.title}</h3>
                    <p className="text-base-content/80">
                      {program.description}
                    </p>

                    <div className="mt-4 flex items-center justify-between">
                      <div className="text-sm">
                        <div className="font-semibold text-primary">
                          {program.beneficiaries}
                        </div>
                        <div className="text-base-content/70">
                          Beneficiaries
                        </div>
                      </div>
                      <div className="text-right text-sm">
                        <div className="font-semibold text-success">
                          {program.impact}
                        </div>
                        <div className="text-base-content/70">Impact</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* City Programs */}
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-4xl font-bold">Programs by City</h2>
              <p className="text-xl text-base-content/70">
                Tailored initiatives for each community we serve
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              {cityPrograms.map((city, index) => (
                <div className="card bg-base-100 shadow-lg" key={index}>
                  <div className="card-body">
                    <div className="mb-4 flex items-center gap-3">
                      <MapPin className="text-primary" size={24} />
                      <div>
                        <h3 className="card-title">{city.city}</h3>
                        <p className="text-sm text-base-content/70">
                          {city.population} residents
                        </p>
                      </div>
                    </div>

                    <div className="mb-4">
                      <h4 className="mb-2 font-semibold">Active Programs:</h4>
                      <div className="flex flex-wrap gap-1">
                        {city.programs.map((program, pIndex) => (
                          <span
                            className="badge badge-sm"
                            key={pIndex}
                          >
                            {program}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mt-auto">
                      <div className="text-lg font-bold text-success">
                        {city.impact}
                      </div>
                      <div className="text-sm text-base-content/70">
                        Total impact
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Partnerships */}
        <section className="bg-base-100 py-16">
          <div className="mx-auto max-w-7xl px-4">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-4xl font-bold">
                Strategic Partnerships
              </h2>
              <p className="text-xl text-base-content/70">
                Collaborating with organizations to maximize community impact
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {partnerships.map((partner, index) => (
                <div className="card bg-base-200 shadow-lg" key={index}>
                  <div className="card-body text-center">
                    <div className="mb-3 text-4xl">{partner.logo}</div>
                    <h3 className="card-title justify-center text-lg">
                      {partner.organization}
                    </h3>
                    <div className="badge badge-sm mb-2">
                      {partner.type}
                    </div>
                    <p className="text-sm text-base-content/70">
                      {partner.focus}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-4xl font-bold">Community Voices</h2>
              <p className="text-xl text-base-content/70">
                Hear from community leaders about our impact
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              {testimonials.map((testimonial, index) => (
                <div className="card bg-base-100 shadow-lg" key={index}>
                  <div className="card-body">
                    <div className="mb-4 flex items-center gap-4">
                      <img
                        alt={testimonial.name}
                        className="h-16 w-16 rounded-full object-cover"
                        src={testimonial.image}
                      />
                      <div>
                        <h4 className="font-semibold">{testimonial.name}</h4>
                        <p className="text-sm text-base-content/70">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                    <p className="italic text-base-content/80">
                      {testimonial.quote}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Impact Stats */}
        <section className="bg-base-100 py-16">
          <div className="mx-auto max-w-7xl px-4">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold">Our Impact in Numbers</h2>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              <div className="stat rounded-lg bg-base-200">
                <div className="stat-figure text-primary">
                  <Users size={32} />
                </div>
                <div className="stat-title">People Impacted</div>
                <div className="stat-value text-primary">50K+</div>
                <div className="stat-desc">Across all programs</div>
              </div>

              <div className="stat rounded-lg bg-base-200">
                <div className="stat-figure text-success">
                  <Building size={32} />
                </div>
                <div className="stat-title">Local Businesses</div>
                <div className="stat-value text-success">2.5K+</div>
                <div className="stat-desc">Supported and digitized</div>
              </div>

              <div className="stat rounded-lg bg-base-200">
                <div className="stat-figure text-warning">
                  <GraduationCap size={32} />
                </div>
                <div className="stat-title">Students Sponsored</div>
                <div className="stat-value text-warning">1.2K+</div>
                <div className="stat-desc">Through education programs</div>
              </div>

              <div className="stat rounded-lg bg-base-200">
                <div className="stat-figure text-info">
                  <TreePine size={32} />
                </div>
                <div className="stat-title">CO₂ Reduced</div>
                <div className="stat-value text-info">30%</div>
                <div className="stat-desc">In operational cities</div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
