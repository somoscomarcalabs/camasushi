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
                src="/images/about/about-image.jpg"
                alt="Sobre CamaSushi"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
              />
            </div>
          </div>

          {/* Contenido - Lado derecho */}
          <div className="w-full lg:w-1/2">
            <div className="space-y-8">
              {/* Título y descripción principal */}
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-clash text-foreground dark:text-muted">
                  Nuestra <span className="text-primary dark:text-accent">Historia</span>
                </h2>

                <p className="text-lg md:text-xl text-muted-foreground font-satoshi font-medium">
                  Descubre la pasión detrás de cada roll
                </p>

                <div className="space-y-4">
                  <p className="text-base md:text-lg text-foreground dark:text-muted font-satoshi font-light leading-relaxed">
                    En CamaSushi, fusionamos la tradición japonesa con ingredientes frescos y locales de Misiones.
                    Cada plato es una obra de arte creada con dedicación y pasión por la gastronomía.
                  </p>

                  <p className="text-base md:text-lg text-foreground dark:text-muted font-satoshi font-light leading-relaxed">
                    Ubicados en el corazón de Puerto Rico, nos especializamos en sushi artesanal preparado
                    al momento con los más altos estándares de calidad.
                  </p>
                </div>
              </div>

              {/* Características/Valores - En 2 columnas */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-muted/30 dark:border-muted/20">
                <div className="flex flex-col gap-4 p-4 bg-background/50 dark:bg-secondary/30 rounded-lg">
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-primary/10 dark:bg-accent/10 rounded-full">
                      <svg className="w-5 h-5 text-primary dark:text-accent" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-clash font-semibold text-foreground dark:text-muted">Ingredientes Frescos</h4>
                      <p className="text-sm text-muted-foreground font-satoshi font-light mt-1">
                        Selección diaria de productos locales
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-4 p-4 bg-background/50 dark:bg-secondary/30 rounded-lg">
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-primary/10 dark:bg-accent/10 rounded-full">
                      <svg className="w-5 h-5 text-primary dark:text-accent" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-clash font-semibold text-foreground dark:text-muted">Artesanía</h4>
                      <p className="text-sm text-muted-foreground font-satoshi font-light mt-1">
                        Hecho a mano por chefs especializados
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Información práctica en tarjetas */}
              <div className="space-y-8 pt-6 border-t border-muted/30 dark:border-muted/20">
                {/* Horarios */}
                <div className="p-6 bg-background/50 dark:bg-secondary/30 rounded-xl">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-primary/10 dark:bg-accent/10 rounded-lg">
                      <svg className="w-5 h-5 text-primary dark:text-accent" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <h3 className="font-clash text-xl text-foreground dark:text-muted font-bold">
                      Horarios
                    </h3>
                  </div>
                  <div className="space-y-3 pl-11">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground dark:text-muted/80 text-sm font-satoshi">
                        Viernes - Sábado
                      </span>
                      <span className="text-foreground dark:text-muted text-sm font-satoshi font-medium">
                        8:00 AM - 23:00 PM
                      </span>
                    </div>
                  </div>
                </div>

                {/* Ubicación y Contacto lado a lado en desktop */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Ubicación */}
                  <div className="p-6 bg-background/50 dark:bg-secondary/30 rounded-xl">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-primary/10 dark:bg-accent/10 rounded-lg">
                        <svg className="w-5 h-5 text-primary dark:text-accent" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <h3 className="font-clash text-xl text-foreground dark:text-muted font-bold">
                        Ubicación
                      </h3>
                    </div>
                    <p className="text-foreground dark:text-muted text-sm font-satoshi font-medium pl-11">
                      Calle Estrada 206, esquina Córdoba, Puerto Rico, Misiones
                    </p>
                  </div>

                  {/* Contacto */}
                  <div className="p-6 bg-background/50 dark:bg-secondary/30 rounded-xl">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-primary/10 dark:bg-accent/10 rounded-lg">
                        <svg className="w-5 h-5 text-primary dark:text-accent" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <h3 className="font-clash text-xl text-foreground dark:text-muted font-bold">
                        Contacto
                      </h3>
                    </div>
                    <div className="space-y-2 pl-11">
                      <p className="text-foreground dark:text-muted text-sm font-satoshi font-medium">
                        3743 417060
                      </p>
                      <p className="text-foreground dark:text-muted text-sm font-satoshi font-medium">
                        3743 502117
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Botón de acción centrado */}
              <div className="pt-4 text-center md:text-left">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-8 py-3 bg-primary dark:bg-accent text-white font-satoshi font-medium rounded-lg hover:bg-primary/90 dark:hover:bg-accent/90 transition-colors shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                >
                  <span>Hacer un pedido</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
