import Link from "next/link";
import { navLinks } from "@/lib/nav-data";
import { NavbarInteractive } from "./navbar-interactive";

export function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="font-mono uppercase tracking-wider text-sm font-bold">
            ANCHOR MILL GROUP
          </Link>

          {/* Desktop nav links */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right side: Client Login + interactive controls */}
          <div className="flex items-center gap-2">
            <Link
              href="/login"
              className="hidden md:inline-flex text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Client Login
            </Link>
            <NavbarInteractive />
          </div>
        </div>
      </div>
    </header>
  );
}
