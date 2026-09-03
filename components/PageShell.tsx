import Footer from "./Footer";
import MobileStickyBar from "./MobileStickyBar";
import MobileTopBar from "./MobileTopBar";
import SiteHeader from "./SiteHeader";

export default function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <MobileTopBar />
      <SiteHeader />
      <div style={{ background: "var(--surface)" }}>{children}</div>
      <Footer />
      <MobileStickyBar />
    </>
  );
}
