import About from "@/components/About";
import Drinks from "@/components/Drinks";
import FindUs from "@/components/FindUs";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import Hero from "@/components/Hero";
import Karaoke from "@/components/Karaoke";
import Marquee from "@/components/Marquee";
import MobileStickyBar from "@/components/MobileStickyBar";
import MobileTopBar from "@/components/MobileTopBar";
import Nights from "@/components/Nights";
import Reserve from "@/components/Reserve";

export default function Home() {
  return (
    <>
      <MobileTopBar />
      <div style={{ background: "var(--surface)" }}>
        <Hero />
        <Marquee />
        <About />
        <Karaoke />
        <Drinks />
        <Nights />
        <Gallery />
        <FindUs />
        <Reserve />
      </div>
      <Footer />
      <MobileStickyBar />
    </>
  );
}
