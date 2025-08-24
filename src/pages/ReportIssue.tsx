import {
  AlertTriangle,
  Bug,
  Camera,
  Car,
  CheckCircle,
  Clock,
  CreditCard,
  HelpCircle,
  Mail,
  MessageSquare,
  Phone,
  Shield,
  User,
} from "lucide-react";
import { useState } from "react";

import AppNavbar from "@/components/common/AppNavbar";
import Breadcrumbs from "@/components/common/Breadcrumbs";
import { submitIssueReport } from "@/services/apiService";

export default function ReportIssue() {
  const [formData, setFormData] = useState({
    attachments: null as FileList | null,
    description: "",
    email: "",
    issueType: "",
    location: "",
    phone: "",
    priority: "",
    subject: "",
    tripId: "",
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
      const result = await submitIssueReport(formData);
      if (result.success) {
        setIsSubmitted(true);
      } else {
        setApiError(result.message || "Failed to submit report.");
      }
    } catch (error: any) {
      setApiError(error?.message || "Failed to submit report.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const issueTypes = [
    { icon: <Shield size={20} />, label: "Safety Concern", value: "safety" },
    {
      icon: <CreditCard size={20} />,
      label: "Payment Issue",
      value: "payment",
    },
    { icon: <User size={20} />, label: "Driver Behavior", value: "driver" },
    { icon: <Car size={20} />, label: "Vehicle Problem", value: "vehicle" },
    { icon: <Bug size={20} />, label: "App Technical Issue", value: "app" },
    {
      icon: <HelpCircle size={20} />,
      label: "Account Problem",
      value: "account",
    },
    { icon: <MessageSquare size={20} />, label: "Other", value: "other" },
  ];

  const priorityLevels = [
    { color: "text-success", label: "Low", value: "low" },
    { color: "text-warning", label: "Medium", value: "medium" },
    { color: "text-error", label: "High", value: "high" },
    { color: "text-error font-bold", label: "Urgent", value: "urgent" },
  ];

  const quickActions = [
    {
      action: "Call 10111",
      description: "For immediate safety concerns",
      icon: <Phone className="text-error" size={24} />,
      title: "Emergency Assistance",
      urgent: true,
    },
    {
      action: "Start Chat",
      description: "Get instant help from our team",
      icon: <MessageSquare className="text-primary" size={24} />,
      title: "Live Chat Support",
      urgent: false,
    },
    {
      action: "Call Now",
      description: "Speak directly with support",
      icon: <Phone className="text-secondary" size={24} />,
      title: "Call Support",
      urgent: false,
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
                Issue Reported Successfully!
              </h1>
              <p className="mb-6 text-base-content/70">
                Thank you for reporting this issue. Weve received your report
                and our team will investigate it promptly.
              </p>
              <div className="space-y-3">
                <div className="alert alert-info">
                  <Mail size={20} />
                  <div>
                    <h4 className="font-semibold">Ticket Created</h4>
                    <p className="text-sm">
                      Reference: #HR{Math.floor(Math.random() * 100000)}
                    </p>
                  </div>
                </div>
                <div className="alert alert-warning">
                  <Clock size={20} />
                  <div>
                    <h4 className="font-semibold">Response Time</h4>
                    <p className="text-sm">Well respond within 24 hours</p>
                  </div>
                </div>
              </div>
              <div className="mt-6">
                <button
                  className="btn btn-primary"
                  onClick={() => window.location.reload()}
                >
                  Report Another Issue
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
        <section className="bg-primary py-16 text-primary-content">
          <div className="mx-auto max-w-7xl px-4">
            <div className="text-center">
              <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-primary-content/20">
                <AlertTriangle size={48} />
              </div>
              <h1 className="mb-4 text-4xl font-bold md:text-6xl">
                Report an Issue
              </h1>
              <p className="mx-auto max-w-2xl text-xl opacity-90">
                We are here to help. Report any issues or concerns and our
                support team will assist you promptly.
              </p>
            </div>
          </div>
        </section>

        {/* Quick Actions */}
        <section className="bg-base-100 py-12">
          <div className="mx-auto max-w-7xl px-4">
            <h2 className="mb-8 text-center text-2xl font-bold">
              Need Immediate Help?
            </h2>
            <div className="grid gap-6 md:grid-cols-3">
              {quickActions.map((action, index) => (
                <div
                  className={`card ${action.urgent ? "border-2 border-error" : ""} bg-base-100 shadow-lg transition-shadow hover:shadow-xl`}
                  key={index}
                >
                  <div className="card-body text-center">
                    <div className="mx-auto mb-4">{action.icon}</div>
                    <h3 className="card-title justify-center text-lg">
                      {action.title}
                    </h3>
                    <p className="mb-4 text-sm text-base-content/70">
                      {action.description}
                    </p>
                    {/* <button
                      className={`btn ${action.urgent ? "btn-error" : "btn-primary"} btn-sm`}
                    >
                      {action.action}
                    </button> */}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Report Form */}
        <section className="py-16">
          <div className="mx-auto max-w-4xl px-4">
            <div className="card bg-base-100 shadow-2xl">
              <div className="card-body p-8">
                <h2 className="card-title mb-6 text-3xl">
                  Submit Issue Report
                </h2>

                <form className="space-y-6" onSubmit={handleSubmit}>
                  {/* Issue Type */}
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text text-lg font-medium">
                        What type of issue are you reporting?
                      </span>
                    </label>
                    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                      {issueTypes.map((type) => (
                        <label
                          className="label cursor-pointer justify-start gap-3 rounded-lg border p-4 hover:bg-base-200"
                          key={type.value}
                        >
                          <input
                            className="radio-primary radio"
                            name="issueType"
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

                  {/* Priority Level */}
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text text-lg font-medium">
                        Priority Level
                      </span>
                    </label>
                    <select
                      className="select select-bordered w-full"
                      name="priority"
                      onChange={handleInputChange}
                      required
                      value={formData.priority}
                    >
                      <option value="">Select priority level</option>
                      {priorityLevels.map((priority) => (
                        <option key={priority.value} value={priority.value}>
                          {priority.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Contact Information */}
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text font-medium">
                          Email Address
                        </span>
                      </label>
                      <input
                        className="input input-bordered w-full"
                        name="email"
                        onChange={handleInputChange}
                        placeholder="your.email@example.com"
                        required
                        type="email"
                        value={formData.email}
                      />
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text font-medium">
                          Phone Number
                        </span>
                      </label>
                      <input
                        className="input input-bordered w-full"
                        name="phone"
                        onChange={handleInputChange}
                        placeholder="+27 XX XXX XXXX"
                        type="tel"
                        value={formData.phone}
                      />
                    </div>
                  </div>

                  {/* Trip/Reference Information */}
                  <div className="grid gap-4 md:grid-cols-2">
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
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text font-medium">
                          Location (if relevant)
                        </span>
                      </label>
                      <input
                        className="input input-bordered w-full"
                        name="location"
                        onChange={handleInputChange}
                        placeholder="e.g., Sandton City Mall"
                        type="text"
                        value={formData.location}
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text text-lg font-medium">
                        Subject
                      </span>
                    </label>
                    <input
                      className="input input-bordered w-full"
                      name="subject"
                      onChange={handleInputChange}
                      placeholder="Brief description of the issue"
                      required
                      type="text"
                      value={formData.subject}
                    />
                  </div>

                  {/* Description */}
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text text-lg font-medium">
                        Detailed Description
                      </span>
                    </label>
                    <textarea
                      className="textarea textarea-bordered h-32 w-full"
                      name="description"
                      onChange={handleInputChange}
                      placeholder="Please provide as much detail as possible about the issue, including what happened, when it occurred, and any steps you took..."
                      required
                      value={formData.description}
                    ></textarea>
                  </div>

                  {/* File Attachments */}
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text font-medium">
                        Attachments (optional)
                      </span>
                    </label>
                    <input
                      accept="image/*,.pdf,.doc,.docx"
                      className="file-input file-input-bordered w-full"
                      multiple
                      name="attachments"
                      onChange={handleInputChange}
                      type="file"
                    />
                    <div className="label">
                      <span className="label-text-alt">
                        <Camera className="mr-1 inline" size={16} />
                        Upload screenshots, photos, or documents (Max 10MB each)
                      </span>
                    </div>
                  </div>

                  {apiError && (
                    <div className="alert alert-error mb-4">{apiError}</div>
                  )}

                  {/* Submit Button */}
                  <div className="form-control pt-4">
                    <button
                      className="btn btn-primary btn-lg w-full"
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
                          Submit Issue Report
                        </>
                      )}
                    </button>
                  </div>

                  {/* API Error Message */}
                  {apiError && (
                    <div className="form-control">
                      <div className="alert alert-error shadow-lg">
                        <div>
                          <Bug size={20} />
                          <span>{apiError}</span>
                        </div>
                      </div>
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-base-100 py-16">
          <div className="mx-auto max-w-7xl px-4">
            <h2 className="mb-12 text-center text-3xl font-bold">
              Frequently Asked Questions
            </h2>
            <div className="grid gap-6 lg:grid-cols-2">
              <div className="collapse collapse-plus bg-base-200">
                <input name="faq-accordion" type="radio" />
                <div className="collapse-title text-xl font-medium">
                  How quickly will my issue be resolved?
                </div>
                <div className="collapse-content">
                  <p>
                    Response times vary by priority: Urgent issues within 1
                    hour, High priority within 4 hours, Medium within 24 hours,
                    Low within 48 hours.
                  </p>
                </div>
              </div>

              <div className="collapse collapse-plus bg-base-200">
                <input name="faq-accordion" type="radio" />
                <div className="collapse-title text-xl font-medium">
                  What information should I include in my report?
                </div>
                <div className="collapse-content">
                  <p>
                    Include as much detail as possible: trip ID, exact time and
                    location, screenshots, and step-by-step description of what
                    happened.
                  </p>
                </div>
              </div>

              <div className="collapse collapse-plus bg-base-200">
                <input name="faq-accordion" type="radio" />
                <div className="collapse-title text-xl font-medium">
                  Can I track the status of my report?
                </div>
                <div className="collapse-content">
                  <p>
                    Yes, you will receive a reference number via email. You can
                    use this to track your report status and communicate with
                    our support team.
                  </p>
                </div>
              </div>

              <div className="collapse collapse-plus bg-base-200">
                <input name="faq-accordion" type="radio" />
                <div className="collapse-title text-xl font-medium">
                  What if I need immediate assistance?
                </div>
                <div className="collapse-content">
                  <p>
                    For emergencies, call 10111. For urgent non-emergency
                    issues, use our live chat feature or call our 24/7 support
                    hotline.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4">
            <div className="text-center">
              <h2 className="mb-8 text-3xl font-bold">
                Other Ways to Reach Us
              </h2>
              <div className="grid gap-6 md:grid-cols-3">
                <div className="card bg-base-100 shadow-lg">
                  <div className="card-body text-center">
                    <Phone className="mx-auto mb-4 text-primary" size={32} />
                    <h3 className="card-title justify-center">
                      24/7 Support Hotline
                    </h3>
                    <p className="mb-4 text-base-content/70">0800-HAREENG</p>
                    <p className="text-sm text-base-content/60">
                      Available 24 hours a day
                    </p>
                  </div>
                </div>

                <div className="card bg-base-100 shadow-lg">
                  <div className="card-body text-center">
                    <Mail className="mx-auto mb-4 text-secondary" size={32} />
                    <h3 className="card-title justify-center">Email Support</h3>
                    <p className="mb-4 text-base-content/70">
                      support@hareeng.com
                    </p>
                    <p className="text-sm text-base-content/60">
                      Response within 24 hours
                    </p>
                  </div>
                </div>

                <div className="card bg-base-100 shadow-lg">
                  <div className="card-body text-center">
                    <MessageSquare
                      className="mx-auto mb-4 text-accent"
                      size={32}
                    />
                    <h3 className="card-title justify-center">Live Chat</h3>
                    <p className="mb-4 text-base-content/70">
                      In-app messaging
                    </p>
                    <p className="text-sm text-base-content/60">
                      Real-time assistance
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
