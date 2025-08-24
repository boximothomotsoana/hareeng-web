import {
  AlertTriangle,
  Battery,
  CheckCircle,
  Eye,
  Gauge,
  HardHat,
  MapPin,
  Moon,
  Shield,
  Sun,
  Wind,
  Wrench,
  Zap,
} from "lucide-react";

import AppNavbar from "@/components/common/AppNavbar";
import Breadcrumbs from "@/components/common/Breadcrumbs";

export default function ScooterSafety() {
  const safetyGear = [
    {
      description:
        "Always wear a certified helmet. It's required by law and can save your life.",
      icon: <HardHat className="text-primary" size={32} />,
      required: true,
      title: "Helmet",
    },
    {
      description:
        "Wear safety glasses or goggles to protect your eyes from debris and wind.",
      icon: <Eye className="text-secondary" size={32} />,
      required: true,
      title: "Protective Eyewear",
    },
    {
      description:
        "High-visibility clothing makes you more visible to other road users.",
      icon: <Shield className="text-accent" size={32} />,
      required: false,
      title: "Reflective Clothing",
    },
    {
      description:
        "Knee and elbow pads provide extra protection in case of falls.",
      icon: <Shield className="text-primary" size={32} />,
      required: false,
      title: "Protective Padding",
    },
  ];

  const preRideChecks = [
    "Check battery level and charging status",
    "Inspect tires for proper inflation and wear",
    "Test brakes for proper function",
    "Ensure all lights are working",
    "Check for any loose bolts or parts",
    "Verify steering is smooth and responsive",
    "Clean the scooter if visibility is impaired",
    "Check weight limit compliance",
  ];

  const ridingTips = [
    {
      category: "Speed Management",
      tips: [
        "Start slowly and gradually increase speed",
        "Maintain a safe speed for conditions",
        "Slow down in crowded areas",
        "Never exceed the scooter's maximum speed",
      ],
    },
    {
      category: "Traffic Rules",
      tips: [
        "Follow all traffic laws and signals",
        "Use bike lanes where available",
        "Signal your intentions clearly",
        "Give way to pedestrians",
      ],
    },
    {
      category: "Weather Conditions",
      tips: [
        "Avoid riding in heavy rain or storms",
        "Reduce speed on wet surfaces",
        "Be extra cautious in windy conditions",
        "Ensure good visibility in all weather",
      ],
    },
    {
      category: "Parking & Security",
      tips: [
        "Park only in designated areas",
        "Lock the scooter when not in use",
        "Don't block pedestrian pathways",
        "Follow local parking regulations",
      ],
    },
  ];

  const maintenanceTips = [
    {
      description:
        "Charge regularly and avoid complete discharge. Store in cool, dry place.",
      icon: <Battery className="text-success" size={24} />,
      title: "Battery Care",
    },
    {
      description:
        "Check tire pressure weekly. Replace worn tires immediately.",
      icon: <Gauge className="text-warning" size={24} />,
      title: "Tire Maintenance",
    },
    {
      description:
        "Perform weekly safety checks and report any issues immediately.",
      icon: <Wrench className="text-info" size={24} />,
      title: "Regular Inspections",
    },
    {
      description:
        "Keep electrical components dry and report any electrical issues.",
      icon: <Zap className="text-error" size={24} />,
      title: "Electrical Systems",
    },
  ];

  const weatherConditions = [
    {
      condition: "Sunny/Clear",
      icon: <Sun className="text-warning" size={24} />,
      status: "Ideal",
      tips: "Perfect conditions for riding. Stay hydrated and use sunscreen.",
    },
    {
      condition: "Windy",
      icon: <Wind className="text-info" size={24} />,
      status: "Caution",
      tips: "Reduce speed and maintain firm grip. Be aware of crosswinds.",
    },
    {
      condition: "Light Rain",
      icon: <AlertTriangle className="text-warning" size={24} />,
      status: "High Risk",
      tips: "Avoid if possible. If necessary, ride very slowly and carefully.",
    },
    {
      condition: "Heavy Rain/Storm",
      icon: <Moon className="text-error" size={24} />,
      status: "Do Not Ride",
      tips: "Find shelter and wait for conditions to improve.",
    },
  ];

  return (
    <>
      <AppNavbar />
      <div className="min-h-screen bg-base-200 pt-16">
        <Breadcrumbs />

        {/* Hero Section - Theme Adaptive */}
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4">
            <div className="text-center">
              <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full">
                <Zap size={48} />
              </div>
              <h1 className="mb-4 text-4xl font-bold md:text-6xl">
                Scooter Safety
              </h1>
              <p className="mx-auto max-w-2xl text-xl opacity-90">
                Essential safety guidelines for electric scooter riders. Learn
                how to ride safely and maintain your scooter properly.
              </p>
            </div>
          </div>
        </section>
        {/* Safety Gear */}
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold text-primary md:text-4xl">
                Essential Safety Gear
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-base-content/70">
                Proper safety equipment is crucial for scooter safety
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {safetyGear.map((gear, index) => (
                <div
                  className={`card ${gear.required ? "border-2 border-error" : "border border-base-300"} bg-base-100 shadow-lg`}
                  key={index}
                >
                  <div className="card-body">
                    <div className="mb-4 flex items-center justify-between">
                      {gear.icon}
                      {gear.required && (
                        <div className="badge badge-error text-xs">
                          Required
                        </div>
                      )}
                    </div>
                    <h3 className="card-title text-lg">{gear.title}</h3>
                    <p className="text-sm text-base-content/70">
                      {gear.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pre-Ride Safety Checks */}
        <section className="bg-base-100 py-16">
          <div className="mx-auto max-w-7xl px-4">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold text-primary md:text-4xl">
                Pre-Ride Safety Checks
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-base-content/70">
                Perform these checks before every ride to ensure safety
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {preRideChecks.map((check, index) => (
                <div
                  className="flex items-start gap-3 rounded-lg bg-base-200 p-4"
                  key={index}
                >
                  <CheckCircle
                    className="mt-1 flex-shrink-0 text-success"
                    size={20}
                  />
                  <p className="text-base-content/80">{check}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Riding Guidelines */}
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold text-primary md:text-4xl">
                Safe Riding Guidelines
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-base-content/70">
                Follow these guidelines for a safe riding experience
              </p>
            </div>

            <div className="grid gap-8 lg:grid-cols-2">
              {ridingTips.map((category, index) => (
                <div className="card bg-base-100 shadow-lg" key={index}>
                  <div className="card-body">
                    <h3 className="card-title text-xl text-primary">
                      {category.category}
                    </h3>
                    <ul className="space-y-2">
                      {category.tips.map((tip, tipIndex) => (
                        <li className="flex items-start gap-2" key={tipIndex}>
                          <CheckCircle
                            className="mt-1 flex-shrink-0 text-success"
                            size={16}
                          />
                          <span className="text-sm text-base-content/80">
                            {tip}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Weather Conditions */}
        <section className="bg-base-100 py-16">
          <div className="mx-auto max-w-7xl px-4">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold text-primary md:text-4xl">
                Weather Safety Guide
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-base-content/70">
                Know when it is safe to ride and when to avoid scooters
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {weatherConditions.map((weather, index) => (
                <div className="card bg-base-100 shadow-lg" key={index}>
                  <div className="card-body">
                    <div className="mb-4 flex items-center justify-between">
                      {weather.icon}
                      <div
                        className={`badge ${
                          weather.status === "Ideal"
                            ? "badge-success"
                            : weather.status === "Caution"
                              ? "badge-warning"
                              : weather.status === "High Risk"
                                ? "badge-error"
                                : "badge-neutral"
                        }`}
                      >
                        {weather.status}
                      </div>
                    </div>
                    <h3 className="card-title text-lg">{weather.condition}</h3>
                    <p className="text-sm text-base-content/70">
                      {weather.tips}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Maintenance Guide */}
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold text-primary md:text-4xl">
                Scooter Maintenance
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-base-content/70">
                Keep your scooter in top condition for safety and performance
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {maintenanceTips.map((tip, index) => (
                <div className="card bg-base-100 shadow-lg" key={index}>
                  <div className="card-body">
                    <div className="mb-4">{tip.icon}</div>
                    <h3 className="card-title text-lg">{tip.title}</h3>
                    <p className="text-sm text-base-content/70">
                      {tip.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Emergency Information */}
        <section className="bg-error/10 py-16">
          <div className="mx-auto max-w-7xl px-4">
            <div className="text-center">
              <h2 className="mb-8 text-3xl font-bold text-error">
                Emergency Procedures
              </h2>

              <div className="grid gap-6 md:grid-cols-3">
                <div className="card bg-base-100 shadow-lg">
                  <div className="card-body text-center">
                    <AlertTriangle
                      className="mx-auto mb-4 text-error"
                      size={32}
                    />
                    <h3 className="card-title justify-center">
                      Accident Protocol
                    </h3>
                    <ul className="space-y-1 text-left text-sm">
                      <li>• Ensure personal safety first</li>
                      <li>• Move to safety if possible</li>
                      <li>• Call emergency services: 10111</li>
                      <li>• Report incident through app</li>
                    </ul>
                  </div>
                </div>

                <div className="card bg-base-100 shadow-lg">
                  <div className="card-body text-center">
                    <Wrench className="mx-auto mb-4 text-warning" size={32} />
                    <h3 className="card-title justify-center">
                      Mechanical Issues
                    </h3>
                    <ul className="space-y-1 text-left text-sm">
                      <li>• Stop riding immediately</li>
                      <li>• Move to safe location</li>
                      <li>• Report issue in app</li>
                      <li>• Use alternative transport</li>
                    </ul>
                  </div>
                </div>

                <div className="card bg-base-100 shadow-lg">
                  <div className="card-body text-center">
                    <Battery className="mx-auto mb-4 text-info" size={32} />
                    <h3 className="card-title justify-center">
                      Battery Depletion
                    </h3>
                    <ul className="space-y-1 text-left text-sm">
                      <li>• Check battery level regularly</li>
                      <li>• Plan route considering range</li>
                      <li>• Find nearest charging station</li>
                      <li>• Use manual mode if available</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <div className="alert alert-error">
                  <AlertTriangle size={24} />
                  <div>
                    <h3 className="font-bold">Emergency Contacts</h3>
                    <div className="text-sm">
                      Police: 10111 | Medical: 10177 | Hareeng Support:
                      0800-SCOOTER
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Legal Information */}
        <section className="bg-base-100 py-16">
          <div className="mx-auto max-w-7xl px-4">
            <div className="grid gap-8 lg:grid-cols-2">
              <div>
                <h2 className="mb-6 text-3xl font-bold text-primary">
                  Legal Requirements
                </h2>
                <div className="space-y-4">
                  <div className="alert alert-info">
                    <MapPin size={20} />
                    <div>
                      <h4 className="font-semibold">Age Requirement</h4>
                      <p className="text-sm">
                        Must be 16 years or older to ride electric scooters
                      </p>
                    </div>
                  </div>
                  <div className="alert alert-warning">
                    <HardHat size={20} />
                    <div>
                      <h4 className="font-semibold">Helmet Law</h4>
                      <p className="text-sm">
                        Helmets are mandatory for all scooter riders
                      </p>
                    </div>
                  </div>
                  <div className="alert alert-error">
                    <AlertTriangle size={20} />
                    <div>
                      <h4 className="font-semibold">Prohibited Areas</h4>
                      <p className="text-sm">
                        No riding on sidewalks or in certain pedestrian zones
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card bg-primary text-primary-content">
                <div className="card-body">
                  <h3 className="card-title">Safety Resources</h3>
                  <p>
                    Access additional safety resources and training materials:
                  </p>
                  <ul className="list-disc space-y-2 pl-6">
                    <li>Interactive safety training course</li>
                    <li>Video tutorials and demonstrations</li>
                    <li>Safety equipment purchasing guide</li>
                    <li>Local traffic law information</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
