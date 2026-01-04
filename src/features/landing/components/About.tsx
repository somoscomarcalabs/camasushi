'use client';

import { whatsappUrl } from '@/features/contact/info';

export default function About() {
  return (
    <>
      {/* Sección About - Ocupa toda la pantalla */}
      <section id="about" className="w-full bg-background dark:bg-secondary text-foreground dark:text-muted min-h-screen flex flex-col justify-center py-12 md:py-0">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 md:px-8 w-full mt-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 md:gap-12">
            {/* Contenido - Lado izquierdo */}
            <div className="w-full lg:w-1/2">
              <div className="space-y-8">
                {/* Título y descripción principal */}
                <div className="space-y-6">
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-clash">
                    Nuestra <span className="text-primary">Historia</span>
                  </h2>

                  <p className="text-lg md:text-xl font-satoshi font-medium">
                    Descubrí la pasión detrás de cada roll
                  </p>

                  <div className="space-y-4">
                    <p className="text-base md:text-lg font-satoshi font-light leading-relaxed">
                      En CamaSushi, fusionamos la tradición japonesa con ingredientes frescos y locales de Misiones.
                      Cada plato es una obra de arte creada con dedicación y pasión por la gastronomía.
                    </p>

                    <p className="text-base md:text-lg font-satoshi font-light leading-relaxed">
                      Ubicados en el corazón de Puerto Rico, nos especializamos en sushi artesanal preparado
                      al momento con los más altos estándares de calidad.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contenido - Lado derecho */}
            <div className="w-full lg:w-1/2">
              <div className="space-y-8">
                {/* Línea divisoria para desktop */}
                <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 to p-1/4 h-2/3 w-px bg-muted/30 dark:bg-muted/20"></div>
                {/* Información práctica en tarjetas */}
                <div className="space-y-8 pt-0 lg:pt-6 border-t lg:border-t-0 border-muted/30 dark:border-muted/20">
                  {/* Horarios */}
                  <div className="p-6 bg-background/50 dark:bg-secondary/30 rounded-xl">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-primary/10 dark:bg-accent/10 rounded-lg">
                        <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <h3 className="font-clash text-xl font-bold">
                        Horarios de Entrega
                      </h3>
                    </div>
                    <div className="space-y-3 pl-11">
                      <div className="flex justify-between">
                        <span className="text-sm font-satoshi font-bold">
                          Viernes - Sábado
                        </span>
                        <span className="text-sm font-satoshi font-medium">
                          A Partir de las 19:00 PM
                        </span>
                      </div>
                    </div>
                  </div>
                  {/*Minimo de Piezas*/}
                  <div className="p-6 bg-background/50 dark:bg-secondary/30 rounded-xl">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-primary/10 dark:bg-accent/10 rounded-lg">
                        <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm0 6a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1v-2zm0 6a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1v-2z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <h3 className="font-clash text-xl font-bold">
                        Mínimo de Piezas por pedido
                      </h3>
                    </div>
                    <div className="space-y-3 pl-11">
                      <div className="flex justify-between">
                        <span className="text-sm font-satoshi font-bold">
                          20 piezas
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
                          <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <h3 className="font-clash text-xl font-bold">
                          Ubicación
                        </h3>
                      </div>
                      <p className="text-sm font-satoshi font-medium pl-11">
                        Calle Estrada 206, esquina Córdoba, Puerto Rico, Misiones
                      </p>
                    </div>

                    {/* Contacto */}
                    <div className="p-6 bg-background/50 dark:bg-secondary/30 rounded-xl">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 bg-primary/10 dark:bg-accent/10 rounded-lg">
                          <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <h3 className="font-clash text-xl font-bold">
                          Contacto
                        </h3>
                      </div>
                      <div className="space-y-2 pl-11">
                        <p className="text-sm font-satoshi font-medium">
                          3743 417060
                        </p>
                        <p className="text-sm font-satoshi font-medium">
                          3743 502117
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Botón de acción centrado */}
                <div className="pt-4 text-center md:text-center lg:col-span-2">
                  <a
                    href={whatsappUrl}
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
    </>
  );
}
