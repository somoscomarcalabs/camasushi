'use client';
import Image from "next/image";
import { useState } from "react";
import Nav from '@/app/components/Nav';

export default function Header() {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <header className="fixed z-50 top-0 left-0 right-0 w-full bg-white dark:bg-secondary text-black dark:text-muted shadow-sm">
      <div className="relative w-full flex items-center">

        {/* LOGO */}
        <div className="pl-0 ml-4 relative h-20 w-25">
          <Image
            src="/images/ui/logo.png"
            alt="Logo"
            fill
            sizes="(max-width: 768px) 100px, 150px"
            className="object-cover rounded-full"
            loading="eager"
          />
        </div>

        <Nav isMobile={false} />

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
          <Nav isMobile={true} onLinkClick={() => setOpenMenu(false)} />
        </div>
      </div>
    </header>
  );
}
