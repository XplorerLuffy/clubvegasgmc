import type { Metadata } from "next";
import Karaoke from "@/components/Karaoke";
import PageShell from "@/components/PageShell";

export const metadata: Metadata = {
  title: "Karaoke — Vegas Lounge & Bar",
  description: "Private rooms, the open stage, and the song book — how karaoke works at Vegas Lounge & Bar.",
};

export default function KaraokePage() {
  return (
    <PageShell>
      <Karaoke />
    </PageShell>
  );
}
