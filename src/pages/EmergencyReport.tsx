import {
  AlertTriangle,
  Camera,
  Car,
  CheckCircle,
  Clock,
  FileText,
  Phone,
  Shield,
  Zap,
} from "lucide-react";
import { useState } from "react";

import AppNavbar from "@/components/common/AppNavbar";
import Breadcrumbs from "@/components/common/Breadcrumbs";
import { submitEmergencyReport } from "@/services/apiService";

export default function EmergencyReport() {
  const [formData, setFormData] = useState({
    attachments: null as FileList | null,
    contactNumber: "",
    description: "",
    driverName: "",
    emergencyType: "",
    isImmediate: false,
    location: "",
    tripId: "",
    vehiclePlate: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [apiError, setApiError] = useState<null | string>(null);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    const { name, type, value } = e.target;
    if (type === "file") {
      const fileInput = e.target as HTMLInputElement;
      setFormData((prev) => ({
        ...prev,
        [name]: fileInput.files,
      }));
    } else if (type === "checkbox") {
      const checkbox = e.target as HTMLInputElement;
      setFormData((prev) => ({
        ...prev,
        [name]: checkbox.checked,
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setApiError(null);

    try {
      const result = await submitEmergencyReport(formData);
      if (result.success) {
        setIsSubmitted(true);
      } else {
        setApiError(result.message || "Failed to submit emergency report.");
      }
    } catch (error: any) {
      setApiError(error?.message || "Failed to submit emergency report.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const emergencyTypes = [
    {
      icon: <Car size={20} />,
      label: "Traffic Accident",
      severity: "critical",
      value: "accident",
    },
    {
      icon: <AlertTriangle size={20} />,
      label: "Medical Emergency",
      severity: "critical",
      value: "medical",
    },
    {
      icon: <Shield size={20} />,
      label: "Harassment/Assault",
      severity: "critical",
      value: "harassment",
    },
    {
      icon: <AlertTriangle size={20} />,
      label: "Unsafe Driving",
      severity: "high",
      value: "unsafe-driving",
    },
    {
      icon: <Car size={20} />,
      label: "Vehicle Breakdown",
      severity: "medium",
      value: "vehicle-breakdown",
    },
    {
      icon: <Shield size={20} />,
      label: "Theft/Robbery",
      severity: "critical",
      value: "theft",
    },
    {
      icon: <FileText size={20} />,
      label: "Lost Important Item",
      severity: "low",
      value: "lost-item",
    },
    {
      icon: <AlertTriangle size={20} />,
      label: "Other Emergency",
      severity: "medium",
      value: "other",
    },
  ];

  const emergencyContacts = [
    {
      color: "text-error",
      description: "For crimes, accidents, and immediate danger",
      number: "10111",
      service: "Police",
    },
    {
      color: "text-warning",
      description: "For medical emergencies",
      number: "10177",
      service: "Ambulance",
    },
    {
      color: "text-error",
      description: "For fires and rescue operations",
      number: "107",
      service: "Fire Department",
    },
    {
      color: "text-primary",
      description: "24/7 Hareeng safety support",
      number: "0800-EMERGENCY",
      service: "Hareeng Emergency",
    },
  ];

  if (isSubmitted) {
    return (
      <>
        <AppNavbar />
        <div className="min-h-screen bg-base-200 pt-16">
          <Breadcrumbs />
          <div className="flex items-center justify-center px-4 py-16">
            <div className="max-w-lg text-center">
              <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-success/20">
                <CheckCircle className="text-success" size={40} />
              </div>
              <h1 className="mb-4 text-3xl font-bold text-success">
                Emergency Report Submitted!
              </h1>
              <p className="mb-6 text-base-content/70">
                Your emergency report has been received and is being processed
                immediately. Our safety team will contact you shortly.
              </p>
              <div className="space-y-3">
                <div className="alert alert-error">
                  <AlertTriangle size={20} />
                  <div>
                    <h4 className="font-semibold">Immediate Danger?</h4>
                    <p className="text-sm">
                      Call 10111 (Police) or 10177 (Medical)
                    </p>
                  </div>
                </div>
                <div className="alert alert-info">
                  <Phone size={20} />
                  <div>
                    <h4 className="font-semibold">Emergency ID</h4>
                    <p className="text-sm">
                      ER{Math.floor(Math.random() * 100000)}
                    </p>
                  </div>
                </div>
                <div className="alert alert-warning">
                  <Clock size={20} />
                  <div>
                    <h4 className="font-semibold">Response Time</h4>
                    <p className="text-sm">
                      Our team will contact you within 15 minutes
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-6 space-y-2">
                <button
                  className="btn btn-primary w-full"
                  onClick={() => window.location.reload()}
                >
                  Report Another Emergency
                </button>
                <a className="btn btn-error w-full" href="tel:0800424737464">
                  Call Emergency Hotline
                </a>
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

        {/* Emergency Alert Banner */}
        <div className="bg-error py-4 text-error-content">
          <div className="mx-auto max-w-7xl px-4">
            <div className="flex items-center justify-center gap-4 text-center">
              <AlertTriangle size={24} />
              <div>
                <h2 className="font-bold">IMMEDIATE DANGER?</h2>
                <p className="text-sm">
                  Call 10111 (Police) or 10177 (Medical Emergency) immediately
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <section className="bg-warning py-16 text-warning-content">
          <div className="mx-auto max-w-7xl px-4">
            <div className="text-center">
              <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-warning-content/20">
                <Zap size={48} />
              </div>
              <h1 className="mb-4 text-4xl font-bold md:text-6xl">
                Emergency Report
              </h1>
              <p className="mx-auto max-w-2xl text-xl opacity-90">
                Report emergencies or urgent safety concerns. Our team responds
                to all emergency reports immediately.
              </p>
            </div>
          </div>
        </section>

        {/* Emergency Contacts */}
        <section className="bg-base-100 py-12">
          <div className="mx-auto max-w-7xl px-4">
            <h2 className="mb-8 text-center text-2xl font-bold">
              Emergency Contacts
            </h2>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {emergencyContacts.map((contact, index) => (
                <div className="card bg-base-200 shadow-lg" key={index}>
                  <div className="card-body text-center">
                    <Phone
                      className={`mx-auto mb-2 ${contact.color}`}
                      size={24}
                    />
                    <h3 className="card-title justify-center text-lg">
                      {contact.service}
                    </h3>
                    <p className={`text-2xl font-bold ${contact.color} mb-2`}>
                      {contact.number}
                    </p>
                    <p className="text-sm text-base-content/70">
                      {contact.description}
                    </p>
                    <div className="card-actions mt-4 justify-center">
                      <a
                        className="btn btn-outline btn-sm"
                        href={`tel:${contact.number.replace(/\D/g, "")}`}
                      >
                        Call Now
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Emergency Report Form */}
        <section className="py-16">
          <div className="mx-auto max-w-4xl px-4">
            <div className="card bg-base-100 shadow-2xl">
              <div className="card-body p-8">
                <div className="mb-6 text-center">
                  <h2 className="card-title mb-2 justify-center text-3xl">
                    Submit Emergency Report
                  </h2>
                  <p className="text-base-content/70">
                    Fill out this form for non-immediate emergencies or to
                    document incidents
                  </p>
                </div>

                <form className="space-y-6" onSubmit={handleSubmit}>
                  {/* Emergency Type */}
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text text-lg font-medium">
                        Type of Emergency
                      </span>
                    </label>
                    <div className="grid gap-3 sm:grid-cols-2">
                      {emergencyTypes.map((type) => (
                        <label
                          className={`label cursor-pointer justify-start gap-3 rounded-lg border p-4 hover:bg-base-200 ${
                            type.severity === "critical"
                              ? "border-error"
                              : type.severity === "high"
                                ? "border-warning"
                                : type.severity === "medium"
                                  ? "border-info"
                                  : "border-success"
                          }`}
                          key={type.value}
                        >
                          <input
                            className={`radio ${
                              type.severity === "critical"
                                ? "radio-error"
                                : type.severity === "high"
                                  ? "radio-warning"
                                  : type.severity === "medium"
                                    ? "radio-info"
                                    : "radio-success"
                            }`}
                            name="emergencyType"
                            onChange={handleInputChange}
                            required
                            type="radio"
                            value={type.value}
                          />
                          <div className="flex items-center gap-2">
                            {type.icon}
                            <span className="label-text">{type.label}</span>
                          </div>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Immediate Emergency Checkbox */}
                  <div className="form-control">
                    <label className="label cursor-pointer justify-start gap-3 rounded-lg border-2 border-error bg-error/10 p-4">
                      <input
                        checked={formData.isImmediate}
                        className="checkbox-error checkbox"
                        name="isImmediate"
                        onChange={handleInputChange}
                        type="checkbox"
                      />
                      <div>
                        <span className="label-text font-semibold text-error">
                          This is an immediate emergency requiring urgent
                          response
                        </span>
                        <div className="mt-1 text-sm text-base-content/70">
                          Check this if you are in immediate danger or need
                          immediate assistance
                        </div>
                      </div>
                    </label>
                  </div>

                  {/* Location Information */}
                  <div className="rounded-lg bg-base-200 p-6">
                    <h3 className="mb-4 text-xl font-semibold text-primary">
                      Location & Trip Details
                    </h3>

                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text font-medium">
                            Current Location
                          </span>
                        </label>
                        <input
                          className="input input-bordered w-full"
                          name="location"
                          onChange={handleInputChange}
                          placeholder="Street address or landmark"
                          required
                          type="text"
                          value={formData.location}
                        />
                      </div>

                      <div className="form-control">
                        <label className="label">
                          <span className="label-text font-medium">
                            Trip ID (if applicable)
                          </span>
                        </label>
                        <input
                          className="input input-bordered w-full"
                          name="tripId"
                          onChange={handleInputChange}
                          placeholder="e.g., HR123456789"
                          type="text"
                          value={formData.tripId}
                        />
                      </div>
                    </div>

                    <div className="mt-4 grid gap-4 md:grid-cols-2">
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text font-medium">
                            Driver Name (if known)
                          </span>
                        </label>
                        <input
                          className="input input-bordered w-full"
                          name="driverName"
                          onChange={handleInputChange}
                          placeholder="Driver's name"
                          type="text"
                          value={formData.driverName}
                        />
                      </div>

                      <div className="form-control">
                        <label className="label">
                          <span className="label-text font-medium">
                            Vehicle License Plate
                          </span>
                        </label>
                        <input
                          className="input input-bordered w-full"
                          name="vehiclePlate"
                          onChange={handleInputChange}
                          placeholder="e.g., CA 123-456"
                          type="text"
                          value={formData.vehiclePlate}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text text-lg font-medium">
                        Emergency Description
                      </span>
                    </label>
                    <textarea
                      className="textarea textarea-bordered h-32 w-full"
                      name="description"
                      onChange={handleInputChange}
                      placeholder="Please provide a detailed description of the emergency situation, what happened, when it occurred, and any immediate actions you've taken..."
                      required
                      value={formData.description}
                    ></textarea>
                  </div>

                  {/* Contact Information */}
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text font-medium">
                        Your Contact Number
                      </span>
                    </label>
                    <input
                      className="input input-bordered w-full"
                      name="contactNumber"
                      onChange={handleInputChange}
                      placeholder="+27 XX XXX XXXX"
                      required
                      type="tel"
                      value={formData.contactNumber}
                    />
                    <div className="label">
                      <span className="label-text-alt">
                        We will use this number to contact you immediately about
                        your emergency
                      </span>
                    </div>
                  </div>

                  {/* File Attachments */}
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text font-medium">
                        Evidence (Photos/Videos)
                      </span>
                    </label>
                    <input
                      accept="image/*,video/*"
                      className="file-input file-input-bordered w-full"
                      multiple
                      name="attachments"
                      onChange={handleInputChange}
                      type="file"
                    />
                    <div className="label">
                      <span className="label-text-alt">
                        <Camera className="mr-1 inline" size={16} />
                        Upload photos or videos related to the emergency
                        (Optional)
                      </span>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="form-control pt-4">
                    <button
                      className="btn btn-error btn-lg w-full"
                      disabled={isSubmitting}
                      type="submit"
                    >
                      {isSubmitting ? (
                        <>
                          <span className="loading loading-spinner loading-sm"></span>
                          Submitting Emergency Report...
                        </>
                      ) : (
                        <>
                          <Zap size={20} />
                          Submit Emergency Report
                        </>
                      )}
                    </button>
                  </div>
                </form>

                {apiError && (
                  <div className="alert alert-error mb-4">{apiError}</div>
                )}

                <div className="mt-6 rounded-lg bg-warning/10 p-4">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="mt-1 text-warning" size={20} />
                    <div>
                      <h4 className="font-semibold text-warning">
                        Important Notice
                      </h4>
                      <p className="text-sm text-base-content/70">
                        This form is for reporting emergencies to Hareengs
                        safety team. For immediate life-threatening situations,
                        always call local emergency services first (10111 for
                        Police, 10177 for Medical).
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What Happens Next */}
        <section className="bg-base-100 py-16">
          <div className="mx-auto max-w-7xl px-4">
            <h2 className="mb-12 text-center text-3xl font-bold">
              Emergency Response Process
            </h2>
            <div className="grid gap-8 md:grid-cols-4">
              <div className="text-center">
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-error text-xl font-bold text-error-content">
                  1
                </div>
                <h3 className="mb-4 text-xl font-semibold">Immediate Triage</h3>
                <p className="text-base-content/70">
                  Report is immediately classified and prioritized by our safety
                  team
                </p>
              </div>

              <div className="text-center">
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-warning text-xl font-bold text-warning-content">
                  2
                </div>
                <h3 className="mb-4 text-xl font-semibold">Rapid Response</h3>
                <p className="text-base-content/70">
                  Emergency coordinator contacts you within 15 minutes
                </p>
              </div>

              <div className="text-center">
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-info text-xl font-bold text-info-content">
                  3
                </div>
                <h3 className="mb-4 text-xl font-semibold">Coordinate Help</h3>
                <p className="text-base-content/70">
                  We coordinate with local authorities and emergency services
                </p>
              </div>

              <div className="text-center">
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-success text-xl font-bold text-success-content">
                  4
                </div>
                <h3 className="mb-4 text-xl font-semibold">Follow-up</h3>
                <p className="text-base-content/70">
                  Continuous support until the emergency is resolved
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 24/7 Support */}
        <section className="bg-primary py-16 text-primary-content">
          <div className="mx-auto max-w-4xl px-4 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              24/7 Emergency Support
            </h2>
            <p className="mb-8 text-xl opacity-90">
              Our dedicated safety team is available around the clock to assist
              with emergencies
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <a className="btn btn-error btn-lg" href="tel:0800424737464">
                <Phone size={20} />
                Call Emergency Hotline
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
