'use client';
import Link from "next/link";
import Image from "next/image";
import React from "react";

export default function Header() {
  return (
    <header className="fixed z-50 top-0 left-0 right-0 w-full bg-white text-black shadow-sm py-3">
      <div className="relative w-full flex items-center">
        <div className="pl-0 ml-4 relative h-20 w-25">
          <Image
            src="/logo.png"
            alt="Logo"
            fill
            sizes="1"
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

      </div>
    </header>
  );
}
