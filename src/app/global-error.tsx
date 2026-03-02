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
          backgroundColor: "#e8e4dc",
          color: "#1a1714",
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
              color: "#8b7d5e",
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
              color: "#5c5549",
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
