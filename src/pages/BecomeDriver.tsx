import {
  Car,
  CheckCircle,
  Clock,
  DollarSign,
  Mail,
  MapPin,
  Phone,
  Shield,
  Users,
} from "lucide-react";
import { useState } from "react";
// Add react-toastify imports
import { toast, ToastContainer } from "react-toastify";

import AppNavbar from "@/components/common/AppNavbar";
import Breadcrumbs from "@/components/common/Breadcrumbs";
import { submitDriverApplication } from "@/services/apiService";
import "react-toastify/dist/ReactToastify.css";

export default function BecomeDriver() {
  const [formData, setFormData] = useState({
    agreeToTerms: false,
    city: "",
    email: "",
    firstName: "",
    hasLicense: false,
    lastName: "",
    phone: "",
    vehicleType: "",
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
      agreed_terms: formData.agreeToTerms,
      city: formData.city,
      email: formData.email,
      first_name: formData.firstName,
      has_license: formData.hasLicense,
      last_name: formData.lastName,
      phone_number: formData.phone,
      vehicle_type: formData.vehicleType,
    };

    try {
      const result = await submitDriverApplication(payload);
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
      description: "Flexible earning potential with weekly payouts",
      icon: <DollarSign className="text-success" size={32} />,
      title: "Earn R4,500+/week",
    },
    {
      description: "Drive when you want, where you want",
      icon: <Clock className="text-primary" size={32} />,
      title: "Flexible Schedule",
    },
    {
      description: "Comprehensive coverage while driving",
      icon: <Shield className="text-secondary" size={32} />,
      title: "Insurance Coverage",
    },
    {
      description: "Round-the-clock driver assistance",
      icon: <Users className="text-accent" size={32} />,
      title: "24/7 Support",
    },
  ];

  const requirements = [
    "Valid South African driver's license",
    "Vehicle registration documents",
    "Professional driving permit (PrDP)",
    "Clean criminal background check",
    "Vehicle older than 10 years",
    "Comprehensive vehicle insurance",
  ];

  const cities = [
    "Cape Town",
    "Johannesburg",
    "Durban",
    "Pretoria",
    "Port Elizabeth",
    "Bloemfontein",
    "East London",
    "Pietermaritzburg",
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
                Thank you for your interest in becoming a Hareeng driver. We
                shall review your application and contact you within 2-3
                business days.
              </p>
              <div className="space-y-3">
                <div className="alert alert-info">
                  <Mail size={20} />
                  <span>Check your email for next steps</span>
                </div>
                <div className="alert alert-warning">
                  <Phone size={20} />
                  <span>Keep your phone ready for our call</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ToastContainer autoClose={5000} position="top-right" />
      </>
    );
  }

  return (
    <>
      <AppNavbar />

      <div className="min-h-screen bg-base-200 pt-16">
        <Breadcrumbs />

        {/* Hero Section */}
        <section className="relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full"></div>
            <div className="absolute -bottom-32 -left-20 h-96 w-96 rounded-full"></div>
          </div>

          <div className="relative mx-auto max-w-7xl px-4 py-16 lg:py-24">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              {/* Left Content */}
              <div className="">
                <div className="mb-6 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium">
                  <Car size={16} />
                  <span>Join 10,000+ Drivers</span>
                </div>

                <h1 className="mb-6 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
                  Earn up to <span className="text-blue-500">R6,500</span> per
                  week by <span className="text-blue-500">driving</span> with
                  Hareeng
                </h1>

                <p className="mb-8 text-xl opacity-90 lg:text-2xl">
                  Become a Hareeng driver, set your schedule and earn money by
                  driving!
                </p>

                {/* Benefits Grid */}
                <div className="grid gap-4 sm:grid-cols-2">
                  {benefits.map((benefit, index) => (
                    <div
                      className="flex items-center gap-3 rounded-lg bg-white/10 p-4 backdrop-blur"
                      key={index}
                    >
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20">
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
                <div className="card bg-base-100 shadow-2xl">
                  <div className="card-body p-6 md:p-8">
                    <h2 className="card-title mb-6 text-2xl">
                      Become a driver
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
                          <select className="w-30 select select-bordered flex-shrink-0">
                            <option>+27</option>
                            <option>+266</option>
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

                      {/* Vehicle Type */}
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text font-medium">
                            Vehicle Type
                          </span>
                        </label>
                        <select
                          className="select select-bordered w-full"
                          name="vehicleType"
                          onChange={handleInputChange}
                          required
                          value={formData.vehicleType}
                        >
                          <option value="">Select vehicle type</option>
                          <option value="sedan">Sedan</option>
                          <option value="hatchback">Hatchback</option>
                          <option value="suv">SUV</option>
                          <option value="bakkie">Bakkie</option>
                        </select>
                      </div>

                      {/* Checkboxes */}
                      <div className="space-y-3">
                        <div className="form-control">
                          <label className="label cursor-pointer justify-start gap-3">
                            <input
                              checked={formData.hasLicense}
                              className="checkbox-primary checkbox"
                              name="hasLicense"
                              onChange={handleInputChange}
                              required
                              type="checkbox"
                            />
                            <span className="label-text">
                              I have a valid drivers license and PrDP
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
                          "Register as a driver"
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

                    <p className="text-center text-sm">
                      If you have multiple vehicles and drivers,{" "}
                      <a
                        className="link link-secondary font-medium"
                        href="/fleet-registration"
                      >
                        register as a Fleet Owner →
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Requirements Section */}
        <section className="bg-base-100 py-16">
          <div className="mx-auto max-w-7xl px-4">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold text-primary">
                Driver Requirements
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-base-content/70">
                Make sure you meet these requirements before applying
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

            <div className="mt-12 text-center">
              <div className="alert alert-info inline-flex">
                <MapPin size={20} />
                <span>
                  Currently available in: Cape Town, Johannesburg, Durban,
                  Pretoria, and 4 more cities
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* How it Works */}
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold text-primary">
                How it Works
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-base-content/70">
                Start earning in just a few simple steps
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              <div className="text-center">
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-xl font-bold text-white">
                  1
                </div>
                <h3 className="mb-4 text-xl font-semibold">Apply Online</h3>
                <p className="text-base-content/70">
                  Fill out the application form with your details and documents
                </p>
              </div>

              <div className="text-center">
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-secondary text-xl font-bold text-white">
                  2
                </div>
                <h3 className="mb-4 text-xl font-semibold">Get Approved</h3>
                <p className="text-base-content/70">
                  We shall review your application and verify your documents
                </p>
              </div>

              <div className="text-center">
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-accent text-xl font-bold text-white">
                  3
                </div>
                <h3 className="mb-4 text-xl font-semibold">Start Earning</h3>
                <p className="text-base-content/70">
                  Download the driver app and start accepting ride requests
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16">
          <div className="mx-auto max-w-4xl px-4 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              Ready to Start Earning?
            </h2>
            <p className="mb-8 text-xl opacity-90">
              Join thousands of drivers already earning with Hareeng
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <button
                className="btn btn-secondary btn-lg"
                onClick={() => window.scrollTo({ behavior: "smooth", top: 0 })}
              >
                Apply Now
              </button>
              <a className="btn btn-outline btn-lg" href="/safety/rider-safety">
                Learn More
              </a>
            </div>
          </div>
        </section>
      </div>
      {/* Toast notifications container */}
      <ToastContainer autoClose={5000} position="top-right" />
    </>
  );
}
