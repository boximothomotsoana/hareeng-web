import {
  AlertTriangle,
  Car,
  CheckCircle,
  Clock,
  Eye,
  Heart,
  Lock,
  MapPin,
  Phone,
  Shield,
  Star,
  Users,
} from "lucide-react";

import AppNavbar from "@/components/common/AppNavbar";
import Breadcrumbs from "@/components/common/Breadcrumbs";

export default function RiderSafety() {
  const safetyFeatures = [
    {
      description:
        "All drivers undergo comprehensive background checks and identity verification before joining our platform.",
      icon: <Shield className="text-primary" size={32} />,
      title: "Identity Verification",
    },
    {
      description:
        "Share your trip details with trusted contacts and track your journey in real-time.",
      icon: <MapPin className="text-secondary" size={32} />,
      title: "Real-time Tracking",
    },
    {
      description:
        "One-tap emergency assistance connects you directly to local emergency services.",
      icon: <Phone className="text-accent" size={32} />,
      title: "Emergency Button",
    },
    {
      description:
        "Our safety team is available around the clock to assist with any concerns.",
      icon: <Users className="text-primary" size={32} />,
      title: "24/7 Support",
    },
    {
      description:
        "Rate your driver and read reviews from other riders to make informed choices.",
      icon: <Star className="text-secondary" size={32} />,
      title: "Driver Ratings",
    },
    {
      description:
        "Cashless transactions protect both riders and drivers with encrypted payment processing.",
      icon: <Lock className="text-accent" size={32} />,
      title: "Secure Payments",
    },
  ];

  const safetyTips = [
    "Verify the driver's photo, name, and vehicle details before getting in",
    "Always wear your seatbelt during the ride",
    "Sit in the back seat when riding alone",
    "Share your trip details with friends or family",
    "Trust your instincts - if something feels wrong, end the trip",
    "Keep your phone charged and accessible",
    "Avoid sharing personal information with drivers",
    "Check that the license plate matches the app before getting in",
    "Stay alert and avoid falling asleep during rides",
    "Use the in-app messaging feature instead of sharing your phone number",
  ];

  const emergencySteps = [
    {
      description:
        "Tap the emergency button in the app to alert our safety team and emergency services.",
      step: "1",
      title: "Use Emergency Button",
    },
    {
      description:
        "Dial 10111 (Police) or 10177 (Medical) for immediate assistance in South Africa.",
      step: "2",
      title: "Call Emergency Services",
    },
    {
      description:
        "Send your live location to trusted contacts using the app's sharing feature.",
      step: "3",
      title: "Share Location",
    },
    {
      description:
        "Remain calm and follow instructions from emergency responders or our safety team.",
      step: "4",
      title: "Stay Calm",
    },
  ];

  return (
    <>
      <AppNavbar />
      <div className="min-h-screen bg-base-200 pt-16">
        <Breadcrumbs />

        {/* Hero Section */}
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4">
            <div className="text-center">
              <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-white/20">
                <Shield size={48} />
              </div>
              <h1 className="mb-4 text-4xl font-bold md:text-6xl">
                Rider Safety
              </h1>
              <p className="mx-auto max-w-2xl text-xl opacity-90">
                Your safety is our top priority. Learn about our comprehensive
                safety features and best practices for a secure ride experience.
              </p>
            </div>
          </div>
        </section>

        {/* Safety Features */}
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold text-primary md:text-4xl">
                Safety Features
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-base-content/70">
                Advanced technology and rigorous processes designed to keep you
                safe
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {safetyFeatures.map((feature, index) => (
                <div className="card bg-base-100 shadow-lg" key={index}>
                  <div className="card-body">
                    <div className="mb-4">{feature.icon}</div>
                    <h3 className="card-title text-xl">{feature.title}</h3>
                    <p className="text-base-content/70">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Safety Tips */}
        <section className="bg-base-100 py-16">
          <div className="mx-auto max-w-7xl px-4">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold text-primary md:text-4xl">
                Safety Tips for Riders
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-base-content/70">
                Follow these guidelines to ensure a safe and secure ride
                experience
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {safetyTips.map((tip, index) => (
                <div
                  className="flex items-start gap-3 rounded-lg bg-base-200 p-4"
                  key={index}
                >
                  <CheckCircle
                    className="mt-1 flex-shrink-0 text-success"
                    size={20}
                  />
                  <p className="text-base-content/80">{tip}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Emergency Procedures */}
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold text-primary md:text-4xl">
                Emergency Procedures
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-base-content/70">
                Know what to do in case of an emergency during your ride
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {emergencySteps.map((step, index) => (
                <div
                  className="card border border-error/20 bg-error/10"
                  key={index}
                >
                  <div className="card-body text-center">
                    <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-error text-xl font-bold text-white">
                      {step.step}
                    </div>
                    <h3 className="card-title justify-center text-lg">
                      {step.title}
                    </h3>
                    <p className="text-sm text-base-content/70">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <div className="alert alert-warning">
                <AlertTriangle size={24} />
                <div>
                  <h3 className="font-bold">
                    Emergency Contacts in South Africa
                  </h3>
                  <div className="text-sm">
                    Police: 10111 | Medical Emergency: 10177 | Fire: 10177
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Community Guidelines */}
        <section className="bg-base-100 py-16">
          <div className="mx-auto max-w-7xl px-4">
            <div className="grid gap-8 lg:grid-cols-2">
              <div>
                <h2 className="mb-6 text-3xl font-bold text-primary">
                  Community Guidelines
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Heart
                      className="mt-1 flex-shrink-0 text-error"
                      size={20}
                    />
                    <div>
                      <h3 className="font-semibold">Respect Everyone</h3>
                      <p className="text-sm text-base-content/70">
                        Treat drivers and fellow riders with kindness and
                        respect
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Car
                      className="mt-1 flex-shrink-0 text-primary"
                      size={20}
                    />
                    <div>
                      <h3 className="font-semibold">Vehicle Care</h3>
                      <p className="text-sm text-base-content/70">
                        Keep vehicles clean and report any damages immediately
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock
                      className="mt-1 flex-shrink-0 text-secondary"
                      size={20}
                    />
                    <div>
                      <h3 className="font-semibold">Be Punctual</h3>
                      <p className="text-sm text-base-content/70">
                        Be ready at your pickup location and respect drivers
                        time
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card bg-primary text-primary-content">
                <div className="card-body">
                  <h3 className="card-title">Report Safety Concerns</h3>
                  <p>
                    If you experience or witness any safety issues, report them
                    immediately through:
                  </p>
                  <ul className="list-disc space-y-2 pl-6">
                    <li>In-app safety center</li>
                    <li>24/7 safety hotline: 0800-SAFETY</li>
                    <li>Email: safety@hareeng.com</li>
                    <li>Emergency button during rides</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Additional Resources */}
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4">
            <div className="text-center">
              <h2 className="mb-8 text-3xl font-bold text-primary">
                Additional Resources
              </h2>
              <div className="grid gap-6 md:grid-cols-3">
                <div className="card bg-base-100 shadow-lg">
                  <div className="card-body text-center">
                    <Eye className="mx-auto mb-4 text-primary" size={32} />
                    <h3 className="card-title justify-center">Safety Lab</h3>
                    <p className="text-base-content/70">
                      Learn about our latest safety innovations and research
                    </p>
                  </div>
                </div>

                <div className="card bg-base-100 shadow-lg">
                  <div className="card-body text-center">
                    <Users className="mx-auto mb-4 text-secondary" size={32} />
                    <h3 className="card-title justify-center">
                      Safety Training
                    </h3>
                    <p className="text-base-content/70">
                      Access safety training materials and educational content
                    </p>
                  </div>
                </div>

                <div className="card bg-base-100 shadow-lg">
                  <div className="card-body text-center">
                    <Phone className="mx-auto mb-4 text-accent" size={32} />
                    <h3 className="card-title justify-center">
                      Safety Support
                    </h3>
                    <p className="text-base-content/70">
                      Get help with safety questions and concerns
                    </p>
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
