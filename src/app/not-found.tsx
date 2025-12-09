'use client';

import Link from 'next/link';
import Image from 'next/image';

const IMAGE_404_LIGHT = '/images/ui/404-light-transparente.png';
const IMAGE_404_DARK = '/images/ui/404-dark-transparente.png';

/**
 * Componente de página para manejar rutas no encontradas (404) en Next.js App Router.
 * Se ubica en src/app/not-found.tsx y anula la página 404 por defecto.
 */
export default function NotFound() {
  return (
    // Utilizamos la sección principal con los colores de fondo inferidos y min-h-screen
    <section className="w-full bg-background dark:bg-secondary text-foreground dark:text-muted min-h-screen flex flex-col justify-center py-12 md:py-0">

      <div className="mx-auto max-w-6xl px-4 sm:px-6 md:px-8 w-full flex flex-col items-center justify-center text-center">

        {/*
          Imagen 404
          Usamos la clase 'dark:hidden' y 'hidden dark:block' para cambiar la imagen
          automáticamente según el tema activo, aprovechando las clases de Tailwind.
        */}
        <div className="relative w-full max-w-sm h-64 mb-8 sm:h-72 lg:h-80">
          <Image
            src={IMAGE_404_LIGHT}
            alt="Error 404 - Página no encontrada"
            className="dark:hidden"
            fill
            style={{ objectFit: "contain" }}
            priority // Priorizar la carga de la imagen de error
          />
          <Image
            src={IMAGE_404_DARK}
            alt="Error 404 - Página no encontrada"
            fill
            style={{ objectFit: "contain" }}
            className="hidden dark:block"
            priority // Priorizar la carga de la imagen de error
          />
        </div>


        {/* Título Principal: "Página no encontrada" */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-clash font-bold mt-4 mb-3">
          Página <span className="text-primary">no</span> encontrada
        </h1>

        {/* Subtítulo Descriptivo */}
        <p className="text-lg md:text-xl font-satoshi font-medium mb-10 text-gray-600 dark:text-muted/80">
          Lo sentimos — la página que buscas no existe.
        </p>

        {/* Botón para retornar a Inicio */}
        <Link
          href="/"
          // Reutilizamos el estilo de botón del ejemplo de contacto
          className="inline-flex items-center gap-3 px-8 py-4 bg-primary dark:bg-accent text-white font-satoshi font-medium rounded-lg hover:bg-primary/90 dark:hover:bg-accent/90 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
        >
          <span className="text-lg">Volver a Inicio</span>
        </Link>

      </div>
    </section>
  );
}
