import {
  AlertTriangle,
  Camera,
  Car,
  CheckCircle,
  Clock,
  Mail,
  Phone,
  Shield,
} from "lucide-react";
import { useState } from "react";

import AppNavbar from "@/components/common/AppNavbar";
import Breadcrumbs from "@/components/common/Breadcrumbs";
import { submitVehicleReport } from "@/services/apiService";

export default function ReportVehicle() {
  const [formData, setFormData] = useState({
    attachments: null as FileList | null,
    dateTime: "",
    description: "",
    driverName: "",
    issueType: "",
    licensePlate: "",
    location: "",
    priority: "",
    reporterEmail: "",
    reporterName: "",
    reporterPhone: "",
    tripId: "",
    vehicleType: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [apiError, setApiError] = useState<null | string>(null);

  // Validation function
  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.vehicleType)
      newErrors.vehicleType = "Vehicle type is required.";
    if (!formData.licensePlate)
      newErrors.licensePlate = "License plate is required.";
    if (!formData.issueType) newErrors.issueType = "Issue type is required.";
    if (!formData.priority) newErrors.priority = "Priority is required.";
    if (!formData.description)
      newErrors.description = "Description is required.";
    if (!formData.location) newErrors.location = "Location is required.";
    if (!formData.dateTime) newErrors.dateTime = "Date & Time is required.";
    if (!formData.reporterName)
      newErrors.reporterName = "Your name is required.";
    if (!formData.reporterEmail) {
      newErrors.reporterEmail = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.reporterEmail)) {
      newErrors.reporterEmail = "Email is invalid.";
    }
    if (!formData.reporterPhone)
      newErrors.reporterPhone = "Phone number is required.";
    return newErrors;
  };

  const allowedTypes = [
    "image/jpeg",
    "image/png",
    "image/jpg",
    "application/pdf",
    "video/mp4",
    "video/quicktime", // mov
  ];

  const maxFileSize = 10 * 1024 * 1024; // 10MB

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    const { name, type, value } = e.target;
    if (type === "file") {
      const fileInput = e.target as HTMLInputElement;
      const files = fileInput.files;
      let fileError = "";

      if (files && files.length > 0) {
        Array.from(files).forEach((file) => {
          if (!allowedTypes.includes(file.type)) {
            fileError = "Only JPG, PNG, PDF, MP4, MOV files are allowed.";
          }
          if (file.size > maxFileSize) {
            fileError = "Each file must be less than 10MB.";
          }
        });
      }

      if (fileError) {
        setErrors((prev) => ({
          ...prev,
          attachments: fileError,
        }));
        setFormData((prev) => ({
          ...prev,
          [name]: null,
        }));
      } else {
        setErrors((prev) => ({
          ...prev,
          attachments: "",
        }));
        setFormData((prev) => ({
          ...prev,
          [name]: files,
        }));
      }
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setApiError(null);
    setIsSubmitting(true);

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setIsSubmitting(false);
      return;
    }
    setErrors({});

    try {
      const result = await submitVehicleReport(formData);
      if (result.success) {
        setIsSubmitted(true);
      } else {
        setApiError(result.message || "Failed to submit report.");
      }
    } catch (error: any) {
      console.log("API error:", error);
      // Try to extract message from error or error.response or error.data
      let message = "Failed to submit report.";
      if (error?.message) {
        message = error.message;
      } else if (typeof error === "string") {
        message = error;
      } else if (error?.response?.data?.message) {
        message = error.response.data.message;
      }
      setApiError(message);
    } finally {
      setIsSubmitting(false);
    }
  };

  const vehicleTypes = [
    { label: "Car", value: "car" },
    { label: "Scooter", value: "scooter" },
    { label: "Motorbike", value: "motorbike" },
    { label: "Bicycle", value: "bicycle" },
    { label: "Van/Bakkie", value: "van" },
    { label: "Other", value: "other" },
  ];

  const issueTypes = [
    { label: "Reckless Driving", severity: "high", value: "reckless-driving" },
    {
      label: "Poor Vehicle Condition",
      severity: "medium",
      value: "vehicle-condition",
    },
    {
      label: "Unprofessional Behavior",
      severity: "medium",
      value: "unprofessional-behavior",
    },
    { label: "Safety Violation", severity: "high", value: "safety-violation" },
    { label: "Illegal Parking", severity: "low", value: "illegal-parking" },
    { label: "Harassment", severity: "high", value: "harassment" },
    { label: "Overcharging", severity: "medium", value: "overcharging" },
    { label: "Vehicle Damage", severity: "low", value: "vehicle-damage" },
    { label: "Other", severity: "medium", value: "other" },
  ];

  const priorityLevels = [
    {
      description: "Minor issues, non-urgent",
      label: "Low Priority",
      value: "low",
    },
    {
      description: "Moderate concern, needs attention",
      label: "Medium Priority",
      value: "medium",
    },
    {
      description: "Serious issue, urgent attention required",
      label: "High Priority",
      value: "high",
    },
    {
      description: "Immediate safety concern",
      label: "Emergency",
      value: "emergency",
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
                Vehicle Report Submitted!
              </h1>
              <p className="mb-6 text-base-content/70">
                Thank you for reporting this vehicle. We take all reports
                seriously and will investigate immediately.
              </p>
              <div className="space-y-3">
                <div className="alert alert-info">
                  <Shield size={20} />
                  <div>
                    <h4 className="font-semibold">Report ID</h4>
                    <p className="text-sm">
                      VR{Math.floor(Math.random() * 100000)}
                    </p>
                  </div>
                </div>
                <div className="alert alert-warning">
                  <Clock size={20} />
                  <div>
                    <h4 className="font-semibold">Investigation Timeline</h4>
                    <p className="text-sm">
                      We will review within 2-4 hours for urgent cases
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-6 space-y-2">
                <button
                  className="btn btn-primary w-full"
                  onClick={() => window.location.reload()}
                >
                  Report Another Vehicle
                </button>
                <button
                  className="btn btn-ghost w-full"
                  onClick={() => window.history.back()}
                >
                  Go Back
                </button>
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

        {/* Hero Section */}
        <section className="bg-error py-16 text-error-content">
          <div className="mx-auto max-w-7xl px-4">
            <div className="text-center">
              <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-error-content/20">
                <Car size={48} />
              </div>
              <h1 className="mb-4 text-4xl font-bold md:text-6xl">
                Report a Vehicle
              </h1>
              <p className="mx-auto max-w-2xl text-xl opacity-90">
                Help us maintain safety standards by reporting vehicles or
                drivers that do not meet our guidelines.
              </p>
            </div>
          </div>
        </section>

        {/* Quick Emergency Notice */}
        <section className="bg-warning py-8 text-warning-content">
          <div className="mx-auto max-w-7xl px-4">
            <div className="flex items-center justify-center gap-4 text-center">
              <AlertTriangle size={24} />
              <div>
                <h2 className="font-bold">Emergency?</h2>
                <p className="text-sm">
                  For immediate safety concerns, call 10111 or use our emergency
                  hotline: 0800-EMERGENCY
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Report Form */}
        <section className="py-16">
          <div className="mx-auto max-w-4xl px-4">
            <div className="card bg-base-100 shadow-2xl">
              <div className="card-body p-8">
                <h2 className="card-title mb-6 text-3xl">
                  Vehicle Report Form
                </h2>

                {apiError && (
                  <div className="alert alert-error mb-4">{apiError}</div>
                )}

                <form className="space-y-6" onSubmit={handleSubmit}>
                  {/* Vehicle Information */}
                  <div className="rounded-lg bg-base-200 p-6">
                    <h3 className="mb-4 text-xl font-semibold text-primary">
                      Vehicle Information
                    </h3>

                    <div className="grid gap-4 md:grid-cols-2">
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
                          {vehicleTypes.map((type) => (
                            <option key={type.value} value={type.value}>
                              {type.label}
                            </option>
                          ))}
                        </select>
                        {errors.vehicleType && (
                          <span className="text-sm text-error">
                            {errors.vehicleType}
                          </span>
                        )}
                      </div>

                      <div className="form-control">
                        <label className="label">
                          <span className="label-text font-medium">
                            License Plate Number
                          </span>
                        </label>
                        <input
                          className="input input-bordered w-full"
                          name="licensePlate"
                          onChange={handleInputChange}
                          placeholder="e.g., CA 123-456"
                          required
                          type="text"
                          value={formData.licensePlate}
                        />
                        {errors.licensePlate && (
                          <span className="text-sm text-error">
                            {errors.licensePlate}
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="form-control mt-4">
                      <label className="label">
                        <span className="label-text font-medium">
                          Driver Name (if known)
                        </span>
                      </label>
                      <input
                        className="input input-bordered w-full"
                        name="driverName"
                        onChange={handleInputChange}
                        placeholder="Driver's name or nickname"
                        type="text"
                        value={formData.driverName}
                      />
                    </div>
                  </div>

                  {/* Issue Details */}
                  <div className="rounded-lg bg-base-200 p-6">
                    <h3 className="mb-4 text-xl font-semibold text-primary">
                      Issue Details
                    </h3>

                    <div className="form-control mb-4">
                      <label className="label">
                        <span className="label-text font-medium">
                          Type of Issue
                        </span>
                      </label>
                      <select
                        className="select select-bordered w-full"
                        name="issueType"
                        onChange={handleInputChange}
                        required
                        value={formData.issueType}
                      >
                        <option value="">Select issue type</option>
                        {issueTypes.map((issue) => (
                          <option key={issue.value} value={issue.value}>
                            {issue.label}
                          </option>
                        ))}
                      </select>
                      {errors.issueType && (
                        <span className="text-sm text-error">
                          {errors.issueType}
                        </span>
                      )}
                    </div>

                    <div className="form-control mb-4">
                      <label className="label">
                        <span className="label-text font-medium">
                          Priority Level
                        </span>
                      </label>
                      <div className="grid gap-3 sm:grid-cols-2">
                        {priorityLevels.map((priority) => (
                          <label
                            className="label cursor-pointer justify-start gap-3 rounded-lg border p-4 hover:bg-base-300"
                            key={priority.value}
                          >
                            <input
                              className={`radio ${
                                priority.value === "emergency"
                                  ? "radio-error"
                                  : priority.value === "high"
                                    ? "radio-warning"
                                    : priority.value === "medium"
                                      ? "radio-info"
                                      : "radio-success"
                              }`}
                              name="priority"
                              onChange={handleInputChange}
                              required
                              type="radio"
                              value={priority.value}
                            />
                            <div>
                              <div className="font-medium">
                                {priority.label}
                              </div>
                              <div className="text-sm text-base-content/70">
                                {priority.description}
                              </div>
                            </div>
                          </label>
                        ))}
                      </div>
                      {errors.priority && (
                        <span className="text-sm text-error">
                          {errors.priority}
                        </span>
                      )}
                    </div>

                    <div className="form-control">
                      <label className="label">
                        <span className="label-text font-medium">
                          Detailed Description
                        </span>
                      </label>
                      <textarea
                        className="textarea textarea-bordered h-32 w-full"
                        name="description"
                        onChange={handleInputChange}
                        placeholder="Please provide a detailed description of what happened, including any relevant circumstances..."
                        required
                        value={formData.description}
                      ></textarea>
                      {errors.description && (
                        <span className="text-sm text-error">
                          {errors.description}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Location and Time */}
                  <div className="rounded-lg bg-base-200 p-6">
                    <h3 className="mb-4 text-xl font-semibold text-primary">
                      Location & Time
                    </h3>

                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text font-medium">
                            Location
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
                        {errors.location && (
                          <span className="text-sm text-error">
                            {errors.location}
                          </span>
                        )}
                      </div>

                      <div className="form-control">
                        <label className="label">
                          <span className="label-text font-medium">
                            Date & Time
                          </span>
                        </label>
                        <input
                          className="input input-bordered w-full"
                          name="dateTime"
                          onChange={handleInputChange}
                          required
                          type="datetime-local"
                          value={formData.dateTime}
                        />
                        {errors.dateTime && (
                          <span className="text-sm text-error">
                            {errors.dateTime}
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="form-control mt-4">
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

                  {/* Reporter Information */}
                  <div className="rounded-lg bg-base-200 p-6">
                    <h3 className="mb-4 text-xl font-semibold text-primary">
                      Your Information
                    </h3>

                    <div className="grid gap-4 md:grid-cols-3">
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text font-medium">
                            Your Name
                          </span>
                        </label>
                        <input
                          className="input input-bordered w-full"
                          name="reporterName"
                          onChange={handleInputChange}
                          placeholder="Full name"
                          required
                          type="text"
                          value={formData.reporterName}
                        />
                        {errors.reporterName && (
                          <span className="text-sm text-error">
                            {errors.reporterName}
                          </span>
                        )}
                      </div>

                      <div className="form-control">
                        <label className="label">
                          <span className="label-text font-medium">
                            Email Address
                          </span>
                        </label>
                        <input
                          className="input input-bordered w-full"
                          name="reporterEmail"
                          onChange={handleInputChange}
                          placeholder="your.email@example.com"
                          required
                          type="email"
                          value={formData.reporterEmail}
                        />
                        {errors.reporterEmail && (
                          <span className="text-sm text-error">
                            {errors.reporterEmail}
                          </span>
                        )}
                      </div>

                      <div className="form-control">
                        <label className="label">
                          <span className="label-text font-medium">
                            Phone Number
                          </span>
                        </label>
                        <input
                          className="input input-bordered w-full"
                          name="reporterPhone"
                          onChange={handleInputChange}
                          placeholder="+27 XX XXX XXXX"
                          type="tel"
                          value={formData.reporterPhone}
                        />
                        {errors.reporterPhone && (
                          <span className="text-sm text-error">
                            {errors.reporterPhone}
                          </span>
                        )}
                      </div>
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
                      accept=".jpg,.jpeg,.png,.mp4,.mov,.pdf,image/*,video/*"
                      className="file-input file-input-bordered w-full"
                      multiple
                      name="attachments"
                      onChange={handleInputChange}
                      type="file"
                    />
                    <div className="label">
                      <span className="label-text-alt">
                        <Camera className="mr-1 inline" size={16} />
                        Upload photos or videos as evidence (Max 10MB each)
                      </span>
                    </div>
                    {errors.attachments && (
                      <span className="text-sm text-error">
                        {errors.attachments}
                      </span>
                    )}
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
                          Submitting Report...
                        </>
                      ) : (
                        <>
                          <AlertTriangle size={20} />
                          Submit Vehicle Report
                        </>
                      )}
                    </button>
                  </div>
                </form>

                <div className="mt-6 rounded-lg bg-info/10 p-4">
                  <div className="flex items-start gap-3">
                    <Shield className="mt-1 text-info" size={20} />
                    <div>
                      <h4 className="font-semibold text-info">
                        Anonymous Reporting
                      </h4>
                      <p className="text-sm text-base-content/70">
                        Your report will be treated confidentially. We may
                        contact you for additional information if needed.
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
              What Happens Next?
            </h2>
            <div className="grid gap-8 md:grid-cols-4">
              <div className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-xl font-bold text-primary-content">
                  1
                </div>
                <h3 className="mb-2 text-lg font-semibold">Report Review</h3>
                <p className="text-sm text-base-content/70">
                  Our safety team reviews your report within 2-4 hours
                </p>
              </div>

              <div className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-secondary text-xl font-bold text-secondary-content">
                  2
                </div>
                <h3 className="mb-2 text-lg font-semibold">Investigation</h3>
                <p className="text-sm text-base-content/70">
                  We investigate the matter and contact relevant parties
                </p>
              </div>

              <div className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent text-xl font-bold text-accent-content">
                  3
                </div>
                <h3 className="mb-2 text-lg font-semibold">Action Taken</h3>
                <p className="text-sm text-base-content/70">
                  Appropriate action is taken based on our findings
                </p>
              </div>

              <div className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-success text-xl font-bold text-success-content">
                  4
                </div>
                <h3 className="mb-2 text-lg font-semibold">Follow-up</h3>
                <p className="text-sm text-base-content/70">
                  We will update you on the outcome if contact info is provided
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4">
            <div className="text-center">
              <h2 className="mb-8 text-3xl font-bold">Need Immediate Help?</h2>
              <div className="grid gap-6 md:grid-cols-3">
                <div className="card bg-error/10 shadow-lg">
                  <div className="card-body text-center">
                    <Phone className="mx-auto mb-4 text-error" size={32} />
                    <h3 className="card-title justify-center text-error">
                      Emergency
                    </h3>
                    <p className="mb-4 text-base-content/70">10111 (Police)</p>
                    <p className="text-sm text-base-content/60">
                      For immediate safety concerns
                    </p>
                  </div>
                </div>

                <div className="card bg-warning/10 shadow-lg">
                  <div className="card-body text-center">
                    <Phone className="mx-auto mb-4 text-warning" size={32} />
                    <h3 className="card-title justify-center text-warning">
                      Safety Hotline
                    </h3>
                    <p className="mb-4 text-base-content/70">0800-SAFETY</p>
                    <p className="text-sm text-base-content/60">
                      24/7 safety support
                    </p>
                  </div>
                </div>

                <div className="card bg-info/10 shadow-lg">
                  <div className="card-body text-center">
                    <Mail className="mx-auto mb-4 text-info" size={32} />
                    <h3 className="card-title justify-center text-info">
                      Email Support
                    </h3>
                    <p className="mb-4 text-base-content/70">
                      safety@hareeng.com
                    </p>
                    <p className="text-sm text-base-content/60">
                      Non-urgent reports
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
