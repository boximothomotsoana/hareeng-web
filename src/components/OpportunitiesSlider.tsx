import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import {
  Bike,
  Building2,
  Car,
  ChevronLeft,
  ChevronRight,
  Utensils,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

const opportunities = [
  {
    bg: "bg-base-200 dark:bg-base-300",
    icon: <Bike size={48} />,
    label: "Become a courier",
    subtitle: "Deliver Orders and earn money",
  },
  {
    bg: "bg-base-200 dark:bg-base-300",
    icon: <Utensils size={48} />,
    label: "Add a restaurant or store",
    subtitle: "Join Hareeng and reach more customers",
  },
  {
    bg: "bg-base-200 dark:bg-base-300",
    icon: <Car size={48} />,
    label: "Sign up as a fleet owner",
    subtitle: "Add your fleet to Hareeng and boost your income",
  },
  {
    bg: "bg-base-200 dark:bg-base-300",
    icon: <Building2 size={48} />,
    label: "Hareeng Business",
    subtitle: "Hareeng products and services for your business",
  },
];

export default function OpportunitiesSlider() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(getPerView());

  useEffect(() => {
    const handleResize = () => setSlidesPerView(getPerView());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const [sliderInstanceRef, slider] = useKeenSlider<HTMLDivElement>({
    breakpoints: {
      "(min-width: 640px)": {
        slides: { perView: 2, spacing: 16 },
      },
      "(min-width: 1024px)": {
        slides: { perView: 3, spacing: 24 },
      },
    },
    created(s) {
      setSlidesPerView(
        typeof s.options.slides === "object" &&
          s.options.slides !== null &&
          "perView" in s.options.slides
          ? ((s.options.slides as { perView?: number }).perView ?? 1)
          : 1,
      );
    },
    loop: false,
    slideChanged(s) {
      setCurrentSlide(s.track.details.rel);
      setSlidesPerView(
        typeof s.options.slides === "object" &&
          s.options.slides !== null &&
          "perView" in s.options.slides
          ? ((s.options.slides as { perView?: number }).perView ?? 1)
          : 1,
      );
    },
    slides: {
      perView: 1,
      spacing: 8,
    },
  });

  const maxSlide = opportunities.length - slidesPerView;
  const allVisible = opportunities.length <= slidesPerView;
  const showPrev = !allVisible && currentSlide > 0;
  const showNext = !allVisible && currentSlide < maxSlide;

  return (
    <section className="relative mx-auto flex min-h-[340px] w-full max-w-7xl items-center justify-center overflow-hidden rounded-3xl bg-base-100 bg-[url('https://www.transparenttextures.com/patterns/diamond-upholstery.png')] py-8 dark:bg-base-300">
      {/* Prev Button */}
      {showPrev && (
        <button
          aria-label="Previous"
          className="absolute left-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-base-100/80 p-2 shadow transition hover:bg-primary hover:text-white dark:bg-base-200/80"
          onClick={() => slider?.current?.prev()}
          type="button"
        >
          <ChevronLeft size={28} />
        </button>
      )}

      {/* Slider */}
      <div
        className="keen-slider w-full"
        ref={(ref) => {
          sliderRef.current = ref;
          sliderInstanceRef(ref);
        }}
      >
        {opportunities.map((item) => (
          <div
            className={`keen-slider__slide flex min-h-[220px] flex-col items-center justify-center rounded-2xl p-4 shadow-lg transition ${item.bg}`}
            key={item.label}
          >
            <div className="mb-2 text-primary">{item.icon}</div>
            <div className="mb-1 text-lg font-bold text-base-content">
              {item.label}
            </div>
            <div className="text-center text-sm text-base-content opacity-70">
              {item.subtitle}
            </div>
          </div>
        ))}
      </div>

      {/* Next Button */}
      {showNext && (
        <button
          aria-label="Next"
          className="absolute right-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-base-100/80 p-2 shadow transition hover:bg-primary hover:text-white dark:bg-base-200/80"
          onClick={() => slider?.current?.next()}
          type="button"
        >
          <ChevronRight size={28} />
        </button>
      )}
    </section>
  );
}

function getPerView() {
  if (window.innerWidth >= 1024) return 3;
  if (window.innerWidth >= 640) return 2;
  return 1;
}
