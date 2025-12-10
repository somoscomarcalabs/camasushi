'use client';

import Link from 'next/link';
import Image from 'next/image';

const IMAGE_404_LIGHT = '/images/ui/404-light-transparente.png';
const IMAGE_404_DARK = '/images/ui/404-dark-transparente.png';
export const IMAGE_404_ALT_TEXT = 'Error 404 - Página no encontrada'

export default function NotFound() {
  return (

    <section
      data-testid="not-found-page"
      className="w-full bg-background dark:bg-secondary text-foreground dark:text-muted min-h-screen flex flex-col justify-center py-12 md:py-0">

      <div className="mx-auto max-w-6xl px-4 sm:px-6 md:px-8 w-full flex flex-col items-center justify-center text-center">

        {/*
          Imagen 404
          Usamos la clase 'dark:hidden' y 'hidden dark:block' para cambiar la imagen
          automáticamente según el tema activo, aprovechando las clases de Tailwind.
        */}
        <div className="relative w-full max-w-sm h-64 mb-8 sm:h-72 lg:h-80">
          <Image
            src={IMAGE_404_LIGHT}
            alt={IMAGE_404_ALT_TEXT}
            className="dark:hidden"
            fill
            style={{ objectFit: "contain" }}
            priority
          />
          <Image
            src={IMAGE_404_DARK}
            alt={IMAGE_404_ALT_TEXT}
            fill
            style={{ objectFit: "contain" }}
            className="hidden dark:block"
            priority
          />
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-clash font-bold mt-4 mb-3">
          Página <span className="text-primary">no</span> encontrada
        </h1>

        <p className="text-lg md:text-xl font-satoshi font-medium mb-10 text-gray-600 dark:text-muted/80">
          Lo sentimos — la página que buscas no existe.
        </p>

        <Link
          href="/"
          className="inline-flex items-center gap-3 px-8 py-4 bg-primary dark:bg-accent text-white font-satoshi font-medium rounded-lg hover:bg-primary/90 dark:hover:bg-accent/90 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
        >
          <span className="text-lg">Volver a Inicio</span>
        </Link>

      </div>
    </section>
  );
}
