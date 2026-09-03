import { ImageResponse } from "next/og";
import { business, siteConfig } from "@/lib/site-config";

export const alt = siteConfig.name;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 28,
          background:
            "radial-gradient(120% 90% at 50% 20%, #2a1912 0%, #100b08 55%, #0b0806 100%)",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 22,
            letterSpacing: 8,
            textTransform: "uppercase",
            color: "#d4a437",
          }}
        >
          {`Karaoke Lounge · ${business.locality}`}
        </div>
        <div
          style={{
            fontSize: 128,
            fontWeight: 700,
            letterSpacing: 4,
            textTransform: "uppercase",
            backgroundImage: "linear-gradient(180deg, #f6efe0 0%, #e9c065 50%, #a57b1f 100%)",
            backgroundClip: "text",
            color: "transparent",
            display: "flex",
          }}
        >
          Vegas
        </div>
        <div style={{ fontSize: 30, color: "#d9cdb6", display: "flex" }}>{siteConfig.tagline}</div>
      </div>
    ),
    { ...size }
  );
}
