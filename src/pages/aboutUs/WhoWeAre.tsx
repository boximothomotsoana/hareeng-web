import {
  Award,
  Globe,
  Heart,
  Shield,
  Target,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";

import AppNavbar from "@/components/common/AppNavbar";
import Breadcrumbs from "@/components/common/Breadcrumbs";

export default function WhoWeAre() {
  const values = [
    {
      description: "Every decision we make puts our customers at the center",
      icon: <Heart className="text-primary" size={32} />,
      title: "Customer First",
    },
    {
      description:
        "We constantly push boundaries to improve mobility solutions",
      icon: <Zap className="text-warning" size={32} />,
      title: "Innovation",
    },
    {
      description: "Building trust through transparency and safety excellence",
      icon: <Shield className="text-success" size={32} />,
      title: "Safety & Trust",
    },
    {
      description: "Creating a greener future through sustainable transport",
      icon: <Globe className="text-info" size={32} />,
      title: "Sustainability",
    },
  ];

  const stats = [
    { label: "Founded", number: "2019" },
    { label: "Rides Completed", number: "50M+" },
    { label: "Cities Served", number: "15" },
    { label: "Driver Partners", number: "100K+" },
  ];

  const leadership = [
    {
      description:
        "Former McKinsey consultant with 15+ years in tech and mobility",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
      name: "Thabo Mthembu",
      position: "CEO & Founder",
    },
    {
      description:
        "Ex-Google engineer specializing in scalable platform architecture",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b612b1ab?w=300&h=300&fit=crop&crop=face",
      name: "Sarah van der Merwe",
      position: "CTO",
    },
    {
      description:
        "Operations expert from Uber with deep African market knowledge",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
      name: "David Nkomo",
      position: "COO",
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
              alt="Team collaboration"
              className="h-full w-full object-cover"
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&h=600&fit=crop&crop=center"
            />
          </div>

          <div className="relative mx-auto max-w-7xl px-4 py-24">
            <div className="max-w-4xl">
              <h1 className="mb-6 text-5xl font-bold leading-tight lg:text-6xl">
                We are building the future of{" "}
                <span className="text-primary">mobility in Africa</span>
              </h1>

              <p className="mb-8 text-xl leading-relaxed opacity-90">
                Hareeng is more than a mobility company. We are a platform that
                connects people, powers economies, and transforms cities across
                South Africa and beyond.
              </p>

              <div className="flex flex-col gap-4 sm:flex-row">
                <a href="#mission" className="btn btn-primary btn-lg">
                  Join Our Mission
                </a>
                <a href="#impact" className="btn btn-outline btn-lg">
                  Our Impact
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="bg-base-100 py-16">
          <div className="mx-auto max-w-7xl px-4">
            <div className="grid gap-8 md:grid-cols-4">
              {stats.map((stat, index) => (
                <div className="text-center" key={index}>
                  <div className="mb-2 text-4xl font-bold text-primary">
                    {stat.number}
                  </div>
                  <div className="text-base-content/70">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div>
                <h2 className="mb-6 text-4xl font-bold">Our Story</h2>
                <div className="space-y-4 text-lg">
                  <p>
                    Founded in 2019 in Cape Town, Hareeng started with a simple
                    vision: to make transportation accessible, affordable, and
                    sustainable for everyone in Africa.
                  </p>
                  <p>
                    What began as a ride-hailing service has evolved into a
                    comprehensive mobility ecosystem, including food delivery,
                    electric scooters, and logistics solutions.
                  </p>
                  <p>
                    Today, we are proud to serve millions of users across 15
                    cities, supporting thousands of driver-partners and
                    restaurant owners while contributing to economic growth in
                    our communities.
                  </p>
                </div>
              </div>

              <div className="relative">
                <img
                  alt="City transportation"
                  className="rounded-2xl shadow-2xl"
                  src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&h=400&fit=crop&crop=center"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="bg-base-100 py-16">
          <div className="mx-auto max-w-7xl px-4">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-4xl font-bold">Our Values</h2>
              <p className="text-xl text-base-content/70">
                The principles that guide everything we do
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {values.map((value, index) => (
                <div className="card bg-base-200 shadow-lg" key={index}>
                  <div className="card-body text-center">
                    <div className="mx-auto mb-4">{value.icon}</div>
                    <h3 className="card-title justify-center">{value.title}</h3>
                    <p className="text-base-content/70">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Leadership */}
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-4xl font-bold">Leadership Team</h2>
              <p className="text-xl text-base-content/70">
                Meet the visionaries driving Hareeng forward
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              {leadership.map((leader, index) => (
                <div className="card bg-base-100 shadow-lg" key={index}>
                  <figure className="px-6 pt-6">
                    <img
                      alt={leader.name}
                      className="h-48 w-48 rounded-full object-cover"
                      src={leader.image}
                    />
                  </figure>
                  <div className="card-body text-center">
                    <h3 className="card-title justify-center text-xl">
                      {leader.name}
                    </h3>
                    <p className="font-semibold text-primary">
                      {leader.position}
                    </p>
                    <p className="text-base-content/70">{leader.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section id="mission" className="py-16">
          <div className="mx-auto max-w-7xl px-4">
            <div className="grid gap-12 lg:grid-cols-2">
              <div className="text-center lg:text-left">
                <div className="mb-6 flex justify-center lg:justify-start">
                  <Target className="text-accent" size={48} />
                </div>
                <h3 className="mb-4 text-3xl font-bold">Our Mission</h3>
                <p className="text-xl opacity-90">
                  To democratize mobility and create economic opportunities for
                  millions across Africa through innovative technology
                  solutions.
                </p>
              </div>

              <div className="text-center lg:text-left">
                <div className="mb-6 flex justify-center lg:justify-start">
                  <Award className="text-warning" size={48} />
                </div>
                <h3 className="mb-4 text-3xl font-bold">Our Vision</h3>
                <p className="text-xl opacity-90">
                  A connected Africa where everyone has access to safe,
                  affordable, and sustainable transportation options.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Impact */}
        <section id="impact" className="py-16">
          <div className="mx-auto max-w-7xl px-4">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-4xl font-bold">Our Impact</h2>
              <p className="text-xl text-base-content/70">
                Creating positive change in communities across Africa
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              <div className="card border border-success/20 bg-success/10">
                <div className="card-body text-center">
                  <TrendingUp className="mx-auto mb-4 text-success" size={48} />
                  <h3 className="card-title justify-center text-success">
                    Economic Growth
                  </h3>
                  <p>
                    Created over 100,000 income opportunities for drivers,
                    delivery partners, and restaurant owners.
                  </p>
                </div>
              </div>

              <div className="card border border-info/20 bg-info/10">
                <div className="card-body text-center">
                  <Globe className="mx-auto mb-4 text-info" size={48} />
                  <h3 className="card-title justify-center text-info">
                    Environmental
                  </h3>
                  <p>
                    Reduced carbon emissions by promoting shared mobility and
                    electric vehicle adoption.
                  </p>
                </div>
              </div>

              <div className="card border border-warning/20 bg-warning/10">
                <div className="card-body text-center">
                  <Users className="mx-auto mb-4 text-warning" size={48} />
                  <h3 className="card-title justify-center text-warning">
                    Social
                  </h3>
                  <p>
                    Improved access to transportation in underserved communities
                    across South Africa.
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
