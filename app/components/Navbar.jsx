import NavLink from "./NavLink";

import { teamIcon, homeIcon, contactIcon } from "@/public/icons/icons";
const items = [
  { label: "Home", icon: homeIcon, link: "/home" },
  { label: "Our team", icon: teamIcon, link: "/team" },
  { label: "Contact us", icon: contactIcon, link: "/contact" },
];

export default function Navbar() {
  return (
    <nav className="hidden md:flex gap-x-6 text-white">
      {items.map(({ label, icon, link }) => (
        <NavLink key={label} href={link} label={label} icon={icon} />
      ))}
    </nav>
  );
}
