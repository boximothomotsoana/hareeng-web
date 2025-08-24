import {
  AlertTriangle,
  Building2,
  Car,
  ChevronDown,
  ChevronUp,
  FileText,
  HelpCircle,
  Package,
  Phone,
  Shield,
  Store,
  Truck,
  Users,
  Zap,
} from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface MegamenuProps {
  onClose: () => void;
  open: boolean;
}

const sections = [
  {
    id: "services",
    items: [
      { icon: <Car size={18} />, label: "Become a driver" },
      { icon: <Package size={18} />, label: "Become delivery driver" },
      { icon: <Zap size={18} />, label: "Become Scooter Driver" },
    ],
    title: "What we offer",
  },
  {
    id: "rides",
    items: [
      { icon: <Shield size={18} />, label: "Rider safety" },
      { icon: <AlertTriangle size={18} />, label: "Report a vehicle" },
      { icon: <FileText size={18} />, label: "Report an issue" },
    ],
    title: "Safety & Support",
  },
  {
    id: "drive",
    isPromotion: true,
    items: [
      { icon: <HelpCircle size={18} />, label: "FAQ" },
      { icon: <Phone size={18} />, label: "Emergency report" },
    ],
    promotionImage:
      "https://images.unsplash.com/photo-1574207393471-f6a566683941?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?w=400&h=250&fit=crop&crop=center",
    promotionText: "Join 10,000+ drivers earning with Hareeng",
    title: "Driver Resources",
  },
  {
    id: "scooters",
    isPromotion: true,
    items: [
      { icon: <Shield size={18} />, label: "Scooter safety" },
      { icon: <FileText size={18} />, label: "Report an issue" },
    ],
    promotionImage:
      "https://images.unsplash.com/photo-1554223789-df81106a45ed?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?w=400&h=250&fit=crop&crop=center",
    promotionText: "Eco-friendly rides across the city",
    title: "Scooter Hub",
  },
];

