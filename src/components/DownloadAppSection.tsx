import { QRCodeCanvas } from "qrcode.react"; // Use QRCodeCanvas for rendering QR codes
import { useState } from "react";

import appHomeImage from "../assets/images/car-driving.jpg"; // Replace with your own image path

export default function DownloadAppSection() {
  const [tab, setTab] = useState("Delivery");
  const [showQR, setShowQR] = useState(false);
  const [qrUrl, setQrUrl] = useState("");

  // Replace with your actual app download URLs
  const rideAppUrl = "https://your-ride-app-link.com";
  const foodAppUrl = "https://your-food-app-link.com";

  const handleShowQR = (url: string) => {
    setQrUrl(url);
    setShowQR(true);
  };

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
              <button
                className="btn btn-primary"
                onClick={() => handleShowQR(foodAppUrl)}
              >
                Get Hareeng Food
              </button>
            </div>
          ) : (
            <div>
              <h3 className="mb-2 text-xl font-bold">
                Quick and affordable rides!
              </h3>
              <p className="mb-4 text-base-content/70">
                Book a ride anywhere, anytime.
              </p>
              <button
                className="btn btn-primary"
                onClick={() => handleShowQR(rideAppUrl)}
              >
                Get Hareeng Ride
              </button>
            </div>
          )}
        </div>
      </div>

      {/* QR Code Modal */}
      {showQR && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <div className="relative flex w-[340px] flex-col items-center rounded-2xl bg-white p-10 text-center shadow-2xl sm:w-[400px] dark:bg-base-200">
            <button
              aria-label="Close"
              className="absolute right-6 top-6 text-3xl font-bold text-gray-500 transition-colors hover:text-primary"
              onClick={() => setShowQR(false)}
              style={{ lineHeight: 1 }}
            >
              ×
            </button>
            <h3 className="mb-6 text-2xl font-bold text-primary">
              Scan to Download Our App
            </h3>
            <div className="mb-6 flex items-center justify-center">
              <QRCodeCanvas
                bgColor="#ffffff"
                fgColor="#1f2937"
                size={220}
                style={{
                  background: "#fff",
                  borderRadius: "16px",
                  boxShadow: "0 2px 16px rgba(0,0,0,0.08)",
                  padding: "12px",
                }}
                value={qrUrl}
              />
            </div>
            <p className="text-base text-base-content dark:text-base-content/80">
              Scan this QR code with your phone to download the app.
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
