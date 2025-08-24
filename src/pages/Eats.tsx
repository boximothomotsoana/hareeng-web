import { useState, useEffect } from "react";
import { QRCodeCanvas } from "qrcode.react";
import {
  Clock,
  Coffee,
  Heart,
  IceCream,
  MapPin,
  Pizza,
  Sandwich,
  Search,
  ShoppingBag,
  Star,
  Utensils,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import AppNavbar from "@/components/common/AppNavbar";
import Breadcrumbs from "@/components/common/Breadcrumbs";

export default function Eats() {
  const cuisineTypes = [
    {
      count: "1,200+",
      icon: <Sandwich className="text-primary" size={24} />,
      name: "Fast Food",
    },
    {
      count: "450+",
      icon: <Pizza className="text-warning" size={24} />,
      name: "Pizza",
    },
    {
      count: "800+",
      icon: <Coffee className="text-accent" size={24} />,
      name: "Coffee",
    },
    {
      count: "600+",
      icon: <IceCream className="text-secondary" size={24} />,
      name: "Desserts",
    },
    {
      count: "900+",
      icon: <Utensils className="text-success" size={24} />,
      name: "Local Food",
    },
    {
      count: "350+",
      icon: <Heart className="text-info" size={24} />,
      name: "Healthy",
    },
  ];

  const featuredRestaurants = [
    {
      cuisine: "Fast Food",
      deliveryFee: "R15",
      deliveryTime: "20-30 min",
      image:
        "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop&crop=center",
      name: "Burger Palace",
      rating: 4.8,
      tags: ["Popular", "Fast Delivery"],
    },
    {
      cuisine: "Italian",
      deliveryFee: "R20",
      deliveryTime: "25-35 min",
      image:
        "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop&crop=center",
      name: "Nonna's Kitchen",
      rating: 4.9,
      tags: ["Top Rated", "Premium"],
    },
    {
      cuisine: "Indian",
      deliveryFee: "R18",
      deliveryTime: "30-40 min",
      image:
        "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400&h=300&fit=crop&crop=center",
      name: "Spice Route",
      rating: 4.7,
      tags: ["Authentic", "Spicy"],
    },
    {
      cuisine: "Japanese",
      deliveryFee: "R25",
      deliveryTime: "15-25 min",
      image:
        "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=400&h=300&fit=crop&crop=center",
      name: "Sushi Express",
      rating: 4.6,
      tags: ["Fresh", "Premium"],
    },
  ];

  const features = [
    {
      description: "Average delivery time under 30 minutes",
      icon: <Clock className="text-primary" size={32} />,
      title: "Fast Delivery",
    },
    {
      description: "Curated selection of the best local eateries",
      icon: <Star className="text-warning" size={32} />,
      title: "Top Restaurants",
    },
    {
      description: "Track your order from kitchen to your door",
      icon: <MapPin className="text-success" size={32} />,
      title: "Real-time Tracking",
    },
    {
      description: "Simple app interface for quick food ordering",
      icon: <ShoppingBag className="text-secondary" size={32} />,
      title: "Easy Ordering",
    },
  ];

  const promotions = [
    {
      code: "FREEDEL",
      description: "On orders over R100",
      image:
        "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=300&h=200&fit=crop&crop=center",
      title: "Free Delivery",
    },
    {
      code: "WELCOME20",
      description: "First-time users",
      image:
        "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=300&h=200&fit=crop&crop=center",
      title: "20% Off",
    },
    {
      code: "BOGO",
      description: "On selected items",
      image:
        "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=300&h=200&fit=crop&crop=center",
      title: "Buy 1 Get 1",
    },
  ];

  // Add theme adaptive QR code state
  const [showQR, setShowQR] = useState<"ios" | "android" | null>(null);
  const [isDark, setIsDark] = useState(
    document.documentElement.classList.contains("dark")
  );

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains("dark"));
    });
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });
    return () => observer.disconnect();
  }, []);

  const iosAppUrl = "https://apps.apple.com/app/idYOUR_APP_ID";
  const androidAppUrl = "https://play.google.com/store/apps/details?id=YOUR_PACKAGE_NAME";

  // Responsive slider state for featured restaurants
  const [slideIndex, setSlideIndex] = useState(0);

  const getItemsPerView = () => {
    if (window.innerWidth < 640) return 1; // mobile
    if (window.innerWidth < 1024) return 2; // tablet
    if (window.innerWidth < 1280) return 3; // small desktop
    return 4; // large desktop
  };

  const [itemsPerView, setItemsPerView] = useState(getItemsPerView());

  useEffect(() => {
    const handleResize = () => setItemsPerView(getItemsPerView());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = Math.max(0, featuredRestaurants.length - itemsPerView);

  const handlePrev = () => setSlideIndex((i) => Math.max(i - 1, 0));
  const handleNext = () => setSlideIndex((i) => Math.min(i + 1, maxIndex));

  return (
    <>
      <AppNavbar />

      <div className="min-h-screen bg-base-200 pt-16">
        <Breadcrumbs />

        {/* Hero Section */}
        <section className="relative overflow-hidden bg-accent text-accent-content">
          <div className="absolute inset-0 opacity-30">
            <img
              alt="Delicious food spread"
              className="h-full w-full object-cover"
              src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1200&h=600&fit=crop&crop=center"
            />
          </div>

          <div className="relative mx-auto max-w-7xl px-4 py-24">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div>
                <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-accent-content/20 px-4 py-2">
                  <ShoppingBag size={20} />
                  <span className="font-medium">
                    5,000+ Restaurants Available
                  </span>
                </div>

                <h1 className="mb-6 text-5xl font-bold leading-tight lg:text-6xl">
                  Craving something{" "}
                  <span className="text-warning">delicious?</span>
                </h1>

                <p className="mb-8 text-xl opacity-90">
                  Get your favorite meals delivered fast from the best
                  restaurants in your city. From local gems to popular chains.
                </p>

                <div className="flex flex-col gap-4 sm:flex-row">
                  <a
                    className="btn btn-warning btn-lg flex items-center gap-2"
                    href="https://hareeng.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ShoppingBag size={20} />
                    Order Now
                  </a>
                  <a
                    className="btn btn-outline btn-lg flex items-center gap-2"
                    href="https://hareeng.com/restaurants"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Search size={20} />
                    Browse Menu
                  </a>
                </div>

                <div className="mt-8 grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold">5K+</div>
                    <div className="text-sm opacity-80">Restaurants</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold">30 min</div>
                    <div className="text-sm opacity-80">Avg Delivery</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold">1M+</div>
                    <div className="text-sm opacity-80">Happy Customers</div>
                  </div>
                </div>
              </div>

              <div className="relative">
              <div className="text-center relative flex items-center justify-center min-h-[400px]">
                <img
                  alt="Mobile app interface"
                  className="relative z-10 mx-auto h-96 w-56 rounded-2xl object-cover shadow-2xl"
                  src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=300&h=400&fit=crop&crop=center"
                  style={{
                    transform: "perspective(900px) rotateX(18deg) scale(1.1)",
                    boxShadow: "0 24px 64px 0 rgba(0,0,0,0.18)",
                  }}
                />
                <div
                  className="absolute bottom-8 left-1/2 -translate-x-1/2 w-72 h-8 bg-base-200 rounded-full opacity-60 blur-md"
                  style={{
                    zIndex: 5,
                  }}
                ></div>
              </div>
              </div>
            </div>
          </div>
        </section>

        {/* Cuisine Categories */}
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-4xl font-bold">What Are You Craving?</h2>
              <p className="text-xl text-base-content/70">
                Explore cuisines from around the world
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3 lg:grid-cols-6">
              {cuisineTypes.map((cuisine, index) => (
                <div
                  className="card cursor-pointer bg-base-100 shadow-lg transition-shadow hover:shadow-xl"
                  key={index}
                >
                  <div className="card-body items-center p-6 text-center">
                    <div className="mb-3">{cuisine.icon}</div>
                    <h3 className="font-semibold">{cuisine.name}</h3>
                    <p className="text-sm text-base-content/70">
                      {cuisine.count}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Promotions */}
        <section className="bg-base-100 py-16">
          <div className="mx-auto max-w-7xl px-4">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-4xl font-bold">Today s Deals</h2>
              <p className="text-xl text-base-content/70">
                Save more with our exclusive offers
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {promotions.map((promo, index) => (
                <div
                  className="card bg-gradient-to-br from-primary to-secondary text-primary-content shadow-xl"
                  key={index}
                >
                  <figure className="h-32">
                    <img
                      alt={promo.title}
                      className="h-full w-full object-cover opacity-70"
                      src={promo.image}
                    />
                  </figure>
                  <div className="card-body">
                    <h3 className="card-title">{promo.title}</h3>
                    <p className="opacity-90">{promo.description}</p>
                    <div className="card-actions mt-4 items-center justify-between">
                      <code className="rounded bg-primary-content px-2 py-1 text-sm font-bold text-primary">
                        {promo.code}
                      </code>
                      <button className="btn btn-accent btn-sm">
                        Use Code
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Restaurants Slider */}
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-4xl font-bold">Featured Restaurants</h2>
              <p className="text-xl text-base-content/70">
                Popular choices in your area
              </p>
            </div>

            <div className="relative">
              <div
                className="flex gap-8 transition-all duration-300"
                style={{
                  minHeight: 340,
                }}
              >
                {featuredRestaurants
                  .slice(slideIndex, slideIndex + itemsPerView)
                  .map((restaurant, index) => (
                    <div
                      className="card bg-base-100 shadow-lg transition-shadow hover:shadow-xl flex-1 min-w-0"
                      key={index}
                      style={{
                        maxWidth:
                          itemsPerView === 1
                            ? "100%"
                            : itemsPerView === 2
                            ? "50%"
                            : itemsPerView === 3
                            ? "33.3333%"
                            : "25%",
                      }}
                    >
                      <figure className="relative h-48 rounded-t-2xl overflow-hidden">
                        <img
                          alt={restaurant.name}
                          className="h-full w-full object-cover"
                          src={restaurant.image}
                        />
                        <div className="absolute left-2 top-2 flex gap-1">
                          {restaurant.tags.map((tag, tagIndex) => (
                            <span
                              className="badge badge-primary badge-sm"
                              key={tagIndex}
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </figure>

                      <div className="card-body">
                        <h3 className="card-title text-lg font-semibold">
                          {restaurant.name}
                        </h3>
                        <p className="text-base-content/70">
                          {restaurant.cuisine}
                        </p>

                        <div className="flex items-center gap-2 text-sm mt-2">
                          <div className="flex items-center gap-1">
                            <Star className="fill-current text-warning" size={16} />
                            <span className="font-semibold">
                              {restaurant.rating}
                            </span>
                          </div>
                          <span>•</span>
                          <div className="flex items-center gap-1">
                            <Clock size={16} />
                            <span>{restaurant.deliveryTime}</span>
                          </div>
                          <span>•</span>
                          <span>{restaurant.deliveryFee}</span>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
              <div className="mt-8 flex justify-center gap-4">
                <button
                  aria-label="Previous"
                  className="btn btn-outline flex items-center gap-2"
                  disabled={slideIndex === 0}
                  onClick={handlePrev}
                >
                  <ChevronLeft size={20} />
                  <span className="hidden sm:inline">Back</span>
                </button>
                <button
                  aria-label="Next"
                  className="btn btn-outline flex items-center gap-2"
                  disabled={slideIndex === maxIndex}
                  onClick={handleNext}
                >
                  <span className="hidden sm:inline">Next</span>
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="bg-base-100 py-16">
          <div className="mx-auto max-w-7xl px-4">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-4xl font-bold">
                Why Choose Hareeng Eats?
              </h2>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {features.map((feature, index) => (
                <div className="text-center" key={index}>
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-base-200">
                    {feature.icon}
                  </div>
                  <h3 className="mb-2 text-xl font-semibold">
                    {feature.title}
                  </h3>
                  <p className="text-base-content/70">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* App Download */}
        <section className="bg-gradient-to-r from-accent to-primary py-16 text-accent-content">
          <div className="mx-auto max-w-7xl px-4">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div>
                <h2 className="mb-6 text-4xl font-bold">
                  Get the Hareeng Eats App
                </h2>
                <p className="mb-8 text-xl opacity-90">
                  Order faster, track in real-time, and unlock exclusive
                  app-only deals.
                </p>
                <div className="flex flex-col gap-4 sm:flex-row">
                  <button
                    className="btn-accent-content btn btn-lg"
                    onClick={() => setShowQR("ios")}
                  >
                    Download for iOS
                  </button>
                  <button
                    className="btn btn-outline btn-lg"
                    onClick={() => setShowQR("android")}
                  >
                    Download for Android
                  </button>
                </div>
              </div>

              <div className="text-center relative flex items-center justify-center min-h-[400px]">
                <img
                  alt="Mobile app interface"
                  className="relative z-10 mx-auto h-96 w-56 rounded-2xl object-cover shadow-2xl"
                  src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=300&h=400&fit=crop&crop=center"
                  style={{
                    transform: "perspective(900px) rotateX(18deg) scale(1.1)",
                    boxShadow: "0 24px 64px 0 rgba(0,0,0,0.18)",
                  }}
                />
                <div
                  className="absolute bottom-8 left-1/2 -translate-x-1/2 w-72 h-8 bg-base-200 rounded-full opacity-60 blur-md"
                  style={{
                    zIndex: 5,
                  }}
                ></div>
              </div>
            </div>
          </div>
          {showQR && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
              <div className="relative flex w-[340px] flex-col items-center rounded-2xl bg-white p-10 text-center shadow-2xl sm:w-[400px] dark:bg-base-200">
                <button
                  aria-label="Close"
                  className="absolute right-6 top-6 text-3xl font-bold text-gray-500 transition-colors hover:text-primary dark:text-gray-300"
                  onClick={() => setShowQR(null)}
                  style={{ lineHeight: 1 }}
                >
                  ×
                </button>
                <h3 className="mb-6 text-2xl font-bold text-primary dark:text-accent">
                  Scan to Download {showQR === "ios" ? "iOS" : "Android"} App
                </h3>
                <div className="mb-6 flex items-center justify-center">
                  <QRCodeCanvas
                    bgColor={isDark ? "#1e293b" : "#ffffff"}
                    fgColor={isDark ? "#f3f4f6" : "#1f2937"}
                    size={220}
                    style={{
                      background: isDark ? "#1e293b" : "#fff",
                      borderRadius: "16px",
                      boxShadow: "0 2px 16px rgba(0,0,0,0.08)",
                      padding: "12px",
                    }}
                    value={showQR === "ios" ? iosAppUrl : androidAppUrl}
                  />
                </div>
                <p className="text-base text-gray-600 dark:text-gray-300">
                  Scan this QR code with your phone to download the app.
                </p>
              </div>
            </div>
          )}
        </section>
      </div>
    </>
  );
}
