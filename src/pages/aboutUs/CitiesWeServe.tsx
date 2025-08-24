import { useNavigate } from "react-router-dom";
import {
  Building,
  Car,
  ChevronRight,
  Filter,
  MapPin,
  Search,
  Users,
  Utensils,
} from "lucide-react";

import AppNavbar from "@/components/common/AppNavbar";
import Breadcrumbs from "@/components/common/Breadcrumbs";

export default function Cities() {
  const cities = [
    {
      featured: true,
      highlights: ["Table Mountain", "V&A Waterfront", "Camps Bay"],
      image:
        "https://images.unsplash.com/photo-1580060839134-75a5edca2e99?w=600&h=400&fit=crop&crop=center",
      launchedYear: "2019",
      name: "Cape Town",
      population: "4.7M",
      province: "Western Cape",
      services: ["Rides", "Eats", "Scooters"],
      stats: {
        drivers: "8,500+",
        restaurants: "1,200+",
        rides: "2.5M+",
      },
    },
    {
      featured: true,
      highlights: ["Sandton City", "Soweto", "Rosebank"],
      image:
        "https://images.unsplash.com/photo-1577948000841-7f7f73c28353?w=600&h=400&fit=crop&crop=center",
      launchedYear: "2020",
      name: "Johannesburg",
      population: "5.6M",
      province: "Gauteng",
      services: ["Rides", "Eats", "Business"],
      stats: {
        drivers: "12,000+",
        restaurants: "1,800+",
        rides: "3.2M+",
      },
    },
    {
      featured: true,
      highlights: ["Golden Mile", "uShaka Marine World", "Gateway Mall"],
      image:
        "https://images.unsplash.com/photo-1600298881974-6be191ceeda1?w=600&h=400&fit=crop&crop=center",
      launchedYear: "2021",
      name: "Durban",
      population: "3.9M",
      province: "KwaZulu-Natal",
      services: ["Rides", "Eats"],
      stats: {
        drivers: "6,500+",
        restaurants: "900+",
        rides: "1.8M+",
      },
    },
    {
      featured: false,
      highlights: ["Union Buildings", "Hatfield", "Centurion"],
      image:
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop&crop=center",
      launchedYear: "2022",
      name: "Pretoria",
      population: "2.9M",
      province: "Gauteng",
      services: ["Rides", "Eats"],
      stats: {
        drivers: "4,200+",
        restaurants: "650+",
        rides: "950K+",
      },
    },
    {
      featured: false,
      highlights: ["Bayworld", "Boardwalk", "Algoa Bay"],
      image:
        "https://images.unsplash.com/photo-1544986581-efac024faf62?w=600&h=400&fit=crop&crop=center",
      launchedYear: "2023",
      name: "Port Elizabeth",
      population: "1.3M",
      province: "Eastern Cape",
      services: ["Rides", "Eats"],
      stats: {
        drivers: "1,800+",
        restaurants: "280+",
        rides: "420K+",
      },
    },
    {
      featured: false,
      highlights: ["Naval Hill", "Mimosa Mall", "University of Free State"],
      image:
        "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=600&h=400&fit=crop&crop=center",
      launchedYear: "2024",
      name: "Bloemfontein",
      population: "760K",
      province: "Free State",
      services: ["Rides", "Eats"],
      stats: {
        drivers: "950+",
        restaurants: "150+",
        rides: "180K+",
      },
    },
    {
      featured: false,
      highlights: ["Orient Beach", "Hemingways Mall", "Buffalo City"],
      image:
        "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=600&h=400&fit=crop&crop=center",
      launchedYear: "2024",
      name: "East London",
      population: "755K",
      province: "Eastern Cape",
      services: ["Rides"],
      stats: {
        drivers: "680+",
        restaurants: "85+",
        rides: "125K+",
      },
    },
    {
      featured: false,
      highlights: ["Big Hole", "Diamond Mine Museum", "McGregor Museum"],
      image:
        "https://images.unsplash.com/photo-1560472355-109703aa3edc?w=600&h=400&fit=crop&crop=center",
      launchedYear: "2024",
      name: "Kimberley",
      population: "225K",
      province: "Northern Cape",
      services: ["Rides"],
      stats: {
        drivers: "220+",
        restaurants: "35+",
        rides: "45K+",
      },
    },
    {
      featured: false,
      highlights: [
        "Mall of the North",
        "University of Limpopo",
        "Polokwane Game Reserve",
      ],
      image:
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop&crop=center",
      launchedYear: "2025",
      name: "Polokwane",
      population: "775K",
      province: "Limpopo",
      services: ["Rides"],
      stats: {
        drivers: "380+",
        restaurants: "45+",
        rides: "28K+",
      },
    },
  ];

  const comingSoonCities = [
    { name: "Rustenburg", province: "North West", timeline: "Q2 2025" },
    { name: "Nelspruit", province: "Mpumalanga", timeline: "Q3 2025" },
    { name: "George", province: "Western Cape", timeline: "Q4 2025" },
    {
      name: "Pietermaritzburg",
      province: "KwaZulu-Natal",
      timeline: "Q1 2026",
    },
  ];

  const serviceIcons = {
    Business: <Building className="text-success" size={16} />,
    Eats: <Utensils className="text-secondary" size={16} />,
    Rides: <Car className="text-primary" size={16} />,
    Scooters: <MapPin className="text-accent" size={16} />,
  };

  const totalStats = {
    totalCities: "15",
    totalDrivers: "35,000+",
    totalRestaurants: "5,200+",
    totalRides: "10.2M+",
  };

  function setSearchTerm(value: string): void {
    throw new Error("Function not implemented.");
  }

  const navigate = useNavigate();

  return (
    <>
      <AppNavbar />

      <div className="min-h-screen bg-base-200 pt-16">
        <Breadcrumbs />

        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 opacity-30">
            <img
              alt="South African cities skyline"
              className="h-full w-full object-cover"
              src="https://images.unsplash.com/photo-1577948000841-7f7f73c28353?w=1200&h=600&fit=crop&crop=center"
            />
          </div>

          <div className="relative mx-auto max-w-7xl px-4 py-24">
            <div className="text-center">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary-content/20 px-4 py-2">
                <MapPin size={20} />
                <span className="font-medium">
                  Serving 15 Cities Across South Africa
                </span>
              </div>

              <h1 className="mb-6 text-5xl font-bold leading-tight lg:text-6xl">
                Connecting <span className="text-primary">communities</span>{" "}
                across South Africa
              </h1>

              <p className="mx-auto mb-8 max-w-3xl text-xl leading-relaxed opacity-90">
                From Cape Town to Polokwane, Hareeng is transforming how people
                move, eat, and connect in cities across the country. Discover
                where we operate and what services are available in your city.
              </p>

              <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                <button
                  className="btn btn-primary btn-lg"
                  onClick={() => {
                    document
                      .getElementById("search-city")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  <Search size={20} />
                  Find Your City
                </button>
                <button
                  className="btn btn-outline btn-lg"
                  onClick={() => navigate("/pages/city-request")}
                >
                  Request New City
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Search and Filter */}
        <section id="search-city" className="bg-base-100 py-8">
          <div className="mx-auto max-w-7xl px-4">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="max-w-md flex-1">
                <div className="input-group">
                  <input
                    className="input input-bordered w-full"
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Search cities..."
                    type="text"
                  />
                </div>
              </div>

              <div className="flex gap-2">
                <button className="btn btn-outline btn-sm">
                  <Filter size={16} />
                  All Services
                </button>
                <button className="btn btn-ghost btn-sm">Major Cities</button>
                <button className="btn btn-ghost btn-sm">
                  Recently Launched
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Cities */}
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-4xl font-bold">Major Cities</h2>
              <p className="text-xl text-base-content/70">
                Our flagship markets with full service availability
              </p>
            </div>

            <div className="grid gap-8 lg:grid-cols-3">
              {cities
                .filter((city) => city.featured)
                .map((city, index) => (
                  <div className="card bg-base-100 shadow-xl" key={index}>
                    <figure className="h-48">
                      <img
                        alt={city.name}
                        className="h-full w-full object-cover"
                        src={city.image}
                      />
                    </figure>

                    <div className="card-body">
                      <div className="mb-2 flex items-center justify-between">
                        <h3 className="card-title">{city.name}</h3>
                        <span className="badge">
                          Since {city.launchedYear}
                        </span>
                      </div>

                      <p className="mb-4 text-base-content/70">
                        {city.province} • {city.population} residents
                      </p>

                      <div className="mb-4">
                        <div className="mb-2 flex flex-wrap gap-1">
                          {city.services.map((service, sIndex) => (
                            <span
                              className="badge badge-sm gap-1"
                              key={sIndex}
                            >
                              {
                                serviceIcons[
                                  service as keyof typeof serviceIcons
                                ]
                              }
                              {service}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="mb-4 grid grid-cols-3 gap-2 text-center text-sm">
                        <div>
                          <div className="font-bold text-primary">
                            {city.stats.rides}
                          </div>
                          <div className="text-xs text-base-content/70">
                            Rides
                          </div>
                        </div>
                        <div>
                          <div className="font-bold text-secondary">
                            {city.stats.restaurants}
                          </div>
                          <div className="text-xs text-base-content/70">
                            Restaurants
                          </div>
                        </div>
                        <div>
                          <div className="font-bold text-success">
                            {city.stats.drivers}
                          </div>
                          <div className="text-xs text-base-content/70">
                            Drivers
                          </div>
                        </div>
                      </div>

                      <div className="mb-4">
                        <h4 className="mb-1 text-sm font-semibold">
                          Popular Areas:
                        </h4>
                        <p className="text-xs text-base-content/70">
                          {city.highlights.join(" • ")}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </section>

        {/* All Cities Grid */}
        <section className="bg-base-100 py-16">
          <div className="mx-auto max-w-7xl px-4">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-4xl font-bold">All Cities</h2>
              <p className="text-xl text-base-content/70">
                Complete list of cities where Hareeng operates
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {cities.map((city, index) => (
                <div className="card bg-base-200 shadow-lg" key={index}>
                  <div className="card-body">
                    <div className="mb-2 flex items-center justify-between">
                      <h3 className="card-title text-lg">{city.name}</h3>
                      {city.featured && (
                        <span className="badge badge-sm">
                          Featured
                        </span>
                      )}
                    </div>

                    <p className="mb-3 text-sm text-base-content/70">
                      {city.province} • {city.population}
                    </p>

                    <div className="mb-3 flex flex-wrap gap-1">
                      {city.services.map((service, sIndex) => (
                        <span
                          className="badge badge-xs gap-1"
                          key={sIndex}
                        >
                          {serviceIcons[service as keyof typeof serviceIcons]}
                          {service}
                        </span>
                      ))}
                    </div>

                    <div className="text-xs text-base-content/70">
                      Launched: {city.launchedYear}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Coming Soon */}
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-4xl font-bold">Coming Soon</h2>
              <p className="text-xl text-base-content/70">
                New cities we are planning to launch in
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {comingSoonCities.map((city, index) => (
                <div
                  className="card border-2 border-dashed border-primary/30 bg-base-100"
                  key={index}
                >
                  <div className="card-body text-center">
                    <h3 className="card-title justify-center">{city.name}</h3>
                    <p className="text-sm text-base-content/70">
                      {city.province}
                    </p>
                    <div className="badge mt-2">
                      {city.timeline}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {/* <div className="mt-8 text-center">
              <p className="mb-4 text-base-content/70">
                Do not see your city? Let us know where you would like Hareeng
                next!
              </p>
              <button className="btn btn-outline btn-primary">
                Request Your City
              </button>
            </div> */}
          </div>
        </section>
      </div>
    </>
  );
}
