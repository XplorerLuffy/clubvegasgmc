import type { Metadata } from "next";
import Nights from "@/components/Nights";
import PageShell from "@/components/PageShell";

export const metadata: Metadata = {
  title: "Nights — Vegas Lounge & Bar",
  description: "This week's lineup and happy hour at Vegas Lounge & Bar.",
};

export default function NightsPage() {
  return (
    <PageShell>
      <Nights />
    </PageShell>
  );
}
