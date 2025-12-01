'use client';
import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";

export default function Header() {

  const [openMenu, setOpenMenu] = useState(false);

  return (
    <header className="fixed z-50 top-0 left-0 right-0 w-full bg-white text-black shadow-sm py-3">
      < div className="relative w-full flex items-center" >

        <div className="pl-0 ml-4 relative h-20 w-25">
          <Image
            src="/logo.png"
            alt="Logo"
            fill
            sizes="(max-width: 768px) 100px, 150px"
            className="object-cover rounded-full"
            loading="eager"
          />
        </div>

        <nav className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-8">
          <Link className="text-lg font-medium hover:text-gray-400 transition-colors" href="/">Home</Link>
          <Link className="text-md font-medium hover:text-gray-400 transition-colors" href="#menu">Menu</Link>
          <Link className="text-md font-medium hover:text-gray-400 transition-colors" href="#about">About Us</Link>
          <Link className="text-md font-medium hover:text-gray-400 transition-colors" href="#contact">Contact</Link>
        </nav>

        <div
          className="md:hidden ml-auto mr-6 z-[60] relative"
          onClick={() => setOpenMenu(!openMenu)}
        >
          <div id="burger" className={openMenu ? "open" : ""}>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>

        <div
          className={`fixed top-0 right-0 h-screen w-[70%] max-w-sm bg-white shadow-2xl z-50 transition-transform duration-500 ease-in-out
          ${openMenu ? "translate-x-0" : "translate-x-full"}`}
        >
          <nav className="flex flex-col items-start gap-6 px-8 pt-32 h-full">
            <Link onClick={() => setOpenMenu(false)} className="text-lg font-medium" href="/">Home</Link>
            <Link onClick={() => setOpenMenu(false)} className="text-md font-medium" href="#menu">Menu</Link>
            <Link onClick={() => setOpenMenu(false)} className="text-md font-medium" href="#about">About Us</Link>
            <Link onClick={() => setOpenMenu(false)} className="text-md font-medium" href="#contact">Contact</Link>
          </nav>
        </div>
      </div >
    </header >
  );
}
