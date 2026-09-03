import type { Metadata } from "next";
import About from "@/components/About";
import PageShell from "@/components/PageShell";

export const metadata: Metadata = {
  title: "About — Vegas Lounge & Bar",
  description: "The story of Vegas Lounge & Bar, Gelephu Mindfulness City.",
};

export default function AboutPage() {
  return (
    <PageShell>
      <About />
    </PageShell>
  );
}
