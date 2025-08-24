import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const updates = [
  {
    date: "July 22, 2025",
    description:
      "We've added new designated scooter zones in 5 major areas for safer rides.",
    id: 1,
    title: "New scooter zones launched!",
    type: "News",
  },
  {
    date: "July 18, 2025",
    description: "Get 30% off your next 3 rides. Hurry before the deal ends!",
    id: 2,
    title: "Limited time offer: 30% off",
    type: "Offers",
  },
  {
    date: "July 10, 2025",
    description:
      "Our latest app update includes bug fixes and better ride-tracking.",
    id: 3,
    title: "App v2.5 released",
    type: "App",
  },
  {
    date: "July 10, 2025",
    description:
      "Our latest app update includes bug fixes and better ride-tracking.",
    id: 4,
    title: "App v2.5 released",
    type: "App",
  },
  {
    date: "July 10, 2025",
    description:
      "Our latest app update includes bug fixes and better ride-tracking.",
    id: 5,
    title: "App v2.5 released",
    type: "App",
  },
  {
    date: "July 10, 2025",
    description:
      "Our latest app update includes bug fixes and better ride-tracking.",
    id: 6,
    title: "App v2.5 released",
    type: "App",
  },
  {
    date: "July 5, 2025",
    description: "We’re now live in Bloemfontein, East London, and Nelspruit!",
    id: 7,
    title: "Hareeng Food expands to 3 cities",
    type: "News",
  },
];

const filterOptions = ["All", "News", "Offers", "App"];

export default function UpdatesSection() {
  const [selected, setSelected] = useState("All");
  const [index, setIndex] = useState(0);

  const filtered =
    selected === "All"
      ? updates
      : updates.filter((item) => item.type === selected);

  // Show at least 4 on mobile, 3 on desktop
  const mobileCount = 4;
  const desktopCount = 3;

  // Only show slider if more than desktopCount updates
  const showSlider = filtered.length > desktopCount;

  // Handle next/prev for slider (desktop only)
  const handlePrev = () => setIndex((prev) => Math.max(prev - 1, 0));
  const handleNext = () =>
    setIndex((prev) => Math.min(prev + 1, filtered.length - desktopCount));

  // Calculate visible updates for slider
  const visibleUpdates =
    showSlider && typeof window !== "undefined" && window.innerWidth >= 768
      ? filtered.slice(index, index + desktopCount)
      : filtered.slice(0, mobileCount);

  return (
    <section className="bg-base-100 px-4 py-10 text-base-content">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-8 text-center text-3xl font-bold md:text-4xl">
          Latest Updates
        </h2>

        {/* Filter Buttons */}
        <div className="mb-10 flex flex-wrap justify-center gap-2">
          {filterOptions.map((opt) => (
            <button
              className={`btn btn-sm rounded-full transition-all duration-200 ${
                selected === opt
                  ? "btn-primary"
                  : "bg-base-200 text-base-content hover:bg-base-300"
              }`}
              key={opt}
              onClick={() => {
                setSelected(opt);
                setIndex(0);
              }}
            >
              {opt}
            </button>
          ))}
        </div>

        {/* Cards - Responsive: 4 on mobile, 3 on desktop, slider if more */}
        <div className="relative">
          {/* Desktop slider controls */}
          {showSlider && (
            <div className="absolute left-0 top-1/2 z-10 hidden -translate-y-1/2 md:flex">
              <button
                aria-label="Previous"
                className="btn btn-circle btn-ghost"
                disabled={index === 0}
                onClick={handlePrev}
              >
                <ChevronLeft size={28} />
              </button>
            </div>
          )}
          <div
            className={`grid gap-6 ${
              visibleUpdates.length < 3
                ? "grid-cols-1 sm:grid-cols-2"
                : "grid-cols-1 sm:grid-cols-2 md:grid-cols-3"
            }`}
          >
            {visibleUpdates.map((item) => (
              <div
                className="rounded-xl bg-base-200 p-6 shadow-md transition-transform hover:scale-[1.02] hover:shadow-lg"
                key={item.id}
              >
                <span className="text-xs font-semibold uppercase tracking-wide text-primary">
                  {item.type}
                </span>
                <h3 className="mt-2 text-lg font-bold">{item.title}</h3>
                <p className="text-sm text-base-content/70">{item.date}</p>
                <p className="mt-2 text-sm text-base-content/80">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
          {/* Desktop slider controls */}
          {showSlider && (
            <div className="absolute right-0 top-1/2 z-10 hidden -translate-y-1/2 md:flex">
              <button
                aria-label="Next"
                className="btn btn-circle btn-ghost"
                disabled={index >= filtered.length - desktopCount}
                onClick={handleNext}
              >
                <ChevronRight size={28} />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
