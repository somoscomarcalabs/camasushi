import Link from "next/link";


const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "#menu", label: "Menu" },
  { href: "#about", label: "Nosotros" },
  { href: "#contact", label: "Contacto" },
];

type Props = {
  isMobile: boolean,
  onLinkClick?: () => void,
  className?: string
}

export default function Nav({ isMobile, onLinkClick, className = "" }: Props) {
  const mobileNavClasses = "flex flex-col items-start gap-6 px-8 pt-32 h-full text-lg";
  const desktopNavClasses = "hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-8 font-satoshi text-lg font-medium";

  return (
    <nav
      data-testid={isMobile ? "mobile-navigation" : "desktop-navigation"}
      className={`${isMobile ? mobileNavClasses : desktopNavClasses} ${className}`}
    >
      {NAV_LINKS.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          onClick={onLinkClick}
          className={`hover:text-gray-400 dark:hover:text-primary transition-colors duration-200 
            ${isMobile ? "font-medium dark:text-white" : ""}`}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
};
