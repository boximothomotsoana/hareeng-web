import { Car, PhoneCall, ShieldCheck, ShoppingBag } from "lucide-react";
import { QRCodeCanvas } from "qrcode.react";
import { useState } from "react";
import { Button, Card } from "react-daisyui";

export default function Hero() {
  const [showQR, setShowQR] = useState(false);

  // Replace with your actual app download link
  const appDownloadUrl = "https://your-app-download-link.com";

  return (
    <section className="flex flex-col items-center justify-center bg-gradient-to-br from-base-200 to-base-100 px-4 pb-20 pt-24 sm:pt-32 md:pb-32">
      {/* Hero Content */}
      <div className="max-w-2xl text-center">
        <h1 className="mb-4 text-4xl font-extrabold leading-tight sm:text-5xl md:text-6xl">
          Get There. Get Food. <br />
          <span className="text-primary">All in One App</span>
        </h1>
        <p className="mb-8 text-base text-base-content/70 sm:text-lg md:text-xl">
          Book rides, order food, and enjoy reliable delivery—all from one
          seamless platform.
        </p>
        <div className="mb-8 flex flex-col justify-center gap-4 sm:flex-row">
          <Button
            className="font-semibold"
            color="neutral"
            onClick={() => setShowQR(true)}
            size="lg"
          >
            Book a Ride
          </Button>
          <Button
            className="font-semibold"
            color="primary"
            onClick={() => setShowQR(true)}
            size="lg"
          >
            Order Food
          </Button>
        </div>
      </div>

      {/* QR Code Modal */}
      {showQR && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
          <div className="relative flex w-[340px] flex-col items-center rounded-2xl bg-white p-10 text-center shadow-2xl sm:w-[400px]">
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
                value={appDownloadUrl}
              />
            </div>
            <p className="text-base text-gray-600">
              Scan this QR code with your phone to download the app.
            </p>
          </div>
        </div>
      )}

      {/* Feature Cards */}
      <div className="w-full max-w-6xl px-4">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <FeatureCard
            desc="Get picked up in minutes with nearby drivers."
            icon={<Car className="h-8 w-8 text-primary" />}
            title="Quick Rides"
          />
          <FeatureCard
            desc="Order from your favorite restaurants and get it fast."
            icon={<ShoppingBag className="h-8 w-8 text-secondary" />}
            title="Food Delivery"
          />
          <FeatureCard
            desc="Every trip and delivery is secure and insured."
            icon={<ShieldCheck className="h-8 w-8 text-green-500" />}
            title="Safe & Reliable"
          />
          <FeatureCard
            desc="Always here to assist you with any issues."
            icon={<PhoneCall className="h-8 w-8 text-blue-500" />}
            title="24/7 Support"
          />
        </div>
      </div>
    </section>
  );
}

function FeatureCard({
  desc,
  icon,
  title,
}: {
  desc: string;
  icon: React.ReactNode;
  title: string;
}) {
  return (
    <Card className="flex flex-col items-center rounded-xl border border-base-200 bg-base-100 p-6 text-center shadow-md">
      <div className="mb-3">{icon}</div>
      <Card.Title className="mb-1 text-lg font-bold" tag="h3">
        {title}
      </Card.Title>
      <p className="text-sm text-base-content/70">{desc}</p>
    </Card>
  );
}
