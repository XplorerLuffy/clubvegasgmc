import Footer from "./Footer";
import MobileStickyBar from "./MobileStickyBar";
import MobileTopBar from "./MobileTopBar";
import SiteHeader from "./SiteHeader";

export default function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <MobileTopBar />
      <SiteHeader />
      <main id="main-content" style={{ background: "var(--surface)" }}>
        {children}
      </main>
      <Footer />
      <MobileStickyBar />
    </>
  );
}
