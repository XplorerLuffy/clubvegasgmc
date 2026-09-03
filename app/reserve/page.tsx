import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import Reserve from "@/components/Reserve";

export const metadata: Metadata = {
  title: "Reserve — Vegas Lounge & Bar",
  description: "Book a table or a private room at Vegas Lounge & Bar.",
};

export default function ReservePage() {
  return (
    <PageShell>
      <Reserve />
    </PageShell>
  );
}
