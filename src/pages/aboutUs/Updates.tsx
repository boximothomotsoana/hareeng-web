import {
  ArrowRight,
  Award,
  Calendar,
  Clock,
  Globe,
  Newspaper,
  TrendingUp,
  User,
  Users,
} from "lucide-react";

import AppNavbar from "@/components/common/AppNavbar";
import Breadcrumbs from "@/components/common/Breadcrumbs";

export default function Updates() {
  const featuredNews = {
    author: "Hareeng Communications Team",
    category: "Expansion",
    date: "2025-01-25",
    excerpt:
      "We're excited to announce our expansion into Bloemfontein, Polokwane, Kimberley, Nelspruit, and East London, bringing sustainable mobility solutions to more communities.",
    image:
      "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&h=400&fit=crop&crop=center",
    title: "Hareeng Expands to 5 New Cities Across South Africa",
  };

  const newsArticles = [
    {
      author: "Sarah Johnson",
      category: "Partnership",
      date: "2025-01-20",
      excerpt:
        "Supporting local businesses and creating new income opportunities for restaurant owners across our platform.",
      image:
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=250&fit=crop&crop=center",
      title: "Hareeng Eats Partners with 1,000+ Local Restaurants",
    },
    {
      author: "Michael Chen",
      category: "Sustainability",
      date: "2025-01-15",
      excerpt:
        "Major milestone in our commitment to sustainable urban transportation with zero-emission vehicle options.",
      image:
        "https://images.unsplash.com/photo-1558618522-fbd2c2618db6?w=400&h=250&fit=crop&crop=center",
      title: "Electric Scooter Fleet Reaches 10,000 Units",
    },
    {
      author: "David Nkomo",
      category: "Safety",
      date: "2025-01-10",
      excerpt:
        "Enhanced safety measures including real-time ID verification and continuous monitoring for all drivers.",
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=250&fit=crop&crop=center",
      title: "Hareeng Safety: New Driver Background Check System",
    },
    {
      author: "Thabo Mthembu",
      category: "Investment",
      date: "2025-01-05",
      excerpt:
        "New initiatives including vehicle financing, insurance support, and skills development for our driver partners.",
      image:
        "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=250&fit=crop&crop=center",
      title: "R50 Million Investment in Driver Support Programs",
    },
    {
      author: "Analytics Team",
      category: "Milestones",
      date: "2024-12-31",
      excerpt:
        "Record-breaking performance during December 2024 with improved service reliability and customer satisfaction.",
      image:
        "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=250&fit=crop&crop=center",
      title: "Holiday Season Impact: 2M+ Rides Completed",
    },
    {
      author: "Community Relations",
      category: "Community",
      date: "2024-12-20",
      excerpt:
        "Celebrating the economic impact of our platform in creating sustainable employment opportunities across South Africa.",
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=250&fit=crop&crop=center",
      title: "Community Impact: 50,000+ Jobs Created",
    },
  ];

  const categories = [
    { active: true, count: 25, name: "All" },
    { count: 8, name: "Expansion" },
    { count: 6, name: "Partnership" },
    { count: 4, name: "Sustainability" },
    { count: 3, name: "Safety" },
    { count: 4, name: "Community" },
  ];

  const stats = [
    {
      icon: <TrendingUp className="text-primary" size={32} />,
      label: "Growth in 2024",
      number: "150%",
    },
    {
      icon: <Users className="text-secondary" size={32} />,
      label: "Active Users",
      number: "5M+",
    },
    {
      icon: <Award className="text-accent" size={32} />,
      label: "Industry Awards",
      number: "15",
    },
    {
      icon: <Globe className="text-success" size={32} />,
      label: "Cities Served",
      number: "20",
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
              alt="News and updates"
              className="h-full w-full object-cover"
              src="https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=1200&h=600&fit=crop&crop=center"
            />
          </div>

          <div className="relative mx-auto max-w-7xl px-4 py-24">
            <div className="max-w-4xl">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-info-content/20 px-4 py-2">
                <Newspaper size={20} />
                <span className="font-medium">Latest News & Updates</span>
              </div>

              <h1 className="mb-6 text-5xl font-bold leading-tight lg:text-6xl">
                Stay updated with{" "}
                <span className="text-primary">Hareengs journey</span>
              </h1>

              <p className="mb-8 text-xl leading-relaxed opacity-90">
                Get the latest news, company updates, product launches, and
                insights from the Hareeng team as we transform mobility across
                Africa.
              </p>

              <div className="flex flex-col gap-4 sm:flex-row">
                <button className="btn btn-primary btn-lg">
                  Subscribe to Updates
                </button>
                <button className="btn btn-outline btn-lg">
                  View Press Kit
                </button>
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
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-base-200">
                    {stat.icon}
                  </div>
                  <div className="mb-2 text-3xl font-bold">{stat.number}</div>
                  <div className="text-base-content/70">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured News */}
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4">
            <div className="mb-12">
              <h2 className="mb-4 text-4xl font-bold">Featured Story</h2>
            </div>

            <div className="card bg-base-100 shadow-2xl lg:card-side">
              <figure className="lg:w-1/2">
                <img
                  alt={featuredNews.title}
                  className="h-full w-full object-cover"
                  src={featuredNews.image}
                />
              </figure>
              <div className="card-body lg:w-1/2">
                <div className="mb-4 flex items-center gap-4">
                  <span className="badge badge-primary">
                    {featuredNews.category}
                  </span>
                  <div className="flex items-center gap-2 text-sm text-base-content/70">
                    <Calendar size={16} />
                    <span>
                      {new Date(featuredNews.date).toLocaleDateString()}
                    </span>
                  </div>
                </div>

                <h3 className="card-title mb-4 text-2xl">
                  {featuredNews.title}
                </h3>
                <p className="mb-6 text-lg text-base-content/80">
                  {featuredNews.excerpt}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <User size={16} />
                    <span className="text-sm">{featuredNews.author}</span>
                  </div>
                  <button className="btn btn-primary">
                    Read Full Story
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="bg-base-100 py-8">
          <div className="mx-auto max-w-7xl px-4">
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((category, index) => (
                <button
                  className={`btn btn-sm ${category.active ? "btn-primary" : "btn-ghost"}`}
                  key={index}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* News Grid */}
        <section className="bg-base-100 py-16">
          <div className="mx-auto max-w-7xl px-4">
            <div className="mb-12">
              <h2 className="mb-4 text-4xl font-bold">Recent Updates</h2>
              <p className="text-xl text-base-content/70">
                The latest news and developments from Hareeng
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {newsArticles.map((article, index) => (
                <div
                  className="card bg-base-200 shadow-lg transition-shadow hover:shadow-xl"
                  key={index}
                >
                  <figure className="h-48">
                    <img
                      alt={article.title}
                      className="h-full w-full object-cover"
                      src={article.image}
                    />
                  </figure>
                  <div className="card-body">
                    <div className="mb-2 flex items-center gap-2">
                      <span className="badge badge-outline badge-sm">
                        {article.category}
                      </span>
                      <div className="flex items-center gap-1 text-xs text-base-content/70">
                        <Clock size={12} />
                        <span>
                          {new Date(article.date).toLocaleDateString()}
                        </span>
                      </div>
                    </div>

                    <h3 className="card-title mb-2 text-lg">{article.title}</h3>
                    <p className="mb-4 text-sm text-base-content/70">
                      {article.excerpt}
                    </p>

                    <div className="card-actions items-center justify-between">
                      <div className="flex items-center gap-1 text-xs">
                        <User size={12} />
                        <span>{article.author}</span>
                      </div>
                      <button className="btn btn-primary btn-sm">
                        Read More
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <button className="btn btn-outline btn-lg">
                Load More Articles
              </button>
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-16">
          <div className="mx-auto max-w-4xl px-4 text-center">
            <h2 className="mb-4 text-4xl font-bold">Never Miss an Update</h2>
            <p className="mb-8 text-xl opacity-90">
              Subscribe to our newsletter for the latest news, product updates,
              and insights
            </p>

            <div className="mx-auto max-w-md">
              <div className="join w-full">
                <input
                  className="input join-item input-bordered flex-1 text-base-content"
                  placeholder="Enter your email"
                  type="email"
                />
                <button className="btn btn-primary join-item">Subscribe</button>
              </div>
              <p className="mt-2 text-sm opacity-75">
                No spam, unsubscribe anytime
              </p>
            </div>
          </div>
        </section>

        {/* Press & Media */}
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4">
            <div className="text-center">
              <h2 className="mb-4 text-4xl font-bold">Press & Media</h2>
              <p className="mb-8 text-xl text-base-content/70">
                Resources for journalists and media professionals
              </p>

              <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                <button className="btn btn-primary btn-lg">
                  Download Press Kit
                </button>
                <button className="btn btn-outline btn-lg">
                  Media Contact
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
