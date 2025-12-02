export default function Hero() {
  return (
    <section data-testid="hero-section" className="container mx-auto px-4 py-12 text-center text-secondary">
      <h1 className="text-4xl md:text-6xl mb-2">El mejor Sushi de Puerto Rico</h1>
      <p className="uppercase mb-4">Sushi hecho a mano con ingredientes frescos.</p>
      <a href="#menu" className="inline-block bg-accent text-white font-bold py-3 px-8 rounded-full hover: transition duration-300">Mirá nuestro Menú</a>
    </section>
  )
}
