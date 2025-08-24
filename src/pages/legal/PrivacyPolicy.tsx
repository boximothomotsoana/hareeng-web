import {
  AlertCircle,
  Calendar,
  Eye,
  Lock,
  Mail,
  Phone,
  Settings,
  Share2,
  Shield,
  Users,
} from "lucide-react";

import AppNavbar from "@/components/common/AppNavbar";
import Breadcrumbs from "@/components/common/Breadcrumbs";

export default function PrivacyPolicy() {
  return (
    <>
      <AppNavbar />

      <div className="min-h-screen bg-base-200 pt-16">
        <Breadcrumbs />

        {/* Header */}
        <section className="bg-base-100 py-12">
          <div className="mx-auto max-w-4xl px-4">
            <div className="text-center">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-success/10 px-4 py-2">
                <Shield className="text-success" size={20} />
                <span className="font-medium text-success">Privacy Policy</span>
              </div>
              <h1 className="mb-4 text-4xl font-bold">Privacy Policy</h1>
              <p className="text-xl text-base-content/70">
                Your privacy matters to us. Learn how we collect, use, and
                protect your data.
              </p>
              <div className="mt-6 flex items-center justify-center gap-4 text-sm text-base-content/70">
                <div className="flex items-center gap-1">
                  <Calendar size={16} />
                  <span>Last updated: January 15, 2025</span>
                </div>
                <span>•</span>
                <span>POPI Act Compliant</span>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Overview */}
        <section className="bg-primary/5 py-8">
          <div className="mx-auto max-w-4xl px-4">
            <h2 className="mb-4 text-lg font-semibold">Privacy at a Glance</h2>
            <div className="grid gap-4 md:grid-cols-3">
              <div className="flex items-center gap-3">
                <Lock className="text-primary" size={20} />
                <span className="text-sm">
                  Your data is encrypted and secure
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Eye className="text-secondary" size={20} />
                <span className="text-sm">
                  You control what data we collect
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Share2 className="text-accent" size={20} />
                <span className="text-sm">
                  We never sell your personal data
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Table of Contents */}
        <section className="bg-base-300 py-8">
          <div className="mx-auto max-w-4xl px-4">
            <h2 className="mb-4 text-lg font-semibold">Table of Contents</h2>
            <div className="grid gap-2 md:grid-cols-3">
              <a className="link-hover link" href="#overview">
                1. Overview
              </a>
              <a className="link-hover link" href="#data-collection">
                2. Data We Collect
              </a>
              <a className="link-hover link" href="#data-use">
                3. How We Use Data
              </a>
              <a className="link-hover link" href="#data-sharing">
                4. Data Sharing
              </a>
              <a className="link-hover link" href="#data-security">
                5. Data Security
              </a>
              <a className="link-hover link" href="#your-rights">
                6. Your Rights
              </a>
              <a className="link-hover link" href="#cookies">
                7. Cookies & Tracking
              </a>
              <a className="link-hover link" href="#children">
                8. Childrens Privacy
              </a>
              <a className="link-hover link" href="#updates">
                9. Policy Updates
              </a>
              <a className="link-hover link" href="#contact">
                10. Contact Us
              </a>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-16">
          <div className="prose prose-lg mx-auto max-w-4xl max-w-none px-4">
            <div className="mb-12" id="overview">
              <h2 className="mb-4 text-2xl font-bold">1. Overview</h2>
              <p className="mb-4">
                Hareeng (Pty) Ltd (Hareeng, we, us, or our) is committed to
                protecting your privacy and personal information. This Privacy
                Policy explains how we collect, use, disclose, and safeguard
                your information when you use our Services.
              </p>
              <p className="mb-4">
                This policy applies to all users of our platform, including
                riders, drivers, restaurant partners, and website visitors. By
                using our Services, you consent to the practices described in
                this Privacy Policy.
              </p>
              <div className="alert alert-info">
                <AlertCircle size={20} />
                <span>
                  We comply with the Protection of Personal Information Act
                  (POPI Act) and other applicable South African privacy laws.
                </span>
              </div>
            </div>

            <div className="mb-12" id="data-collection">
              <h2 className="mb-4 text-2xl font-bold">2. Data We Collect</h2>

              <h3 className="mb-3 text-xl font-semibold">
                2.1 Information You Provide
              </h3>
              <ul className="mb-4 list-disc pl-6">
                <li>
                  <strong>Account Information:</strong> Name, email, phone
                  number, profile photo
                </li>
                <li>
                  <strong>Payment Information:</strong> Credit card details,
                  billing address
                </li>
                <li>
                  <strong>Identity Verification:</strong> Drivers license, ID
                  documents (for drivers)
                </li>
                <li>
                  <strong>Communications:</strong> Messages, reviews, support
                  requests
                </li>
              </ul>

              <h3 className="mb-3 text-xl font-semibold">
                2.2 Information We Collect Automatically
              </h3>
              <ul className="mb-4 list-disc pl-6">
                <li>
                  <strong>Location Data:</strong> GPS coordinates, trip routes,
                  pickup/dropoff locations
                </li>
                <li>
                  <strong>Device Information:</strong> Device type, operating
                  system, app version
                </li>
                <li>
                  <strong>Usage Data:</strong> App interactions, features used,
                  time spent
                </li>
                <li>
                  <strong>Transaction Data:</strong> Trip details, payment
                  history, earnings
                </li>
              </ul>

              <h3 className="mb-3 text-xl font-semibold">
                2.3 Information from Third Parties
              </h3>
              <ul className="mb-4 list-disc pl-6">
                <li>Social media platforms (if you connect your accounts)</li>
                <li>Payment processors and financial institutions</li>
                <li>Background check providers (for drivers)</li>
                <li>Business partners and affiliates</li>
              </ul>
            </div>

            <div className="mb-12" id="data-use">
              <h2 className="mb-4 text-2xl font-bold">
                3. How We Use Your Data
              </h2>

              <div className="grid gap-6 md:grid-cols-2">
                <div className="card bg-base-100 shadow-lg">
                  <div className="card-body">
                    <div className="mb-3 flex items-center gap-3">
                      <Users className="text-primary" size={24} />
                      <h3 className="card-title">Service Delivery</h3>
                    </div>
                    <ul className="space-y-1 text-sm">
                      <li>• Connecting you with drivers/restaurants</li>
                      <li>• Processing payments and transactions</li>
                      <li>• Providing customer support</li>
                      <li>• Ensuring safety and security</li>
                    </ul>
                  </div>
                </div>

                <div className="card bg-base-100 shadow-lg">
                  <div className="card-body">
                    <div className="mb-3 flex items-center gap-3">
                      <Settings className="text-secondary" size={24} />
                      <h3 className="card-title">Platform Improvement</h3>
                    </div>
                    <ul className="space-y-1 text-sm">
                      <li>• Analyzing usage patterns</li>
                      <li>• Developing new features</li>
                      <li>• Optimizing routes and pricing</li>
                      <li>• Preventing fraud and abuse</li>
                    </ul>
                  </div>
                </div>

                <div className="card bg-base-100 shadow-lg">
                  <div className="card-body">
                    <div className="mb-3 flex items-center gap-3">
                      <Share2 className="text-accent" size={24} />
                      <h3 className="card-title">Communication</h3>
                    </div>
                    <ul className="space-y-1 text-sm">
                      <li>• Sending service updates</li>
                      <li>• Marketing communications (with consent)</li>
                      <li>• Safety notifications</li>
                      <li>• Legal and regulatory notices</li>
                    </ul>
                  </div>
                </div>

                <div className="card bg-base-100 shadow-lg">
                  <div className="card-body">
                    <div className="mb-3 flex items-center gap-3">
                      <Shield className="text-success" size={24} />
                      <h3 className="card-title">Legal Compliance</h3>
                    </div>
                    <ul className="space-y-1 text-sm">
                      <li>• Meeting regulatory requirements</li>
                      <li>• Responding to legal requests</li>
                      <li>• Protecting our rights and property</li>
                      <li>• Ensuring public safety</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-12" id="data-sharing">
              <h2 className="mb-4 text-2xl font-bold">4. Data Sharing</h2>
              <p className="mb-4">
                We do not sell your personal information to third parties. We
                may share your information in the following circumstances:
              </p>

              <h3 className="mb-3 text-xl font-semibold">
                4.1 Service Providers
              </h3>
              <p className="mb-4">
                We share information with drivers, delivery partners, and
                restaurants to facilitate services. This includes names, phone
                numbers, and location data.
              </p>

              <h3 className="mb-3 text-xl font-semibold">
                4.2 Business Partners
              </h3>
              <p className="mb-4">
                We may share aggregated, non-personal information with partners
                for business purposes such as analytics and market research.
              </p>

              <h3 className="mb-3 text-xl font-semibold">
                4.3 Legal Requirements
              </h3>
              <p className="mb-4">
                We may disclose information when required by law, court order,
                or government request, or to protect safety and security.
              </p>

              <h3 className="mb-3 text-xl font-semibold">
                4.4 Business Transfers
              </h3>
              <p>
                In the event of a merger, acquisition, or sale of assets, your
                information may be transferred to the new entity.
              </p>
            </div>

            <div className="mb-12" id="data-security">
              <h2 className="mb-4 text-2xl font-bold">5. Data Security</h2>
              <p className="mb-4">
                We implement robust security measures to protect your personal
                information:
              </p>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="card border border-success/20 bg-success/5">
                  <div className="card-body">
                    <h3 className="mb-2 font-semibold">Technical Safeguards</h3>
                    <ul className="space-y-1 text-sm">
                      <li>• End-to-end encryption</li>
                      <li>• Secure data transmission (TLS/SSL)</li>
                      <li>• Regular security audits</li>
                      <li>• Access controls and monitoring</li>
                    </ul>
                  </div>
                </div>

                <div className="card border border-info/20 bg-info/5">
                  <div className="card-body">
                    <h3 className="mb-2 font-semibold">
                      Operational Safeguards
                    </h3>
                    <ul className="space-y-1 text-sm">
                      <li>• Employee background checks</li>
                      <li>• Data minimization practices</li>
                      <li>• Incident response procedures</li>
                      <li>• Regular staff training</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-12" id="your-rights">
              <h2 className="mb-4 text-2xl font-bold">
                6. Your Privacy Rights
              </h2>
              <p className="mb-4">
                Under the POPI Act and other applicable laws, you have the
                following rights:
              </p>

              <div className="space-y-4">
                <div className="card bg-base-100 shadow-lg">
                  <div className="card-body">
                    <h3 className="card-title text-lg">Access & Portability</h3>
                    <p className="text-sm">
                      Request a copy of your personal information and export
                      your data in a machine-readable format.
                    </p>
                  </div>
                </div>

                <div className="card bg-base-100 shadow-lg">
                  <div className="card-body">
                    <h3 className="card-title text-lg">Correction & Updates</h3>
                    <p className="text-sm">
                      Update or correct inaccurate personal information in your
                      account settings or by contacting us.
                    </p>
                  </div>
                </div>

                <div className="card bg-base-100 shadow-lg">
                  <div className="card-body">
                    <h3 className="card-title text-lg">Deletion</h3>
                    <p className="text-sm">
                      Request deletion of your personal information, subject to
                      legal and business requirements.
                    </p>
                  </div>
                </div>

                <div className="card bg-base-100 shadow-lg">
                  <div className="card-body">
                    <h3 className="card-title text-lg">Opt-out</h3>
                    <p className="text-sm">
                      Unsubscribe from marketing communications and opt-out of
                      certain data processing activities.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-12" id="cookies">
              <h2 className="mb-4 text-2xl font-bold">
                7. Cookies & Tracking Technologies
              </h2>
              <p className="mb-4">
                We use cookies and similar technologies to enhance your
                experience:
              </p>
              <ul className="mb-4 list-disc pl-6">
                <li>
                  <strong>Essential Cookies:</strong> Required for basic
                  platform functionality
                </li>
                <li>
                  <strong>Analytics Cookies:</strong> Help us understand how you
                  use our Services
                </li>
                <li>
                  <strong>Marketing Cookies:</strong> Used to show relevant
                  advertisements
                </li>
                <li>
                  <strong>Preference Cookies:</strong> Remember your settings
                  and preferences
                </li>
              </ul>
              <p>
                You can manage cookie preferences through your browser settings
                or our Cookie Preference Center.
              </p>
            </div>

            <div className="mb-12" id="children">
              <h2 className="mb-4 text-2xl font-bold">8. Childrens Privacy</h2>
              <p className="mb-4">
                Our Services are not intended for children under 18. We do not
                knowingly collect personal information from children. If you
                believe we have collected information from a child, please
                contact us immediately.
              </p>
              <p>
                Minors may use our Services only with appropriate parental
                supervision and consent.
              </p>
            </div>

            <div className="mb-12" id="updates">
              <h2 className="mb-4 text-2xl font-bold">9. Policy Updates</h2>
              <p className="mb-4">
                We may update this Privacy Policy from time to time to reflect
                changes in our practices or legal requirements. We will notify
                you of material changes through the app, email, or website
                notice.
              </p>
              <p>
                Continued use of our Services after policy updates constitutes
                acceptance of the revised terms.
              </p>
            </div>

            <div className="mb-12" id="contact">
              <h2 className="mb-4 text-2xl font-bold">10. Contact Us</h2>
              <p className="mb-4">
                For privacy-related questions or to exercise your rights,
                contact our Data Protection Officer:
              </p>
              <div className="card bg-base-100 shadow-lg">
                <div className="card-body">
                  <h3 className="card-title">Privacy Contact</h3>
                  <div className="space-y-2">
                    <p>Data Protection Officer</p>
                    <p>Hareeng (Pty) Ltd</p>
                    <p>123 Business District, Cape Town, 8001</p>
                    <div className="flex items-center gap-2">
                      <Mail size={16} />
                      <span>privacy@hareeng.co.za</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone size={16} />
                      <span>+27 21 123 4567</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer Actions */}
        <section className="bg-base-100 py-8">
          <div className="mx-auto max-w-4xl px-4">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="text-sm text-base-content/70">
                <p>
                  This policy complies with South African privacy laws including
                  the POPI Act.
                </p>
              </div>
              <div className="flex gap-2">
                <button className="btn btn-outline btn-sm">
                  Manage Preferences
                </button>
                <button className="btn btn-primary btn-sm">Download PDF</button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
