import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="font-mono text-xs uppercase tracking-widest text-primary mb-4">
          404
        </p>
        <h1 className="font-mono text-3xl sm:text-4xl md:text-5xl uppercase tracking-tight font-bold mb-6">
          Page Not Found
        </h1>
        <p className="text-muted-foreground text-lg mb-8 max-w-md mx-auto">
          The page you are looking for does not exist or has been moved.
        </p>
        <Button asChild>
          <Link href="/">Return Home</Link>
        </Button>
      </div>
    </main>
  );
}
