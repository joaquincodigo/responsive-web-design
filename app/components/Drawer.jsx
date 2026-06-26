"use client";
import { useEffect } from "react";
import Link from "next/link";
import { teamIcon, homeIcon, contactIcon } from "@/public/icons/icons";
import { usePathname } from "next/navigation";

const items = [
  { label: "Home", icon: homeIcon, link: "/home" },
  { label: "Our team", icon: teamIcon, link: "/team" },
  { label: "Contact us", icon: contactIcon, link: "/contact" },
];

export default function Drawer({ isOpen, setIsOpen }) {

  const pathname = usePathname();

  // Close on ESC key press
  useEffect(() => {
    const handler = (e) => e.key === "Escape" && setIsOpen(false);
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={() => setIsOpen(false)}
        className={`fixed top-12 left-0 right-0 bottom-0 bg-black/30 transition-opacity duration-300 ${isOpen
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
          }`}
      />

      {/* Drawer panel */}
      <div
        className={`fixed top-12 left-0 bottom-0 w-56 bg-white shadow-xl z-50 transition-transform duration-300 ease-in-out 
                    ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <nav className="flex flex-col pt-6 px-3 gap-y-3">
          {items.map(({ label, icon, link }) => {
            const isCurrentPage = pathname === link;

            return (
              <Link
                key={label}
                href={link}
                className={`w-full py-1 ps-3 hover:pointer active:bg-brand-blue active:text-white active:rounded-md ${isCurrentPage
                  ? "text-brand-blue font-bold bg-brand-blue/10 rounded-md"
                  : ""
                  }`}
              >
                <button
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-x-1.5 w-full h-full"
                >
                  {icon}
                  <span>{label}</span>
                </button>
              </Link>
            );
          })}
        </nav>
      </div>
    </>
  );
}
