import {
  BarChart3,
  CheckCircle,
  Cookie,
  Info,
  RotateCcw,
  Settings,
  Shield,
  Target,
  XCircle,
} from "lucide-react";
import { useState } from "react";

import AppNavbar from "@/components/common/AppNavbar";
import Breadcrumbs from "@/components/common/Breadcrumbs";

export default function CookiePreferences() {
  const [preferences, setPreferences] = useState({
    analytics: true,
    essential: true, // Always required
    functional: true,
    marketing: false,
  });

  const handleToggle = (category: keyof typeof preferences) => {
    if (category === "essential") return; // Essential cookies cannot be disabled

    setPreferences((prev) => ({
      ...prev,
      [category]: !prev[category],
    }));
  };

  const resetToDefaults = () => {
    setPreferences({
      analytics: false,
      essential: true,
      functional: false,
      marketing: false,
    });
  };

  const acceptAll = () => {
    setPreferences({
      analytics: true,
      essential: true,
      functional: true,
      marketing: true,
    });
  };

  const cookieCategories = [
    {
      description:
        "These cookies are necessary for the website to function and cannot be disabled.",
      examples: [
        "Authentication and security",
        "Shopping cart functionality",
        "Form submission data",
        "Load balancing",
      ],
      icon: <Shield className="text-success" size={24} />,
      id: "essential",
      name: "Essential Cookies",
      required: true,
      retention: "Session or up to 1 year",
    },
    {
      description: "These cookies enhance functionality and personalization.",
      examples: [
        "Language preferences",
        "Regional settings",
        "Accessibility options",
        "UI customization",
      ],
      icon: <Settings className="text-info" size={24} />,
      id: "functional",
      name: "Functional Cookies",
      required: false,
      retention: "Up to 2 years",
    },
    {
      description:
        "These cookies help us understand how visitors interact with our website.",
      examples: [
        "Page views and traffic",
        "User behavior patterns",
        "Performance metrics",
        "Error tracking",
      ],
      icon: <BarChart3 className="text-warning" size={24} />,
      id: "analytics",
      name: "Analytics Cookies",
      required: false,
      retention: "Up to 2 years",
    },
    {
      description:
        "These cookies are used to track visitors and show relevant advertisements.",
      examples: [
        "Targeted advertising",
        "Social media integration",
        "Cross-site tracking",
        "Conversion tracking",
      ],
      icon: <Target className="text-error" size={24} />,
      id: "marketing",
      name: "Marketing Cookies",
      required: false,
      retention: "Up to 2 years",
    },
  ];

  const thirdPartyServices = [
    {
      category: "Analytics",
      dataCollected: "Pageviews, user interactions, demographics",
      name: "Google Analytics",
      privacyPolicy: "https://policies.google.com/privacy",
      purpose: "Website traffic analysis",
    },
    {
      category: "Marketing",
      dataCollected: "Ad interactions, conversion events",
      name: "Google Ads",
      privacyPolicy: "https://policies.google.com/privacy",
      purpose: "Advertising and remarketing",
    },
    {
      category: "Marketing",
      dataCollected: "Website visits, custom events",
      name: "Facebook Pixel",
      privacyPolicy: "https://www.facebook.com/privacy/policy",
      purpose: "Social media advertising",
    },
    {
      category: "Analytics",
      dataCollected: "Mouse movements, clicks, form interactions",
      name: "Hotjar",
      privacyPolicy: "https://www.hotjar.com/legal/policies/privacy",
      purpose: "User experience analysis",
    },
  ];

  return (
    <>
      <AppNavbar />

      <div className="min-h-screen bg-base-200 pt-16">
        <Breadcrumbs />

        {/* Header */}
        <section className="bg-base-100 py-12">
          <div className="mx-auto max-w-4xl px-4">
            <div className="text-center">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-warning/10 px-4 py-2">
                <Cookie className="text-warning" size={20} />
                <span className="font-medium text-warning">
                  Cookie Settings
                </span>
              </div>
              <h1 className="mb-4 text-4xl font-bold">Cookie Preferences</h1>
              <p className="text-xl text-base-content/70">
                Manage how we use cookies and tracking technologies on your
                device
              </p>
            </div>
          </div>
        </section>

        {/* Quick Actions */}
        <section className="py-8">
          <div className="mx-auto max-w-4xl px-4">
            <div className="card border border-primary/20 bg-primary/5">
              <div className="card-body">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <h2 className="mb-2 text-lg font-semibold">
                      Quick Actions
                    </h2>
                    <p className="text-sm text-base-content/70">
                      Accept all cookies or customize your preferences below
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <button
                      className="btn btn-outline btn-sm"
                      onClick={resetToDefaults}
                    >
                      <RotateCcw size={16} />
                      Essential Only
                    </button>
                    <button
                      className="btn btn-primary btn-sm"
                      onClick={acceptAll}
                    >
                      <CheckCircle size={16} />
                      Accept All
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Cookie Categories */}
        <section className="py-8">
          <div className="mx-auto max-w-4xl px-4">
            <h2 className="mb-6 text-2xl font-bold">Cookie Categories</h2>

            <div className="space-y-6">
              {cookieCategories.map((category) => (
                <div className="card bg-base-100 shadow-lg" key={category.id}>
                  <div className="card-body">
                    <div className="mb-4 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        {category.icon}
                        <div>
                          <h3 className="text-xl font-semibold">
                            {category.name}
                          </h3>
                          {category.required && (
                            <span className="badge badge-success badge-sm">
                              Required
                            </span>
                          )}
                        </div>
                      </div>

                      <div className="form-control">
                        <label className="label cursor-pointer gap-3">
                          <span className="label-text font-medium">
                            {preferences[
                              category.id as keyof typeof preferences
                            ]
                              ? "Enabled"
                              : "Disabled"}
                          </span>
                          <input
                            checked={
                              preferences[
                                category.id as keyof typeof preferences
                              ]
                            }
                            className="toggle toggle-primary"
                            disabled={category.required}
                            onChange={() =>
                              handleToggle(
                                category.id as keyof typeof preferences,
                              )
                            }
                            type="checkbox"
                          />
                        </label>
                      </div>
                    </div>

                    <p className="mb-4 text-base-content/80">
                      {category.description}
                    </p>

                    <div className="grid gap-4 md:grid-cols-2">
                      <div>
                        <h4 className="mb-2 font-semibold">Examples of use:</h4>
                        <ul className="space-y-1 text-sm">
                          {category.examples.map((example, index) => (
                            <li className="flex items-center gap-2" key={index}>
                              <div className="h-1 w-1 rounded-full bg-primary"></div>
                              {example}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="mb-2 font-semibold">Data retention:</h4>
                        <p className="text-sm text-base-content/70">
                          {category.retention}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Third Party Services */}
        <section className="bg-base-100 py-16">
          <div className="mx-auto max-w-4xl px-4">
            <h2 className="mb-6 text-2xl font-bold">Third-Party Services</h2>
            <p className="mb-6 text-base-content/70">
              We use third-party services that may set cookies on your device.
              Here is what data they collect and how it is used:
            </p>
            <div className="space-y-4">
              {thirdPartyServices.map((service, index) => (
                <div className="card bg-base-200 shadow-lg" key={index}>
                  <div className="card-body">
                    <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                      <div className="flex-1">
                        <div className="mb-2 flex items-center gap-3">
                          <h3 className="text-lg font-semibold">
                            {service.name}
                          </h3>
                          <span className="badge badge-outline badge-sm">
                            {service.category}
                          </span>
                        </div>
                        <p className="mb-2 text-sm text-base-content/80">
                          {service.purpose}
                        </p>
                        <p className="text-xs text-base-content/70">
                          <strong>Data collected:</strong>{" "}
                          {service.dataCollected}
                        </p>
                      </div>

                      <div className="flex gap-2">
                        <a
                          className="btn btn-outline btn-sm"
                          href={service.privacyPolicy}
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          Privacy Policy
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Browser Settings */}
        <section className="py-16">
          <div className="mx-auto max-w-4xl px-4">
            <h2 className="mb-6 text-2xl font-bold">Browser Cookie Settings</h2>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="card bg-base-100 shadow-lg">
                <div className="card-body">
                  <h3 className="card-title mb-4">Manage in Your Browser</h3>
                  <p className="mb-4 text-sm text-base-content/70">
                    You can also manage cookies directly in your browser
                    settings. Note that disabling cookies may affect website
                    functionality.
                  </p>

                  <div className="space-y-3">
                    <div className="collapse collapse-arrow bg-base-200">
                      <input name="browser-accordion" type="radio" />
                      <div className="collapse-title text-sm font-medium">
                        Google Chrome
                      </div>
                      <div className="collapse-content">
                        <p className="text-xs">
                          Settings → Privacy and security → Cookies and other
                          site data
                        </p>
                      </div>
                    </div>

                    <div className="collapse collapse-arrow bg-base-200">
                      <input name="browser-accordion" type="radio" />
                      <div className="collapse-title text-sm font-medium">
                        Safari
                      </div>
                      <div className="collapse-content">
                        <p className="text-xs">
                          Preferences → Privacy → Manage Website Data
                        </p>
                      </div>
                    </div>

                    <div className="collapse collapse-arrow bg-base-200">
                      <input name="browser-accordion" type="radio" />
                      <div className="collapse-title text-sm font-medium">
                        Firefox
                      </div>
                      <div className="collapse-content">
                        <p className="text-xs">
                          Options → Privacy & Security → Cookies and Site Data
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card border border-info/20 bg-info/5">
                <div className="card-body">
                  <div className="mb-4 flex items-center gap-2">
                    <Info className="text-info" size={20} />
                    <h3 className="card-title">Important Information</h3>
                  </div>

                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="mt-0.5 text-success" size={14} />
                      <span>
                        Your preferences are saved locally on this device
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Info className="mt-0.5 text-info" size={14} />
                      <span>Changes apply immediately to new page loads</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <XCircle className="mt-0.5 text-warning" size={14} />
                      <span>
                        Disabling cookies may limit website functionality
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <RotateCcw className="mt-0.5 text-primary" size={14} />
                      <span>You can change these settings at any time</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Save Preferences */}
        <section className="bg-base-100 py-8">
          <div className="mx-auto max-w-4xl px-4">
            <div className="card border border-primary/20 bg-primary/5">
              <div className="card-body text-center">
                <h3 className="mb-4 text-xl font-semibold">
                  Save Your Preferences
                </h3>
                <p className="mb-6 text-base-content/70">
                  Your cookie preferences have been updated. These settings will
                  be applied to your future visits to our website.
                </p>

                <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                  <button className="btn btn-primary">
                    <CheckCircle size={16} />
                    Save Preferences
                  </button>
                  <button className="btn btn-outline">
                    <Info size={16} />
                    Learn More About Cookies
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
