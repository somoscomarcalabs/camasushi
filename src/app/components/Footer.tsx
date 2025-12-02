'use client';
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full bg-background dark:bg-secondary text-foreground dark:text-muted backdrop-blur-sm border-t border-muted">
      <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6 md:px-8">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="text-center sm:text-left flex items-center sm:items-start">
            <div className="flex flex-col">
              <div className="mb-[-0.5rem]">
                <Image
                  src="/images/ui/camasushi-footer-light.png"
                  alt="CamaSushi Logo"
                  width={100}
                  height={30}
                  className="h-auto -my-1"
                  priority={false}
                />
              </div>
              <p className="text-sm text-muted-foreground mt-[-0.25rem]">Dirección: Calle Estrada 206, esq. Córdoba, Puerto Rico, Misiones</p>
              <p className="text-sm text-muted-foreground mt-[-0.25rem]">Viernes y Sábados - Pedidos con anticipación</p>
              <p className="text-sm text-muted-foreground">Teléfono: 3743 417060 / 502117</p>
            </div>
          </div>
          <div className="flex gap-4 items-center">
            <a
              className="text-muted-foreground transition-colors hover:text-primary"
              data-alt="WhatsApp icon"
              href="#"
              aria-label="WhatsApp"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 432 432" xmlns="http://www.w3.org/2000/svg">
                <path d="M364.5 65Q427 127 427 214.5T364.5 364T214 426q-54 0-101-26L0 429l30-109Q2 271 2 214q0-87 62-149T214 3t150.5 62zM214 390q73 0 125-51.5T391 214T339 89.5T214 38T89.5 89.5T38 214q0 51 27 94l4 6l-18 65l67-17l6 3q42 25 90 25zm97-132q9 5 10 7q4 6-3 25q-3 8-15 15.5t-21 9.5q-18 2-33-2q-17-6-30-11q-8-4-15.5-8.5t-14.5-9t-13-9.5t-11.5-10t-10.5-10.5t-8.5-9.5t-7-8.5t-5.5-7t-3.5-5L128 222q-22-29-22-55q0-24 19-44q6-7 14-7q6 0 10 1q8 0 12 9q2 3 6 13l7 17.5l3 8.5q3 5 1 9q-3 7-5 9l-3 3l-3 3.5l-2 2.5q-6 6-3 11q13 22 30 37q13 11 43 26q7 3 11-1q12-15 17-21q4-6 12-3q6 3 36 17z" />
              </svg>
            </a>
            <a
              className="text-muted-foreground transition-colors hover:text-primary"
              data-alt="Instagram icon"
              href="#"
              aria-label="Instagram"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85 0 3.204-.011 3.584-.069 4.85-.148 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.85-.07-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.069-1.645-.069-4.85 0-3.204.011-3.584.069-4.85.148-3.225 1.664-4.771 4.919-4.919 1.266-.057 1.644-.069 4.85-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.667.072 4.947.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.667-.014 4.947-.072 4.358-.2 6.78-2.618 6.98-6.98.059-1.281.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.2-4.358-2.618-6.78-6.98-6.98-1.281-.059-1.689-.073-4.948-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.441 1.441 1.441 1.441-.645 1.441-1.441-.645-1.44-1.441-1.44z" />
              </svg>
            </a>
          </div>
        </div>
        <div className="mt-4 border-t border-muted pt-4 text-center text-sm text-muted-foreground">
          <p>© 2025 CamaSushi. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