const opportunities = [
  {
    icon: <Truck size={32} />,
    label: "Become a courier",
    subtitle: "Deliver Orders and earn money",
  },
  {
    icon: <Store size={32} />,
    label: "Add a restaurant or store",
    subtitle: "Join Hareeng and reach more customers",
  },
  {
    icon: <Users size={32} />,
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
  const navigate = useNavigate();

  const handleLinkClick = (label: string) => {
    onClose();

    switch (label) {
      case "Add a restaurant or store":
        navigate("/partners/restaurant-registration");
        break;
      case "Become a courier":
        navigate("/partners/courier-registration");
        break;
      case "Become a driver":
        navigate("/driver/vehicle-driver-signup");
        break;
      case "Become delivery driver":
        navigate("/driver/delivery-signup");
        break;
      case "Become Scooter Driver":
        navigate("/driver/scooter-driver-signup");
        break;
      case "Emergency report":
        navigate("/support/emergency-report");
        break;
      case "FAQ":
        navigate("/support/faq");
        break;
      case "Hareeng Business":
        navigate("/coming-soon");
        break;
      case "Make Money":
        navigate("/make-money");
        break;
      case "Report an issue":
        navigate("/support/report-issue");
        break;
      case "Report a vehicle":
        navigate("/support/report-vehicle");
        break;
      case "Rider safety":
        navigate("/safety/rider-safety");
        break;
      case "Scooter safety":
        navigate("/safety/scooter-safety");
        break;
      case "Sign up as a fleet owner":
        navigate("/partners/fleet-registration");
        break;
      default:
        // Optional fallback
        console.warn("No route defined for:", label);
    }
  };

  const toggleSection = (section: string) => {
    setOpenSection((prev) => (prev === section ? null : section));
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-base-100 bg-opacity-95 backdrop-blur-sm">
      {/* Close button (fixed at the top) */}
      <div className="sticky top-0 z-10 flex justify-end bg-base-100 bg-opacity-95 p-6">
        <button
          aria-label="Close menu"
          className="btn btn-circle btn-ghost text-2xl hover:bg-error hover:text-error-content"
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
                className={`h-fit rounded-xl p-6 ${
                  section.isPromotion
                    ? "border border-primary/20 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent"
                    : "bg-base-200"
                }`}
                key={section.id}
              >
                {section.isPromotion && section.promotionImage ? (
                  <div className="mb-4">
                    <div className="relative overflow-hidden rounded-lg">
                      <img
                        alt={section.title}
                        className="h-32 w-full object-cover transition-transform hover:scale-105"
                        src={section.promotionImage}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                      <div className="absolute bottom-2 left-2 right-2">
                        <p className="text-sm font-medium text-white">
                          {section.promotionText}
                        </p>
                      </div>
                    </div>
                  </div>
                ) : null}

                <div
                  className={`mb-3 flex items-center gap-2 text-lg font-bold ${
                    section.isPromotion ? "text-primary" : ""
                  }`}
                >
                  {section.items[0]?.icon}
                  {section.title}
                </div>

                <ul className="space-y-1">
                  {section.items.map((item) => (
                    <li
                      className="flex items-center gap-3 rounded-lg px-2 py-2 transition-colors hover:bg-base-300/50"
                      key={item.label}
                    >
                      <span className="text-primary">{item.icon}</span>
                      <a
                        className="link-hover link flex-1 text-sm font-medium"
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          handleLinkClick(item.label);
                        }}
                      >
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
                  className="flex cursor-pointer flex-col items-center rounded-lg border border-transparent bg-base-100 p-4 shadow transition-all hover:scale-105 hover:border-primary/20 hover:shadow-lg"
                  key={item.label}
                  onClick={() => handleLinkClick(item.label)}
                >
                  <div className="mb-3 text-primary">{item.icon}</div>
                  <div className="text-center font-semibold">{item.label}</div>
                  <div className="mt-1 text-center text-xs text-base-content/70">
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
              className={`mb-4 rounded-lg p-4 ${
                section.isPromotion
                  ? "border border-primary/20 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent"
                  : "border-b border-base-content/20 pb-2"
              }`}
              key={section.id}
            >
              {section.isPromotion && section.promotionImage ? (
                <div className="mb-4">
                  <div className="relative overflow-hidden rounded-lg">
                    <img
                      alt={section.title}
                      className="h-24 w-full object-cover"
                      src={section.promotionImage}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    <div className="absolute bottom-1 left-2 right-2">
                      <p className="text-xs font-medium text-white">
                        {section.promotionText}
                      </p>
                    </div>
                  </div>
                </div>
              ) : null}

              <button
                className={`flex w-full items-center justify-between py-2 text-left text-lg font-bold ${
                  section.isPromotion ? "text-primary" : ""
                }`}
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
                <ul className="mt-2 space-y-1 pl-4 text-base-content/80">
                  {section.items.map((item) => (
                    <li
                      className="flex items-center gap-3 rounded-lg px-2 py-2 transition-colors hover:bg-base-300/50"
                      key={item.label}
                    >
                      <span className="text-primary">{item.icon}</span>
                      <a
                        className="link-hover link flex-1 text-sm"
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          handleLinkClick(item.label);
                        }}
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}

          <div className="mt-6 rounded-lg bg-base-200 p-4">
            <div className="mb-4 text-lg font-bold text-primary">
              Opportunities
            </div>
            <div className="grid gap-4">
              {opportunities.map((item) => (
                <div
                  className="flex cursor-pointer flex-col items-center rounded-lg border border-transparent bg-base-100 p-4 shadow transition-all hover:border-primary/20 hover:shadow-lg"
                  key={item.label}
                  onClick={() => handleLinkClick(item.label)}
                >
                  <div className="mb-2 text-primary">{item.icon}</div>
                  <div className="text-center font-semibold">{item.label}</div>
                  <div className="mt-1 text-center text-xs text-base-content/70">
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
