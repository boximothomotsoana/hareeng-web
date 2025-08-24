import {
  ArrowLeft,
  Bell,
  CheckCircle,
  Clock,
  Mail,
  Rocket,
  Sparkles,
} from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import AppNavbar from "@/components/common/AppNavbar";
import Breadcrumbs from "@/components/common/Breadcrumbs";

interface ComingSoonProps {
  feature?: string;
  subtitle?: string;
  title?: string;
}

export default function ComingSoon({
  feature = "this feature",
  subtitle = "We're working hard to bring you an incredible experience",
  title = "Something Amazing is Coming",
}: ComingSoonProps) {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Animated counter for days
  const [days, setDays] = useState(0);
  const targetDays = 30;

  useEffect(() => {
    const interval = setInterval(() => {
      setDays((prev) => (prev < targetDays ? prev + 1 : targetDays));
    }, 50);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Add custom CSS animations to document head
    const style = document.createElement("style");
    style.textContent = `
      @keyframes gentle-bounce {
        0%, 100% {
          transform: translateY(0);
        }
        50% {
          transform: translateY(-10px);
        }
      }

      @keyframes subtle-pulse {
        0%, 100% {
          transform: scale(1);
          opacity: 0.7;
        }
        50% {
          transform: scale(1.05);
          opacity: 0.5;
        }
      }

      @keyframes gentle-ping {
        75%, 100% {
          transform: scale(1.1);
          opacity: 0;
        }
      }

      @keyframes slow-spin {
        from {
          transform: rotate(0deg);
        }
        to {
          transform: rotate(360deg);
        }
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubscribed(true);
    setIsLoading(false);
    setEmail("");
  };

  return (
    <>
      <AppNavbar />
      <div className="flex min-h-screen flex-col bg-gradient-to-br from-base-200 via-base-100 to-base-200">
        {/* Header */}
        <Breadcrumbs />
        <div className="p-6">
          <button
            className="btn btn-ghost btn-sm gap-2"
            onClick={() => navigate(-1)}
          >
            <ArrowLeft size={16} />
            Go Back
          </button>
        </div>

        {/* Main Content */}
        <div className="flex flex-1 items-center justify-center px-6">
          <div className="mx-auto max-w-4xl text-center">
            {/* Animated Graphics - Fixed positioning to prevent layout shifts */}
            <div className="relative mb-12 h-64 w-full">
              {/* Background circles - using transform animations */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div
                  className="h-96 w-96 rounded-full bg-primary/5"
                  style={{
                    animation: "subtle-pulse 3s ease-in-out infinite",
                  }}
                ></div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div
                  className="h-72 w-72 rounded-full bg-primary/10"
                  style={{
                    animation:
                      "gentle-ping 2s cubic-bezier(0, 0, 0.2, 1) infinite",
                  }}
                ></div>
              </div>

              {/* Main rocket icon - using transform for bounce */}
              <div className="relative z-10 flex h-64 items-center justify-center">
                <div className="relative">
                  <div
                    className="flex h-32 w-32 items-center justify-center rounded-full bg-primary/20"
                    style={{
                      animation: "gentle-bounce 2s ease-in-out infinite",
                    }}
                  >
                    <Rocket className="text-primary" size={64} />
                  </div>

                  {/* Floating sparkles - using transform rotations */}
                  <div
                    className="absolute -right-4 -top-4"
                    style={{
                      animation: "slow-spin 4s linear infinite",
                    }}
                  >
                    <Sparkles className="text-primary" size={24} />
                  </div>
                  <div
                    className="absolute -bottom-2 -left-6"
                    style={{
                      animation: "subtle-pulse 2s ease-in-out infinite",
                    }}
                  >
                    <Sparkles className="text-secondary" size={16} />
                  </div>
                  <div
                    className="absolute -left-8 top-8"
                    style={{
                      animation: "gentle-bounce 2s ease-in-out infinite 0.3s",
                    }}
                  >
                    <Sparkles className="text-accent" size={20} />
                  </div>
                </div>
              </div>
            </div>

            {/* Main Message */}
            <div className="mb-12">
              <h1 className="mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-4xl font-bold text-transparent md:text-6xl">
                {title}
              </h1>
              <p className="mx-auto mb-8 max-w-2xl text-xl leading-relaxed text-base-content/70 md:text-2xl">
                {subtitle}
              </p>

              {/* Feature highlight */}
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-6 py-3 font-medium text-primary">
                <Clock size={20} />
                <span>We&apos;re building {feature} just for you!</span>
              </div>
            </div>

            {/* Countdown */}
            <div className="mb-12">
              <div className="mb-6 flex items-center justify-center gap-4 md:gap-8">
                <div className="text-center">
                  <div className="mb-2 text-3xl font-bold text-primary md:text-5xl">
                    {days}
                  </div>
                  <div className="text-xs uppercase tracking-wide text-base-content/60 md:text-sm">
                    Days Left
                  </div>
                </div>
                <div className="text-center">
                  <div className="mb-2 text-3xl font-bold text-secondary md:text-5xl">
                    24
                  </div>
                  <div className="text-xs uppercase tracking-wide text-base-content/60 md:text-sm">
                    Hours
                  </div>
                </div>
                <div className="text-center">
                  <div className="mb-2 text-3xl font-bold text-accent md:text-5xl">
                    60
                  </div>
                  <div className="text-xs uppercase tracking-wide text-base-content/60 md:text-sm">
                    Minutes
                  </div>
                </div>
              </div>
              <p className="text-sm text-base-content/50">
                *Estimated launch time
              </p>
            </div>

            {/* Email Subscription */}
            <div className="mx-auto mb-12 max-w-lg">
              {!isSubscribed ? (
                <form className="space-y-4" onSubmit={handleEmailSubmit}>
                  <div className="mb-4 flex items-center justify-center gap-2">
                    <Bell className="text-primary" size={20} />
                    <span className="text-sm font-semibold md:text-base">
                      Get notified when we launch!
                    </span>
                  </div>

                  {/* Responsive input and button */}
                  <div className="flex flex-col gap-3 sm:flex-row sm:gap-2">
                    <div className="flex-1">
                      <input
                        className="input input-bordered w-full text-sm md:text-base"
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        required
                        type="email"
                        value={email}
                      />
                    </div>
                    <button
                      className="btn btn-primary w-full px-6 text-sm sm:w-auto sm:px-8 md:text-base"
                      disabled={isLoading}
                      type="submit"
                    >
                      {isLoading ? (
                        <span className="loading loading-spinner loading-sm"></span>
                      ) : (
                        <>
                          <Mail size={16} />
                          <span className="ml-2">Notify Me</span>
                        </>
                      )}
                    </button>
                  </div>

                  <p className="text-xs text-base-content/50">
                    We&apos;ll send you an email as soon as we&apos;re ready. No
                    spam, promise! 🤝
                  </p>
                </form>
              ) : (
                <div className="py-6 text-center">
                  <div className="mb-4 flex items-center justify-center gap-2">
                    <CheckCircle className="text-success" size={24} />
                    <span className="text-lg font-semibold text-success">
                      You&apos;re all set!
                    </span>
                  </div>
                  <p className="text-base-content/70">
                    Thanks for subscribing! We&apos;ll notify you as soon as we
                    launch.
                  </p>
                </div>
              )}
            </div>

            {/* Features Preview */}
            <div className="mx-auto grid max-w-3xl gap-6 md:grid-cols-3">
              <div className="rounded-xl bg-base-100/50 p-4 text-center backdrop-blur md:p-6">
                <div className="mx-auto mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary/20 md:h-12 md:w-12">
                  <Sparkles className="text-primary" size={20} />
                </div>
                <h3 className="mb-2 text-sm font-semibold md:text-base">
                  Amazing Features
                </h3>
                <p className="text-xs text-base-content/60 md:text-sm">
                  Built with the latest technology for the best experience
                </p>
              </div>

              <div className="rounded-xl bg-base-100/50 p-4 text-center backdrop-blur md:p-6">
                <div className="mx-auto mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-secondary/20 md:h-12 md:w-12">
                  <Rocket className="text-secondary" size={20} />
                </div>
                <h3 className="mb-2 text-sm font-semibold md:text-base">
                  Lightning Fast
                </h3>
                <p className="text-xs text-base-content/60 md:text-sm">
                  Optimized for speed and performance you can rely on
                </p>
              </div>

              <div className="rounded-xl bg-base-100/50 p-4 text-center backdrop-blur md:p-6">
                <div className="mx-auto mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-accent/20 md:h-12 md:w-12">
                  <Bell className="text-accent" size={20} />
                </div>
                <h3 className="mb-2 text-sm font-semibold md:text-base">
                  Stay Updated
                </h3>
                <p className="text-xs text-base-content/60 md:text-sm">
                  Get the latest updates and be the first to know
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="py-8 text-center text-sm text-base-content/50">
          <p>© 2025 Hareeng. Something great is coming your way!</p>
        </div>
      </div>
    </>
  );
}
