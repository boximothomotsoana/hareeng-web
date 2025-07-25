import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

const footerLinks = [
  {
    links: [
      "City Rides",
      "Electric Scooters",
      "E-Bikes",
      "Hareeng Mobility",
      "Hareeng Eats",
      "Hareeng Mall",
      "Hareeng Workspaces",
      "Hareeng Prime",
    ],
    title: "Services",
  },
  {
    links: [
      "Drive with Hareeng",
      "Deliver with Hareeng",
      "Sell on Hareeng Eats",
      "Fleet Owners",
      "Franchise Opportunities",
    ],
    title: "Partner with Us",
  },
  {
    links: [
      "Who We Are",
      "Join Our Team",
      "Green Initiatives",
      "Hareeng Stories",
      "Media Center",
      "Brand Assets",
    ],
    title: "About Us",
  },
  {
    links: [
      "For Riders",
      "For Drivers",
      "Food Delivery Help",
      "Delivery Partners",
      "Fleet Assistance",
      "Restaurant Help",
      "Business Inquiries",
    ],
    title: "Help & Support",
  },
  {
    links: [
      "Ride Safety",
      "Delivery Safety",
      "Micromobility Rules",
      "Trust Center",
    ],
    title: "Safety & Trust",
  },
  {
    links: ["Cities We Serve", "Airport Services"],
    title: "Where We Operate",
  },
  {
    links: ["Our Vision", "Charging Infrastructure"],
    title: "Urban Solutions",
  },
];

const socials = [
  { icon: "facebook-f", url: "#" },
  { icon: "x-twitter", url: "#" },
  { icon: "instagram", url: "#" },
  { icon: "linkedin-in", url: "#" },
  { icon: "tiktok", url: "#" },
];

export default function Footer() {
  const [open, setOpen] = useState<null | number>(null);

  return (
    <footer className="bg-base-300 px-4 pb-4 pt-12 text-base-content">
      {/* Desktop */}
      <div className="mx-auto hidden max-w-7xl grid-cols-2 gap-8 border-b border-base-content/20 pb-8 md:grid lg:grid-cols-7">
        {footerLinks.map((section) => (
          <div key={section.title}>
            <div className="mb-2 font-bold">{section.title}</div>
            <ul className="space-y-1">
              {section.links.map((link) => (
                <li key={link}>
                  <a className="text-base-content/80 hover:underline" href="#">
                    {link}
                  </a>
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
                  <li key={link}>
                    <a
                      className="text-base-content/80 hover:underline"
                      href="#"
                    >
                      {link}
                    </a>
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
              alt="ZA"
              className="h-4 w-6 rounded"
              src="https://flagcdn.com/za.svg"
            />
            EN
          </span>
          <span className="ml-4 text-xl font-bold">Hareeng</span>

          {/* Socials */}
          <div className="ml-4 flex gap-2">
            {socials.map(({ icon, url }) => (
              <a
                aria-label={icon}
                className="text-lg hover:text-primary"
                href={url}
                key={icon}
              >
                <i className={`fa-brands fa-${icon}`}></i>
              </a>
            ))}
          </div>
        </div>

        {/* App Buttons */}
        <div className="mt-4 flex gap-2 md:mt-0">
          <button className="btn btn-outline btn-success btn-sm">
            Download Hareeng
          </button>
          <button className="btn btn-outline btn-success btn-sm">
            Try Hareeng Eats
          </button>
        </div>
      </div>

      {/* Legal Section */}
      <div className="mx-auto mt-6 flex max-w-7xl flex-col items-center justify-between gap-2 text-xs text-base-content/60 md:flex-row">
        <div className="flex flex-wrap gap-4">
          <a href="#">Vendor Portal</a>
          <a href="#">Terms of Use</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Cookie Preferences</a>
          <a href="#">Data Protection</a>
        </div>
        <div className="mt-2 md:mt-0">&copy; 2025 Hareeng Mobility Group</div>
      </div>
    </footer>
  );
}
