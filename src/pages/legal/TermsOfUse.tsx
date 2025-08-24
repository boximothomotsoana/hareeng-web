import { AlertCircle, Calendar, FileText, Mail, Phone } from "lucide-react";

import AppNavbar from "@/components/common/AppNavbar";
import Breadcrumbs from "@/components/common/Breadcrumbs";

export default function TermsOfUse() {
  return (
    <>
      <AppNavbar />

      <div className="min-h-screen bg-base-200 pt-16">
        <Breadcrumbs />

        {/* Header */}
        <section className="bg-base-100 py-12">
          <div className="mx-auto max-w-4xl px-4">
            <div className="text-center">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2">
                <FileText className="text-primary" size={20} />
                <span className="font-medium text-primary">Legal Document</span>
              </div>
              <h1 className="mb-4 text-4xl font-bold">Terms of Use</h1>
              <p className="text-xl text-base-content/70">
                Please read these terms carefully before using Hareeng services
              </p>
              <div className="mt-6 flex items-center justify-center gap-4 text-sm text-base-content/70">
                <div className="flex items-center gap-1">
                  <Calendar size={16} />
                  <span>Last updated: January 15, 2025</span>
                </div>
                <span>•</span>
                <span>Effective: January 1, 2025</span>
              </div>
            </div>
          </div>
        </section>

        {/* Table of Contents */}
        <section className="bg-base-300 py-8">
          <div className="mx-auto max-w-4xl px-4">
            <h2 className="mb-4 text-lg font-semibold">Table of Contents</h2>
            <div className="grid gap-2 md:grid-cols-3">
              <a className="link-hover link" href="#acceptance">
                1. Acceptance of Terms
              </a>
              <a className="link-hover link" href="#services">
                2. Services Description
              </a>
              <a className="link-hover link" href="#eligibility">
                3. Eligibility
              </a>
              <a className="link-hover link" href="#user-accounts">
                4. User Accounts
              </a>
              <a className="link-hover link" href="#payment">
                5. Payment Terms
              </a>
              <a className="link-hover link" href="#conduct">
                6. User Conduct
              </a>
              <a className="link-hover link" href="#intellectual-property">
                7. Intellectual Property
              </a>
              <a className="link-hover link" href="#privacy">
                8. Privacy
              </a>
              <a className="link-hover link" href="#termination">
                9. Termination
              </a>
              <a className="link-hover link" href="#disclaimers">
                10. Disclaimers
              </a>
              <a className="link-hover link" href="#liability">
                11. Limitation of Liability
              </a>
              <a className="link-hover link" href="#contact">
                12. Contact Information
              </a>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-16">
          <div className="prose prose-lg mx-auto max-w-4xl max-w-none px-4">
            <div className="mb-12" id="acceptance">
              <h2 className="mb-4 text-2xl font-bold">
                1. Acceptance of Terms
              </h2>
              <p className="mb-4">
                By accessing or using Hareengs services, including our mobile
                applications, website, and platform (collectively, the
                Services), you agree to be bound by these Terms of Use (Terms).
                If you do not agree to these Terms, you may not use our
                Services.
              </p>
              <p>
                These Terms constitute a legally binding agreement between you
                and Hareeng (Pty) Ltd, a company incorporated in South Africa
                (Hareeng, we, us, or our).
              </p>
            </div>

            <div className="mb-12" id="services">
              <h2 className="mb-4 text-2xl font-bold">
                2. Services Description
              </h2>
              <p className="mb-4">
                Hareeng provides a technology platform that connects users with
                independent third-party transportation providers, food delivery
                services, and other on-demand services. Our Services include:
              </p>
              <ul className="mb-4 list-disc pl-6">
                <li>Ride-hailing services connecting users with drivers</li>
                <li>
                  Food delivery services connecting users with restaurants
                </li>
                <li>Electric scooter sharing services</li>
                <li>Logistics and courier services</li>
                <li>Other mobility and delivery solutions</li>
              </ul>
              <p>
                Hareeng acts as an intermediary and does not provide
                transportation or delivery services directly.
              </p>
            </div>

            <div className="mb-12" id="eligibility">
              <h2 className="mb-4 text-2xl font-bold">3. Eligibility</h2>
              <p className="mb-4">To use our Services, you must:</p>
              <ul className="mb-4 list-disc pl-6">
                <li>Be at least 18 years old</li>
                <li>Have the legal capacity to enter into agreements</li>
                <li>Provide accurate and complete registration information</li>
                <li>Comply with all applicable laws and regulations</li>
                <li>
                  Not be prohibited from using our Services under South African
                  law
                </li>
              </ul>
              <p>
                Minors may use our Services only with appropriate adult
                supervision and consent from their parent or legal guardian.
              </p>
            </div>

            <div className="mb-12" id="user-accounts">
              <h2 className="mb-4 text-2xl font-bold">4. User Accounts</h2>
              <h3 className="mb-3 text-xl font-semibold">
                4.1 Account Creation
              </h3>
              <p className="mb-4">
                To access certain features of our Services, you must create an
                account. You agree to provide accurate, current, and complete
                information during the registration process.
              </p>

              <h3 className="mb-3 text-xl font-semibold">
                4.2 Account Security
              </h3>
              <p className="mb-4">
                You are responsible for maintaining the confidentiality of your
                account credentials and for all activities that occur under your
                account. You must notify us immediately of any unauthorized use
                of your account.
              </p>

              <h3 className="mb-3 text-xl font-semibold">
                4.3 Account Suspension
              </h3>
              <p>
                We reserve the right to suspend or terminate your account at any
                time for violation of these Terms or any other reason at our
                sole discretion.
              </p>
            </div>

            <div className="mb-12" id="payment">
              <h2 className="mb-4 text-2xl font-bold">5. Payment Terms</h2>
              <h3 className="mb-3 text-xl font-semibold">
                5.1 Payment Methods
              </h3>
              <p className="mb-4">
                You may pay for Services using credit cards, debit cards,
                digital wallets, or other payment methods we accept. By
                providing payment information, you represent that you are
                authorized to use the payment method.
              </p>

              <h3 className="mb-3 text-xl font-semibold">5.2 Pricing</h3>
              <p className="mb-4">
                Prices for Services are determined dynamically based on various
                factors including distance, time, demand, and local regulations.
                All prices include applicable taxes unless otherwise stated.
              </p>

              <h3 className="mb-3 text-xl font-semibold">5.3 Refunds</h3>
              <p>
                Refunds are provided in accordance with our refund policy.
                Generally, refunds are issued for cancelled services or service
                failures, subject to our investigation and verification.
              </p>
            </div>

            <div className="mb-12" id="conduct">
              <h2 className="mb-4 text-2xl font-bold">6. User Conduct</h2>
              <p className="mb-4">When using our Services, you agree not to:</p>
              <ul className="mb-4 list-disc pl-6">
                <li>Violate any applicable laws or regulations</li>
                <li>
                  Harass, threaten, or harm other users or service providers
                </li>
                <li>Use the Services for illegal or unauthorized purposes</li>
                <li>Interfere with or disrupt the Services or servers</li>
                <li>
                  Attempt to gain unauthorized access to any part of the
                  Services
                </li>
                <li>
                  Use automated systems to access the Services without
                  permission
                </li>
                <li>Provide false or misleading information</li>
                <li>Engage in fraudulent or deceptive practices</li>
              </ul>
            </div>

            <div className="mb-12" id="intellectual-property">
              <h2 className="mb-4 text-2xl font-bold">
                7. Intellectual Property
              </h2>
              <p className="mb-4">
                The Services and all content, features, and functionality are
                owned by Hareeng and are protected by copyright, trademark, and
                other intellectual property laws. You may not reproduce,
                distribute, or create derivative works without our express
                written permission.
              </p>
              <p>
                You retain ownership of any content you submit through our
                Services, but grant us a license to use such content for the
                purpose of providing and improving our Services.
              </p>
            </div>

            <div className="mb-12" id="privacy">
              <h2 className="mb-4 text-2xl font-bold">8. Privacy</h2>
              <p>
                Your privacy is important to us. Our collection and use of your
                personal information is governed by our Privacy Policy, which is
                incorporated into these Terms by reference. Please review our
                Privacy Policy to understand our practices.
              </p>
            </div>

            <div className="mb-12" id="termination">
              <h2 className="mb-4 text-2xl font-bold">9. Termination</h2>
              <p className="mb-4">
                You may terminate your account at any time by contacting us or
                using the account deletion feature in our app. We may terminate
                or suspend your access to the Services at any time, with or
                without notice, for any reason.
              </p>
              <p>
                Upon termination, your right to use the Services will cease
                immediately, but certain provisions of these Terms will survive
                termination.
              </p>
            </div>

            <div className="mb-12" id="disclaimers">
              <h2 className="mb-4 text-2xl font-bold">10. Disclaimers</h2>
              <div className="alert alert-warning mb-4">
                <AlertCircle size={20} />
                <span>
                  The Services are provided as is without warranties of any
                  kind, either express or implied.
                </span>
              </div>
              <p className="mb-4">
                We do not warrant that the Services will be uninterrupted,
                error-free, or completely secure. We disclaim all warranties,
                including but not limited to warranties of merchantability,
                fitness for a particular purpose, and non-infringement.
              </p>
            </div>

            <div className="mb-12" id="liability">
              <h2 className="mb-4 text-2xl font-bold">
                11. Limitation of Liability
              </h2>
              <p className="mb-4">
                To the maximum extent permitted by law, Hareeng shall not be
                liable for any indirect, incidental, special, consequential, or
                punitive damages arising out of or relating to your use of the
                Services.
              </p>
              <p>
                Our total liability to you for all claims arising out of or
                relating to the Services shall not exceed the amount you paid to
                us in the twelve months preceding the claim.
              </p>
            </div>

            <div className="mb-12" id="contact">
              <h2 className="mb-4 text-2xl font-bold">
                12. Contact Information
              </h2>
              <p className="mb-4">
                If you have questions about these Terms, please contact us:
              </p>
              <div className="card bg-base-100 shadow-lg">
                <div className="card-body">
                  <h3 className="card-title">Hareeng (Pty) Ltd</h3>
                  <div className="space-y-2">
                    <p>Legal Department</p>
                    <p>123 Business District, Cape Town, 8001</p>
                    <div className="flex items-center gap-2">
                      <Mail size={16} />
                      <span>legal@hareeng.co.za</span>
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
                <p>These Terms of Use are governed by South African law.</p>
              </div>
              <div className="flex gap-2">
                <button className="btn btn-outline btn-sm">Print Terms</button>
                <button className="btn btn-primary btn-sm">Download PDF</button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
