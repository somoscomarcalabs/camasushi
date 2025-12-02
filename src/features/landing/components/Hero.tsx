import Image from 'next/image';

const Hero = () => {
  return (
    <section
      data-testid="hero-section"
      className="relative flex flex-col md:flex-row  gap-x-20 min-h-screen bg-primary dark:bg-secondary flex flex-col items-center justify-center px-4 text-center"
    >
      <div data-testid="hero-logo-container" className="relative w-48 h-48 md:w-150 md:h-150 md:mt-20 mt-30 mb-8 items-center animate-slide-in-left">
        <Image
          src="/images/ui/logo-vector.webp"
          alt="camasushi-logo"
          fill
          className="object-contain"
          priority
        />
      </div>

      <div data-testid="hero-text-container" className="max-w-2xl text-foreground dark:text-primary uppercase md:mt-20 animate-slide-in-right" style={{ animationDelay: '200ms' }}>
        <div className="text-4xl md:text-6xl font-bold">
          <h1>
            El mejor Sushi
          </h1>
          <h1 className='text-background'>
            de puerto rico
          </h1>
        </div>
        <div>
          <a
            href="#menu"
            className="inline-block bg-white text-foreground font-bold py-4 px-15 rounded-2xl hover:bg-gray-100 transition duration-300 shadow-lg md:text-4xl text-lg md:mt-10 mt-5 mb-4 font-clash"
          >
            Mirá nuestro Menú
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
