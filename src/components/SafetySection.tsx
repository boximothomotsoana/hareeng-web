import {
  Map,
  Mic2,
  PhoneCall,
  Route,
  ShieldCheck,
  UserCheck,
} from "lucide-react";
const safetyFeatures = [
  {
    description:
      "All rides can have in-app audio recording for your peace of mind. Recordings are encrypted and only accessed for safety investigations.",
    icon: <Mic2 className="text-primary" size={48} />,
    title: "Conversation Recording",
  },
  {
    description:
      "Every trip is tracked in real-time. Share your live route with friends or family for extra security.",
    icon: <Route className="text-primary" size={48} />,
    title: "Route Tracking",
  },
  {
    description:
      "We use advanced GPS to ensure your route is safe and efficient, and to help in case of emergencies.",
    icon: <Map className="text-primary" size={48} />,
    title: "Accurate GPS",
  },
  {
    description:
      "All drivers are background-checked and verified for your safety and comfort.",
    icon: <ShieldCheck className="text-primary" size={48} />,
    title: "Verified Drivers",
  },
  {
    description:
      "Contact emergency services or our support team directly from the app at any time during your ride.",
    icon: <PhoneCall className="text-primary" size={48} />,
    title: "Emergency Assistance",
  },
  {
    description:
      "Riders can verify their identity for added trust and safety on every trip.",
    icon: <UserCheck className="text-primary" size={48} />,
    title: "Rider Verification",
  },
];

export default function SafetySection() {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-16">
      <h2 className="mb-4 text-center text-3xl font-extrabold text-primary md:text-5xl">
        Your Safety is Our Priority
      </h2>
      <p className="mx-auto mb-10 max-w-2xl text-center text-lg text-base-content/70">
        We use the latest technology and strict standards to keep every ride
        safe. Explore our safety features designed for your peace of mind.
      </p>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {safetyFeatures.map((feature) => (
          <div
            className="flex flex-col items-center rounded-2xl bg-base-200 p-8 text-center shadow transition hover:shadow-lg"
            key={feature.title}
          >
            <div className="mb-4">{feature.icon}</div>
            <div className="mb-2 text-xl font-bold">{feature.title}</div>
            <div className="text-base-content/70">{feature.description}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
