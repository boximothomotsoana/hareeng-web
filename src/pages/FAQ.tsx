import {
  Car,
  ChevronDown,
  ChevronUp,
  DollarSign,
  HelpCircle,
  Mail,
  MapPin,
  MessageSquare,
  Package,
  Phone,
  Search,
  Shield,
  User,
  Zap,
} from "lucide-react";
import { useState } from "react";

import AppNavbar from "@/components/common/AppNavbar";
import Breadcrumbs from "@/components/common/Breadcrumbs";

export default function FAQ() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  const [openFAQ, setOpenFAQ] = useState<null | number>(null);

  const categories = [
    { icon: <HelpCircle size={20} />, id: "all", label: "All Questions" },
    { icon: <Car size={20} />, id: "rides", label: "Rides & Booking" },
    {
      icon: <DollarSign size={20} />,
      id: "payments",
      label: "Payments & Pricing",
    },
    { icon: <Shield size={20} />, id: "safety", label: "Safety & Security" },
    { icon: <User size={20} />, id: "drivers", label: "Drivers" },
    { icon: <Package size={20} />, id: "delivery", label: "Delivery" },
    { icon: <Zap size={20} />, id: "scooters", label: "Scooters" },
    { icon: <User size={20} />, id: "account", label: "Account & Profile" },
  ];

  const faqs = [
    // Rides & Booking
    {
      answer:
        "Simply open the Hareeng app, enter your pickup and destination locations, select your preferred ride type, and tap 'Book Ride'. You'll be matched with a nearby driver within minutes.",
      category: "rides",
      id: 1,
      question: "How do I book a ride with Hareeng?",
    },
    {
      answer:
        "Yes! You can schedule rides up to 30 days in advance. Just select 'Schedule' when booking and choose your preferred date and time.",
      category: "rides",
      id: 2,
      question: "Can I schedule a ride in advance?",
    },
    {
      answer:
        "We offer Hareeng Go (economy), Hareeng Comfort (premium cars), Hareeng XL (larger vehicles for groups), and Hareeng Scooter (eco-friendly electric scooters).",
      category: "rides",
      id: 3,
      question: "What ride types are available?",
    },
    {
      answer:
        "You can cancel a ride through the app before the driver arrives. Cancellation fees may apply if you cancel after 2 minutes of booking or after the driver has started driving to you.",
      category: "rides",
      id: 4,
      question: "How do I cancel a ride?",
    },
    {
      answer:
        "Use the 'Call Driver' or 'Message Driver' buttons in the app. You can also see your driver's real-time location on the map. If you're still having trouble, contact our support team.",
      category: "rides",
      id: 5,
      question: "What if I can't find my driver?",
    },

    // Payments & Pricing
    {
      answer:
        "Fares are calculated based on distance, time, and demand. The app shows you an upfront price estimate before you book. Final fare may vary slightly due to route changes or traffic conditions.",
      category: "payments",
      id: 6,
      question: "How is the ride fare calculated?",
    },
    {
      answer:
        "We accept credit/debit cards, mobile money, cash, and digital wallets. You can add multiple payment methods in the app and choose your preferred option for each ride.",
      category: "payments",
      id: 7,
      question: "What payment methods do you accept?",
    },
    {
      answer:
        "Yes, cash payments are accepted in most cities. However, we recommend using digital payments for a faster, contactless experience.",
      category: "payments",
      id: 8,
      question: "Can I pay with cash?",
    },
    {
      answer:
        "Receipts are automatically sent to your email after each ride. You can also view and download receipts from the 'Trip History' section in your app.",
      category: "payments",
      id: 9,
      question: "How do I get a receipt for my ride?",
    },
    {
      answer:
        "During high demand periods (rush hours, events, bad weather), prices may increase to encourage more drivers to get on the road. The app will always show you the surge multiplier before you book.",
      category: "payments",
      id: 10,
      question: "What are surge prices?",
    },

    // Safety & Security
    {
      answer:
        "All drivers undergo background checks, vehicle inspections, and safety training. We provide real-time GPS tracking, driver photos/details, emergency buttons, and 24/7 safety support.",
      category: "safety",
      id: 11,
      question: "How do you ensure rider safety?",
    },
    {
      answer:
        "Use the emergency button in the app to contact local authorities, share your trip details with emergency contacts, or call our 24/7 safety hotline at 0800-SAFETY.",
      category: "safety",
      id: 12,
      question: "What should I do in case of an emergency?",
    },
    {
      answer:
        "Yes! You can share your live trip location, driver details, and ETA with up to 5 trusted contacts through the 'Share Trip' feature in the app.",
      category: "safety",
      id: 13,
      question: "Can I share my trip details with others?",
    },
    {
      answer:
        "You can report safety issues through the app's 'Help' section, email safety@hareeng.com, or call our safety hotline. We investigate all reports promptly and take appropriate action.",
      category: "safety",
      id: 14,
      question: "How do I report a safety concern?",
    },

    // Drivers
    {
      answer:
        "Visit our 'Become a Driver' page, complete the application, upload required documents, pass the background check, and attend an onboarding session. The process typically takes 3-5 business days.",
      category: "drivers",
      id: 15,
      question: "How do I become a Hareeng driver?",
    },
    {
      answer:
        "Vehicles must be 2015 or newer, pass a vehicle inspection, have valid insurance and registration, and meet our comfort and safety standards. Specific requirements vary by ride type.",
      category: "drivers",
      id: 16,
      question: "What are the vehicle requirements?",
    },
    {
      answer:
        "Earnings vary based on hours worked, location, and demand. Most active drivers earn R4,000-R8,000 per week. You keep 80% of each fare plus 100% of tips.",
      category: "drivers",
      id: 17,
      question: "How much can I earn as a driver?",
    },
    {
      answer:
        "Drivers are paid weekly on Tuesdays for the previous week (Monday to Sunday). You can also cash out instantly for a small fee using the 'Instant Pay' feature.",
      category: "drivers",
      id: 18,
      question: "When do drivers get paid?",
    },

    // Delivery
    {
      answer:
        "Order from restaurants, grocery stores, or pharmacies through the app. A delivery partner picks up your order and brings it directly to you. Track your order in real-time.",
      category: "delivery",
      id: 19,
      question: "How does Hareeng delivery work?",
    },
    {
      answer:
        "Delivery fees vary by distance, demand, and merchant. The exact fee is shown before you place your order. Look out for free delivery promotions and subscription options.",
      category: "delivery",
      id: 20,
      question: "What's the delivery fee?",
    },
    {
      answer:
        "Most deliveries arrive within 30-45 minutes. The app provides real-time tracking and estimated delivery time based on distance, preparation time, and current demand.",
      category: "delivery",
      id: 21,
      question: "How long does delivery take?",
    },
    {
      answer:
        "Yes! You can schedule deliveries up to 7 days in advance. This is perfect for planning meals or ensuring you have groceries delivered at your preferred time.",
      category: "delivery",
      id: 22,
      question: "Can I schedule a delivery?",
    },

    // Scooters
    {
      answer:
        "Find a nearby scooter on the map, scan the QR code to unlock it, wear the provided helmet, and start riding. Park responsibly in designated areas when you're done.",
      category: "scooters",
      id: 23,
      question: "How do I ride a Hareeng scooter?",
    },
    {
      answer:
        "No license is required for electric scooters under 25km/h. However, you must be at least 16 years old and follow all traffic laws. Helmets are mandatory and provided.",
      category: "scooters",
      id: 24,
      question: "Do I need a license to ride a scooter?",
    },
    {
      answer:
        "Scooter rental starts at R5 to unlock plus R2.50 per minute. Daily and monthly passes are available for frequent users at discounted rates.",
      category: "scooters",
      id: 25,
      question: "How much does scooter rental cost?",
    },
    {
      answer:
        "End your trip immediately and report the issue through the app. You won't be charged for time after reporting. Our team will collect and repair the scooter promptly.",
      category: "scooters",
      id: 26,
      question: "What if the scooter breaks down?",
    },

    // Account & Profile
    {
      answer:
        "Download the app, enter your phone number, verify with the SMS code, add your name and email, and set up a payment method. You can start using Hareeng immediately after verification.",
      category: "account",
      id: 27,
      question: "How do I create a Hareeng account?",
    },
    {
      answer:
        "Go to 'Profile' in the app menu, tap 'Edit Profile', and update your information. Changes to your phone number require verification for security reasons.",
      category: "account",
      id: 28,
      question: "How do I update my profile information?",
    },
    {
      answer:
        "Contact our support team to request account deletion. This will permanently remove all your data, trip history, and payment information. This action cannot be undone.",
      category: "account",
      id: 29,
      question: "How do I delete my account?",
    },
    {
      answer:
        "Tap 'Forgot Password' on the login screen, enter your email or phone number, and follow the reset instructions sent to you. You can also log in using SMS verification.",
      category: "account",
      id: 30,
      question: "I forgot my password. How do I reset it?",
    },
  ];

  const filteredFAQs = faqs.filter((faq) => {
    const matchesCategory =
      activeCategory === "all" || faq.category === activeCategory;
    const matchesSearch =
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleFAQ = (id: number) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  const popularQuestions = faqs.slice(0, 6);

  return (
    <>
      <AppNavbar />

      <div className="min-h-screen bg-base-200 pt-16">
        <Breadcrumbs />

        {/* Hero Section */}
        <section className="bg-primary py-16 text-primary-content">
          <div className="mx-auto max-w-7xl px-4">
            <div className="text-center">
              <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-primary-content/20">
                <HelpCircle size={48} />
              </div>
              <h1 className="mb-4 text-4xl font-bold md:text-6xl">
                Frequently Asked Questions
              </h1>
              <p className="mx-auto max-w-2xl text-xl opacity-90">
                Find answers to common questions about Hareeng rides,
                deliveries, and services.
              </p>
            </div>
          </div>
        </section>

        {/* Search Section */}
        <section className="bg-base-100 py-12">
          <div className="mx-auto max-w-4xl px-4">
            <div className="relative">
              <Search
                className="absolute left-4 top-1/2 -translate-y-1/2 text-base-content/50"
                size={20}
              />
              <input
                className="input input-bordered w-full pl-12 pr-4 text-lg"
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search for answers..."
                type="text"
                value={searchTerm}
              />
            </div>
          </div>
        </section>

        {/* Popular Questions */}
        {!searchTerm && (
          <section className="py-12">
            <div className="mx-auto max-w-7xl px-4">
              <h2 className="mb-8 text-center text-3xl font-bold">
                Popular Questions
              </h2>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {popularQuestions.map((faq) => (
                  <div
                    className="card cursor-pointer bg-base-100 shadow-lg transition-shadow hover:shadow-xl"
                    key={faq.id}
                    onClick={() => {
                      setActiveCategory(faq.category);
                      setOpenFAQ(faq.id);
                    }}
                  >
                    <div className="card-body">
                      <h3 className="card-title text-lg">{faq.question}</h3>
                      <p className="line-clamp-2 text-sm text-base-content/70">
                        {faq.answer}
                      </p>
                      <div className="card-actions justify-end">
                        <span className="text-sm text-primary">
                          Read more →
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Categories */}
        <section className="bg-base-100 py-8">
          <div className="mx-auto max-w-7xl px-4">
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((category) => (
                <button
                  className={`btn btn-sm ${
                    activeCategory === category.id
                      ? "btn-primary"
                      : "btn-outline"
                  }`}
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                >
                  {category.icon}
                  {category.label}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ List */}
        <section className="py-16">
          <div className="mx-auto max-w-4xl px-4">
            {filteredFAQs.length === 0 ? (
              <div className="py-12 text-center">
                <HelpCircle
                  className="mx-auto mb-4 text-base-content/50"
                  size={48}
                />
                <h3 className="mb-2 text-xl font-semibold">
                  No questions found
                </h3>
                <p className="text-base-content/70">
                  Try adjusting your search terms or browse different
                  categories.
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                {filteredFAQs.map((faq) => (
                  <div className="card bg-base-100 shadow-md" key={faq.id}>
                    <div
                      className="card-body cursor-pointer transition-colors hover:bg-base-200/50"
                      onClick={() => toggleFAQ(faq.id)}
                    >
                      <div className="flex items-center justify-between">
                        <h3 className="card-title pr-4 text-lg">
                          {faq.question}
                        </h3>
                        {openFAQ === faq.id ? (
                          <ChevronUp
                            className="flex-shrink-0 text-primary"
                            size={20}
                          />
                        ) : (
                          <ChevronDown
                            className="flex-shrink-0 text-primary"
                            size={20}
                          />
                        )}
                      </div>

                      {openFAQ === faq.id && (
                        <div className="mt-4 border-t border-base-300 pt-4">
                          <p className="leading-relaxed text-base-content/80">
                            {faq.answer}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Still Need Help */}
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold">Still Need Help?</h2>
              <p className="text-xl opacity-90">
                Our support team is here to help you 24/7
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              <div className="card bg-primary-content text-primary">
                <div className="card-body text-center">
                  <Phone className="mx-auto mb-4" size={32} />
                  <h3 className="card-title justify-center">Call Us</h3>
                  <p className="mb-4 text-primary/70">0800-HAREENG</p>
                  <p className="text-sm">Available 24/7 for urgent issues</p>
                </div>
              </div>

              <div className="card bg-primary-content text-primary">
                <div className="card-body text-center">
                  <MessageSquare className="mx-auto mb-4" size={32} />
                  <h3 className="card-title justify-center">Live Chat</h3>
                  <p className="mb-4 text-primary/70">Chat with support</p>
                  <p className="text-sm">Get instant help through our app</p>
                </div>
              </div>

              <div className="card bg-primary-content text-primary">
                <div className="card-body text-center">
                  <Mail className="mx-auto mb-4" size={32} />
                  <h3 className="card-title justify-center">Email Us</h3>
                  <p className="mb-4 text-primary/70">support@hareeng.com</p>
                  <p className="text-sm">We will respond within 24 hours</p>
                </div>
              </div>
            </div>

            <div className="mt-12 text-center">
              <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                <a className="btn btn-primary btn-lg" href="/support">
                  Contact Support
                </a>
                <a className="btn btn-outline btn-lg" href="/report-issue">
                  Report an Issue
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Links */}
        <section className="bg-base-100 py-16">
          <div className="mx-auto max-w-7xl px-4">
            <h2 className="mb-12 text-center text-3xl font-bold">
              Quick Links
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              <a
                className="card bg-base-200 transition-shadow hover:shadow-lg"
                href="/become-driver"
              >
                <div className="card-body text-center">
                  <Car className="mx-auto mb-2 text-primary" size={24} />
                  <h3 className="card-title justify-center text-lg">
                    Become a Driver
                  </h3>
                  <p className="text-sm text-base-content/70">
                    Start earning with your car
                  </p>
                </div>
              </a>

              <a
                className="card bg-base-200 transition-shadow hover:shadow-lg"
                href="/become-delivery-driver"
              >
                <div className="card-body text-center">
                  <Package className="mx-auto mb-2 text-primary" size={24} />
                  <h3 className="card-title justify-center text-lg">
                    Delivery Driver
                  </h3>
                  <p className="text-sm text-base-content/70">
                    Deliver food and packages
                  </p>
                </div>
              </a>

              <a
                className="card bg-base-200 transition-shadow hover:shadow-lg"
                href="/safety"
              >
                <div className="card-body text-center">
                  <Shield className="mx-auto mb-2 text-primary" size={24} />
                  <h3 className="card-title justify-center text-lg">
                    Safety Center
                  </h3>
                  <p className="text-sm text-base-content/70">
                    Learn about our safety features
                  </p>
                </div>
              </a>

              <a
                className="card bg-base-200 transition-shadow hover:shadow-lg"
                href="/cities"
              >
                <div className="card-body text-center">
                  <MapPin className="mx-auto mb-2 text-primary" size={24} />
                  <h3 className="card-title justify-center text-lg">
                    Supported Cities
                  </h3>
                  <p className="text-sm text-base-content/70">
                    See where we operate
                  </p>
                </div>
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
