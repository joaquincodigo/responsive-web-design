"use client";
import { useState } from "react";
import BurgerMenuButton from "./BurgerMenuButton";
import Drawer from "./Drawer";
import Image from "next/image";
import Navbar from "./Navbar";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      {/* Header */}
      <div className="bg-brand-blue h-12 flex justify-between items-center py-1.5 px-6 fixed inset-0 ">

        {/* Burger menu */}
        <BurgerMenuButton onClick={toggleDrawer} isOpen={isOpen} />

        {/* Brand logo */}
        <div className="">
          <Image
            src="/northbridge-logo.gif"
            alt="Northbridge Logo"
            width={640} // intrinsic width
            height={106} // intrinsic height
            priority // preload (for above-the-fold)
            className="w-60 h-full"
          />
        </div>

        {/* Navbar */}
        <Navbar />

      </div>

      {/* Drawer */}
      <Drawer isOpen={isOpen} setIsOpen={setIsOpen} />

    </>
  );
}
