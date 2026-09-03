import type { Metadata } from "next";
import FindUs from "@/components/FindUs";
import PageShell from "@/components/PageShell";

export const metadata: Metadata = {
  title: "Find Us — Vegas Lounge & Bar",
  description: "Address, hours and age policy for Vegas Lounge & Bar, Riverside Block, Gelephu Mindfulness City.",
};

export default function FindUsPage() {
  return (
    <PageShell>
      <FindUs />
    </PageShell>
  );
}
