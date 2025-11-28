import Header from "./components/Header";

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-zinc-50 font-sans dark:bg-black">
      <Header />

      {/* Contenido */}
      <main className="pt-32">

        <section id="home" className="min-h-[120vh] bg-red-100 flex items-center justify-center">
          <h1 className="text-4xl font-bold text-black">Home Section</h1>
        </section>

        <section id="menu" className="min-h-[120vh] bg-green-100 flex items-center justify-center">
          <h1 className="text-4xl font-bold text-black">Menu Section</h1>
        </section>

        <section id="about" className="min-h-[120vh] bg-blue-100 flex items-center justify-center">
          <h1 className="text-4xl font-bold text-black">About Us Section</h1>
        </section>

        <section id="contact" className="min-h-[120vh] bg-yellow-100 flex items-center justify-center">
          <h1 className="text-4xl font-bold text-black">Contact Section</h1>
        </section>

      </main>
    </div>
  );
}
