import appHomeImage from "../assets/images/hareenghome.jpg";

export default function AboutHareengSection() {
  return (
    <section className="w-full bg-base-200/50 py-8 md:py-16">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-4 md:flex-row md:gap-10">
        {/* Text Content */}
        <div className="w-full md:flex-1">
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body p-6 md:p-8">
              <h2 className="card-title mb-4 text-2xl font-extrabold text-primary md:text-4xl lg:text-5xl">
                What is Hareeng?
              </h2>
              <p className="mb-6 text-base leading-relaxed text-base-content/70 md:text-lg">
                Hareeng is your all-in-one platform for rides, food delivery,
                and more. Enjoy fast, safe, and affordable services right from
                your phone. Whether you need a ride, want to deliver food, or
                grow your business, Hareeng makes it easy and reliable.
              </p>
              <ul className="space-y-3 text-sm text-base-content/80 md:text-base">
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-primary"></span>
                  <span>Book rides and deliveries in seconds</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-primary"></span>
                  <span>Track your orders and trips in real-time</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-primary"></span>
                  <span>Earn money as a driver or courier</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-primary"></span>
                  <span>Seamless, secure, and user-friendly experience</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full md:flex-1">
          <div className="relative overflow-hidden rounded-2xl shadow-xl">
            <img
              alt="Hareeng app home screen"
              className="h-64 w-full object-cover sm:h-80 md:h-96 lg:h-[500px]"
              loading="lazy"
              src={appHomeImage}
            />
            {/* Overlay for better text readability if needed */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
