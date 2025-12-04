'use client';

import Image from 'next/image';

export default function About() {
  const mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d890.2257410108905!2d-55.02331893046934!3d-26.81121820161122!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94f8271970e60731%3A0xc705252c52c4bdb8!2sJos%C3%A9%20Manuel%20Estrada%20206%2C%20N3334%20Puerto%20Rico%2C%20Misiones!5e0!3m2!1ses!2sar!4v1764876846280!5m2!1ses!2sar";

  return (
    <>
      {/* Sección About - Ocupa toda la pantalla */}
      <section id="about" className="w-full bg-background dark:bg-secondary text-foreground dark:text-muted min-h-screen flex flex-col justify-center py-12 md:py-0">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 md:px-8 w-full mt-10">
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
                    Nuestra <span className="text-primary">Historia</span>
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

                {/* Información práctica en tarjetas */}
                <div className="space-y-8 pt-6 border-t border-muted/30 dark:border-muted/20">
                  {/* Horarios */}
                  <div className="p-6 bg-background/50 dark:bg-secondary/30 rounded-xl">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-primary/10 dark:bg-accent/10 rounded-lg">
                        <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
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
                          <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
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
                          <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
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

      {/* Sección Mapa - Ocupa toda la pantalla */}
      <section id="contact" className="w-full bg-background dark:bg-secondary text-foreground dark:text-muted min-h-screen flex flex-col justify-center py-12 md:py-0">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 md:px-8 w-full">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 md:gap-12">

            {/* Información de la ubicación - Lado izquierdo */}
            <div className="w-full lg:w-1/2">
              <div className="space-y-8">
                <div className="space-y-6 mt-10">
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-clash text-foreground dark:text-muted">
                    Encontranos <span className="text-primary">Fácilmente</span>
                  </h2>

                  <p className="text-lg md:text-xl text-muted-foreground font-satoshi font-medium">
                    Ubicados en el corazón de Puerto Rico
                  </p>

                  <div className="space-y-6">
                    <div className="p-6 bg-background/50 dark:bg-secondary/30 rounded-xl">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 bg-primary/10 dark:bg-accent/10 rounded-lg">
                          <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <h3 className="font-clash text-2xl text-foreground dark:text-muted font-bold">
                          Dirección Completa
                        </h3>
                      </div>
                      <div className="space-y-4 pl-11">
                        <div>
                          <p className="text-foreground dark:text-muted text-lg font-satoshi font-medium">
                            José Manuel Estrada 206
                          </p>
                          <p className="text-muted-foreground dark:text-muted/80 text-sm font-satoshi">
                            Esquina Córdoba
                          </p>
                        </div>
                        <div>
                          <p className="text-foreground dark:text-muted text-lg font-satoshi font-medium">
                            Puerto Rico, Misiones
                          </p>
                          <p className="text-muted-foreground dark:text-muted/80 text-sm font-satoshi">
                            N3334
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Botón para abrir en Maps */}
                    <div className="w-full flex justify-center pt-4">
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
  );
}
