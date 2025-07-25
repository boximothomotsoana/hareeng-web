import appHomeImage from "../assets/images/hareenghome.jpg";

export default function AboutHareengSection() {
  return (
    <section className="mx-auto flex w-full max-w-7xl flex-col-reverse items-center justify-center gap-10 px-4 py-16 md:flex-row">
      {/* Text Content */}
      <div className="flex-1">
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title text-3xl font-extrabold text-primary md:text-5xl">
              What is Hareeng?
            </h2>
            <p className="mb-4 text-lg text-base-content/70">
              Hareeng is your all-in-one platform for rides, food delivery, and
              more. Enjoy fast, safe, and affordable services right from your
              phone. Whether you need a ride, want to deliver food, or grow your
              business, Hareeng makes it easy and reliable.
            </p>
            <ul className="list-disc space-y-2 pl-5 text-base-content/80">
              <li>Book rides and deliveries in seconds</li>
              <li>Track your orders and trips in real-time</li>
              <li>Earn money as a driver or courier</li>
              <li>Seamless, secure, and user-friendly experience</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Image as Card Background */}
      <div className="flex flex-1 items-center justify-center">
        <div
          className="card h-full w-full max-w-sm rounded-2xl bg-cover bg-center shadow-xl"
          style={{
            aspectRatio: "3/4", // optional: prevents stretching
            backgroundImage: `url(${appHomeImage})`,
            minHeight: "100%", // matches the card height with content
          }}
        />
      </div>
    </section>
  );
}
