import Link from "next/link";
import { navLinks } from "@/lib/nav-data";

const domains = [
  "Neurobiology & Performance",
  "Cyber & Protective Security",
  "Leadership Development",
  "Integrative Medicine",
  "Business Intelligence & Geopolitical Risk",
];

export function Footer() {
  return (
    <footer role="contentinfo" className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company */}
          <div>
            <h3 className="font-mono uppercase tracking-wider text-sm font-bold mb-4">
              ANCHOR MILL GROUP
            </h3>
            <p className="text-sm text-muted-foreground">
              Integrated resilience, protection, and performance for UHNW families and global executives.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-mono uppercase tracking-wider text-xs font-semibold text-muted-foreground mb-4">
              Navigation
            </h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-mono uppercase tracking-wider text-xs font-semibold text-muted-foreground mb-4">
              Domains
            </h4>
            <ul className="space-y-2">
              {domains.map((domain) => (
                <li
                  key={domain}
                  className="text-sm text-muted-foreground"
                >
                  {domain}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-mono uppercase tracking-wider text-xs font-semibold text-muted-foreground mb-4">
              Contact
            </h4>
            <a
              href="mailto:inquiries@anchormillgroup.com"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              inquiries@anchormillgroup.com
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <p>&copy; 2025 Anchor Mill Group. All rights reserved.</p>
          <p>Confidential</p>
        </div>
      </div>
    </footer>
  );
}
