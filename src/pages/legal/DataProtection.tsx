import {
  Activity,
  AlertCircle,
  Bell,
  CheckCircle,
  Clock,
  Download,
  Edit,
  Eye,
  FileText,
  Globe,
  Key,
  Lock,
  Mail,
  Phone,
  Shield,
  Trash2,
  UserCheck,
  Users,
} from "lucide-react";
import { useState } from "react";

import AppNavbar from "@/components/common/AppNavbar";
import Breadcrumbs from "@/components/common/Breadcrumbs";

export default function DataProtection() {
  const [activeTab, setActiveTab] = useState("overview");

  const tabs = [
    { icon: <Shield size={16} />, id: "overview", label: "Overview" },
    { icon: <UserCheck size={16} />, id: "your-rights", label: "Your Rights" },
    { icon: <Lock size={16} />, id: "security", label: "Security" },
    { icon: <FileText size={16} />, id: "requests", label: "Data Requests" },
  ];

  const dataRights = [
    {
      action: "Request Data Copy",
      description: "Request a copy of the personal data we hold about you",
      icon: <Eye className="text-primary" size={24} />,
      right: "Right of Access",
      timeframe: "30 days",
    },
    {
      action: "Update Information",
      description: "Correct inaccurate or incomplete personal data",
      icon: <Edit className="text-secondary" size={24} />,
      right: "Right to Rectification",
      timeframe: "30 days",
    },
    {
      action: "Request Deletion",
      description:
        "Request deletion of your personal data under certain conditions",
      icon: <Trash2 className="text-error" size={24} />,
      right: "Right to Erasure",
      timeframe: "30 days",
    },
    {
      action: "Export Data",
      description: "Receive your data in a structured, machine-readable format",
      icon: <Download className="text-success" size={24} />,
      right: "Right to Data Portability",
      timeframe: "30 days",
    },
  ];

  const securityMeasures = [
    {
      category: "Encryption",
      measures: [
        "Data encrypted in transit using TLS 1.3",
        "Data encrypted at rest using AES-256",
        "End-to-end encryption for sensitive communications",
        "Regular encryption key rotation",
      ],
    },
    {
      category: "Access Controls",
      measures: [
        "Multi-factor authentication for all systems",
        "Role-based access permissions",
        "Regular access reviews and audits",
        "Automated account deactivation procedures",
      ],
    },
    {
      category: "Monitoring & Incident Response",
      measures: [
        "24/7 security monitoring and alerting",
        "Automated threat detection systems",
        "Incident response team and procedures",
        "Regular security assessments and penetration testing",
      ],
    },
    {
      category: "Data Governance",
      measures: [
        "Data minimization and purpose limitation",
        "Regular data retention reviews",
        "Privacy impact assessments for new features",
        "Staff training on data protection principles",
      ],
    },
  ];

  const renderOverview = () => (
    <div className="space-y-8">
      {/* POPI Act Compliance */}
      <div className="card border border-success/20 bg-success/5">
        <div className="card-body">
          <div className="mb-4 flex items-center gap-3">
            <CheckCircle className="text-success" size={24} />
            <h3 className="text-xl font-semibold">POPI Act Compliance</h3>
          </div>
          <p className="mb-4 text-base-content/80">
            Hareeng is fully compliant with South Africas Protection of Personal
            Information Act (POPI Act). We are committed to protecting your
            personal information and ensuring it is processed lawfully, fairly,
            and transparently.
          </p>
          <div className="grid gap-3 md:grid-cols-3">
            <div className="stat bg-base-100">
              <div className="stat-title">Compliance Status</div>
              <div className="stat-value text-lg text-success">✓ Compliant</div>
            </div>
            <div className="stat bg-base-100">
              <div className="stat-title">Registration</div>
              <div className="stat-value text-lg text-primary">Registered</div>
            </div>
            <div className="stat bg-base-100">
              <div className="stat-title">Last Audit</div>
              <div className="stat-value text-lg text-info">2024</div>
            </div>
          </div>
        </div>
      </div>

      {/* Data Processing Principles */}
      <div>
        <h3 className="mb-4 text-xl font-semibold">
          Our Data Processing Principles
        </h3>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="card bg-base-100 shadow-lg">
            <div className="card-body">
              <h4 className="mb-2 font-semibold">Lawfulness & Transparency</h4>
              <p className="text-sm text-base-content/70">
                We process data lawfully and transparently, with clear
                communication about how and why we use your information.
              </p>
            </div>
          </div>

          <div className="card bg-base-100 shadow-lg">
            <div className="card-body">
              <h4 className="mb-2 font-semibold">Purpose Limitation</h4>
              <p className="text-sm text-base-content/70">
                We collect data for specific, legitimate purposes and do not use
                it for unrelated activities.
              </p>
            </div>
          </div>

          <div className="card bg-base-100 shadow-lg">
            <div className="card-body">
              <h4 className="mb-2 font-semibold">Data Minimization</h4>
              <p className="text-sm text-base-content/70">
                We only collect and process the minimum amount of data necessary
                for our services.
              </p>
            </div>
          </div>

          <div className="card bg-base-100 shadow-lg">
            <div className="card-body">
              <h4 className="mb-2 font-semibold">Accuracy & Security</h4>
              <p className="text-sm text-base-content/70">
                We ensure data accuracy and implement robust security measures
                to protect your information.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Data Categories */}
      <div>
        <h3 className="mb-4 text-xl font-semibold">Types of Data We Process</h3>
        <div className="space-y-4">
          <div className="collapse collapse-arrow bg-base-100">
            <input defaultChecked name="data-accordion" type="radio" />
            <div className="collapse-title text-lg font-medium">
              Personal Identifiers
            </div>
            <div className="collapse-content">
              <p className="mb-2 text-sm text-base-content/70">
                Information that directly identifies you as an individual.
              </p>
              <ul className="space-y-1 text-sm">
                <li>• Full name and contact details</li>
                <li>• Email address and phone number</li>
                <li>• Government ID numbers (for verification)</li>
                <li>• Profile photographs</li>
              </ul>
            </div>
          </div>

          <div className="collapse collapse-arrow bg-base-100">
            <input name="data-accordion" type="radio" />
            <div className="collapse-title text-lg font-medium">
              Location Data
            </div>
            <div className="collapse-content">
              <p className="mb-2 text-sm text-base-content/70">
                Information about your location when using our services.
              </p>
              <ul className="space-y-1 text-sm">
                <li>• GPS coordinates for pickup/dropoff</li>
                <li>• Trip routes and destinations</li>
                <li>• Location history (with consent)</li>
                <li>• Approximate location from IP address</li>
              </ul>
            </div>
          </div>

          <div className="collapse collapse-arrow bg-base-100">
            <input name="data-accordion" type="radio" />
            <div className="collapse-title text-lg font-medium">
              Usage & Device Data
            </div>
            <div className="collapse-content">
              <p className="mb-2 text-sm text-base-content/70">
                Technical information about how you use our platform.
              </p>
              <ul className="space-y-1 text-sm">
                <li>• App usage patterns and preferences</li>
                <li>• Device type, operating system, app version</li>
                <li>• IP address and browser information</li>
                <li>• Crash reports and performance data</li>
              </ul>
            </div>
          </div>

          <div className="collapse collapse-arrow bg-base-100">
            <input name="data-accordion" type="radio" />
            <div className="collapse-title text-lg font-medium">
              Transaction Data
            </div>
            <div className="collapse-content">
              <p className="mb-2 text-sm text-base-content/70">
                Information related to your transactions and payments.
              </p>
              <ul className="space-y-1 text-sm">
                <li>• Trip and order history</li>
                <li>• Payment method details (encrypted)</li>
                <li>• Billing and invoice information</li>
                <li>• Refund and dispute records</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderYourRights = () => (
    <div className="space-y-8">
      <div className="alert alert-info">
        <AlertCircle size={20} />
        <span>
          Under the POPI Act, you have specific rights regarding your personal
          data. These rights are fundamental to data protection and privacy.
        </span>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {dataRights.map((right, index) => (
          <div className="card bg-base-100 shadow-lg" key={index}>
            <div className="card-body">
              <div className="mb-3 flex items-center gap-3">
                {right.icon}
                <h3 className="card-title text-lg">{right.right}</h3>
              </div>
              <p className="mb-4 text-base-content/80">{right.description}</p>

              <div className="flex items-center justify-between text-sm">
                <span className="text-base-content/70">
                  Response time: {right.timeframe}
                </span>
                <button className="btn btn-primary btn-sm">
                  {right.action}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Additional Rights */}
      <div>
        <h3 className="mb-4 text-xl font-semibold">Additional Rights</h3>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="card border border-warning/20 bg-warning/5">
            <div className="card-body">
              <h4 className="mb-2 font-semibold">Right to Object</h4>
              <p className="mb-3 text-sm text-base-content/70">
                Object to processing of your data for direct marketing or other
                specific purposes.
              </p>
              <button className="btn btn-outline btn-sm">
                Object to Processing
              </button>
            </div>
          </div>

          <div className="card border border-info/20 bg-info/5">
            <div className="card-body">
              <h4 className="mb-2 font-semibold">
                Right to Restrict Processing
              </h4>
              <p className="mb-3 text-sm text-base-content/70">
                Request to limit how we process your data under certain
                circumstances.
              </p>
              <button className="btn btn-outline btn-sm">
                Request Restriction
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Rights Exercise Process */}
      <div className="card bg-base-100 shadow-lg">
        <div className="card-body">
          <h3 className="card-title mb-4">How to Exercise Your Rights</h3>
          <div className="steps steps-vertical lg:steps-horizontal">
            <div className="step step-primary">
              <div className="text-sm">
                <div className="font-semibold">Submit Request</div>
                <div>Use our online form or email privacy@hareeng.com</div>
              </div>
            </div>
            <div className="step step-primary">
              <div className="text-sm">
                <div className="font-semibold">Identity Verification</div>
                <div>We verify your identity for security purposes</div>
              </div>
            </div>
            <div className="step step-primary">
              <div className="text-sm">
                <div className="font-semibold">Processing</div>
                <div>We review and process your request within 30 days</div>
              </div>
            </div>
            <div className="step step-primary">
              <div className="text-sm">
                <div className="font-semibold">Response</div>
                <div>You receive confirmation and requested information</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderSecurity = () => (
    <div className="space-y-8">
      <div className="alert alert-success">
        <Shield size={20} />
        <span>
          Your data security is our top priority. We implement industry-leading
          security measures to protect your personal information.
        </span>
      </div>

      {/* Security Overview */}
      <div className="grid gap-6 md:grid-cols-3">
        <div className="stat bg-base-100 shadow-lg">
          <div className="stat-figure text-primary">
            <Lock size={32} />
          </div>
          <div className="stat-title">Encryption Level</div>
          <div className="stat-value text-primary">AES-256</div>
          <div className="stat-desc">Military-grade encryption</div>
        </div>

        <div className="stat bg-base-100 shadow-lg">
          <div className="stat-figure text-success">
            <Activity size={32} />
          </div>
          <div className="stat-title">Monitoring</div>
          <div className="stat-value text-success">24/7</div>
          <div className="stat-desc">Real-time threat detection</div>
        </div>

        <div className="stat bg-base-100 shadow-lg">
          <div className="stat-figure text-info">
            <Key size={32} />
          </div>
          <div className="stat-title">Access Control</div>
          <div className="stat-value text-info">MFA</div>
          <div className="stat-desc">Multi-factor authentication</div>
        </div>
      </div>

      {/* Security Measures */}
      <div>
        <h3 className="mb-6 text-xl font-semibold">Our Security Measures</h3>
        <div className="space-y-6">
          {securityMeasures.map((measure, index) => (
            <div className="card bg-base-100 shadow-lg" key={index}>
              <div className="card-body">
                <h4 className="card-title mb-4 text-lg">{measure.category}</h4>
                <div className="grid gap-3 md:grid-cols-2">
                  {measure.measures.map((item, itemIndex) => (
                    <div className="flex items-start gap-3" key={itemIndex}>
                      <CheckCircle
                        className="mt-1 flex-shrink-0 text-success"
                        size={16}
                      />
                      <span className="text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Certifications */}
      <div className="card border border-primary/20 bg-primary/5">
        <div className="card-body">
          <h3 className="card-title mb-4 text-primary">
            Security Certifications
          </h3>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="flex items-center gap-3">
              <div className="badge badge-primary">ISO 27001</div>
              <span className="text-sm">Information Security Management</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="badge badge-secondary">SOC 2 Type II</div>
              <span className="text-sm">Service Organization Controls</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="badge badge-success">PCI DSS</div>
              <span className="text-sm">
                Payment Card Industry Data Security
              </span>
            </div>
            <div className="flex items-center gap-3">
              <div className="badge badge-info">POPI Compliant</div>
              <span className="text-sm">South African Data Protection</span>
            </div>
          </div>
        </div>
      </div>

      {/* Incident Response */}
      <div className="card bg-base-100 shadow-lg">
        <div className="card-body">
          <h3 className="card-title mb-4">Data Breach Response</h3>
          <p className="mb-4 text-base-content/80">
            In the unlikely event of a data security incident, we have
            comprehensive procedures in place to protect our users and comply
            with legal requirements.
          </p>

          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-start">Immediate</div>
              <div className="timeline-middle">
                <Bell className="text-error" size={16} />
              </div>
              <div className="timeline-end timeline-box">
                <div className="font-semibold">Detection & Containment</div>
                <div className="text-sm">Incident identified and contained</div>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-start">Within 24hrs</div>
              <div className="timeline-middle">
                <Users className="text-warning" size={16} />
              </div>
              <div className="timeline-end timeline-box">
                <div className="font-semibold">Assessment & Investigation</div>
                <div className="text-sm">
                  Full scope analysis and risk assessment
                </div>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-start">Within 72hrs</div>
              <div className="timeline-middle">
                <Globe className="text-info" size={16} />
              </div>
              <div className="timeline-end timeline-box">
                <div className="font-semibold">Regulatory Notification</div>
                <div className="text-sm">
                  Report to Information Regulator if required
                </div>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-start">As needed</div>
              <div className="timeline-middle">
                <Mail className="text-success" size={16} />
              </div>
              <div className="timeline-end timeline-box">
                <div className="font-semibold">User Notification</div>
                <div className="text-sm">
                  Direct communication to affected users
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderRequests = () => (
    <div className="space-y-8">
      {/* Quick Actions */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <div className="card cursor-pointer border border-primary/20 bg-primary/5 transition-shadow hover:shadow-lg">
          <div className="card-body text-center">
            <Download className="mx-auto mb-2 text-primary" size={32} />
            <h4 className="font-semibold">Download My Data</h4>
            <p className="text-sm text-base-content/70">
              Get a copy of all your data
            </p>
          </div>
        </div>

        <div className="card cursor-pointer border border-secondary/20 bg-secondary/5 transition-shadow hover:shadow-lg">
          <div className="card-body text-center">
            <Edit className="mx-auto mb-2 text-secondary" size={32} />
            <h4 className="font-semibold">Update Information</h4>
            <p className="text-sm text-base-content/70">
              Correct your personal data
            </p>
          </div>
        </div>

        <div className="card cursor-pointer border border-error/20 bg-error/5 transition-shadow hover:shadow-lg">
          <div className="card-body text-center">
            <Trash2 className="mx-auto mb-2 text-error" size={32} />
            <h4 className="font-semibold">Delete Account</h4>
            <p className="text-sm text-base-content/70">Remove all your data</p>
          </div>
        </div>

        <div className="card cursor-pointer border border-info/20 bg-info/5 transition-shadow hover:shadow-lg">
          <div className="card-body text-center">
            <Eye className="mx-auto mb-2 text-info" size={32} />
            <h4 className="font-semibold">Privacy Settings</h4>
            <p className="text-sm text-base-content/70">
              Manage your preferences
            </p>
          </div>
        </div>
      </div>

      {/* Data Request Form */}
      <div className="card bg-base-100 shadow-xl">
        <div className="card-body">
          <h3 className="card-title mb-6 text-xl">
            Submit a Data Protection Request
          </h3>

          <form className="space-y-6">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Request Type</span>
                </label>
                <select className="select select-bordered">
                  <option>Select request type</option>
                  <option>Access to my data</option>
                  <option>Data correction</option>
                  <option>Data deletion</option>
                  <option>Data portability</option>
                  <option>Object to processing</option>
                  <option>Restrict processing</option>
                </select>
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Priority</span>
                </label>
                <select className="select select-bordered">
                  <option>Normal</option>
                  <option>Urgent</option>
                </select>
              </div>
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Email Address</span>
              </label>
              <input
                className="input input-bordered"
                placeholder="Your registered email address"
                type="email"
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Phone Number</span>
              </label>
              <input
                className="input input-bordered"
                placeholder="Your registered phone number"
                type="tel"
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Request Details</span>
              </label>
              <textarea
                className="textarea textarea-bordered h-24"
                placeholder="Please provide specific details about your request..."
              ></textarea>
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Identity Verification</span>
              </label>
              <input
                accept=".pdf,.jpg,.png"
                className="file-input file-input-bordered"
                type="file"
              />
              <div className="label">
                <span className="label-text-alt">
                  Upload ID document for verification (PDF, JPG, PNG)
                </span>
              </div>
            </div>

            <div className="form-control">
              <label className="label cursor-pointer">
                <input className="checkbox" type="checkbox" />
                <span className="label-text ml-2">
                  I confirm that I am the data subject or have authorization to
                  make this request
                </span>
              </label>
            </div>

            <div className="card-actions">
              <button className="btn btn-primary">Submit Request</button>
              <button className="btn btn-ghost" type="button">
                Save Draft
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Contact Information */}
      <div className="grid gap-6 md:grid-cols-2">
        <div className="card bg-base-100 shadow-lg">
          <div className="card-body">
            <h3 className="card-title mb-4">Data Protection Officer</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Mail className="text-primary" size={16} />
                <span>privacy@hareeng.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="text-primary" size={16} />
                <span>+27 21 123 4567</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="text-primary" size={16} />
                <span>Mon-Fri: 9:00 AM - 5:00 PM SAST</span>
              </div>
            </div>
          </div>
        </div>

        <div className="card bg-base-100 shadow-lg">
          <div className="card-body">
            <h3 className="card-title mb-4">Information Regulator</h3>
            <p className="mb-3 text-sm text-base-content/70">
              You have the right to lodge a complaint with the Information
              Regulator if you believe your data protection rights have been
              violated.
            </p>
            <div className="space-y-2">
              <div className="text-sm">
                <strong>Website:</strong> www.justice.gov.za/inforeg
              </div>
              <div className="text-sm">
                <strong>Email:</strong> POPIAComplaints@justice.gov.za
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Processing Times */}
      <div className="alert alert-info">
        <Clock size={20} />
        <div>
          <div className="font-semibold">Processing Times</div>
          <div className="text-sm">
            We respond to data protection requests within 30 days as required by
            the POPI Act. Complex requests may require additional time, and we
            will notify you if an extension is needed.
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <AppNavbar />

      <div className="min-h-screen bg-base-200 pt-16">
        <Breadcrumbs />

        {/* Header */}
        <section className="bg-primary py-16 text-primary-content">
          <div className="mx-auto max-w-7xl px-4">
            <div className="text-center">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary-content/20 px-4 py-2">
                <Shield size={20} />
                <span className="font-medium">POPI Act Compliant</span>
              </div>

              <h1 className="mb-4 text-4xl font-bold lg:text-5xl">
                Data Protection & Privacy
              </h1>

              <p className="mx-auto max-w-3xl text-xl opacity-90">
                Your privacy matters to us. Learn about how we protect, process,
                and give you control over your personal information in
                compliance with South African data protection laws.
              </p>
            </div>
          </div>
        </section>

        {/* Navigation Tabs */}
        <section className="border-b bg-base-100">
          <div className="mx-auto max-w-7xl px-4">
            <div className="tabs-boxed tabs bg-transparent p-4">
              {tabs.map((tab) => (
                <button
                  className={`tab gap-2 ${activeTab === tab.id ? "tab-active" : ""}`}
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                >
                  {tab.icon}
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4">
            {activeTab === "overview" && renderOverview()}
            {activeTab === "your-rights" && renderYourRights()}
            {activeTab === "security" && renderSecurity()}
            {activeTab === "requests" && renderRequests()}
          </div>
        </section>

        {/* Footer Info */}
        <section className="bg-base-100 py-8">
          <div className="mx-auto max-w-7xl px-4">
            <div className="text-center">
              <p className="text-sm text-base-content/70">
                Last updated: January 15, 2025 |
                <button className="link link-primary ml-2">
                  View change history
                </button>
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
