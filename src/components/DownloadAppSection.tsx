import { useState } from "react";

import appHomeImage from "../assets/images/car-driving.jpg"; // Replace with your own image path

export default function DownloadAppSection() {
  const [tab, setTab] = useState("Delivery");

  return (
    <section className="md:py-22 w-full bg-base-100 px-4 py-10 text-white">
      <div className="mx-auto flex max-w-7xl flex-col-reverse items-center justify-between gap-12 md:flex-row">
        {/* Phone Image */}
        <div className="flex-1">
          <img
            alt="App Preview"
            className="mx-auto w-72 max-w-sm drop-shadow-2xl md:w-full"
            src={appHomeImage}
          />
        </div>
        {/* Text Content */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="mb-4 text-3xl font-extrabold md:text-4xl">
            Download our apps
          </h2>
          <p className="mb-8 text-sm text-base-content/70">
            Available for iOS and Android devices.
          </p>

          {/* Toggle Tabs */}
          <div className="mb-4 space-x-4 text-sm font-semibold">
            <button
              className={`${
                tab === "Rides"
                  ? "text-primary underline"
                  : "text-base-content/60"
              } transition`}
              onClick={() => setTab("Rides")}
            >
              Rides
            </button>
            <button
              className={`${
                tab === "Delivery"
                  ? "text-primary underline"
                  : "text-base-content/60"
              } transition`}
              onClick={() => setTab("Delivery")}
            >
              Delivery
            </button>
          </div>

          {/* Content for Selected Tab */}
          {tab === "Delivery" ? (
            <div>
              <h3 className="mb-2 text-xl font-bold">
                The food you love, delivered fast!
              </h3>
              <p className="mb-4 text-base-content/70">
                Available for iOS and Android devices.
              </p>
              <button className="btn btn-primary">Get Hareeng Food</button>
            </div>
          ) : (
            <div>
              <h3 className="mb-2 text-xl font-bold">
                Quick and affordable rides!
              </h3>
              <p className="mb-4 text-base-content/70">
                Book a ride anywhere, anytime.
              </p>
              <button className="btn btn-primary">Get Hareeng Ride</button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
