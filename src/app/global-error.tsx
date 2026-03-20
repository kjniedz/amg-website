"use client";

export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          colorScheme: "light dark",
          backgroundColor: "light-dark(#e8e4dc, #0a0a0a)",
          color: "light-dark(#1a1714, #f0ece4)",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div style={{ textAlign: "center", maxWidth: "28rem", padding: "2rem" }}>
          <p
            style={{
              fontFamily: "monospace",
              fontSize: "0.75rem",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              color: "light-dark(#8b7d5e, #d4c9a8)",
              marginBottom: "1rem",
            }}
          >
            System Error
          </p>
          <h1
            style={{
              fontSize: "1.875rem",
              fontWeight: 700,
              letterSpacing: "-0.025em",
              marginBottom: "1rem",
            }}
          >
            Something Went Wrong
          </h1>
          <p
            style={{
              color: "light-dark(#5c5549, #8a8578)",
              marginBottom: "2rem",
              lineHeight: 1.6,
            }}
          >
            An unexpected error has occurred. Please try again.
          </p>
          <button
            onClick={() => reset()}
            style={{
              padding: "0.625rem 1.5rem",
              backgroundColor: "#8b7d5e",
              color: "#ffffff",
              border: "none",
              borderRadius: "0.375rem",
              fontSize: "0.875rem",
              fontWeight: 500,
              cursor: "pointer",
            }}
          >
            Try Again
          </button>
        </div>
      </body>
    </html>
  );
}
