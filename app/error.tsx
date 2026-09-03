"use client";

import { useEffect } from "react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 20,
        padding: "48px 24px",
        textAlign: "center",
        background: "var(--ink, #0b0806)",
        color: "var(--cream, #f6efe0)",
        fontFamily: "system-ui, sans-serif",
      }}
    >
      <div
        style={{
          font: "600 11px/1 system-ui, sans-serif",
          textTransform: "uppercase",
          letterSpacing: "0.22em",
          color: "#d4a437",
        }}
      >
        Something went wrong
      </div>
      <h1 style={{ fontSize: 32, margin: 0, fontWeight: 600 }}>The lights flickered.</h1>
      <p style={{ maxWidth: 420, margin: 0, color: "#d9cdb6", lineHeight: 1.55 }}>
        Something on our end broke the mood. Try again, or head back to the homepage.
      </p>
      <div style={{ display: "flex", gap: 14, flexWrap: "wrap", justifyContent: "center" }}>
        <button
          type="button"
          onClick={() => reset()}
          style={{
            padding: "15px 26px",
            border: 0,
            borderRadius: 10,
            background: "linear-gradient(180deg, #e9c065, #d4a437 55%, #a57b1f)",
            color: "#1a1410",
            font: "600 13px/1 system-ui, sans-serif",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            cursor: "pointer",
          }}
        >
          Try Again
        </button>
        <a
          href="/"
          style={{
            padding: "15px 26px",
            border: "1px solid rgba(212,164,55,.5)",
            borderRadius: 10,
            background: "transparent",
            color: "#e9c065",
            font: "600 13px/1 system-ui, sans-serif",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            textDecoration: "none",
          }}
        >
          Back to the Lounge
        </a>
      </div>
    </div>
  );
}
