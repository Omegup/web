import Contact from "@/components/sections/contact-section";
import Hero from "@/components/sections/hero";
import Identity from "@/components/sections/identity";
import Services from "@/components/sections/services";
import Stack from "@/components/sections/stack";
import Work from "@/components/sections/work-grid";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Identity />
      <Services />
      <Stack />
      <Work />
      {/* <Testimonials /> */}
      <Contact />
    </main>
  );
}
