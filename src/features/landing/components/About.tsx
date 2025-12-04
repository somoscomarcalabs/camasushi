'use client';

import Image from 'next/image';

export default function About() {
  return (
    <section id="about" className="w-full bg-background dark:bg-secondary text-foreground dark:text-muted py-12 md:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 md:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 md:gap-12">

          {/* Imagen - Lado izquierdo */}
          <div className="w-full lg:w-1/2">
            <div className="relative h-64 md:h-80 lg:h-96 w-full rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/images/about/about-image.jpg" // Cambia esta ruta
                alt="Sobre CamaSushi"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
              />
            </div>
          </div>

          {/* Contenido - Lado derecho */}
          <div className="w-full lg:w-1/2">
            <div className="space-y-6">
              {/* Título */}
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-clash text-foreground dark:text-muted">
                Nuestra <span className="text-primary dark:text-accent">Historia</span>
              </h2>

              {/* Subtítulo */}
              <p className="text-lg md:text-xl text-muted-foreground font-satoshi font-medium">
                Descubre la pasión detrás de cada roll
              </p>

              {/* Texto descriptivo */}
              <div className="space-y-4">
                <p className="text-base md:text-lg text-foreground dark:text-muted font-satoshi font-light leading-relaxed">
                  En CamaSushi, fusionamos la tradición japonesa con ingredientes frescos y locales de Misiones.
                  Cada plato es una obra de arte creada con dedicación y pasión por la gastronomía.
                </p>

                <p className="text-base md:text-lg text-foreground dark:text-muted font-satoshi font-light leading-relaxed">
                  Ubicados en el corazón de Puerto Rico, nos especializamos en sushi artesanal preparado
                  al momento con los más altos estándares de calidad. Nuestro compromiso es ofrecer una
                  experiencia culinaria única que combine autenticidad y creatividad.
                </p>
              </div>

              {/* Características/Valores */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                <div className="flex items-start gap-3">
                  <div className="mt-1 p-1.5 bg-primary/10 dark:bg-accent/10 rounded-full">
                    <svg className="w-5 h-5 text-primary dark:text-accent" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-clash font-semibold text-foreground dark:text-muted">Ingredientes Frescos</h4>
                    <p className="text-sm text-muted-foreground font-satoshi font-light">
                      Selección diaria de productos locales
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="mt-1 p-1.5 bg-primary/10 dark:bg-accent/10 rounded-full">
                    <svg className="w-5 h-5 text-primary dark:text-accent" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-clash font-semibold text-foreground dark:text-muted">Artesanía</h4>
                    <p className="text-sm text-muted-foreground font-satoshi font-light">
                      Hecho a mano por chefs especializados
                    </p>
                  </div>
                </div>
              </div>

              {/* Sección Horarios & Ubicación */}
              <div className="flex flex-col">
                <h2 className="font-clash text-2xl text-foreground dark:text-muted font-bold leading-tight pb-4">
                  Horarios & Ubicación
                </h2>
                <div className="grid grid-cols-[auto_1fr] gap-x-6 border-t border-muted dark:border-muted/30">
                  <div className="col-span-2 grid grid-cols-subgrid py-4">
                    <p className="text-muted-foreground dark:text-muted/80 text-sm font-satoshi font-normal">
                      Viernes - Sábado
                    </p>
                    <p className="text-foreground dark:text-muted text-sm font-satoshi font-medium">
                      8:00 AM - 23:00 PM
                    </p>
                  </div>
                  <div className="col-span-2 grid grid-cols-subgrid border-t border-muted dark:border-muted/30 py-4">
                    <p className="text-muted-foreground dark:text-muted/80 text-sm font-satoshi font-normal">
                      Dirección
                    </p>
                    <p className="text-foreground dark:text-muted text-sm font-satoshi font-medium">
                      Calle Estrada 206, esquina Córdoba, Puerto Rico, Misiones
                    </p>
                  </div>
                </div>
              </div>

              {/* Sección Contacto */}
              <div className="flex flex-col">
                <h2 className="font-clash text-2xl text-foreground dark:text-muted font-bold leading-tight pb-4">
                  Contacto
                </h2>
                <div className="grid grid-cols-[auto_1fr] gap-x-6 border-t border-muted dark:border-muted/30">
                  <div className="col-span-2 grid grid-cols-subgrid py-4">
                    <p className="text-muted-foreground dark:text-muted/80 text-sm font-satoshi font-normal">
                      Teléfono 1
                    </p>
                    <p className="text-foreground dark:text-muted text-sm font-satoshi font-medium">
                      3743 417060
                    </p>
                  </div>
                  <div className="col-span-2 grid grid-cols-subgrid border-t border-muted dark:border-muted/30 py-4">
                    <p className="text-muted-foreground dark:text-muted/80 text-sm font-satoshi font-normal">
                      Teléfono 2
                    </p>
                    <p className="text-foreground dark:text-muted text-sm font-satoshi font-medium">
                      3743 502117
                    </p>
                  </div>
                </div>
              </div>

              {/* Botón de acción */}
              <div className="pt-2">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary dark:bg-accent text-white font-satoshi font-medium rounded-lg hover:bg-primary/90 dark:hover:bg-accent/90 transition-colors shadow-md hover:shadow-lg"
                >
                  <span>Hacer un pedido</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  );
}
