import {
  Bike,
  Building2,
  Car,
  ChevronDown,
  ChevronUp,
  User,
  Utensils,
} from "lucide-react";
import { useState } from "react";

interface MegamenuProps {
  onClose: () => void;
  open: boolean;
}

const sections = [
  {
    id: "services",
    items: [
      { icon: <User size={18} />, label: "Make Money" },
      { icon: <Car size={18} />, label: "Safety" },
      { icon: <User size={18} />, label: "Support" },
      { icon: <Building2 size={18} />, label: "Supported Cities" },
    ],
    title: "What we offer",
  },
  {
    id: "rides",
    items: [
      { icon: <Car size={18} />, label: "Rider safety" },
      { icon: <User size={18} />, label: "Become a driver" },
      { icon: <Car size={18} />, label: "Report an issue" },
      { icon: <User size={18} />, label: "Become a delivery driver" },
    ],
    title: "Catch Rides",
  },
  {
    id: "drive",
    items: [
      { icon: <User size={18} />, label: "FAQ" },
      { icon: <User size={18} />, label: "Emergency report" },
      { icon: <Car size={18} />, label: "Report a vehicle" },
    ],
    title: "Hareeng ",
  },
  {
    id: "scooters",
    items: [
      { icon: <Bike size={18} />, label: "Scooter safety" },
      { icon: <User size={18} />, label: "Report an issue" },
      { icon: <Car size={18} />, label: "Safety lab" },
    ],
    title: "Scooters",
  },
];

const opportunities = [
  {
    icon: <Bike size={32} />,
    label: "Become a courier",
    subtitle: "Deliver Orders and earn money",
  },
  {
    icon: <Utensils size={32} />,
    label: "Add a restaurant or store",
    subtitle: "Join Hareeng and reach more customers",
  },
  {
    icon: <Car size={32} />,
    label: "Sign up as a fleet owner",
    subtitle: "Add your fleet to Hareeng and boost your income",
  },
  {
    icon: <Building2 size={32} />,
    label: "Hareeng Business",
    subtitle: "Hareeng products and services for your business",
  },
];

export default function MegaMenu({ onClose, open }: MegamenuProps) {
  const [openSection, setOpenSection] = useState<null | string>(null);

  const toggleSection = (section: string) => {
    setOpenSection((prev) => (prev === section ? null : section));
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-base-100 bg-opacity-95">
      {/* Close button (fixed at the top) */}
      <div className="sticky top-0 z-10 flex justify-end bg-base-100 bg-opacity-95 p-6">
        <button
          aria-label="Close menu"
          className="btn btn-ghost text-3xl"
          onClick={onClose}
        >
          ×
        </button>
      </div>

      {/* Scrollable content */}
      <div className="w-full flex-1 overflow-y-auto px-4 pb-8">
        {/* Desktop */}
        <div className="hidden h-full grid-cols-3 gap-8 md:grid">
          <div className="col-span-2 grid grid-cols-2 gap-8">
            {sections.map((section) => (
              <div
                className="h-fit rounded-xl bg-base-200 p-6"
                key={section.id}
              >
                <div className="mb-3 flex items-center gap-2 text-lg font-bold">
                  {section.items[0]?.icon}
                  {section.title}
                </div>
                <ul>
                  {section.items.map((item) => (
                    <li
                      className="flex items-center gap-2 py-1"
                      key={item.label}
                    >
                      {item.icon}
                      <a className="link-hover link" href="#">
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="flex h-fit flex-col gap-4 rounded-xl bg-base-200 p-6">
            <div className="grid gap-4">
              {opportunities.map((item) => (
                <div
                  className="flex flex-col items-center rounded-lg bg-base-100 p-4 shadow transition hover:shadow-lg"
                  key={item.label}
                >
                  <div className="mb-2 text-primary">{item.icon}</div>
                  <div className="font-semibold">{item.label}</div>
                  <div className="text-center text-xs text-base-content/70">
                    {item.subtitle}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile */}
        <div className="md:hidden">
          {sections.map((section) => (
            <div
              className="mb-4 border-b border-base-content/20 pb-2"
              key={section.id}
            >
              <button
                className="flex w-full items-center justify-between py-2 text-left text-lg font-bold"
                onClick={() => toggleSection(section.id)}
              >
                <span className="flex items-center gap-2">
                  {section.items[0]?.icon}
                  {section.title}
                </span>
                {openSection === section.id ? (
                  <ChevronUp size={18} />
                ) : (
                  <ChevronDown size={18} />
                )}
              </button>
              {openSection === section.id && (
                <ul className="pl-4 text-base-content/80">
                  {section.items.map((item) => (
                    <li
                      className="flex items-center gap-2 py-1"
                      key={item.label}
                    >
                      {item.icon}
                      <a className="link-hover link" href="#">
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}

          <div className="mt-6">
            <div className="mb-2 font-bold">Opportunities</div>
            <div className="grid gap-4">
              {opportunities.map((item) => (
                <div
                  className="flex flex-col items-center rounded-lg bg-base-200 p-4 shadow"
                  key={item.label}
                >
                  <div className="mb-2 text-primary">{item.icon}</div>
                  <div className="font-semibold">{item.label}</div>
                  <div className="text-center text-xs text-base-content/70">
                    {item.subtitle}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
