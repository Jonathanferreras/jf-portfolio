"use client";
import { useState, useEffect } from "react";

export default function Contact() {
  const [status, setStatus] = useState<"" | "success" | "error">("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    const data = new FormData(e.target as HTMLFormElement);
    const res = await fetch("/api/v1/contact", {
      method: "POST",
      body: JSON.stringify(Object.fromEntries(data)),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (res.ok) {
      setStatus("success");
      setMessage("Message sent!");
      (e.target as HTMLFormElement).reset();
    } else {
      setStatus("error");
      setMessage("Something went wrong. Please try again.");
    }

    setIsLoading(false);
  };

  useEffect(() => {
    if (status) {
      const timeout = setTimeout(() => {
        setStatus("");
        setMessage("");
      }, 4000);
      return () => clearTimeout(timeout);
    }
  }, [status]);

  return (
    <section className="max-w-2xl mx-auto px-6 py-20">
      <h1 className="text-4xl md:text-6xl font-black text-center text-white mb-4">
        Contact Me
      </h1>
      <p className="text-lg sm:text-xl text-gray-400 max-w-xl mx-auto text-center mb-10">
        Whether you're hiring or just exploring ideas, drop a message and let’s
        connect.
      </p>

      {status && (
        <div
          className={`mb-6 px-4 py-3 rounded-md text-white text-sm font-medium text-center ${
            status === "success" ? "bg-green-600" : "bg-red-600"
          }`}
        >
          {message}
        </div>
      )}

      <form
        onSubmit={handleSubmit}
        className="bg-black/40 border border-white/20 backdrop-blur-md p-8 rounded-xl space-y-6"
      >
        <input
          name="name"
          placeholder="Your name"
          required
          className="w-full bg-transparent border border-white/20 rounded-md px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-white"
        />
        <input
          name="email"
          type="email"
          placeholder="Your email"
          required
          className="w-full bg-transparent border border-white/20 rounded-md px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-white"
        />
        <textarea
          name="message"
          placeholder="Your message"
          required
          rows={5}
          className="w-full bg-transparent border border-white/20 rounded-md px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-white resize-none"
        />
        <button
          disabled={isLoading}
          type="submit"
          className="w-full bg-[color:var(--accent)] text-black font-semibold px-6 py-3 rounded-md hover:bg-white transition"
        >
          {isLoading ? "Sending..." : "Send Message"}
        </button>
      </form>
    </section>
  );
}
