"use client";

import { APP_NAME } from "@web-template/shared";
import { useState } from "react";

export default function HomePage() {
  const [count, setCount] = useState(0);

  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "2rem",
      }}
    >
      <section
        style={{
          maxWidth: "32rem",
          width: "100%",
          padding: "2rem",
          borderRadius: "1rem",
          background: "var(--card)",
          border: "1px solid var(--border)",
          textAlign: "center",
        }}
      >
        <p
          style={{
            fontSize: "0.75rem",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "var(--muted)",
            marginBottom: "0.75rem",
          }}
        >
          Client-side only
        </p>
        <h1 style={{ fontSize: "1.75rem", fontWeight: 700, marginBottom: "0.5rem" }}>
          {APP_NAME}
        </h1>
        <p style={{ color: "var(--muted)", marginBottom: "1.5rem" }}>
          TypeScript · Next.js · npm workspaces
        </p>
        <button
          type="button"
          onClick={() => setCount((value) => value + 1)}
          style={{
            padding: "0.625rem 1.25rem",
            borderRadius: "0.5rem",
            border: "none",
            background: "var(--accent)",
            color: "#fff",
            fontWeight: 600,
            cursor: "pointer",
          }}
        >
          Count: {count}
        </button>
      </section>
    </main>
  );
}
