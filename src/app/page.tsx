import About from "@/features/landing/components/About";
import Location from "@/features/landing/components/Location";
import Hero from "@/features/landing/components/Hero";
import Menu from "@/features/landing/components/Menu";
import menuData from '@/features/menu/data/menu';
import { MenuCategory } from "@/types/Menu";

export default function Home() {
  const categories = menuData.categories as MenuCategory[];

  return (
    <div>
      <main>
        <Hero />
        <Menu categories={categories} />
        <About />
        <Location />
      </main >
    </div >
  );
}
