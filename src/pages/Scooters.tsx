import {
  Battery,
  Clock,
  DollarSign,
  HardHat,
  Leaf,
  MapPin,
  Shield,
  Smartphone,
  Zap,
} from "lucide-react";
import { QRCodeCanvas } from "qrcode.react";
import { useEffect, useState } from "react";

import AppNavbar from "@/components/common/AppNavbar";
import Breadcrumbs from "@/components/common/Breadcrumbs";

export default function Scooters() {
  const steps = [
    {
      description: "Use the app to locate nearby scooters",
      icon: <Smartphone className="text-primary" size={32} />,
      step: "1",
      title: "Find a Scooter",
    },
    {
      description: "Unlock instantly with your phone",
      icon: <Zap className="text-secondary" size={32} />,
      step: "2",
      title: "Scan QR Code",
    },
    {
      description: "Wear helmet and follow traffic rules",
      icon: <HardHat className="text-accent" size={32} />,
      step: "3",
      title: "Ride Safely",
    },
    {
      description: "End ride at any designated parking spot",
      icon: <MapPin className="text-success" size={32} />,
      step: "4",
      title: "Park & Go",
    },
  ];

  const benefits = [
    {
      description: "Zero emissions, helping make cities cleaner",
      icon: <Leaf className="text-success" size={32} />,
      title: "100% Electric",
    },
    {
      description: "Starting at just R5 + R2.50/minute",
      icon: <DollarSign className="text-primary" size={32} />,
      title: "Affordable",
    },
    {
      description: "Skip traffic jams and get there faster",
      icon: <Clock className="text-warning" size={32} />,
      title: "Beat Traffic",
    },
    {
      description: "Our team ensures scooters are always ready",
      icon: <Battery className="text-info" size={32} />,
      title: "Always Charged",
    },
  ];

  const [showQR, setShowQR] = useState(false);
  const appDownloadUrl = "https://your-app-download-link.com"; // Replace with your actual app link

  // Theme adaptive QR colors
  const [isDark, setIsDark] = useState(
    document.documentElement.classList.contains("dark"),
  );

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains("dark"));
    });
    observer.observe(document.documentElement, {
      attributeFilter: ["class"],
      attributes: true,
    });
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <AppNavbar />

      <div className="min-h-screen bg-base-200 pt-16">
        <Breadcrumbs />

        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 opacity-30">
            <img
              alt="Electric scooter in city"
              className="h-full w-full object-cover"
              src="https://ix-marketing.imgix.net/autotagging.png?auto=format,compress&w=1446?w=1200&h=600&fit=crop&crop=center"
            />
          </div>

          <div className="relative mx-auto max-w-7xl px-4 py-24">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div>
                <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-success-content/20 px-4 py-2">
                  <Leaf size={20} />
                  <span className="font-medium">
                    100% Electric • Zero Emissions
                  </span>
                </div>

                <h1 className="mb-6 text-5xl font-bold leading-tight lg:text-6xl">
                  Zip around the city with{" "}
                  <span className="text-primary">electric scooters</span>
                </h1>

                <p className="mb-8 text-xl opacity-90">
                  Fast, fun, and eco-friendly. Perfect for short trips, beating
                  traffic, and reducing your carbon footprint.
                </p>

                <div className="flex flex-col gap-4 sm:flex-row">
                  <button
                    className="btn btn-primary btn-lg"
                    onClick={() =>
                      (window.location.href = "https://hareengeats.com")
                    }
                  >
                    Order Food Now
                  </button>
                  <button
                    className="btn btn-outline btn-lg"
                    onClick={() => setShowQR(true)}
                  >
                    Download App
                  </button>
                </div>
              </div>

              <div className="relative">
                <div className="rounded-2xl p-8 shadow-2xl"
                  style={{
                    backgroundColor: isDark ? "#1e293b" : "#e6f9f0",
                    color: isDark ? "#22c55e" : "#059669"
                  }}
                >
                  <div className="mb-6 text-center">
                    <Zap className="mx-auto mb-4" size={48} style={{ color: isDark ? "#22c55e" : "#059669" }} />
                    <h3 className="text-2xl font-bold">Start Your Ride</h3>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span>Unlock Fee</span>
                      <span className="font-bold">R5.00</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Per Minute</span>
                      <span className="font-bold">R2.50</span>
                    </div>
                    <div className="divider" style={{ background: isDark ? "#334155" : "#bbf7d0" }}></div>
                    <div className="flex items-center justify-between text-lg font-bold">
                      <span>10 min ride</span>
                      <span>R30.00</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-4xl font-bold">How It Works</h2>
              <p className="text-xl text-base-content/70">
                Four simple steps to start scooting
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

        {/* Scooter Image Gallery */}
        <section className="bg-base-100 py-16">
          <div className="mx-auto max-w-7xl px-4">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-4xl font-bold">Our Fleet</h2>
              <p className="text-xl text-base-content/70">
                Modern, safe, and reliable electric scooters
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              <div className="card bg-base-200 shadow-lg">
                <figure className="h-48">
                  <img
                    alt="Electric scooter"
                    className="h-full w-full object-cover"
                    src="https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=400&h=300&fit=crop&crop=center"
                  />
                </figure>
                <div className="card-body">
                  <h3 className="card-title">City Cruiser</h3>
                  <p>Perfect for urban commuting with 25km range</p>
                  <div className="flex items-center gap-2 text-sm">
                    <Battery className="text-success" size={16} />
                    <span>Long lasting battery</span>
                  </div>
                </div>
              </div>

              <div className="card bg-base-200 shadow-lg">
                <figure className="h-48">
                  <img
                    alt="Electric scooter night"
                    className="h-full w-full object-cover"
                    src="https://images.unsplash.com/photo-1558618522-fbd2c2618db6?w=400&h=300&fit=crop&crop=center"
                  />
                </figure>
                <div className="card-body">
                  <h3 className="card-title">Night Rider</h3>
                  <p>LED lights for safe nighttime riding</p>
                  <div className="flex items-center gap-2 text-sm">
                    <Shield className="text-warning" size={16} />
                    <span>Enhanced safety features</span>
                  </div>
                </div>
              </div>

              <div className="card bg-base-200 shadow-lg">
                <figure className="h-48">
                  <img
                    alt="Electric scooter park"
                    className="h-full w-full object-cover"
                    src="https://images.unsplash.com/photo-1558618597-7c7795a1e5fb?w=400&h=300&fit=crop&crop=center"
                  />
                </figure>
                <div className="card-body">
                  <h3 className="card-title">Park Explorer</h3>
                  <p>Comfortable rides for leisure and exploration</p>
                  <div className="flex items-center gap-2 text-sm">
                    <Leaf className="text-success" size={16} />
                    <span>Eco-friendly transport</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-4xl font-bold">
                Why Choose Electric Scooters?
              </h2>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {benefits.map((benefit, index) => (
                <div className="card bg-base-100 shadow-lg" key={index}>
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
          </div>
        </section>

        {/* Safety Section */}
        <section className="bg-warning/10 py-16">
          <div className="mx-auto max-w-7xl px-4">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div>
                <h2 className="mb-6 text-4xl font-bold">Safety First</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <HardHat className="mt-1 text-warning" size={24} />
                    <div>
                      <h3 className="font-semibold">Always Wear a Helmet</h3>
                      <p className="text-base-content/70">
                        Helmets are provided with every scooter
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Shield className="mt-1 text-success" size={24} />
                    <div>
                      <h3 className="font-semibold">Follow Traffic Rules</h3>
                      <p className="text-base-content/70">
                        Ride in bike lanes and respect pedestrians
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="mt-1 text-primary" size={24} />
                    <div>
                      <h3 className="font-semibold">Park Responsibly</h3>
                      <p className="text-base-content/70">
                        Use designated parking areas only
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl bg-base-100 p-8 shadow-xl">
                <img
                  alt="Safe scooter riding"
                  className="h-64 w-full rounded-lg object-cover"
                  src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=500&h=400&fit=crop&crop=center"
                />
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16">
          <div className="mx-auto max-w-4xl px-4 text-center">
            <h2 className="mb-4 text-4xl font-bold">Start Scooting Today!</h2>
            <p className="mb-8 text-xl opacity-90">
              Join thousands of riders choosing sustainable transport
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <button
                className="btn btn-primary btn-lg"
                onClick={() => setShowQR(true)}
              >
                <Zap size={20} />
                Download the App
              </button>
              <a
                className="btn btn-outline btn-lg"
                href="/driver/scooter-driver-signup"
              >
                Become a Driver
              </a>
            </div>
          </div>
        </section>

        {showQR && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
            <div className="relative flex w-[340px] flex-col items-center rounded-2xl bg-white p-10 text-center shadow-2xl sm:w-[400px] dark:bg-base-200">
              <button
                aria-label="Close"
                className="absolute right-6 top-6 text-3xl font-bold text-gray-500 transition-colors hover:text-primary dark:text-gray-300"
                onClick={() => setShowQR(false)}
                style={{ lineHeight: 1 }}
              >
                ×
              </button>
              <h3 className="mb-6 text-2xl font-bold text-primary dark:text-accent">
                Scan to Download Our App
              </h3>
              <div className="mb-6 flex items-center justify-center">
                <QRCodeCanvas
                  bgColor={isDark ? "#1e293b" : "#ffffff"}
                  fgColor={isDark ? "#f3f4f6" : "#1f2937"}
                  size={220}
                  style={{
                    background: isDark ? "#1e293b" : "#fff",
                    borderRadius: "16px",
                    boxShadow: "0 2px 16px rgba(0,0,0,0.08)",
                    padding: "12px",
                  }}
                  value={appDownloadUrl}
                />
              </div>
              <p className="text-base text-gray-600 dark:text-gray-300">
                Scan this QR code with your phone to download the app.
              </p>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
