"use client";
import { useState } from "react";

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  const [fading, setFading] = useState(false); // triggers form fade-out
  const [loading, setLoading] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setFading(true); // start form fade-out
      setTimeout(() => setSent(true), 500); // after fade-out, show message
    }, 800);
  }

  return (
    <div className="flex justify-center">
      <div className="w-full max-w-110 min-h-90">
        <h1 className="text-2xl mb-3">Contact us</h1>

        {/* Form: fades out when fading=true, hidden from layout after sent */}
        <form
          onSubmit={handleSubmit}
          className={`flex flex-col gap-4 transition-opacity duration-500 ${
            sent
              ? "hidden"
              : fading
              ? "opacity-0 pointer-events-none"
              : "opacity-100"
          }`}
        >
          <input
            type="email"
            name="from"
            placeholder="Your email"
            required
            className="border p-1.5"
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            required
            className="border p-1.5"
          />
          <textarea
            name="body"
            placeholder="Message"
            rows={5}
            required
            className="border p-1.5"
          />
          <button
            type="submit"
            disabled={loading}
            className="bg-brand-blue text-white p-2 flex items-center justify-center gap-2"
          >
            {loading && (
              <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
            )}
            {loading ? "Sending..." : "Send"}
          </button>
        </form>

        {/* Message: fades in when sent=true */}
        <div
          className={`flex flex-col items-center justify-center h-full pb-15 transition-opacity duration-500 ${
            sent ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <p className="mt-4">Message sent.</p>
          <p className="mt-4">We will contact you soon.</p>
        </div>
      </div>
    </div>
  );
}
