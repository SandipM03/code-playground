import Link from "next/link";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <span className="font-bold text-xl">UI Library</span>
        </Link>
        <nav className="flex items-center space-x-6 text-sm font-medium">
          <Link
            href="/docs"
            className="transition-colors hover:text-foreground/80"
          >
            Documentation
          </Link>
          <Link
            href="/docs/components"
            className="transition-colors hover:text-foreground/80"
          >
            Components
          </Link>
          <Link
            href="/blocks"
            className="transition-colors hover:text-foreground/80"
          >
            Blocks
          </Link>
          <Link
            href="/themes"
            className="transition-colors hover:text-foreground/80"
          >
            Themes
          </Link>
          <Link
            href="/examples"
            className="transition-colors hover:text-foreground/80"
          >
            Examples
          </Link>
        </nav>
        <div className="ml-auto flex items-center space-x-4">
          <Link
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium transition-colors hover:text-foreground/80"
          >
            GitHub
          </Link>
          <button className="inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium bg-primary text-primary-foreground hover:bg-primary/90">
            Get Started
          </button>
        </div>
      </div>
    </header>
  );
}
