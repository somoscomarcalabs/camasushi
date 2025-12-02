'use client';
import Image from "next/image";

export default function Footer() {

  // Número de teléfono de la empresa (sin espacios, guiones, etc.)
  const whatsappNumber = "3743417060";
  // Mensaje predefinido (opcional)
  const defaultMessage = "Hola, me gustaría hacer un pedido de sushi!";
  // URL de WhatsApp
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(defaultMessage)}`;

  // Usuario de Instagram
  const instagramUsername = "camasushi";
  // Construir la URL de Instagram
  const instagramUrl = `https://instagram.com/${instagramUsername}`;

  return (
    <footer id="contact" className="iw-full bg-background dark:bg-secondary text-foreground dark:text-muted backdrop-blur-sm border-t border-muted">
      <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6 md:px-8">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          {/* Contenedor del logo e información - Centrado en móvil, alineado a la izquierda en desktop */}
          <div className="text-center sm:text-left w-full sm:w-auto flex flex-col items-center sm:items-start">
            <div className="flex flex-col items-center sm:items-start">
              <div className="mb-[-0.5rem]">
                {/* Logo para light mode */}
                <Image
                  src="/images/ui/camasushi-footer-light.png"
                  alt="CamaSushi Logo"
                  width={100}
                  height={30}
                  className="h-auto -my-1 block dark:hidden"
                  priority={false}
                />
                {/* Logo para dark mode */}
                <Image
                  src="/images/ui/camasushi-footer-dark.png"
                  alt="CamaSushi Logo"
                  width={100}
                  height={30}
                  className="h-auto -my-1 hidden dark:block"
                  priority={false}
                />
              </div>
              <p className="text-sm text-muted-foreground mt-[-0.25rem] text-center sm:text-left">Calle Estrada 206, esquina Córdoba</p>
              <p className="text-sm text-muted-foreground mt-[-0.25rem] text-center sm:text-left">Puerto Rico, Misiones</p>
              <p className="text-sm text-muted-foreground mt-[-0.25rem] text-center sm:text-left">Viernes y Sábados</p>
              <p className="text-sm text-muted-foreground mt-[-0.25rem] text-center sm:text-left">Pedidos con anticipación</p>
              <p className="text-sm text-muted-foreground text-center sm:text-left font-bold">3743 417060 / 3743 502117</p>
            </div>
          </div>

          {/* Íconos de redes sociales - Centrados en móvil, a la derecha en desktop */}
          <div className="flex gap-4 items-center justify-center sm:justify-start">
            <a
              className="text-muted-foreground transition-colors hover:text-primary"
              data-alt="WhatsApp icon"
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              title="Contactar por WhatsApp"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 432 432" xmlns="http://www.w3.org/2000/svg">
                <path d="M364.5 65Q427 127 427 214.5T364.5 364T214 426q-54 0-101-26L0 429l30-109Q2 271 2 214q0-87 62-149T214 3t150.5 62zM214 390q73 0 125-51.5T391 214T339 89.5T214 38T89.5 89.5T38 214q0 51 27 94l4 6l-18 65l67-17l6 3q42 25 90 25zm97-132q9 5 10 7q4 6-3 25q-3 8-15 15.5t-21 9.5q-18 2-33-2q-17-6-30-11q-8-4-15.5-8.5t-14.5-9t-13-9.5t-11.5-10t-10.5-10.5t-8.5-9.5t-7-8.5t-5.5-7t-3.5-5L128 222q-22-29-22-55q0-24 19-44q6-7 14-7q6 0 10 1q8 0 12 9q2 3 6 13l7 17.5l3 8.5q3 5 1 9q-3 7-5 9l-3 3l-3 3.5l-2 2.5q-6 6-3 11q13 22 30 37q13 11 43 26q7 3 11-1q12-15 17-21q4-6 12-3q6 3 36 17z" />
              </svg>
            </a>
            <a
              className="text-muted-foreground transition-colors hover:text-primary"
              data-alt="Instagram icon"
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              title="Seguir en Instagram"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C8.74 0 8.333.015 7.053.072 2.695.272.273 2.69.073 7.052.015 8.333 0 8.74 0 12c0 3.26.015 3.668.072 4.948.2 4.258 2.618 6.68 6.98 6.98C8.333 23.985 8.74 24 12 24c3.26 0 3.668-.015 4.948-.072 4.26-.2 6.78-2.618 6.98-6.98C23.985 15.668 24 15.26 24 12c0-3.26-.015-3.667-.072-4.947-.2-4.258-2.618-6.68-6.98-6.98C15.668.015 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 3.252.148 4.771 1.691 4.919 4.919.055 1.265.07 1.645.07 4.85 0 3.204-.015 3.584-.07 4.85-.149 3.225-1.664 4.771-4.919 4.919-1.266.055-1.645.07-4.85.07-3.204 0-3.584-.015-4.85-.07-3.225-.149-4.771-1.664-4.919-4.919-.055-1.266-.07-1.645-.07-4.85 0-3.204.015-3.584.07-4.85.149-3.225 1.664-4.771 4.919-4.919C8.416 2.176 8.796 2.16 12 2.16zm0 3.678a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
            </a>
          </div>
        </div>
        <div className="mt-4 border-t border-muted pt-4 text-center text-sm text-muted-foreground font-bold">
          <p>© 2025 CamaSushi. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
