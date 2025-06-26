"use client";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

import ArrowUpRightIcon from "@/components/ArrowUpRightIcon";

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [menuOpen]);

  const links = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Career", href: "/career" },
    { name: "Contact", href: "/contact" },
    {
      name: "Github",
      href: "https://github.com/Jonathanferreras",
      newTab: true,
    },
    {
      name: "Linkedin",
      href: "https://www.linkedin.com/in/jonathan-ferreras",
      newTab: true,
    },
  ];

  return (
    <>
      {/* Overlay */}
      {menuOpen && (
        <div
          onClick={() => setMenuOpen(false)}
          className="fixed inset-0 bg-black/60 z-40 md:hidden"
        ></div>
      )}

      <nav className="bg-[var(--background)] sticky top-0 z-50 md:static mx-0 md:mx-4 my-0 md:my-6 p-5">
        <div className="flex items-center justify-between md:justify-center">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-white text-2xl focus:outline-none"
            aria-label="Toggle menu"
          >
            {menuOpen ? "×" : "☰"}
          </button>
        </div>

        <div
          className={`transition-all duration-300 ease-in-out overflow-hidden relative z-50 md:overflow-visible ${
            menuOpen
              ? "max-h-96 opacity-100 scale-100"
              : "max-h-0 opacity-0 scale-95"
          } md:max-h-full md:opacity-100 md:scale-100`}
        >
          <ul
            className="flex flex-col space-y-4 mt-4 px-4
              md:flex md:flex-row md:space-y-0 md:space-x-4 md:mt-0 
              md:justify-center md:items-center"
          >
            {links.map((link) => (
              <li
                key={link.name}
                className={`group rounded-3xl hover:bg-white hover:text-black ${
                  link.href === pathname ? "text-white" : "text-gray-400"
                } transition-colors duration-300`}
              >
                <a
                  href={link.href}
                  target={link.newTab ? "_blank" : "_self"}
                  rel={link.newTab ? "noopener noreferrer" : undefined}
                  className="flex items-center gap-1 py-2 px-4"
                >
                  {link.name}
                  {link.newTab && (
                    <span className="overflow-hidden w-0 opacity-0 group-hover:w-5 group-hover:opacity-100 transition-all duration-300 ml-1">
                      <ArrowUpRightIcon className="w-4 h-4 text-[color:var(--foreground)] group-hover:text-black" />
                    </span>
                  )}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
}
