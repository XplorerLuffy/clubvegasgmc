import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import MobileStickyBar from "@/components/MobileStickyBar";
import MobileTopBar from "@/components/MobileTopBar";

export default function Home() {
  return (
    <>
      <MobileTopBar />
      <div style={{ background: "var(--surface)" }}>
        <Hero />
        <Marquee />
        <Gallery />
      </div>
      <Footer />
      <MobileStickyBar />
    </>
  );
}
