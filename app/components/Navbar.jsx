import NavLink from "./NavLink";

import { teamIcon, homeIcon, contactIcon } from "@/public/icons/icons";
const items = [
  { label: "Home", icon: homeIcon, link: "/" },
  { label: "Our team", icon: teamIcon, link: "/team" },
  { label: "Contact us", icon: contactIcon, link: "/contact" },
];

export default function Navbar() {
  return (
    <nav className="mt-12 h-12 md:flex items-center bg-brand-very-pale hidden">
      <div className="ms-6 flex gap-x-6">
        {items.map(({ label, icon, link }) => (
          <NavLink key={label} href={link} label={label} icon={icon} />
        ))}
      </div>
    </nav>
  );
}
