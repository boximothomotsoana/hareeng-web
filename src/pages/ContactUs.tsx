import {
  Mail,
  Phone,
  MapPin,
  Send,
  User,
  MessageCircle,
  Building2,
} from "lucide-react";
import { useState, useEffect } from "react";
import Breadcrumbs from "@/components/common/Breadcrumbs";
import AppNavbar from "@/components/common/AppNavbar";

export default function ContactUs() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
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
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <>
    <div className="relative z-50">
        <AppNavbar />
    </div>
      <div className={`min-h-screen pt-16 ${isDark ? "bg-base-300" : "bg-base-200"}`}>
        <Breadcrumbs />

        <section
          className={`relative overflow-hidden ${
            isDark ? "bg-base-300 text-base-content" : "bg-base-100 text-base-content"
          }`}
        >
          <div className="absolute inset-0 opacity-10 z-10">
            <img
              alt="Contact background"
              className="h-full w-full object-cover"
              src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=1200&h=600&fit=crop&crop=center"
              style={{
                filter: isDark ? "brightness(0.7)" : "none",
              }}
            />
          </div>
          <div className="relative mx-auto max-w-7xl px-4 py-20 z-20">
            <div className="text-center mb-12">
              <h1 className="text-5xl font-bold mb-4">Contact Us</h1>
              <p className="text-xl opacity-90">
                We’d love to hear from you. Reach out for support, partnerships, or feedback.
              </p>
            </div>
            <div className="grid gap-12 md:grid-cols-2">
              {/* Contact Info */}
              <div className="flex flex-col gap-8 justify-center">
                <div className="flex items-center gap-4">
                  <Building2 size={32} className="text-accent" />
                  <div>
                    <div className="font-bold">Hareeng HQ</div>
                    <div className={`${isDark ? "text-base-content/60" : "text-base-content/70"}`}>
                      123 Mobility Ave, Cape Town, South Africa
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Mail size={32} className="text-primary" />
                  <div>
                    <div className="font-bold">Email</div>
                    <a
                      href="mailto:hello@hareeng.com"
                      className={`${isDark ? "text-base-content/60" : "text-base-content/70"} hover:underline`}
                    >
                      hello@hareeng.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Phone size={32} className="text-success" />
                  <div>
                    <div className="font-bold">Phone</div>
                    <a
                      href="tel:+27211234567"
                      className={`${isDark ? "text-base-content/60" : "text-base-content/70"} hover:underline`}
                    >
                      +27 21 123 4567
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <MapPin size={32} className="text-warning" />
                  <div>
                    <div className="font-bold">Support Hours</div>
                    <div className={`${isDark ? "text-base-content/60" : "text-base-content/70"}`}>
                      Mon-Fri: 8am – 6pm<br />Sat-Sun: 9am – 3pm
                    </div>
                  </div>
                </div>
              </div>
              {/* Contact Form */}
              <form
                className={`rounded-2xl shadow-2xl p-8 flex flex-col gap-6 ${isDark ? "bg-base-200" : "bg-base-100"}`}
                onSubmit={handleSubmit}
              >
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="name"
                    className={`font-semibold flex items-center gap-2 ${
                      isDark ? "text-base-content" : "text-base-content"
                    }`}
                  >
                    <User size={18} /> Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    className={`input input-bordered ${isDark ? "bg-base-300 text-base-content border-base-300" : ""}`}
                    placeholder="Your name"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="email"
                    className={`font-semibold flex items-center gap-2 ${
                      isDark ? "text-base-content" : "text-base-content"
                    }`}
                  >
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
                  <label
                    htmlFor="subject"
                    className={`font-semibold flex items-center gap-2 ${
                      isDark ? "text-base-content" : "text-base-content"
                    }`}
                  >
                    <MessageCircle size={18} /> Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    id="subject"
                    required
                    value={form.subject}
                    onChange={handleChange}
                    className={`input input-bordered ${isDark ? "bg-base-300 text-base-content border-base-300" : ""}`}
                    placeholder="Subject"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="message"
                    className={`font-semibold flex items-center gap-2 ${
                      isDark ? "text-base-content" : "text-base-content"
                    }`}
                  >
                    <Send size={18} /> Message
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    required
                    value={form.message}
                    onChange={handleChange}
                    className={`textarea textarea-bordered min-h-[120px] ${isDark ? "bg-base-300 text-base-content border-base-300" : ""}`}
                    placeholder="Type your message here..."
                  />
                </div>
                <button
                  type="submit"
                  className="btn btn-primary btn-lg flex items-center gap-2"
                  disabled={submitted}
                >
                  <Send size={20} />
                  {submitted ? "Sending..." : "Send Message"}
                </button>
                {submitted && (
                  <div className="text-success text-center font-semibold mt-2">
                    Thank you! Your message has been sent.
                  </div>
                )}
              </form>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className={`${isDark ? "bg-base-300" : "bg-base-100"} py-16`}>
          <div className="mx-auto max-w-7xl px-4">
            <div className="mb-8 text-center">
              <h2 className="mb-2 text-3xl font-bold">Find Us</h2>
              <p className={`${isDark ? "text-base-content/60" : "text-base-content/70"}`}>
                Visit our office or get directions
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <iframe
                title="Hareeng HQ Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3303.926379812839!2d18.42322031522514!3d-33.91886198064609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcc676b1e8e8e8e%3A0x123456789abcdef!2sCape%20Town!5e0!3m2!1sen!2sza!4v1680000000000!5m2!1sen!2sza"
                width="100%"
                height="350"
                style={{
                  border: 0,
                  background: isDark ? "#1e293b" : "#fff",
                  filter: isDark ? "brightness(0.85)" : "none",
                }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}