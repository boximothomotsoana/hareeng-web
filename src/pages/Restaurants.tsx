import {
  BarChart3,
  ChefHat,
  Clock,
  DollarSign,
  Shield,
  Star,
  Store,
  TrendingUp,
  Truck,
  Users,
} from "lucide-react";

import AppNavbar from "@/components/common/AppNavbar";
import Breadcrumbs from "@/components/common/Breadcrumbs";

export default function Restaurants() {
  const features = [
    {
      description: "Reach more customers and grow your revenue by up to 30%",
      icon: <TrendingUp className="text-primary" size={32} />,
      title: "Increase Sales",
    },
    {
      description: "Connect with millions of hungry customers in your area",
      icon: <Users className="text-secondary" size={32} />,
      title: "New Customers",
    },
    {
      description:
        "Our delivery partners handle logistics so you can focus on food",
      icon: <Truck className="text-accent" size={32} />,
      title: "Delivery Network",
    },
    {
      description: "Track orders, revenue, and customer feedback in real-time",
      icon: <BarChart3 className="text-success" size={32} />,
      title: "Real-time Analytics",
    },
  ];

  const steps = [
    {
      description: "Create your restaurant profile in minutes",
      icon: <Store className="text-primary" size={32} />,
      step: "1",
      title: "Sign Up",
    },
    {
      description: "Add your dishes with photos and descriptions",
      icon: <ChefHat className="text-secondary" size={32} />,
      step: "2",
      title: "Upload Menu",
    },
    {
      description: "Start receiving orders from hungry customers",
      icon: <Clock className="text-accent" size={32} />,
      step: "3",
      title: "Go Live",
    },
    {
      description: "Use our tools and insights to expand",
      icon: <TrendingUp className="text-success" size={32} />,
      step: "4",
      title: "Grow Business",
    },
  ];

  const restaurantTypes = [
    {
      description: "Quick service restaurants and takeaways",
      image:
        "https://images.unsplash.com/photo-1561758033-d89a9ad46330?w=400&h=300&fit=crop&crop=center",
      name: "Fast Food",
    },
    {
      description: "Premium restaurants and gourmet experiences",
      image:
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop&crop=center",
      name: "Fine Dining",
    },
    {
      description: "Traditional and cultural food establishments",
      image:
        "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=400&h=300&fit=crop&crop=center",
      name: "Local Cuisine",
    },
    {
      description: "Coffee shops, bakeries, and casual dining",
      image:
        "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=400&h=300&fit=crop&crop=center",
      name: "Cafes & Bakeries",
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
              alt="Restaurant kitchen"
              className="h-full w-full object-cover"
              src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200&h=600&fit=crop&crop=center"
            />
          </div>

          <div className="relative mx-auto max-w-7xl px-4 py-24">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div>
                <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-secondary-content/20 px-4 py-2">
                  <Store size={20} />
                  <span className="font-medium">
                    Join 10,000+ Partner Restaurants
                  </span>
                </div>

                <h1 className="mb-6 text-5xl font-bold leading-tight lg:text-6xl">
                  Grow your restaurant with{" "}
                  <span className="text-accent">Hareeng Eats</span>
                </h1>

                <p className="mb-8 text-xl opacity-90">
                  Reach more customers, increase sales, and grow your business
                  with South Africas fastest-growing food delivery platform.
                </p>

                <div className="flex flex-col gap-4 sm:flex-row">
                  <button className="btn btn-primary btn-lg">
                    <Store size={20} />
                    <a
                      href="/partners/restaurant-registration"
                    >
                      Join as a Partner
                    </a>
                  </button>
                  </div>

                <div className="mt-8 grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold">10K+</div>
                    <div className="text-sm opacity-80">
                      Partner Restaurants
                    </div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold">1M+</div>
                    <div className="text-sm opacity-80">Monthly Orders</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold">30%</div>
                    <div className="text-sm opacity-80">
                      Average Sales Increase
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="rounded-2xl bg-primary-content p-8 text-primary shadow-2xl">
                  <div className="mb-6 text-center">
                    <DollarSign
                      className="mx-auto mb-4 text-primary"
                      size={48}
                    />
                    <h3 className="text-2xl font-bold">Earnings Calculator</h3>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span>Orders per day</span>
                      <span className="font-bold">50</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Average order value</span>
                      <span className="font-bold">R120</span>
                    </div>
                    <div className="divider"></div>
                    <div className="flex items-center justify-between text-lg font-bold">
                      <span>Monthly potential</span>
                      <span className="text-success">R180,000</span>
                    </div>
                  </div>

                  <button className="btn btn-primary mt-6 w-full">
                    <a
                      href="/partners/restaurant-registration"
                    >
                      Start Earning
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Restaurant Types */}
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-4xl font-bold">
                All Restaurant Types Welcome
              </h2>
              <p className="text-xl text-base-content/70">
                From street food to fine dining - we support every cuisine
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {restaurantTypes.map((type, index) => (
                <div
                  className="card bg-base-100 shadow-lg transition-shadow hover:shadow-xl"
                  key={index}
                >
                  <figure className="h-48">
                    <img
                      alt={type.name}
                      className="h-full w-full object-cover"
                      src={type.image}
                    />
                  </figure>
                  <div className="card-body">
                    <h3 className="card-title">{type.name}</h3>
                    <p className="text-base-content/70">{type.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="bg-base-100 py-16">
          <div className="mx-auto max-w-7xl px-4">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-4xl font-bold">How It Works</h2>
              <p className="text-xl text-base-content/70">
                Four simple steps to start growing your restaurant
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {steps.map((step, index) => (
                <div className="text-center" key={index}>
                  <div className="relative mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-primary text-primary-content">
                    <span className="text-2xl font-bold">{step.step}</span>
                    <div className="absolute -bottom-2 -right-2 rounded-full bg-base-100 p-2">
                      {step.icon}
                    </div>
                  </div>
                  <h3 className="mb-2 text-xl font-semibold">{step.title}</h3>
                  <p className="text-base-content/70">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-4xl font-bold">Why Partner With Us?</h2>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {features.map((feature, index) => (
                <div className="card bg-base-100 shadow-lg" key={index}>
                  <div className="card-body text-center">
                    <div className="mx-auto mb-4">{feature.icon}</div>
                    <h3 className="card-title justify-center">
                      {feature.title}
                    </h3>
                    <p className="text-base-content/70">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Success Stories */}
        <section className="bg-base-100 py-16">
          <div className="mx-auto max-w-7xl px-4">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-4xl font-bold">Success Stories</h2>
              <p className="text-xl text-base-content/70">
                Hear from our restaurant partners
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              <div className="card bg-base-200 shadow-lg">
                <div className="card-body">
                  <div className="mb-4 flex items-center gap-4">
                    <img
                      alt="Restaurant owner"
                      className="h-12 w-12 rounded-full"
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&crop=face"
                    />
                    <div>
                      <h4 className="font-semibold">Ahmed Hassan</h4>
                      <p className="text-sm text-base-content/70">
                        Spice Route Restaurant
                      </p>
                    </div>
                  </div>
                  <div className="mb-4 flex">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star
                        className="fill-current text-warning"
                        key={i}
                        size={16}
                      />
                    ))}
                  </div>
                  <p className="text-base-content/80">
                    Since joining Hareeng Eats, our sales increased by 40%. The
                    platform is easy to use and their support team is fantastic.
                  </p>
                </div>
              </div>

              <div className="card bg-base-200 shadow-lg">
                <div className="card-body">
                  <div className="mb-4 flex items-center gap-4">
                    <img
                      alt="Restaurant owner"
                      className="h-12 w-12 rounded-full"
                      src="https://images.unsplash.com/photo-1494790108755-2616b612b1ab?w=60&h=60&fit=crop&crop=face"
                    />
                    <div>
                      <h4 className="font-semibold">Sarah Johnson</h4>
                      <p className="text-sm text-base-content/70">
                        Mamas Kitchen
                      </p>
                    </div>
                  </div>
                  <div className="mb-4 flex">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star
                        className="fill-current text-warning"
                        key={i}
                        size={16}
                      />
                    ))}
                  </div>
                  <p className="text-base-content/80">
                    The delivery network is reliable and customers love the
                    convenience. We have reached customers we never could
                    before.
                  </p>
                </div>
              </div>

              <div className="card bg-base-200 shadow-lg">
                <div className="card-body">
                  <div className="mb-4 flex items-center gap-4">
                    <img
                      alt="Restaurant owner"
                      className="h-12 w-12 rounded-full"
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&h=60&fit=crop&crop=face"
                    />
                    <div>
                      <h4 className="font-semibold">David Chen</h4>
                      <p className="text-sm text-base-content/70">
                        Dragon Palace
                      </p>
                    </div>
                  </div>
                  <div className="mb-4 flex">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star
                        className="fill-current text-warning"
                        key={i}
                        size={16}
                      />
                    ))}
                  </div>
                  <p className="text-base-content/80">
                    The analytics help us understand our customers better. We
                    have optimized our menu based on the insights and sales have
                    soared.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="py-16">
          <div className="mx-auto max-w-4xl px-4">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-4xl font-bold">
                Simple, Transparent Pricing
              </h2>
              <p className="text-xl text-base-content/70">
                No hidden fees, no monthly charges
              </p>
            </div>

            <div className="card bg-base-100 shadow-2xl">
              <div className="card-body p-8">
                <div className="mb-8 text-center">
                  <div className="text-xl">Commission per order</div>
                  <div className="mt-2 text-base-content/70">
                    Only pay when you earn
                  </div>
                </div>

                <div className="grid gap-8 md:grid-cols-2">
                  <div>
                    <h3 className="mb-4 text-lg font-bold text-success">
                      ✓ What is Included
                    </h3>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <Shield className="text-success" size={16} />
                        <span>Free account setup</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Truck className="text-success" size={16} />
                        <span>Delivery network access</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <BarChart3 className="text-success" size={16} />
                        <span>Real-time analytics</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Users className="text-success" size={16} />
                        <span>Customer support 24/7</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="mb-4 text-lg font-bold">
                      Additional Services
                    </h3>
                    <ul className="space-y-2 text-base-content/70">
                      <li>• Professional food photography</li>
                      <li>• Menu optimization consulting</li>
                      <li>• Marketing campaigns</li>
                      <li>• Priority customer support</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
