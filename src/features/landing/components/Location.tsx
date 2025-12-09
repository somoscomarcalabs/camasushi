'use client';
import { mapUrl } from '@/features/contact/info';

export default function Location() {
  return (
    <>
      {/* Sección Mapa - Ocupa toda la pantalla */}
      <section id="location" className="w-full bg-background dark:bg-secondary text-foreground dark:text-muted min-h-screen flex flex-col justify-center py-12 md:py-0">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 md:px-8 w-full">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 md:gap-12">

            {/* Información de la ubicación - Lado izquierdo */}
            <div className="w-full lg:w-1/2">
              <div className="space-y-8">
                <div className="space-y-6 mt-10">
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-clash lg:text-left">
                    Encontranos <span className="text-primary">Fácilmente</span>
                  </h2>

                  <p className="text-lg md:text-xl font-satoshi font-medium">
                    Ubicados en el corazón de Puerto Rico.
                  </p>

                  <div className="space-y-6">
                    <div className="p-6 bg-background/50 dark:bg-secondary/30 rounded-xl">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 bg-primary/10 dark:bg-accent/10 rounded-lg">
                          <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <h3 className="font-clash text-2xl font-bold">
                          Dirección
                        </h3>
                      </div>
                      <div className="space-y-4 pl-11">
                        <div>
                          <p className="text-lg font-satoshi font-medium">
                            José Manuel Estrada 206
                          </p>
                          <p className="dark:text-muted/80 text-sm font-satoshi">
                            Esquina Córdoba
                          </p>
                        </div>
                        <div>
                          <p className="text-lg font-satoshi font-medium">
                            Puerto Rico, Misiones
                          </p>
                          <p className="dark:text-muted/80 text-sm font-satoshi">
                            N3334
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Botón para abrir en Maps */}
                    <div className="w-full flex justify-center lg:justify-start pt-4">
                      <a
                        href="https://maps.google.com/?q=José+Manuel+Estrada+206,N3334+Puerto+Rico,Misiones"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 px-8 py-4 bg-primary dark:bg-accent text-white font-satoshi font-medium rounded-lg hover:bg-primary/90 dark:hover:bg-accent/90 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                      >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                        </svg>
                        <span className="text-lg">Abrir en Google Maps</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Mapa - Lado derecho */}
            <div className="w-full lg:w-1/2 flex flex-col items-center">
              <div className="space-y-6 w-full">
                <div className="relative w-full h-64 md:h-72 lg:h-80 rounded-2xl overflow-hidden shadow-2xl border border-muted/20 dark:border-muted/30 -mt-4">
                  <iframe
                    src={mapUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="absolute inset-0"
                    title="Ubicación de CamaSushi en Google Maps"
                    aria-label="Mapa interactivo mostrando la ubicación de CamaSushi en Calle Estrada 206, Puerto Rico, Misiones"
                  />

                  {/* Overlay para mejor contraste */}
                  <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent dark:from-black/10"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
