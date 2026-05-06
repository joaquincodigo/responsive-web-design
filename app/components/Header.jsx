"use client";
import { useState } from "react";
import BurgerMenuButton from "./BurgerMenuButton";
import Drawer from "./Drawer";
import Image from "next/image";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      {/* Header */}
      <div className="bg-brand-blue h-12 flex justify-between items-center p-1.5 fixed inset-0">
        <BurgerMenuButton onClick={toggleDrawer} isOpen={isOpen} />
        <div className="flex-1 flex justify-center pe-15">
          <Image
            src="/northbridge-logo.gif"
            alt="Northbridge Logo"
            width={640} // intrinsic width
            height={106} // intrinsic height
            priority // preload (for above-the-fold)
            className="w-60 ms-6"
          />
        </div>
      </div>

      {/* Drawer */}
      <Drawer isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
}
