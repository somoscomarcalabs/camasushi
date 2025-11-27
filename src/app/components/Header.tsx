'use client';
import Link from "next/link";
import React from "react";


export default function Header() {
  return (
    <header className="absolute top-0 bg-red-500 flex justify-center w-full py-4">

      <div className="flex items-center gap-8">
        {/* Logo Section */}
        <Link href="/">
          <span className="text-xl font-bold">Cama Sushi</span>
        </Link>
        {/* Desktop Navigation */}
        <nav className="items-center gap-6 md:flex">
          <Link
            className="text-sm font-medium hover:text-gray-200 transition-colors"
            href="/"
          >
            Home
          </Link>
          <Link
            className="text-sm font-medium hover:text-gray-200 transition-colors"
            href="#"
          >
            Menu
          </Link>
          <Link
            className="text-sm font-medium hover:text-gray-200 transition-colors"
            href="#"
          >
            About Us
          </Link>
          <Link
            className="text-text-primary/70 text-sm font-medium hover:text-gray-200 transition-colors"
            href="#"
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
};

