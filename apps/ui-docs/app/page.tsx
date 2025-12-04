import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="container py-24 md:py-32 space-y-8">
        <div className="mx-auto max-w-3xl text-center space-y-6">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
            Build beautiful apps with our{" "}
            <span className="text-primary">component library</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Beautifully designed, accessible components that you can copy and
            paste into your apps. Built with React, TypeScript, and Tailwind CSS.
          </p>
          <div className="flex gap-4 justify-center">
            <Link
              href="/docs/installation"
              className="inline-flex items-center justify-center rounded-md px-6 py-3 text-base font-medium bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              Get Started
            </Link>
            <Link
              href="/docs/components"
              className="inline-flex items-center justify-center rounded-md px-6 py-3 text-base font-medium border hover:bg-accent transition-colors"
            >
              Browse Components
            </Link>
          </div>
        </div>

        {/* Preview Image Placeholder */}
        <div className="mx-auto max-w-5xl">
          <div className="aspect-video rounded-lg border bg-muted flex items-center justify-center">
            <span className="text-muted-foreground text-lg">
              Component Preview
            </span>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="border-t bg-muted/50 py-24">
        <div className="container space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">Why choose us?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Everything you need to build modern, accessible applications
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="space-y-3">
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <span className="text-2xl">🎨</span>
              </div>
              <h3 className="text-xl font-semibold">Beautifully Designed</h3>
              <p className="text-muted-foreground">
                Carefully crafted components with attention to detail and modern
                design principles.
              </p>
            </div>

            <div className="space-y-3">
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <span className="text-2xl">♿</span>
              </div>
              <h3 className="text-xl font-semibold">Accessible</h3>
              <p className="text-muted-foreground">
                Built with accessibility in mind, following WAI-ARIA standards and
                best practices.
              </p>
            </div>

            <div className="space-y-3">
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-semibold">Copy & Paste</h3>
              <p className="text-muted-foreground">
                No npm install required. Copy the code and customize it to your
                needs.
              </p>
            </div>

            <div className="space-y-3">
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <span className="text-2xl">📱</span>
              </div>
              <h3 className="text-xl font-semibold">Fully Responsive</h3>
              <p className="text-muted-foreground">
                All components are mobile-first and work seamlessly across all
                screen sizes.
              </p>
            </div>

            <div className="space-y-3">
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <span className="text-2xl">🎭</span>
              </div>
              <h3 className="text-xl font-semibold">Themeable</h3>
              <p className="text-muted-foreground">
                Easy to customize with CSS variables. Switch between light and dark
                modes effortlessly.
              </p>
            </div>

            <div className="space-y-3">
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <span className="text-2xl">🔧</span>
              </div>
              <h3 className="text-xl font-semibold">Developer Experience</h3>
              <p className="text-muted-foreground">
                Fully typed with TypeScript, comprehensive docs, and CLI tool for
                quick setup.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Start Section */}
      <section className="container py-24 space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold">Get started in seconds</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Follow these simple steps to start using our components
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          <div className="space-y-4">
            <div className="h-10 w-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
              1
            </div>
            <h3 className="text-xl font-semibold">Install Dependencies</h3>
            <p className="text-muted-foreground">
              Set up Tailwind CSS and install the required dependencies in your
              project.
            </p>
            <Link
              href="/docs/installation"
              className="text-primary hover:underline inline-block"
            >
              View installation guide →
            </Link>
          </div>

          <div className="space-y-4">
            <div className="h-10 w-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
              2
            </div>
            <h3 className="text-xl font-semibold">Browse Components</h3>
            <p className="text-muted-foreground">
              Explore our collection of components and find the ones you need for
              your project.
            </p>
            <Link
              href="/docs/components"
              className="text-primary hover:underline inline-block"
            >
              Browse components →
            </Link>
          </div>

          <div className="space-y-4">
            <div className="h-10 w-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
              3
            </div>
            <h3 className="text-xl font-semibold">Copy & Customize</h3>
            <p className="text-muted-foreground">
              Copy the component code into your project and customize it to match
              your design.
            </p>
            <Link
              href="/docs/components/button"
              className="text-primary hover:underline inline-block"
            >
              See example →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t bg-muted/50 py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">
              Ready to build something amazing?
            </h2>
            <p className="text-lg text-muted-foreground">
              Join thousands of developers building with our component library
            </p>
            <div className="flex gap-4 justify-center">
              <Link
                href="/docs/installation"
                className="inline-flex items-center justify-center rounded-md px-6 py-3 text-base font-medium bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                Get Started
              </Link>
              <Link
                href="https://github.com"
                className="inline-flex items-center justify-center rounded-md px-6 py-3 text-base font-medium border hover:bg-accent transition-colors"
              >
                View on GitHub
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
