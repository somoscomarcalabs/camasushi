import About from "@/features/landing/components/About";
import Contact from "@/features/landing/components/Contact";
import Hero from "@/features/landing/components/Hero";

export default function Home() {
  return (
    <div>
      <main>
        <Hero />
        <About />
        <Contact />
      </main >
    </div >
  );
}
