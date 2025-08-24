import { useNavigate } from "react-router-dom";

import carDriverImage from "../assets/images/car-driving.jpg";

export default function EarnWithHareeng() {
  const navigate = useNavigate();

  return (
    <section className="mx-auto flex w-full max-w-7xl flex-col-reverse items-center gap-10 px-4 py-16 md:flex-row">
      {/* Text Content */}
      <div className="flex-1">
        <h2 className="mb-4 text-3xl font-extrabold text-primary md:text-5xl">
          Earn Money with Hareeng Food & Rides
        </h2>
        <p className="mb-6 text-lg text-base-content/70">
          Join Hareeng as a driver or courier and start earning on your own
          schedule. Deliver food, give rides, and enjoy flexible income
          opportunities with full support from our team.
        </p>
        <ul className="mb-6 list-disc space-y-2 pl-5 text-base-content/80">
          <li>Drive with Hareeng Rides and earn per trip</li>
          <li>Deliver food with Hareeng Food and get paid weekly</li>
          <li>Work when you want, as much as you want</li>
        </ul>
        <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
          <button
            className="btn btn-neutral btn-lg w-full font-semibold sm:w-auto"
            onClick={() => navigate("/driver/vehicle-driver-signup")}
            type="button"
          >
            Become a Driver
          </button>
          <button
            className="btn btn-primary btn-lg w-full font-semibold sm:w-auto"
            onClick={() => navigate("/partners/courier-registration")}
            type="button"
          >
            Become a Courier
          </button>
        </div>
      </div>
      {/* Image */}
      <div className="flex flex-1 justify-center">
        <img
          alt="Person driving a car"
          className="w-full max-w-xl rounded-2xl object-cover shadow-lg"
          loading="lazy"
          src={carDriverImage}
        />
      </div>
    </section>
  );
}
