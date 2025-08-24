import {
  MapPin,
  Send,
  Building,
  Users,
  Globe,
  Phone,
  Mail,
} from "lucide-react";
import { useState, useEffect } from "react";
import AppNavbar from "@/components/common/AppNavbar";
import Breadcrumbs from "@/components/common/Breadcrumbs";

export default function CityRequest() {
  const [form, setForm] = useState({
    city: "",
    province: "",
    population: "",
    name: "",
    email: "",
    phone: "",
    reason: "",
  });
  const [submitted, setSubmitted] = useState(false);

  // Theme adaptive state
  const [isDark, setIsDark] = useState(document.documentElement.classList.contains("dark"));
  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains("dark"));
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setForm({
      city: "",
      province: "",
      population: "",
      name: "",
      email: "",
      phone: "",
      reason: "",
    });
  };

  return (
    <>
      <AppNavbar />
      <div className={`min-h-screen pt-16 ${isDark ? "bg-base-300" : "bg-base-200"}`}>
        <Breadcrumbs />

        <section className={`relative overflow-hidden ${isDark ? "bg-base-300 text-base-content" : "bg-base-100 text-base-content"}`}>
          <div className="absolute inset-0 opacity-10 z-10">
            <img
              alt="City request background"
              className="h-full w-full object-cover"
              src="https://images.unsplash.com/photo-1577948000841-7f7f73c28353?w=1200&h=600&fit=crop&crop=center"
              style={{
                filter: isDark ? "brightness(0.7)" : "none",
              }}
            />
          </div>
          <div className="relative mx-auto max-w-3xl px-4 py-20 z-20">
            <div className="text-center mb-12">
              <h1 className="text-5xl font-bold mb-4">Request Your City</h1>
              <p className="text-xl opacity-90">
                Want Hareeng in your city? Let us know where you want us to launch next!
              </p>
            </div>
            <form
              className={`rounded-2xl shadow-2xl p-8 flex flex-col gap-6 ${isDark ? "bg-base-200" : "bg-base-100"}`}
              onSubmit={handleSubmit}
            >
              <div className="flex flex-col gap-2">
                <label htmlFor="city" className={`font-semibold flex items-center gap-2 ${isDark ? "text-base-content" : "text-base-content"}`}>
                  <MapPin size={18} /> City Name
                </label>
                <input
                  type="text"
                  name="city"
                  id="city"
                  required
                  value={form.city}
                  onChange={handleChange}
                  className={`input input-bordered ${isDark ? "bg-base-300 text-base-content border-base-300" : ""}`}
                  placeholder="e.g. Rustenburg"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="province" className={`font-semibold flex items-center gap-2 ${isDark ? "text-base-content" : "text-base-content"}`}>
                  <Globe size={18} /> Province
                </label>
                <input
                  type="text"
                  name="province"
                  id="province"
                  required
                  value={form.province}
                  onChange={handleChange}
                  className={`input input-bordered ${isDark ? "bg-base-300 text-base-content border-base-300" : ""}`}
                  placeholder="e.g. North West"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="population" className={`font-semibold flex items-center gap-2 ${isDark ? "text-base-content" : "text-base-content"}`}>
                  <Users size={18} /> Estimated Population
                </label>
                <input
                  type="text"
                  name="population"
                  id="population"
                  value={form.population}
                  onChange={handleChange}
                  className={`input input-bordered ${isDark ? "bg-base-300 text-base-content border-base-300" : ""}`}
                  placeholder="e.g. 500,000"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className={`font-semibold flex items-center gap-2 ${isDark ? "text-base-content" : "text-base-content"}`}>
                  <Building size={18} /> Your Name / Organization
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  value={form.name}
                  onChange={handleChange}
                  className={`input input-bordered ${isDark ? "bg-base-300 text-base-content border-base-300" : ""}`}
                  placeholder="Your name or company"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className={`font-semibold flex items-center gap-2 ${isDark ? "text-base-content" : "text-base-content"}`}>
                  <Mail size={18} /> Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  className={`input input-bordered ${isDark ? "bg-base-300 text-base-content border-base-300" : ""}`}
                  placeholder="you@email.com"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="phone" className={`font-semibold flex items-center gap-2 ${isDark ? "text-base-content" : "text-base-content"}`}>
                  <Phone size={18} /> Phone (optional)
                </label>
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  value={form.phone}
                  onChange={handleChange}
                  className={`input input-bordered ${isDark ? "bg-base-300 text-base-content border-base-300" : ""}`}
                  placeholder="+27 12 345 6789"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="reason" className={`font-semibold flex items-center gap-2 ${isDark ? "text-base-content" : "text-base-content"}`}>
                  <Send size={18} /> Why should Hareeng launch here?
                </label>
                <textarea
                  name="reason"
                  id="reason"
                  required
                  value={form.reason}
                  onChange={handleChange}
                  className={`textarea textarea-bordered min-h-[100px] ${isDark ? "bg-base-300 text-base-content border-base-300" : ""}`}
                  placeholder="Tell us about your city, demand, opportunities, etc."
                />
              </div>
              <button
                type="submit"
                className="btn btn-primary btn-lg flex items-center gap-2"
                disabled={submitted}
              >
                <Send size={20} />
                {submitted ? "Sending..." : "Submit Request"}
              </button>
              {submitted && (
                <div className="text-success text-center font-semibold mt-2">
                  Thank you! Your city request has been sent.
                </div>
              )}
            </form>
          </div>
        </section>
      </div>
    </>
  );
}