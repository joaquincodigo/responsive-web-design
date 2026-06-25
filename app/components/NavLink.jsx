"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLink({ href, label, icon }) {
  const pathname = usePathname();

  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`flex items-center gap-x-1 h-[3.125rem] px-3
        ${isActive ? "bg-white text-brand-blue rounded-t-md font-bold text" : ""}`}
    >
      {icon}
      <span>{label}</span>

    </Link>
  );
}
