"use client";
import { useEffect } from "react";
import Link from "next/link";
import { teamIcon, homeIcon, contactIcon } from "@/public/icons/icons";

const items = [
  { label: "Home", icon: homeIcon, link: "/" },
  { label: "Our team", icon: teamIcon, link: "/team" },
  { label: "Contact us", icon: contactIcon, link: "/contact" },
];

export default function Drawer({ isOpen, setIsOpen }) {
  // Close on ESC key press
  useEffect(() => {
    window.addEventListener(
      "keydown",
      (e) => e.key === "Escape" && setIsOpen(false)
    );
    return () => window.removeEventListener("keydown", handler);
  }, []);

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={() => setIsOpen(false)}
        className={`fixed top-12 left-0 right-0 bottom-0 bg-black/30 transition-opacity duration-300 ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      />

      {/* Drawer panel */}
      <div
        className={`fixed top-12 left-0 h-full w-56 bg-white shadow-xl z-50
          transition-transform duration-300 ease-in-out 
          ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <nav className="flex flex-col mt-6 ms-3 gap-y-3">
          {items.map(({ label, icon, link }) => (
            <Link key={label} href={link}>
              <button
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-x-1.5  w-40 rounded px-3 active:bg-brand-blue active:text-white"
              >
                {icon}
                <span>{label}</span>
              </button>
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
}
