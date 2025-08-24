import { AlertCircle } from "lucide-react"; // Using lucide-react icon library
import { useEffect, useState } from "react";

export default function Page404() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <div className="flex h-screen bg-gradient-to-r from-purple-600 to-indigo-700 text-white">
      <div className="m-auto px-4 text-center">
        {/* Icon with animation */}
        <AlertCircle
          className={`mx-auto mb-8 text-white transition-transform duration-700 ${
            animate ? "scale-110 opacity-100" : "scale-75 opacity-0"
          }`}
          size={120}
          strokeWidth={1.5}
        />

        <h1
          className={`text-[8rem] font-extrabold leading-none transition-opacity duration-1000 ${
            animate ? "opacity-100" : "opacity-0"
          }`}
        >
          404
        </h1>

        <p
          className={`mb-8 mt-4 text-xl transition-opacity delay-200 duration-1000 md:text-2xl ${
            animate ? "opacity-100" : "opacity-0"
          }`}
        >
          Oops! The page you’re looking for doesn’t exist or moved to a
          different location.
        </p>

        <button
          className="inline-block rounded-md bg-white bg-opacity-20 px-6 py-3 font-semibold text-white backdrop-blur-sm transition hover:bg-opacity-40"
          onClick={() => (window.location.href = "/")}
        >
          Go Home
        </button>
      </div>
    </div>
  );
}
