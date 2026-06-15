"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLink({ href, label, icon }) {
  const pathname = usePathname();

  const isActive = pathname === href;

  return (



    <Link
      href={href}
      className={`flex items-center gap-x-1 px-2 h-8 ${isActive ? "bg-brand-very-pale text-black rounded-md" : ""}`}


    >
      {icon}
      <span>{label}</span>

    </Link>



  );
}
