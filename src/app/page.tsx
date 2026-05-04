import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import MenuSection from "@/components/MenuSection";
import GallerySection from "@/components/GallerySection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <main className="flex flex-col w-full bg-[#050505]">
      <Hero />
      <AboutSection />
      <MenuSection />
      <GallerySection />
      <ContactSection />
    </main>
  );
}
