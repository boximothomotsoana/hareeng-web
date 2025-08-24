import {
  Car,
  CheckCircle,
  ChevronLeft,
  ChevronRight,
  Clock,
  DollarSign,
  MapPin,
  Shield,
  Star,
  Users,
} from "lucide-react";
import { QRCodeCanvas } from "qrcode.react";
import { useState } from "react";
import React from "react";

import appPreview from "@/assets/images/onboarding1.png";
import AppNavbar from "@/components/common/AppNavbar";
import Breadcrumbs from "@/components/common/Breadcrumbs";

export default function Rides() {
  const rideTypes = [
    {
      description: "Affordable rides for everyday trips",
      features: ["Budget-friendly", "Quick pickup", "Reliable drivers"],
      icon: <Car className="text-primary" size={32} />,
      image:
        "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&h=300&fit=crop&crop=center",
      name: "Hareeng Go",
      price: "From R12",
    },
    {
      description: "Premium cars for a comfortable experience",
      features: ["Premium vehicles", "Top-rated drivers", "Extra legroom"],
      icon: <Star className="text-secondary" size={32} />,
      image:
        "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=400&h=300&fit=crop&crop=center",
      name: "Hareeng Comfort",
      price: "From R18",
    },
    {
      description: "Spacious rides for groups up to 6 people",
      features: ["6+ passengers", "Extra luggage space", "Family-friendly"],
      icon: <Users className="text-accent" size={32} />,
      image:
        "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=400&h=300&fit=crop&crop=center",
      name: "Hareeng XL",
      price: "From R25",
    },
  ];

  const features = [
    {
      description: "Average pickup time under 5 minutes",
      icon: <Clock className="text-primary" size={32} />,
      title: "Quick Pickup",
    },
    {
      description: "All drivers background-checked and insured",
      icon: <Shield className="text-success" size={32} />,
      title: "Safe & Secure",
    },
    {
      description: "No surprises - see your fare before you book",
      icon: <DollarSign className="text-warning" size={32} />,
      title: "Upfront Pricing",
    },
    {
      description: "Quality drivers with 4.8+ star ratings",
      icon: <Star className="text-info" size={32} />,
      title: "Rated Drivers",
    },
  ];

  const [showQR, setShowQR] = useState(false);
  const appDownloadUrl = "https://your-app-download-link.com"; // Replace with your actual app link

  // Slider state
  const [slideIndex, setSlideIndex] = useState(0);

  // Responsive items per view
  const getItemsPerView = () => {
    if (window.innerWidth < 640) return 1; // mobile
    if (window.innerWidth < 1024) return 2; // tablet
    return 3; // desktop
  };

  const [itemsPerView, setItemsPerView] = useState(getItemsPerView());

  // Update itemsPerView on resize
  React.useEffect(() => {
    const handleResize = () => setItemsPerView(getItemsPerView());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = Math.max(0, rideTypes.length - itemsPerView);

  const handlePrev = () => setSlideIndex((i) => Math.max(i - 1, 0));
  const handleNext = () => setSlideIndex((i) => Math.min(i + 1, maxIndex));

  return (
    <>
      <AppNavbar />

      <div className="min-h-screen bg-base-200 pt-16">
        <Breadcrumbs />

        {/* Hero Section */}
        <section className="relative overflow-hidden bg-primary text-primary-content">
          <div className="absolute inset-0 opacity-20">
            <img
              alt="City rides"
              className="h-full w-full object-cover"
              src="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1200&h=600&fit=crop&crop=center"
            />
          </div>

          <div className="relative mx-auto max-w-7xl px-4 py-24">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div>
                <h1 className="mb-6 text-5xl font-bold leading-tight lg:text-6xl">
                  Get there with <span className="text-accent">Hareeng</span>
                </h1>
                <p className="mb-8 text-xl opacity-90">
                  Safe, reliable rides at your fingertips. Choose from multiple
                  ride options to fit your needs and budget.
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

                {showQR && (
                  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
                    <div className="relative flex w-[340px] flex-col items-center rounded-2xl bg-white p-10 text-center shadow-2xl sm:w-[400px]">
                      <button
                        aria-label="Close"
                        className="absolute right-6 top-6 text-3xl font-bold text-gray-500 transition-colors hover:text-primary"
                        onClick={() => setShowQR(false)}
                        style={{ lineHeight: 1 }}
                      >
                        ×
                      </button>
                      <h3 className="mb-6 text-2xl font-bold text-primary">
                        Scan to Download Our App
                      </h3>
                      <div className="mb-6 flex items-center justify-center">
                        <QRCodeCanvas
                          bgColor="#ffffff"
                          fgColor="#1f2937"
                          size={220}
                          style={{
                            background: "#fff",
                            borderRadius: "16px",
                            boxShadow: "0 2px 16px rgba(0,0,0,0.08)",
                            padding: "12px",
                          }}
                          value={appDownloadUrl}
                        />
                      </div>
                      <p className="text-base text-gray-600">
                        Scan this QR code with your phone to download the app.
                      </p>
                    </div>
                  </div>
                )}

                <div className="mt-8 grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold">50K+</div>
                    <div className="text-sm opacity-80">Daily Rides</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold">4.8★</div>
                    <div className="text-sm opacity-80">Average Rating</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold">24/7</div>
                    <div className="text-sm opacity-80">Available</div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="flex flex-col items-center rounded-2xl bg-base-100 p-6 shadow-2xl">
                  <img
                    alt="Hareeng App Preview"
                    className="mb-6 h-48 w-48 object-contain"
                    src={appPreview}
                  />
                  <h3 className="mb-2 text-xl font-bold text-base-content">
                    Get the Hareeng App
                  </h3>
                  <p className="mb-4 text-center text-base-content/70">
                    Book rides, track drivers, and more. Download now for the
                    best experience!
                  </p>
                  <div className="flex gap-3">
                    <a
                      aria-label="Download on App Store"
                      className="btn btn-primary"
                      href="https://apps.apple.com/app/idYOUR_APP_ID"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      App Store
                    </a>
                    <a
                      aria-label="Get it on Google Play"
                      className="btn btn-secondary"
                      href="https://play.google.com/store/apps/details?id=YOUR_PACKAGE_NAME"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      Google Play
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Ride Types */}
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-4xl font-bold">Choose Your Ride</h2>
              <p className="text-xl text-base-content/70">
                Different options for different needs
              </p>
            </div>

            <div className="relative">
              <div
                className="flex gap-8 transition-all duration-300"
                style={{
                  minHeight: 400,
                }}
              >
                {rideTypes
                  .slice(slideIndex, slideIndex + itemsPerView)
                  .map((ride, index) => (
                    <div
                      className="card min-w-0 flex-1 bg-base-100 shadow-xl transition-shadow hover:shadow-2xl"
                      key={ride.name}
                      style={{
                        maxWidth:
                          itemsPerView === 1
                            ? "100%"
                            : itemsPerView === 2
                              ? "50%"
                              : "33.3333%",
                      }}
                    >
                      <figure className="relative h-48">
                        <img
                          alt={ride.name}
                          className="h-full w-full object-cover"
                          src={ride.image}
                        />
                        <div className="absolute left-4 top-4 rounded-full bg-base-100 p-2">
                          {ride.icon}
                        </div>
                      </figure>

                      <div className="card-body">
                        <div className="flex items-center justify-between">
                          <h3 className="card-title text-xl">{ride.name}</h3>
                          <span className="text-lg font-bold text-primary">
                            {ride.price}
                          </span>
                        </div>

                        <p className="text-base-content/70">
                          {ride.description}
                        </p>

                        <div className="mt-4 space-y-2">
                          {ride.features.map((feature, idx) => (
                            <div className="flex items-center gap-2" key={idx}>
                              <CheckCircle className="text-success" size={16} />
                              <span className="text-sm">{feature}</span>
                            </div>
                          ))}
                        </div>
                        {/* Removed select button */}
                      </div>
                    </div>
                  ))}
              </div>
              <div className="mt-8 flex justify-center gap-4">
                <button
                  aria-label="Previous"
                  className="btn btn-outline flex items-center gap-2"
                  disabled={slideIndex === 0}
                  onClick={handlePrev}
                >
                  <ChevronLeft size={20} />
                  <span className="hidden sm:inline">Back</span>
                </button>
                <button
                  aria-label="Next"
                  className="btn btn-outline flex items-center gap-2"
                  disabled={slideIndex === maxIndex}
                  onClick={handleNext}
                >
                  <span className="hidden sm:inline">Next</span>
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="bg-base-100 py-16">
          <div className="mx-auto max-w-7xl px-4">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-4xl font-bold">Why Choose Hareeng?</h2>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {features.map((feature, index) => (
                <div className="text-center" key={index}>
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-base-200">
                    {feature.icon}
                  </div>
                  <h3 className="mb-2 text-xl font-semibold">
                    {feature.title}
                  </h3>
                  <p className="text-base-content/70">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* App Promotion */}
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-4xl font-bold">
                Download the Hareeng App
              </h2>
              <p className="text-xl text-base-content/70">
                Book rides, track drivers, and manage your trips seamlessly.
              </p>
            </div>

            <div className="relative">
              <div className="flex flex-col items-center rounded-2xl bg-base-100 p-6 shadow-2xl">
                <img
                  alt="Hareeng App Preview"
                  className="mb-6 h-48 w-48 object-contain"
                  src={appPreview}
                />
                <h3 className="mb-2 text-xl font-bold text-base-content">
                  Get the Hareeng App
                </h3>
                <p className="mb-4 text-center text-base-content/70">
                  Book rides, track drivers, and more. Download now for the best
                  experience!
                </p>
                <div className="flex gap-3">
                  <a
                    aria-label="Download on App Store"
                    className="btn btn-primary"
                    href="https://apps.apple.com/app/idYOUR_APP_ID"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    App Store
                  </a>
                  <a
                    aria-label="Get it on Google Play"
                    className="btn btn-secondary"
                    href="https://play.google.com/store/apps/details?id=YOUR_PACKAGE_NAME"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Google Play
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
