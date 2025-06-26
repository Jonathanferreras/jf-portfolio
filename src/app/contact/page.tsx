"use client";
import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.target as HTMLFormElement);
    const res = await fetch("/api/v1/contact", {
      method: "POST",
      body: JSON.stringify(Object.fromEntries(data)),
      headers: {
        "Content-Type": "application/json",
      },
    });

    setStatus(res.ok ? "Message sent!" : "Something went wrong.");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        name="name"
        placeholder="Your name"
        required
        className="border p-2 w-full"
      />
      <input
        name="email"
        type="email"
        placeholder="Your email"
        required
        className="border p-2 w-full"
      />
      <textarea
        name="message"
        placeholder="Your message"
        required
        className="border p-2 w-full"
      />
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Send
      </button>
      <p className="text-sm">{status}</p>
    </form>
  );
}
