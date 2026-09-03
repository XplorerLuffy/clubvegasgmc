import Link from "next/link";
import PageShell from "@/components/PageShell";

export default function NotFound() {
  return (
    <PageShell>
      <div
        style={{
          padding: "140px 64px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          gap: 20,
        }}
      >
        <div className="eyebrow">404</div>
        <div className="rule" />
        <h1
          style={{
            font: "600 clamp(32px,4vw,48px)/1.15 var(--font-display), serif",
            color: "var(--cream)",
            margin: 0,
          }}
        >
          This room&rsquo;s empty.
        </h1>
        <p
          style={{
            font: "400 17px/1.55 var(--font-body), sans-serif",
            color: "var(--body)",
            maxWidth: 460,
            margin: 0,
          }}
        >
          The page you&rsquo;re looking for isn&rsquo;t here — maybe it moved, or the link was off
          a beat.
        </p>
        <div style={{ display: "flex", gap: 14, flexWrap: "wrap", justifyContent: "center" }}>
          <Link href="/" className="btn btn-primary">
            Back to the Lounge
          </Link>
          <Link href="/reserve" className="btn btn-secondary">
            Book a Table
          </Link>
        </div>
      </div>
    </PageShell>
  );
}
