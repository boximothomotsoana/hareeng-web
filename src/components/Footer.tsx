import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const footerLinks = [
  {
    links: [
      { label: "Catch Rides", path: "/pages/catch-rides" },
      { label: "Scooters", path: "/pages/find-scooters" },
      { label: "Restaurants", path: "/pages/restaurants" },
      { label: "Hareeng Eats", path: "/pages/eats" },
      { label: "Hareeng Business", path: "/coming-soon" },
    ],
    title: "Services",
  },
  {
    links: [
      { label: "Drive with Hareeng", path: "/driver/vehicle-driver-signup" },
      { label: "Deliver with Hareeng", path: "/driver/delivery-signup" },
      {
        label: "Sell on Hareeng Eats",
        path: "/partners/restaurant-registration",
      },
      { label: "Fleet Owners", path: "/partners/fleet-registration" },
      {
        label: "Courier Opportunities",
        path: "/partners/courier-registration",
      },
    ],
    title: "Partner with Us",
  },
  {
    links: [
      { label: "Who We Are", path: "/pages/about-us/who-we-are" },
      { label: "Careers", path: "/pages/about-us/careers" },
      { label: "Updates", path: "/pages/about-us/updates" },
      { label: "For Investors", path: "/pages/about-us/for-investors" },
      { label: "For Communities", path: "/pages/about-us/for-communities" },
    ],
    title: "About Us",
  },
  {
    links: [
      { label: "Rider Safety", path: "/safety/rider-safety" },
      { label: "Scooter Safety", path: "/safety/scooter-safety" },
      { label: "Emergency Support", path: "/support/emergency-report" },
      { label: "Report an Issue", path: "/support/report-issue" },
      { label: "Report a Vehicle", path: "/support/report-vehicle" },
    ],
    title: "Safety & Trust",
  },
  {
    links: [
      { label: "Cities We Serve", path: "/pages/about-us/cities-we-serve" },
      { label: "Airport Services", path: "/pages/about-us/airport-services" },
    ],
    title: "Where We Operate",
  },
];

const socials = [
  {
    icon: "facebook-f",
    label: "Facebook",
    url: "https://facebook.com/hareeng",
  },
  { icon: "x-twitter", label: "Twitter", url: "https://twitter.com/hareeng" },
  {
    icon: "instagram",
    label: "Instagram",
    url: "https://instagram.com/hareeng",
  },
  {
    icon: "linkedin-in",
    label: "LinkedIn",
    url: "https://linkedin.com/company/hareeng",
  },
  { icon: "tiktok", label: "TikTok", url: "https://tiktok.com/@hareeng" },
];

const legalLinks = [
  { label: "Terms of Use", path: "/pages/legal/terms-of-use" },
  { label: "Privacy Policy", path: "/pages/legal/privacy-policy" },
  { label: "Cookie Preferences", path: "/pages/legal/cookie-preferences" },
  { label: "Data Protection", path: "/pages/legal/data-protection" },
];

export default function Footer() {
  const [open, setOpen] = useState<null | number>(null);
  const navigate = useNavigate();

  const handleLinkClick = (path: string) => {
    // Check if it's an external link or internal route
    if (path.startsWith("http")) {
      window.open(path, "_blank", "noopener,noreferrer");
    } else {
      navigate(path);
    }
  };

  const handleAppDownload = (type: "eats" | "rider") => {
    // You can customize this to redirect to actual app store links
    if (type === "rider") {
      window.open(
        "https://play.google.com/store/apps/details?id=com.hareeng.rider",
        "_blank",
      );
    } else {
      window.open(
        "https://play.google.com/store/apps/details?id=com.hareeng.eats",
        "_blank",
      );
    }
  };

  return (
    <footer className="bg-base-300 px-4 pb-4 pt-12 text-base-content">
      {/* Desktop */}
      <div className="mx-auto hidden max-w-7xl grid-cols-2 gap-8 border-b border-base-content/20 pb-8 md:grid lg:grid-cols-5">
        {footerLinks.map((section) => (
          <div key={section.title}>
            <div className="mb-2 font-bold">{section.title}</div>
            <ul className="space-y-1">
              {section.links.map((link) => (
                <li key={link.label}>
                  <button
                    className="text-left text-base-content/80 transition-colors hover:text-primary hover:underline"
                    onClick={() => handleLinkClick(link.path)}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Mobile Collapsible */}
      <div className="border-b border-base-content/20 pb-4 md:hidden">
        {footerLinks.map((section, idx) => (
          <div className="mb-2" key={section.title}>
            <button
              className="flex w-full items-center justify-between py-2 font-bold"
              onClick={() => setOpen(open === idx ? null : idx)}
            >
              {section.title}
              {open === idx ? (
                <ChevronUp size={18} />
              ) : (
                <ChevronDown size={18} />
              )}
            </button>
            {open === idx && (
              <ul className="space-y-1 pb-2 pl-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <button
                      className="text-left text-base-content/80 transition-colors hover:text-primary hover:underline"
                      onClick={() => handleLinkClick(link.path)}
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>

      {/* Bottom bar */}
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 pt-6 md:flex-row">
        {/* Language and Branding */}
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-2">
            <img
              alt="South Africa"
              className="h-4 w-6 rounded"
              src="https://flagcdn.com/za.svg"
            />
            EN
          </span>
          <button
            className="ml-4 text-xl font-bold transition-colors hover:text-primary"
            onClick={() => navigate("/")}
          >
            Hareeng
          </button>

          {/* Socials */}
          <div className="ml-4 flex gap-3">
            {socials.map(({ icon, label, url }) => (
              <a
                aria-label={label}
                className="text-lg transition-colors hover:text-primary"
                href={url}
                key={icon}
                rel="noopener noreferrer"
                target="_blank"
              >
                <i className={`fa-brands fa-${icon}`}></i>
              </a>
            ))}
          </div>
        </div>

        {/* App Buttons */}
        <div className="mt-4 flex gap-2 md:mt-0">
          <button
            className="btn btn-outline btn-primary btn-sm"
            onClick={() => handleAppDownload("rider")}
          >
            Download Hareeng
          </button>
          <button
            className="btn btn-outline btn-primary btn-sm"
            onClick={() => handleAppDownload("eats")}
          >
            Try Hareeng Eats
          </button>
        </div>
      </div>

      {/* Legal Section */}
      <div className="mx-auto mt-6 flex max-w-7xl flex-col items-center justify-between gap-2 text-xs text-base-content/60 md:flex-row">
        <div className="flex flex-wrap gap-4">
          {legalLinks.map((link) => (
            <button
              className="transition-colors hover:text-primary"
              key={link.label}
              onClick={() => handleLinkClick(link.path)}
            >
              {link.label}
            </button>
          ))}
        </div>
        <div className="mt-2 md:mt-0">&copy; 2025 Hareeng Mobility Group</div>
      </div>
    </footer>
  );
}
