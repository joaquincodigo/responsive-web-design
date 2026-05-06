"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLink({ href, label, icon }) {
  const pathname = usePathname();

  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`flex items-center gap-x-1 h-12 px-3 ${isActive ? "bg-white font-bold" : ""}`}
    >
      {icon}
      <span>{label}</span>
    </Link>
  );
}
