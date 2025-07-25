import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import {
  Bike,
  Building2,
  Car,
  ChevronLeft,
  ChevronRight,
  Utensils,
} from "lucide-react";
import { useRef } from "react";

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
  const [sliderInstanceRef, slider] = useKeenSlider<HTMLDivElement>({
    breakpoints: {
      "(min-width: 640px)": {
        slides: { perView: 2, spacing: 24 },
      },
      "(min-width: 1024px)": {
        slides: { perView: 3, spacing: 32 },
      },
    },
    loop: true,
    slides: {
      perView: 1,
      spacing: 16,
    },
  });

  return (
    <section className="relative mx-auto flex min-h-[340px] w-[95vw] max-w-7xl items-center justify-center rounded-3xl bg-base-100 bg-[url('https://www.transparenttextures.com/patterns/diamond-upholstery.png')] py-16 dark:bg-base-300">
      {/* Prev Button */}
      <button
        aria-label="Previous"
        className="absolute left-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-base-100/80 p-3 shadow transition hover:bg-primary hover:text-white dark:bg-base-200/80"
        onClick={() => slider?.current?.prev()}
        type="button"
      >
        <ChevronLeft size={32} />
      </button>

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
            className={`keen-slider__slide mx-4 flex min-h-[260px] flex-col items-center justify-center rounded-2xl p-10 shadow-lg transition ${item.bg}`}
            key={item.label}
          >
            <div className="mb-4 text-primary">{item.icon}</div>
            <div className="mb-2 text-2xl font-bold text-base-content">
              {item.label}
            </div>
            <div className="text-center text-base text-base-content opacity-70">
              {item.subtitle}
            </div>
          </div>
        ))}
      </div>

      {/* Next Button */}
      <button
        aria-label="Next"
        className="absolute right-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-base-100/80 p-3 shadow transition hover:bg-primary hover:text-white dark:bg-base-200/80"
        onClick={() => slider?.current?.next()}
        type="button"
      >
        <ChevronRight size={32} />
      </button>
    </section>
  );
}
