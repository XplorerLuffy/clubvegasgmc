import type { Metadata } from "next";
import Drinks from "@/components/Drinks";
import PageShell from "@/components/PageShell";

export const metadata: Metadata = {
  title: "Drinks — Vegas Lounge & Bar",
  description: "Signature cocktails, beer & wine, and bottle service at Vegas Lounge & Bar.",
};

export default function DrinksPage() {
  return (
    <PageShell>
      <Drinks />
    </PageShell>
  );
}
