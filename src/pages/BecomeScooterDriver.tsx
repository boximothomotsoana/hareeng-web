import {
  Battery,
  CheckCircle,
  Clock,
  DollarSign,
  Eye,
  Gauge,
  HardHat,
  Mail,
  Shield,
  Zap,
} from "lucide-react";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import AppNavbar from "@/components/common/AppNavbar";
import Breadcrumbs from "@/components/common/Breadcrumbs";
import { submitScooterDriverApplication } from "@/services/apiService";

export default function BecomeScooterDriver() {
  const [formData, setFormData] = useState({
    age: "",
    agreeToTerms: false,
    availability: "",
    city: "",
    email: "",
    experience: "",
    firstName: "",
    hasHelmet: false,
    hasLicense: false,
    hasScooter: false,
    lastName: "",
    phone: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, type, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const payload = {
      age: Number(formData.age),
      agreed_terms: formData.agreeToTerms,
      availability: formData.availability,
      city: formData.city,
      email: formData.email,
      first_name: formData.firstName,
      has_helmet: formData.hasHelmet,
      has_license: formData.hasLicense,
      has_scooter: formData.hasScooter,
      last_name: formData.lastName,
      phone_number: formData.phone,
      scooter_experience: formData.experience,
    };

    try {
      const result = await submitScooterDriverApplication(payload);
      if (result.success) {
        toast.success("Application submitted successfully!");
        setIsSubmitted(true);
      } else {
        const errorMsg =
          result.message ||
          result.error ||
          (result.errors && typeof result.errors === "string"
            ? result.errors
            : Array.isArray(result.errors)
              ? result.errors.join(", ")
              : "Submission failed. Please try again.");
        toast.error(errorMsg);
      }
    } catch (err: any) {
      if (err && err.message) {
        toast.error(err.message);
      } else {
        toast.error("Network error. Please try again.");
      }
    }
    setIsSubmitting(false);
  };

  const benefits = [
    {
      description: "Competitive rates with eco-friendly bonuses",
      icon: <DollarSign className="text-success" size={32} />,
      title: "Earn R2,800+/week",
    },
    {
      description: "Navigate traffic easily and work your hours",
      icon: <Clock className="text-primary" size={32} />,
      title: "Quick & Flexible",
    },
    {
      description: "Comprehensive safety training included",
      icon: <Shield className="text-secondary" size={32} />,
      title: "Safety First",
    },
    {
      description: "Help reduce carbon emissions",
      icon: <Battery className="text-accent" size={32} />,
      title: "Green Transport",
    },
  ];

  const requirements = [
    "Be at least 16 years old",
    "Valid South African ID",
    "Own or have access to an electric scooter",
    "Certified helmet (mandatory)",
    "Basic smartphone with internet",
    "Clean criminal background check",
  ];

  const cities = [
    "Cape Town",
    "Johannesburg",
    "Durban",
    "Pretoria",
    "Port Elizabeth",
    "Bloemfontein",
  ];

  const scooterSpecs = [
    {
      description: "Maximum 25 km/h on public roads",
      icon: <Gauge className="text-primary" size={24} />,
      title: "Speed Limit",
    },
    {
      description: "Minimum 25km range required",
      icon: <Battery className="text-success" size={24} />,
      title: "Battery Range",
    },
    {
      description: "Working lights and brakes essential",
      icon: <Shield className="text-secondary" size={24} />,
      title: "Safety Features",
    },
    {
      description: "Helmet and protective gear mandatory",
      icon: <HardHat className="text-warning" size={24} />,
      title: "Safety Gear",
    },
  ];

  if (isSubmitted) {
    return (
      <>
        <AppNavbar />
        <div className="min-h-screen bg-base-200 pt-16">
          <Breadcrumbs />
          <div className="flex items-center justify-center px-4 py-16">
            <div className="max-w-md text-center">
              <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-success/20">
                <CheckCircle className="text-success" size={40} />
              </div>
              <h1 className="mb-4 text-3xl font-bold text-success">
                Application Submitted!
              </h1>
              <p className="mb-6 text-base-content/70">
                Thank you for applying to become a Hareeng scooter driver. We
                will review your application and contact you within 2-3 business
                days.
              </p>
              <div className="space-y-3">
                <div className="alert alert-info">
                  <Mail size={20} />
                  <span>Check your email for safety training materials</span>
                </div>
                <div className="alert alert-warning">
                  <HardHat size={20} />
                  <span>Ensure you have certified safety equipment</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <AppNavbar />

      <div className="min-h-screen bg-base-200 pt-16">
        <Breadcrumbs />

        {/* Hero Section - Theme Adaptive */}
        <section className="relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-current"></div>
            <div className="absolute -bottom-32 -left-20 h-96 w-96 rounded-full bg-current"></div>
          </div>

          <div className="relative mx-auto max-w-7xl px-4 py-16 lg:py-24">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              {/* Left Content */}
              <div>
                <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-secondary-content/20 px-4 py-2 text-sm font-medium">
                  <Zap size={16} />
                  <span>Join 2,000+ Eco Drivers</span>
                </div>

                <h1 className="mb-6 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
                  Earn up to <span className="text-accent">R2,800</span> per
                  week with{" "}
                  <span className="text-primary">electric scooters</span>
                </h1>

                <p className="mb-8 text-xl opacity-90 lg:text-2xl">
                  Join the eco-friendly revolution! Become a Hareeng scooter
                  driver and earn while helping the environment.
                </p>

                {/* Benefits Grid */}
                <div className="grid gap-4 sm:grid-cols-2">
                  {benefits.map((benefit, index) => (
                    <div
                      className="flex items-center gap-3 rounded-lg bg-secondary-content/10 p-4 backdrop-blur"
                      key={index}
                    >
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary-content/20">
                        {benefit.icon}
                      </div>
                      <div>
                        <h3 className="font-semibold">{benefit.title}</h3>
                        <p className="text-sm opacity-80">
                          {benefit.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Form */}
              <div className="mx-auto w-full max-w-md">
                <div className="card bg-base-100 text-base-content shadow-2xl">
                  <div className="card-body p-6 md:p-8">
                    <h2 className="card-title mb-6 text-2xl">
                      Become a scooter driver
                    </h2>

                    <form className="space-y-4" onSubmit={handleSubmit}>
                      {/* Name Fields */}
                      <div className="grid gap-4 sm:grid-cols-2">
                        <div className="form-control">
                          <label className="label">
                            <span className="label-text font-medium">
                              First Name
                            </span>
                          </label>
                          <input
                            className="input input-bordered w-full"
                            name="firstName"
                            onChange={handleInputChange}
                            placeholder="Enter first name"
                            required
                            type="text"
                            value={formData.firstName}
                          />
                        </div>
                        <div className="form-control">
                          <label className="label">
                            <span className="label-text font-medium">
                              Last Name
                            </span>
                          </label>
                          <input
                            className="input input-bordered w-full"
                            name="lastName"
                            onChange={handleInputChange}
                            placeholder="Enter last name"
                            required
                            type="text"
                            value={formData.lastName}
                          />
                        </div>
                      </div>

                      {/* Age Field */}
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text font-medium">Age</span>
                        </label>
                        <input
                          className="input input-bordered w-full"
                          max="70"
                          min="16"
                          name="age"
                          onChange={handleInputChange}
                          placeholder="Your age"
                          required
                          type="number"
                          value={formData.age}
                        />
                        <div className="label">
                          <span className="label-text-alt">
                            Must be at least 16 years old
                          </span>
                        </div>
                      </div>

                      {/* Email Field */}
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text font-medium">Email</span>
                        </label>
                        <input
                          className="input input-bordered w-full"
                          name="email"
                          onChange={handleInputChange}
                          placeholder="Enter email address"
                          required
                          type="email"
                          value={formData.email}
                        />
                      </div>

                      {/* Phone Field */}
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text font-medium">
                            Phone number
                          </span>
                        </label>
                        <div className="flex gap-2">
                          <select className="select select-bordered w-20 flex-shrink-0">
                            <option>+27</option>
                          </select>
                          <input
                            className="input input-bordered flex-1"
                            name="phone"
                            onChange={handleInputChange}
                            placeholder="Mobile number"
                            required
                            type="tel"
                            value={formData.phone}
                          />
                        </div>
                      </div>

                      {/* City Field */}
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text font-medium">City</span>
                        </label>
                        <select
                          className="select select-bordered w-full"
                          name="city"
                          onChange={handleInputChange}
                          required
                          value={formData.city}
                        >
                          <option value="">Select your city</option>
                          {cities.map((city) => (
                            <option key={city} value={city}>
                              {city}
                            </option>
                          ))}
                        </select>
                      </div>

                      {/* Experience */}
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text font-medium">
                            Scooter Experience
                          </span>
                        </label>
                        <select
                          className="select select-bordered w-full"
                          name="experience"
                          onChange={handleInputChange}
                          required
                          value={formData.experience}
                        >
                          <option value="">Select experience level</option>
                          <option value="beginner">
                            Beginner (0-6 months)
                          </option>
                          <option value="intermediate">
                            Intermediate (6-12 months)
                          </option>
                          <option value="experienced">
                            Experienced (1+ years)
                          </option>
                        </select>
                      </div>

                      {/* Availability */}
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text font-medium">
                            Availability
                          </span>
                        </label>
                        <select
                          className="select select-bordered w-full"
                          name="availability"
                          onChange={handleInputChange}
                          required
                          value={formData.availability}
                        >
                          <option value="">Select availability</option>
                          <option value="full-time">
                            Full-time (40+ hours/week)
                          </option>
                          <option value="part-time">
                            Part-time (20-40 hours/week)
                          </option>
                          <option value="flexible">
                            Flexible (Less than 20 hours/week)
                          </option>
                          <option value="weekends">Weekends only</option>
                          <option value="evenings">Evenings only</option>
                        </select>
                      </div>

                      {/* Checkboxes */}
                      <div className="space-y-3">
                        <div className="form-control">
                          <label className="label cursor-pointer justify-start gap-3">
                            <input
                              checked={formData.hasScooter}
                              className="checkbox-primary checkbox"
                              name="hasScooter"
                              onChange={handleInputChange}
                              required
                              type="checkbox"
                            />
                            <span className="label-text">
                              I own or have access to an electric scooter
                            </span>
                          </label>
                        </div>

                        <div className="form-control">
                          <label className="label cursor-pointer justify-start gap-3">
                            <input
                              checked={formData.hasHelmet}
                              className="checkbox-primary checkbox"
                              name="hasHelmet"
                              onChange={handleInputChange}
                              required
                              type="checkbox"
                            />
                            <span className="label-text">
                              I have a certified safety helmet
                            </span>
                          </label>
                        </div>

                        <div className="form-control">
                          <label className="label cursor-pointer justify-start gap-3">
                            <input
                              checked={formData.hasLicense}
                              className="checkbox-primary checkbox"
                              name="hasLicense"
                              onChange={handleInputChange}
                              type="checkbox"
                            />
                            <span className="label-text">
                              I have a valid drivers license (optional for
                              scooters)
                            </span>
                          </label>
                        </div>

                        <div className="form-control">
                          <label className="label cursor-pointer justify-start gap-3">
                            <input
                              checked={formData.agreeToTerms}
                              className="checkbox-primary checkbox"
                              name="agreeToTerms"
                              onChange={handleInputChange}
                              required
                              type="checkbox"
                            />
                            <span className="label-text">
                              By registering, you agree to our{" "}
                              <a className="link link-primary" href="/terms">
                                Terms of Service
                              </a>{" "}
                              and{" "}
                              <a className="link link-primary" href="/privacy">
                                Privacy Policy
                              </a>
                            </span>
                          </label>
                        </div>
                      </div>

                      {/* Submit Button */}
                      <button
                        className="btn btn-primary w-full text-lg"
                        disabled={isSubmitting}
                        type="submit"
                      >
                        {isSubmitting ? (
                          <>
                            <span className="loading loading-spinner loading-sm"></span>
                            Processing...
                          </>
                        ) : (
                          "Register as scooter driver"
                        )}
                      </button>
                    </form>

                    <div className="divider">OR</div>

                    <p className="text-center text-sm">
                      Already have an account?{" "}
                      <a
                        className="link link-primary font-medium"
                        href="/login"
                      >
                        Log in →
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Scooter Specifications */}
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold text-primary">
                Scooter Requirements
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-base-content/70">
                Make sure your scooter meets these specifications
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {scooterSpecs.map((spec, index) => (
                <div className="card bg-base-100 shadow-lg" key={index}>
                  <div className="card-body">
                    <div className="mb-4">{spec.icon}</div>
                    <h3 className="card-title text-lg">{spec.title}</h3>
                    <p className="text-sm text-base-content/70">
                      {spec.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Requirements */}
        <section className="bg-base-100 py-16">
          <div className="mx-auto max-w-7xl px-4">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold text-primary">
                Driver Requirements
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-base-content/70">
                Basic requirements to become a scooter driver
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {requirements.map((requirement, index) => (
                <div
                  className="flex items-start gap-3 rounded-lg bg-base-200 p-4"
                  key={index}
                >
                  <CheckCircle
                    className="mt-1 flex-shrink-0 text-success"
                    size={20}
                  />
                  <span className="text-base-content/80">{requirement}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Safety First */}
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4">
            <div className="grid gap-8 lg:grid-cols-2">
              <div>
                <h2 className="mb-6 text-3xl font-bold text-primary">
                  Safety First
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <HardHat
                      className="mt-1 flex-shrink-0 text-warning"
                      size={20}
                    />
                    <div>
                      <h3 className="font-semibold">
                        Mandatory Safety Equipment
                      </h3>
                      <p className="text-sm text-base-content/70">
                        Certified helmet, reflective clothing, and proper
                        footwear required
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Eye className="mt-1 flex-shrink-0 text-info" size={20} />
                    <div>
                      <h3 className="font-semibold">Safety Training</h3>
                      <p className="text-sm text-base-content/70">
                        Complete our comprehensive safety course before starting
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Shield
                      className="mt-1 flex-shrink-0 text-success"
                      size={20}
                    />
                    <div>
                      <h3 className="font-semibold">Insurance Coverage</h3>
                      <p className="text-sm text-base-content/70">
                        Full insurance protection while on duty
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card bg-success text-success-content">
                <div className="card-body">
                  <h3 className="card-title">Environmental Impact</h3>
                  <div className="space-y-3">
                    <div className="stat">
                      <div className="stat-value text-2xl">0kg</div>
                      <div className="stat-title opacity-80">CO2 Emissions</div>
                    </div>
                    <div className="stat">
                      <div className="stat-value text-2xl">50%</div>
                      <div className="stat-title opacity-80">
                        Faster in Traffic
                      </div>
                    </div>
                    <div className="stat">
                      <div className="stat-value text-2xl">90%</div>
                      <div className="stat-title opacity-80">
                        Lower Operating Cost
                      </div>
                    </div>
                  </div>
                  <p className="mt-4 opacity-90">
                    Join the green revolution and help make our cities cleaner!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How it Works */}
        <section className="bg-base-100 py-16">
          <div className="mx-auto max-w-7xl px-4">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold text-primary">
                How it Works
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-base-content/70">
                Start earning in just a few simple steps
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-4">
              <div className="text-center">
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-xl font-bold text-primary-content">
                  1
                </div>
                <h3 className="mb-4 text-xl font-semibold">Apply Online</h3>
                <p className="text-base-content/70">
                  Fill out the application with your details and scooter info
                </p>
              </div>

              <div className="text-center">
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-secondary text-xl font-bold text-secondary-content">
                  2
                </div>
                <h3 className="mb-4 text-xl font-semibold">Safety Training</h3>
                <p className="text-base-content/70">
                  Complete online safety course and scooter inspection
                </p>
              </div>

              <div className="text-center">
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-accent text-xl font-bold text-accent-content">
                  3
                </div>
                <h3 className="mb-4 text-xl font-semibold">Get Approved</h3>
                <p className="text-base-content/70">
                  Background check and document verification
                </p>
              </div>

              <div className="text-center">
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-success text-xl font-bold text-success-content">
                  4
                </div>
                <h3 className="mb-4 text-xl font-semibold">Start Riding</h3>
                <p className="text-base-content/70">
                  Download the app and start accepting ride requests
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16">
          <div className="mx-auto max-w-4xl px-4 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              Ready to Go Green and Earn?
            </h2>
            <p className="mb-8 text-xl opacity-90">
              Join the eco-friendly transportation revolution today
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <button
                className="btn btn-primary btn-lg"
                onClick={() => window.scrollTo({ behavior: "smooth", top: 0 })}
              >
                Apply Now
              </button>
              <a className="btn btn-outline btn-lg" href="/safety/scooter-safety">
                Safety Guidelines
              </a>
            </div>
          </div>
        </section>

        <ToastContainer autoClose={5000} position="top-right" />
      </div>
    </>
  );
}
