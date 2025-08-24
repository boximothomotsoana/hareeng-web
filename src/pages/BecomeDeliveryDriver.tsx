import {
  Bike,
  Car,
  CheckCircle,
  Clock,
  DollarSign,
  Mail,
  Package,
  Phone,
  Shield,
  Truck,
  Users,
  Zap,
} from "lucide-react";
import { useState } from "react";
// Import react-toastify
import { toast, ToastContainer } from "react-toastify";

import AppNavbar from "@/components/common/AppNavbar";
import Breadcrumbs from "@/components/common/Breadcrumbs";
import "react-toastify/dist/ReactToastify.css";

// Import the API service
import { submitDeliveryDriverApplication } from "@/services/apiService";

export default function BecomeDeliveryDriver() {
  const [formData, setFormData] = useState({
    agreeToTerms: false,
    availability: "",
    city: "",
    deliveryType: "",
    email: "",
    firstName: "",
    hasLicense: false,
    hasVehicle: false,
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
      availability: formData.availability,
      city: formData.city,
      email: formData.email,
      first_name: formData.firstName,
      has_license: formData.hasLicense,
      has_vehicle: formData.hasVehicle,
      last_name: formData.lastName,
      phone_number: formData.phone,
      preferred_delivery_type: formData.deliveryType,
      vehicle_type: formData.vehicleType,
    };

    try {
      const result = await submitDeliveryDriverApplication(payload);
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
      description: "Competitive rates with performance bonuses",
      icon: <DollarSign className="text-success" size={32} />,
      title: "Earn R3,500+/week",
    },
    {
      description: "Choose your own working schedule",
      icon: <Clock className="text-primary" size={32} />,
      title: "Flexible Hours",
    },
    {
      description: "Comprehensive coverage for deliveries",
      icon: <Shield className="text-secondary" size={32} />,
      title: "Insurance Coverage",
    },
    {
      description: "24/7 driver support and assistance",
      icon: <Users className="text-accent" size={32} />,
      title: "Support Team",
    },
  ];

  const deliveryTypes = [
    {
      description: "Deliver meals from restaurants to customers",
      earnings: "R25-45 per delivery",
      icon: <Package className="text-orange-500" size={24} />,
      title: "Food Delivery",
      type: "food",
    },
    {
      description: "Shop and deliver groceries to customers",
      earnings: "R35-60 per delivery",
      icon: <Package className="text-green-500" size={24} />,
      title: "Grocery Delivery",
      type: "grocery",
    },
    {
      description: "Deliver packages and parcels across the city",
      earnings: "R20-35 per delivery",
      icon: <Package className="text-blue-500" size={24} />,
      title: "Package Delivery",
      type: "package",
    },
    {
      description: "Deliver medicines and health products",
      earnings: "R30-50 per delivery",
      icon: <Package className="text-red-500" size={24} />,
      title: "Pharmacy Delivery",
      type: "pharmacy",
    },
  ];

  const vehicleOptions = [
    {
      description: "Perfect for short-distance deliveries",
      icon: <Bike className="text-primary" size={32} />,
      requirements: "Must be in good condition",
      title: "Bicycle",
      type: "bicycle",
    },
    {
      description: "Fast delivery for medium distances",
      icon: <Zap className="text-secondary" size={32} />,
      requirements: "Valid motorcycle license required",
      title: "Scooter/Motorbike",
      type: "scooter",
    },
    {
      description: "Handle larger orders and longer distances",
      icon: <Car className="text-accent" size={32} />,
      requirements: "Valid driver's license required",
      title: "Car",
      type: "car",
    },
    {
      description: "Bulk deliveries and commercial orders",
      icon: <Truck className="text-warning" size={32} />,
      requirements: "Commercial license may be required",
      title: "Bakkie/Van",
      type: "bakkie",
    },
  ];

  const requirements = [
    "Be at least 18 years old",
    "Valid South African ID or work permit",
    "Own smartphone with internet access",
    "Valid driver's license (for motorized vehicles)",
    "Clean criminal background check",
    "Own delivery vehicle or bicycle",
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
        <div className="min-h-screen pt-16">
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
                Thank you for applying to become a Hareeng delivery driver. We
                will review your application and contact you within 2-3 business
                days.
              </p>
              <div className="space-y-3">
                <div className="alert alert-info">
                  <Mail size={20} />
                  <span>Check your email for onboarding details</span>
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
                <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-accent-content/20 px-4 py-2 text-sm font-medium">
                  <Package size={16} />
                  <span>Join 5,000+ Delivery Partners</span>
                </div>

                <h1 className="mb-6 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
                  Earn up to <span className="text-secondary">R3,500</span> per
                  week with <span className="text-primary">delivery</span>{" "}
                  services
                </h1>

                <p className="mb-8 text-xl opacity-90 lg:text-2xl">
                  Become a Hareeng delivery partner and earn money delivering
                  food, groceries, and packages!
                </p>

                {/* Benefits Grid */}
                <div className="grid gap-4 sm:grid-cols-2">
                  {benefits.map((benefit, index) => (
                    <div
                      className="flex items-center gap-3 rounded-lg bg-accent-content/10 p-4 backdrop-blur"
                      key={index}
                    >
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent-content/20">
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
                      Become a delivery driver
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

                      {/* Delivery Type */}
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text font-medium">
                            Preferred Delivery Type
                          </span>
                        </label>
                        <select
                          className="select select-bordered w-full"
                          name="deliveryType"
                          onChange={handleInputChange}
                          required
                          value={formData.deliveryType}
                        >
                          <option value="">Select delivery type</option>
                          <option value="food">Food Delivery</option>
                          <option value="grocery">Grocery Delivery</option>
                          <option value="package">Package Delivery</option>
                          <option value="pharmacy">Pharmacy Delivery</option>
                          <option value="all">All Types</option>
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
                          <option value="bicycle">Bicycle</option>
                          <option value="scooter">Scooter/Motorbike</option>
                          <option value="car">Car</option>
                          <option value="bakkie">Bakkie/Van</option>
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
                              checked={formData.hasVehicle}
                              className="checkbox-primary checkbox"
                              name="hasVehicle"
                              onChange={handleInputChange}
                              required
                              type="checkbox"
                            />
                            <span className="label-text">
                              I own or have access to a delivery vehicle
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
                              I have a valid drivers license (if applicable)
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
                          "Register as delivery driver"
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

        {/* Delivery Types */}
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold text-primary">
                Delivery Options
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-base-content/70">
                Choose the type of deliveries that work best for you
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {deliveryTypes.map((delivery, index) => (
                <div
                  className="card bg-base-100 shadow-lg transition-shadow hover:shadow-xl"
                  key={index}
                >
                  <div className="card-body">
                    <div className="mb-4 flex items-center justify-between">
                      {delivery.icon}
                      <div className="badge">
                        {delivery.earnings}
                      </div>
                    </div>
                    <h3 className="card-title text-lg">{delivery.title}</h3>
                    <p className="text-sm text-base-content/70">
                      {delivery.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Vehicle Options */}
        <section className="bg-base-100 py-16">
          <div className="mx-auto max-w-7xl px-4">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold text-primary">
                Vehicle Options
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-base-content/70">
                Use any of these vehicles to start delivering
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {vehicleOptions.map((vehicle, index) => (
                <div className="card bg-base-200 shadow-lg" key={index}>
                  <div className="card-body text-center">
                    <div className="mx-auto mb-4">{vehicle.icon}</div>
                    <h3 className="card-title justify-center text-lg">
                      {vehicle.title}
                    </h3>
                    <p className="mb-2 text-sm text-base-content/70">
                      {vehicle.description}
                    </p>
                    <p className="text-xs text-base-content/60">
                      {vehicle.requirements}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Requirements */}
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold text-primary">
                Requirements
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-base-content/70">
                Basic requirements to become a delivery driver
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {requirements.map((requirement, index) => (
                <div
                  className="flex items-start gap-3 rounded-lg bg-base-100 p-4"
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
                  Fill out the application form with your details
                </p>
              </div>

              <div className="text-center">
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-secondary text-xl font-bold text-secondary-content">
                  2
                </div>
                <h3 className="mb-4 text-xl font-semibold">Get Verified</h3>
                <p className="text-base-content/70">
                  Complete background check and document verification
                </p>
              </div>

              <div className="text-center">
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-accent text-xl font-bold text-accent-content">
                  3
                </div>
                <h3 className="mb-4 text-xl font-semibold">Download App</h3>
                <p className="text-base-content/70">
                  Get the delivery driver app and complete training
                </p>
              </div>

              <div className="text-center">
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-success text-xl font-bold text-success-content">
                  4
                </div>
                <h3 className="mb-4 text-xl font-semibold">Start Delivering</h3>
                <p className="text-base-content/70">
                  Go online and start accepting delivery requests
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16">
          <div className="mx-auto max-w-4xl px-4 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              Ready to Start Delivering?
            </h2>
            <p className="mb-8 text-xl opacity-90">
              Join thousands of delivery partners already earning with Hareeng
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <button
                className="btn btn-primary btn-lg"
                onClick={() => window.scrollTo({ behavior: "smooth", top: 0 })}
              >
                Apply Now
              </button>
            </div>
          </div>
        </section>
        <ToastContainer autoClose={5000} position="top-right" />
      </div>
    </>
  );
}
