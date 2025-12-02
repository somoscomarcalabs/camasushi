'use client';
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <header className="fixed z-50 top-0 left-0 right-0 w-full bg-white dark:bg-secondary text-black dark:text-muted shadow-sm py-3">
      <div className="relative w-full flex items-center">

        {/* LOGO */}
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

        {/* NAV Desktop */}
        <nav
          data-testid="desktop-navigation"
          className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-8 font-satoshi text-lg font-medium"
        >
          <Link
            className="hover:text-gray-400 dark:hover:text-primary transition-colors duration-200"
            href="/"
          >
            Home
          </Link>
          <Link
            className="hover:text-gray-400 dark:hover:text-primary transition-colors duration-200"
            href="#menu"
          >
            Menu
          </Link>
          <Link
            className="hover:text-gray-400 dark:hover:text-primary transition-colors duration-200"
            href="#about"
          >
            About Us
          </Link>
          <Link
            className="hover:text-gray-400 dark:hover:text-primary transition-colors duration-200"
            href="#contact"
          >
            Contact
          </Link>
        </nav>

        {/* HAMBURGER ANIMATION */}
        <div
          data-testid="burger-button"
          className="md:hidden ml-auto mr-6 z-[60] relative"
          onClick={() => setOpenMenu(!openMenu)}
        >
          <div id="burger" className={`${openMenu ? "open" : ""} text-black dark:text-foreground`}>
            <div className="bg-current"></div>
            <div className="bg-current"></div>
            <div className="bg-current"></div>
          </div>
        </div>

        {/* NAV Mobile */}
        <div
          data-testid="mobile-menu"
          role="mobile-menu-behavior"
          className={`fixed top-0 right-0 h-screen w-[70%] max-w-sm bg-white dark:bg-secondary shadow-2xl z-50 transition-transform duration-500 ease-in-out
          ${openMenu ? "translate-x-0" : "translate-x-full"}`}
        >
          <nav className="flex flex-col items-start gap-6 px-8 pt-32 h-full text-lg">
            <Link
              onClick={() => setOpenMenu(false)}
              className="font-medium dark:text-white hover:text-gray-400 dark:hover:text-primary transition-colors duration-200"
              href="/"
            >
              Home
            </Link>
            <Link
              onClick={() => setOpenMenu(false)}
              className="font-medium dark:text-white hover:text-gray-400 dark:hover:text-primary transition-colors duration-200"
              href="#menu"
            >
              Menu
            </Link>
            <Link
              onClick={() => setOpenMenu(false)}
              className="font-medium dark:text-white hover:text-gray-400 dark:hover:text-primary transition-colors duration-200"
              href="#about"
            >
              About Us
            </Link>
            <Link
              onClick={() => setOpenMenu(false)}
              className="font-medium dark:text-white hover:text-gray-400 dark:hover:text-primary transition-colors duration-200"
              href="#contact"
            >
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
