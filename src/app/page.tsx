import Footer from "./components/Footer";

export default function Home() {
  return (
    <div>
      <main>
        <section
          id="home"
          className="min-h-screen flex items-center justify-center bg-red-200 px-6 py-24"
        >
          <h1 className="text-5xl font-bold text-gray-900">Home Section</h1>
        </section>
        <section
          id="menu"
          className="min-h-screen flex items-center justify-center bg-green-200 px-6 py-24"
        >
          <h1 className="text-5xl font-bold text-gray-900">Menu Section</h1>
        </section>
        <section
          id="about"
          className="min-h-screen flex items-center justify-center bg-blue-200 px-6 py-24"
        >
          <h1 className="text-5xl font-bold text-gray-900">About Us Section</h1>
        </section>
        <section
          id="contact"
          className="min-h-screen flex items-center justify-center bg-yellow-200 px-6 py-24"
        >
          <h1 className="text-5xl font-bold text-gray-900">Contact Section</h1>
        </section>
        <Footer />
      </main >
    </div >
  );
}
