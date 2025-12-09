import About from "@/features/landing/components/About";
import Location from "@/features/landing/components/Location";
import Hero from "@/features/landing/components/Hero";

export default function Home() {
  return (
    <div>
      <main>
        <Hero />
        <About />
        <Location />
      </main >
    </div >
  );
}
