import { Bike, Map, ShieldCheck, Zap } from "lucide-react";
import { useNavigate } from "react-router-dom";

import scooterImage from "../assets/images/scooter.jpg";

export default function ScooterSection() {
  const navigate = useNavigate();

  return (
    <section className="relative mx-auto my-8 flex min-h-[60vh] w-full max-w-7xl items-center justify-center overflow-hidden rounded-3xl bg-base-100 shadow-lg dark:bg-base-300">
      {/* Scooter as background */}
      <div className="pointer-events-none absolute inset-0 z-0 flex items-center justify-end">
        <img
          alt="Scooter"
          className="h-full w-auto max-w-[60%] object-contain opacity-20 transition-all duration-500 md:opacity-30"
          loading="lazy"
          src={scooterImage}
          style={{ bottom: 0, right: 0 }}
        />
      </div>
      {/* Overlay for readability */}
      <div className="absolute inset-0 z-10 bg-base-100/80 dark:bg-base-300/80" />

      {/* Content */}
      <div className="relative z-20 flex min-h-[60vh] w-full flex-col items-center justify-center px-4 py-12">
        <h2 className="mb-4 text-center text-3xl font-extrabold text-primary md:text-5xl">
          Deliver Smart with Hareeng Scooters
        </h2>
        <p className="mb-6 max-w-lg text-center text-lg text-base-content/70">
          Discover the freedom of fast, eco-friendly delivering. Our scooters
          are perfect for quick city delivery, with safety and convenience built
          in.
        </p>
        <ul className="mb-6 w-full max-w-md space-y-3">
          <li className="flex items-center justify-center gap-3 transition-transform hover:scale-105">
            <Bike className="text-primary" size={32} />
            <span className="font-semibold">
              Modern, well-maintained scooters for every delivery need
            </span>
          </li>
          <li className="flex items-center justify-center gap-3 transition-transform hover:scale-105">
            <ShieldCheck className="text-primary" size={32} />
            <span className="font-semibold">
              Safety features: helmets, insurance, and 24/7 support
            </span>
          </li>
          <li className="flex items-center justify-center gap-3 transition-transform hover:scale-105">
            <Map className="text-primary" size={32} />
            <span className="font-semibold">
              Track your scooter and route in real-time
            </span>
          </li>
          <li className="flex items-center justify-center gap-3 transition-transform hover:scale-105">
            <Zap className="text-primary" size={32} />
            <span className="font-semibold">
              Eco-friendly and cost-effective city delivery solution
            </span>
          </li>
        </ul>
        <a
          className="btn btn-primary btn-lg font-semibold transition-transform hover:scale-105"
          href="#"
          onClick={(e) => {
            e.preventDefault();
            navigate("/driver/delivery-signup");
          }}
        >
          Start delivering with Hareeng
        </a>
      </div>
    </section>
  );
}
