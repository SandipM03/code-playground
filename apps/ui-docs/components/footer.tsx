import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t py-12 md:py-16">
      <div className="container">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          <div>
            <h3 className="mb-4 text-sm font-semibold">Documentation</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/docs/introduction"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Introduction
                </Link>
              </li>
              <li>
                <Link
                  href="/docs/installation"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Installation
                </Link>
              </li>
              <li>
                <Link
                  href="/docs/theming"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Theming
                </Link>
              </li>
              <li>
                <Link
                  href="/docs/cli"
                  className="text-muted-foreground hover:text-foreground"
                >
                  CLI
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold">Components</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/docs/components/button"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Button
                </Link>
              </li>
              <li>
                <Link
                  href="/docs/components/card"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Card
                </Link>
              </li>
              <li>
                <Link
                  href="/docs/components/input"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Input
                </Link>
              </li>
              <li>
                <Link
                  href="/docs/components"
                  className="text-muted-foreground hover:text-foreground"
                >
                  View All
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold">Resources</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/blocks"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Blocks
                </Link>
              </li>
              <li>
                <Link
                  href="/themes"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Themes
                </Link>
              </li>
              <li>
                <Link
                  href="/examples"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Examples
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold">Community</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="https://github.com"
                  className="text-muted-foreground hover:text-foreground"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com"
                  className="text-muted-foreground hover:text-foreground"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="https://discord.com"
                  className="text-muted-foreground hover:text-foreground"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Discord
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t pt-8">
          <p className="text-center text-sm text-muted-foreground">
            Built with ❤️ by your team. Licensed under MIT.
          </p>
        </div>
      </div>
    </footer>
  );
}
