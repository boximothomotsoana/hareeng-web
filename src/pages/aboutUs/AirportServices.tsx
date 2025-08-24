import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Car,
  CheckCircle,
  Clock,
  CreditCard,
  DollarSign,
  Luggage,
  Navigation,
  Phone,
  Plane,
  Shield,
  Star,
  Users,
} from "lucide-react";

import AppNavbar from "@/components/common/AppNavbar";
import Breadcrumbs from "@/components/common/Breadcrumbs";

export default function AirportServices() {
  const navigate = useNavigate();
  const [showQR, setShowQR] = useState(false);

  const airports = [
    {
      avgTime: "15-25 min",
      city: "Johannesburg",
      code: "JNB",
      features: [
        "24/7 Service",
        "Priority Pickup",
        "Fixed Pricing",
        "Meet & Greet",
      ],
      image:
        "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=600&h=400&fit=crop&crop=center",
      name: "O.R. Tambo International Airport",
      pricing: {
        to_midrand: "R140-180",
        to_rosebank: "R160-200",
        to_sandton: "R180-220",
      },
      zones: ["Terminal A", "Terminal B", "International"],
    },
    {
      avgTime: "20-30 min",
      city: "Cape Town",
      code: "CPT",
      features: [
        "Ocean Views",
        "Fixed Routes",
        "Luggage Assistance",
        "Pre-booking",
      ],
      image:
        "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=600&h=400&fit=crop&crop=center",
      name: "Cape Town International Airport",
      pricing: {
        to_camps_bay: "R140-170",
        to_city_center: "R100-130",
        to_waterfront: "R120-150",
      },
      zones: ["Domestic", "International"],
    },
    {
      avgTime: "25-35 min",
      city: "Durban",
      code: "DUR",
      features: [
        "Coastal Access",
        "Business Routes",
        "Group Bookings",
        "Express Service",
      ],
      image:
        "https://images.unsplash.com/photo-1570710891163-6d3b5c47248b?w=600&h=400&fit=crop&crop=center",
      name: "King Shaka International Airport",
      pricing: {
        to_city_center: "R200-240",
        to_gateway: "R160-190",
        to_umhlanga: "R180-220",
      },
      zones: ["Terminal", "Car Rental Area"],
    },
  ];

  const vehicleTypes = [
    {
      capacity: "1-4 passengers",
      description: "Affordable rides for solo travelers or couples",
      features: ["Budget-friendly", "Quick pickup", "Standard vehicles"],
      icon: <Car className="text-primary" size={32} />,
      luggage: "2 standard bags",
      name: "Hareeng Go",
    },
    {
      capacity: "1-4 passengers",
      description: "Premium vehicles with extra space and comfort",
      features: ["Premium vehicles", "Extra legroom", "Professional drivers"],
      icon: <Star className="text-secondary" size={32} />,
      luggage: "3-4 bags",
      name: "Hareeng Comfort",
    },
    {
      capacity: "1-6 passengers",
      description: "Spacious vehicles for groups and families",
      features: ["Group travel", "Extra luggage space", "Family-friendly"],
      icon: <Users className="text-accent" size={32} />,
      luggage: "5-6 bags",
      name: "Hareeng XL",
    },
  ];

  const features = [
    {
      description: "Airport pickups and drop-offs available around the clock",
      icon: <Clock className="text-primary" size={32} />,
      title: "24/7 Availability",
    },
    {
      description: "No surge pricing - know your fare before you book",
      icon: <Shield className="text-success" size={32} />,
      title: "Fixed Pricing",
    },
    {
      description: "Track your driver from pickup to destination",
      icon: <Navigation className="text-info" size={32} />,
      title: "Real-time Tracking",
    },
    {
      description: "Drivers help with loading and unloading your bags",
      icon: <Luggage className="text-warning" size={32} />,
      title: "Luggage Assistance",
    },
  ];

  const bookingSteps = [
    {
      description: "Choose your departure or arrival airport",
      icon: <Plane className="text-primary" size={24} />,
      step: "1",
      title: "Select Airport Service",
    },
    {
      description: "Add your flight number for accurate timing",
      icon: <Clock className="text-secondary" size={24} />,
      step: "2",
      title: "Enter Flight Details",
    },
    {
      description: "Select based on your group size and luggage",
      icon: <Car className="text-accent" size={24} />,
      step: "3",
      title: "Choose Vehicle Type",
    },
    {
      description: "Complete booking with upfront pricing",
      icon: <CreditCard className="text-success" size={24} />,
      step: "4",
      title: "Confirm & Pay",
    },
  ];

  const tips = [
    "Allow extra time during peak travel seasons",
    "Add your flight number for automatic delay tracking",
    "Meet your driver at the designated pickup area",
    "Keep your phone charged for driver communication",
    "Have your booking reference ready",
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
              alt="Airport terminal"
              className="h-full w-full object-cover"
              src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1200&h=600&fit=crop&crop=center"
            />
          </div>

          <div className="relative mx-auto max-w-7xl px-4 py-24">
            <div className="max-w-4xl">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-info-content/20 px-4 py-2">
                <Plane size={20} />
                <span className="font-medium">Serving 3 Major Airports</span>
              </div>

              <h1 className="mb-6 text-5xl font-bold leading-tight lg:text-6xl">
                Reliable airport transfers{" "}
                <span className="text-primary">you can count on</span>
              </h1>

              <p className="mb-8 text-xl leading-relaxed opacity-90">
                Start or end your journey stress-free with Hareeng s dedicated
                airport service. Fixed pricing, professional drivers, and 24/7
                availability across Africas busiest airports.
              </p>

              <div className="flex flex-col gap-4 sm:flex-row">
                <button
                  className="btn btn-primary btn-lg"
                  onClick={() => setShowQR(true)}
                >
                  <Plane size={20} />
                  Book Airport Ride
                </button>
                <button
                  className="btn btn-outline btn-lg"
                  onClick={() => {
                    document
                      .getElementById("airport-locations")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  <span className="flex items-center gap-2">
                    <DollarSign size={20} />
                    View Pricing
                  </span>
                </button>
              </div>

              <div className="mt-8 grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold">3</div>
                  <div className="text-sm opacity-80">Major Airports</div>
                </div>
                <div>
                  <div className="text-2xl font-bold">24/7</div>
                  <div className="text-sm opacity-80">Service Available</div>
                </div>
                <div>
                  <div className="text-2xl font-bold">15min</div>
                  <div className="text-sm opacity-80">Average Pickup</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* QR Code Popup */}
        {showQR && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/40"
            onClick={() => setShowQR(false)}
          >
            <div
              className={`rounded-2xl shadow-2xl p-8 bg-base-100 dark:bg-base-300 text-base-content relative`}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-4 right-4 btn btn-sm btn-circle btn-ghost"
                onClick={() => setShowQR(false)}
                aria-label="Close"
              >
                ✕
              </button>
              <h3 className="mb-4 text-2xl font-bold text-center">
                Download Hareeng App
              </h3>
              <div className="flex flex-col items-center gap-4">
                <img
                  src="https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=https://hareeng.com/app"
                  alt="QR code to download Hareeng app"
                  className="rounded-lg border border-base-300 bg-base-200"
                />
                <div className="text-center text-base-content/70">
                  Scan to download the app for airport rides.
                  <br />
                  <a
                    href="https://hareeng.com/app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link link-primary"
                  >
                    Or tap here to download
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Airport Locations */}
        <section id="airport-locations" className="py-16">
          <div className="mx-auto max-w-7xl px-4">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-4xl font-bold">Airport Locations</h2>
              <p className="text-xl text-base-content/70">
                Convenient pickups and drop-offs at major South African airports
              </p>
            </div>

            <div className="grid gap-8 lg:grid-cols-3">
              {airports.map((airport, index) => (
                <div className="card bg-base-100 shadow-xl" key={index}>
                  <figure className="h-48">
                    <img
                      alt={airport.name}
                      className="h-full w-full object-cover"
                      src={airport.image}
                    />
                  </figure>

                  <div className="card-body">
                    <div className="mb-2 flex items-center justify-between">
                      <h3 className="card-title">{airport.name}</h3>
                      <span className="badge">{airport.code}</span>
                    </div>

                    <p className="mb-4 text-base-content/70">
                      {airport.city} • Avg pickup: {airport.avgTime}
                    </p>

                    <div className="mb-4">
                      <h4 className="mb-2 font-semibold">Features:</h4>
                      <div className="flex flex-wrap gap-1">
                        {airport.features.map((feature, fIndex) => (
                          <span
                            className="badge badge-sm"
                            key={fIndex}
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mb-4">
                      <h4 className="mb-2 font-semibold">Pickup Zones:</h4>
                      <p className="text-sm text-base-content/70">
                        {airport.zones.join(" • ")}
                      </p>
                    </div>

                    <div className="mb-4">
                      <h4 className="mb-2 font-semibold">Popular Routes:</h4>
                      <div className="space-y-1 text-sm">
                        {Object.entries(airport.pricing).map(
                          ([destination, price]) => (
                            <div
                              className="flex justify-between"
                              key={destination}
                            >
                              <span>
                                {destination
                                  .replace(/_/g, " ")
                                  .replace(/\b\w/g, (l) => l.toUpperCase())}
                              </span>
                              <span className="font-semibold text-primary">
                                {price}
                              </span>
                            </div>
                          ),
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Vehicle Types */}
        <section className="bg-base-100 py-16">
          <div className="mx-auto max-w-7xl px-4">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-4xl font-bold">Choose Your Ride</h2>
              <p className="text-xl text-base-content/70">
                Select the perfect vehicle for your airport transfer
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              {vehicleTypes.map((vehicle, index) => (
                <div className="card bg-base-200 shadow-lg" key={index}>
                  <div className="card-body text-center">
                    <div className="mx-auto mb-4">{vehicle.icon}</div>
                    <h3 className="card-title justify-center">
                      {vehicle.name}
                    </h3>
                    <p className="mb-4 text-base-content/80">
                      {vehicle.description}
                    </p>

                    <div className="mb-4 space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span>Capacity:</span>
                        <span className="font-semibold">
                          {vehicle.capacity}
                        </span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span>Luggage:</span>
                        <span className="font-semibold">{vehicle.luggage}</span>
                      </div>
                    </div>

                    <div className="text-left">
                      <h4 className="mb-2 text-sm font-semibold">Features:</h4>
                      <ul className="space-y-1 text-xs">
                        {vehicle.features.map((feature, fIndex) => (
                          <li className="flex items-center gap-2" key={fIndex}>
                            <CheckCircle className="text-success" size={12} />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-4xl font-bold">
                Why Choose Hareeng for Airports?
              </h2>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {features.map((feature, index) => (
                <div className="text-center" key={index}>
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-base-100 shadow-lg">
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

        {/* How to Book */}
        <section className="bg-base-100 py-16">
          <div className="mx-auto max-w-7xl px-4">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-4xl font-bold">How to Book</h2>
              <p className="text-xl text-base-content/70">
                Simple steps to secure your airport transfer
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {bookingSteps.map((step, index) => (
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

        {/* Pricing Calculator */}
        {/* <section className="py-16">
          <div className="mx-auto max-w-4xl px-4">
            <div className="card bg-base-100 shadow-2xl">
              <div className="card-body">
                <h2 className="card-title mb-6 justify-center text-2xl">
                  Estimate Your Fare
                </h2>

                <div className="grid gap-4 md:grid-cols-2">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">From</span>
                    </label>
                    <select className="select select-bordered">
                      <option>Select Airport</option>
                      <option>O.R. Tambo (JNB)</option>
                      <option>Cape Town (CPT)</option>
                      <option>King Shaka (DUR)</option>
                    </select>
                  </div>

                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">To</span>
                    </label>
                    <input
                      className="input input-bordered"
                      placeholder="Enter destination"
                      type="text"
                    />
                  </div>

                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Vehicle Type</span>
                    </label>
                    <select className="select select-bordered">
                      <option>Hareeng Go</option>
                      <option>Hareeng Comfort</option>
                      <option>Hareeng XL</option>
                    </select>
                  </div>

                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Date & Time</span>
                    </label>
                    <input
                      className="input input-bordered"
                      type="datetime-local"
                    />
                  </div>
                </div>

                <div className="card-actions mt-6">
                  <button className="btn btn-primary w-full">
                    Get Fare Estimate
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section> */}

        {/* Travel Tips */}
        <section className="bg-base-100 py-16">
          <div className="mx-auto max-w-7xl px-4">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div>
                <h2 className="mb-6 text-4xl font-bold">Airport Travel Tips</h2>
                <p className="mb-6 text-lg text-base-content/70">
                  Make your airport transfer smooth and stress-free with these
                  helpful tips.
                </p>

                <ul className="space-y-3">
                  {tips.map((tip, index) => (
                    <li className="flex items-start gap-3" key={index}>
                      <CheckCircle
                        className="mt-1 flex-shrink-0 text-success"
                        size={16}
                      />
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="relative">
                <div className="card border border-primary/20 bg-primary/10">
                  <div className="card-body">
                    <h3 className="card-title mb-4 text-primary">Need Help?</h3>
                    <p className="mb-4">
                      Our airport support team is available 24/7 to assist with
                      your booking and any travel questions.
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center gap-3">
                        <Phone className="text-primary" size={16} />
                        <span className="font-semibold">+27 11 123 4567</span>
                      </div>
                      <div className="text-sm text-base-content/70">
                        Airport Support Hotline
                      </div>
                    </div>
                    <div className="card-actions mt-4">
                      <button
                        className="btn btn-primary btn-sm"
                        onClick={() => navigate("/contact-us")}
                      >
                        Contact Us
                      </button>
                    </div>
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
