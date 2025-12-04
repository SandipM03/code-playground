import Link from "next/link";

export default function DocsPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight">Documentation</h1>
        <p className="text-lg text-muted-foreground">
          Everything you need to know about using our UI component library.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Link
          href="/docs/introduction"
          className="group rounded-lg border p-6 hover:border-primary transition-colors"
        >
          <h3 className="text-xl font-semibold mb-2 group-hover:text-primary">
            Introduction
          </h3>
          <p className="text-sm text-muted-foreground">
            Learn about our component library and its core principles.
          </p>
        </Link>

        <Link
          href="/docs/installation"
          className="group rounded-lg border p-6 hover:border-primary transition-colors"
        >
          <h3 className="text-xl font-semibold mb-2 group-hover:text-primary">
            Installation
          </h3>
          <p className="text-sm text-muted-foreground">
            Get started by installing and setting up the library in your project.
          </p>
        </Link>

        <Link
          href="/docs/components"
          className="group rounded-lg border p-6 hover:border-primary transition-colors"
        >
          <h3 className="text-xl font-semibold mb-2 group-hover:text-primary">
            Components
          </h3>
          <p className="text-sm text-muted-foreground">
            Explore all available UI components with live examples.
          </p>
        </Link>

        <Link
          href="/docs/theming"
          className="group rounded-lg border p-6 hover:border-primary transition-colors"
        >
          <h3 className="text-xl font-semibold mb-2 group-hover:text-primary">
            Theming
          </h3>
          <p className="text-sm text-muted-foreground">
            Customize the look and feel to match your brand.
          </p>
        </Link>

        <Link
          href="/docs/cli"
          className="group rounded-lg border p-6 hover:border-primary transition-colors"
        >
          <h3 className="text-xl font-semibold mb-2 group-hover:text-primary">
            CLI
          </h3>
          <p className="text-sm text-muted-foreground">
            Use our CLI tool to add components to your project quickly.
          </p>
        </Link>

        <Link
          href="/docs/examples"
          className="group rounded-lg border p-6 hover:border-primary transition-colors"
        >
          <h3 className="text-xl font-semibold mb-2 group-hover:text-primary">
            Examples
          </h3>
          <p className="text-sm text-muted-foreground">
            Real-world examples and use cases for the components.
          </p>
        </Link>
      </div>
    </div>
  );
}
