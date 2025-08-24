import {
  Activity,
  BarChart3,
  Calendar,
  DollarSign,
  Globe,
  Phone,
  Target,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";

import AppNavbar from "@/components/common/AppNavbar";
import Breadcrumbs from "@/components/common/Breadcrumbs";

export default function ForInvestors() {
  const keyMetrics = [
    {
      change: "+300%",
      icon: <Users className="text-primary" size={24} />,
      label: "Monthly Active Users",
      value: "500K+",
    },
    {
      change: "+250%",
      icon: <DollarSign className="text-success" size={24} />,
      label: "Monthly Gross Revenue",
      value: "R50M+",
    },
    {
      change: "+5 new",
      icon: <Globe className="text-info" size={24} />,
      label: "Cities Served",
      value: "15",
    },
    {
      change: "+400%",
      icon: <Activity className="text-warning" size={24} />,
      label: "Driver Partners",
      value: "25K+",
    },
  ];

  const fundingRounds = [
    {
      amount: "R500M",
      date: "Dec 2024",
      investors: "TLcom Capital, Norrsken22, Local Pension Funds",
      round: "Series B",
      status: "Completed",
    },
    {
      amount: "R150M",
      date: "Jun 2023",
      investors: "4DX Ventures, Kalon Venture Partners",
      round: "Series A",
      status: "Completed",
    },
    {
      amount: "R25M",
      date: "Jan 2022",
      investors: "Angel Network, Founders Factory Africa",
      round: "Seed",
      status: "Completed",
    },
  ];

  const marketOpportunity = [
    {
      description: "Growing urbanization driving demand for mobility solutions",
      growth: "25% CAGR",
      size: "R15B",
      title: "Ride-Hailing Market",
    },
    {
      description: "E-commerce and convenience culture expansion",
      growth: "30% CAGR",
      size: "R8B",
      title: "Food Delivery",
    },
    {
      description: "B2B logistics digitization opportunity",
      growth: "20% CAGR",
      size: "R50B",
      title: "Logistics & Freight",
    },
  ];

  const competitiveAdvantages = [
    {
      description:
        "Deep understanding of African markets, local partnerships, and regulatory landscape",
      icon: <Target className="text-primary" size={32} />,
      title: "Local Market Focus",
    },
    {
      description:
        "Advanced algorithms, real-time optimization, and scalable platform architecture",
      icon: <Zap className="text-warning" size={32} />,
      title: "Technology Leadership",
    },
    {
      description:
        "Higher driver retention and satisfaction leading to better service quality",
      icon: <Users className="text-success" size={32} />,
      title: "Driver-Centric Approach",
    },
    {
      description:
        "Integrated ecosystem spanning rides, delivery, scooters, and logistics",
      icon: <Globe className="text-info" size={32} />,
      title: "Multi-Modal Platform",
    },
  ];

  const revenueStreams = [
    { amount: "R32.5M", percentage: 65, stream: "Ride Commission" },
    { amount: "R12.5M", percentage: 25, stream: "Delivery Commission" },
    { amount: "R3.5M", percentage: 7, stream: "Subscription Services" },
    { amount: "R1.5M", percentage: 3, stream: "Advertising & Other" },
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
              alt="Business growth charts"
              className="h-full w-full object-cover"
              src="https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=1200&h=600&fit=crop&crop=center"
            />
          </div>

          <div className="relative mx-auto max-w-7xl px-4 py-24">
            <div className="max-w-4xl">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary-content/20 px-4 py-2">
                <TrendingUp size={20} />
                <span className="font-medium">Series B: R500M Raised</span>
              </div>

              <h1 className="mb-6 text-5xl font-bold leading-tight lg:text-6xl">
                Investing in Africas{" "}
                <span className="text-primary">mobility revolution</span>
              </h1>

              <p className="mb-8 text-xl leading-relaxed opacity-90">
                Join leading investors backing Hareengs mission to transform
                transportation across Africa. Discover our growth story, market
                opportunity, and path to sustainable profitability.
              </p>

              <div className="flex flex-col gap-4 sm:flex-row">
                <a href="#revenue-diversification" className="btn btn-primary btn-lg">
                  <Zap size={18} /> You Can Grow With Us
                </a>
                <a href="/contact-us" className="btn btn-outline btn-lg">
                  <Phone size={18} /> Reach To Us
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Key Metrics */}
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-4xl font-bold">
                Key Performance Metrics
              </h2>
              <p className="text-xl text-base-content/70">
                Strong growth across all key business indicators
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {keyMetrics.map((metric, index) => (
                <div
                  className="stat rounded-lg bg-base-100 shadow-lg"
                  key={index}
                >
                  <div className="stat-figure">{metric.icon}</div>
                  <div className="stat-title">{metric.label}</div>
                  <div className="stat-value">{metric.value}</div>
                  <div className="stat-desc text-success">
                    <span className="font-semibold">{metric.change}</span> YoY
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Market Opportunity */}
        <section className="bg-base-100 py-16">
          <div className="mx-auto max-w-7xl px-4">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-4xl font-bold">Market Opportunity</h2>
              <p className="text-xl text-base-content/70">
                Massive addressable market across multiple verticals
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              {marketOpportunity.map((market, index) => (
                <div className="card bg-base-200 shadow-lg" key={index}>
                  <div className="card-body text-center">
                    <div className="mb-2 text-3xl font-bold text-primary">
                      {market.size}
                    </div>
                    <h3 className="card-title mb-2 justify-center">
                      {market.title}
                    </h3>
                    <div className="badge badge-success mb-4">
                      {market.growth}
                    </div>
                    <p className="text-base-content/70">{market.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <div className="stats bg-base-200 shadow-lg">
                <div className="stat">
                  <div className="stat-title">Total Addressable Market</div>
                  <div className="stat-value text-primary">R73B+</div>
                  <div className="stat-desc">
                    South African mobility & logistics market
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Revenue Breakdown */}
        <section id="revenue-diversification" className="py-16">
          <div className="mx-auto max-w-7xl px-4">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div>
                <h2 className="mb-6 text-4xl font-bold">
                  Revenue Diversification
                </h2>
                <p className="mb-8 text-lg text-base-content/70">
                  Multiple revenue streams provide stability and growth
                  opportunities across our integrated mobility platform.
                </p>

                <div className="space-y-4">
                  {revenueStreams.map((stream, index) => (
                    <div
                      className="flex items-center justify-between rounded-lg bg-base-100 p-4"
                      key={index}
                    >
                      <div className="flex-1">
                        <div className="mb-2 flex items-center justify-between">
                          <span className="font-semibold">{stream.stream}</span>
                          <span className="font-bold text-primary">
                            {stream.amount}
                          </span>
                        </div>
                        <progress
                          className="progress progress-primary w-full"
                          max="100"
                          value={stream.percentage}
                        />
                      </div>
                      <div className="ml-4 text-sm font-semibold">
                        {stream.percentage}%
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative">
                <div className="card bg-base-100 shadow-xl">
                  <div className="card-body">
                    <h3 className="card-title mb-4">
                      Monthly Recurring Revenue Growth
                    </h3>
                    <div className="flex h-64 items-center justify-center rounded-lg bg-base-200">
                      <div className="text-center">
                        <BarChart3
                          className="mx-auto mb-4 text-primary"
                          size={48}
                        />
                        <p className="text-base-content/70">
                          Revenue chart visualization
                        </p>
                        <div className="mt-4 text-2xl font-bold text-success">
                          +250% YoY
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Competitive Advantages */}
        <section className="bg-base-100 py-16">
          <div className="mx-auto max-w-7xl px-4">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-4xl font-bold">
                Competitive Advantages
              </h2>
              <p className="text-xl text-base-content/70">
                What sets Hareeng apart in the African mobility market
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {competitiveAdvantages.map((advantage, index) => (
                <div className="card bg-base-200 shadow-lg" key={index}>
                  <div className="card-body text-center">
                    <div className="mx-auto mb-4">{advantage.icon}</div>
                    <h3 className="card-title mb-2 justify-center">
                      {advantage.title}
                    </h3>
                    <p className="text-base-content/70">
                      {advantage.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Funding History */}
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-4xl font-bold">Funding History</h2>
              <p className="text-xl text-base-content/70">
                Backed by leading African and international investors
              </p>
            </div>

            <div className="space-y-6">
              {fundingRounds.map((round, index) => (
                <div className="card bg-base-100 shadow-lg" key={index}>
                  <div className="card-body">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                      <div className="flex-1">
                        <div className="mb-2 flex items-center gap-4">
                          <h3 className="text-2xl font-bold">{round.round}</h3>
                          <span className="badge badge-success">
                            {round.status}
                          </span>
                        </div>
                        <div className="mb-2 text-3xl font-bold text-primary">
                          {round.amount}
                        </div>
                        <p className="text-base-content/70">
                          {round.investors}
                        </p>
                      </div>

                      <div className="mt-4 lg:ml-6 lg:mt-0">
                        <div className="flex items-center gap-2 text-base-content/70">
                          <Calendar size={16} />
                          <span>{round.date}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <div className="card inline-block border border-primary/20 bg-primary/10">
                <div className="card-body text-center">
                  <h3 className="mb-2 text-2xl font-bold text-primary">
                    Total Raised
                  </h3>
                  <div className="text-4xl font-bold">R675M+</div>
                  <p className="mt-2 text-base-content/70">
                    Across three funding rounds
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Leadership Team */}
        <section className="bg-base-100 py-16">
          <div className="mx-auto max-w-7xl px-4">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-4xl font-bold">
                Experienced Leadership
              </h2>
              <p className="text-xl text-base-content/70">
                Proven track record in scaling technology companies
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              <div className="card bg-base-200 shadow-lg">
                <div className="card-body text-center">
                  <div className="avatar mb-4">
                    <div className="w-24 rounded-full">
                      <img
                        alt="CEO"
                        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face"
                      />
                    </div>
                  </div>
                  <h3 className="card-title justify-center">Thabo Mthembu</h3>
                  <p className="font-semibold text-primary">CEO & Founder</p>
                  <p className="text-sm text-base-content/70">
                    Ex-McKinsey, Stanford MBA
                  </p>
                </div>
              </div>

              <div className="card bg-base-200 shadow-lg">
                <div className="card-body text-center">
                  <div className="avatar mb-4">
                    <div className="w-24 rounded-full">
                      <img
                        alt="CTO"
                        src="https://images.unsplash.com/photo-1494790108755-2616b612b1ab?w=200&h=200&fit=crop&crop=face"
                      />
                    </div>
                  </div>
                  <h3 className="card-title justify-center">
                    Sarah van der Merwe
                  </h3>
                  <p className="font-semibold text-primary">CTO</p>
                  <p className="text-sm text-base-content/70">
                    Ex-Google, MIT Computer Science
                  </p>
                </div>
              </div>

              <div className="card bg-base-200 shadow-lg">
                <div className="card-body text-center">
                  <div className="avatar mb-4">
                    <div className="w-24 rounded-full">
                      <img
                        alt="COO"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face"
                      />
                    </div>
                  </div>
                  <h3 className="card-title justify-center">David Nkomo</h3>
                  <p className="font-semibold text-primary">COO</p>
                  <p className="text-sm text-base-content/70">
                    Ex-Uber, Wharton MBA
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
