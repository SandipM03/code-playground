export default function ExamplesPage() {
  return (
    <div className="container py-8 space-y-8">
      <div className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight">Examples</h1>
        <p className="text-lg text-muted-foreground">
          Explore real-world examples and use cases built with our component
          library.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <a
          href="/examples/dashboard"
          className="group overflow-hidden rounded-lg border transition-colors hover:border-primary"
        >
          <div className="aspect-video bg-muted flex items-center justify-center">
            <span className="text-muted-foreground">Dashboard Preview</span>
          </div>
          <div className="p-4 space-y-2">
            <h3 className="font-semibold group-hover:text-primary">
              Dashboard Application
            </h3>
            <p className="text-sm text-muted-foreground">
              Full-featured admin dashboard with charts, tables, and analytics.
            </p>
          </div>
        </a>

        <a
          href="/examples/ecommerce"
          className="group overflow-hidden rounded-lg border transition-colors hover:border-primary"
        >
          <div className="aspect-video bg-muted flex items-center justify-center">
            <span className="text-muted-foreground">E-commerce Preview</span>
          </div>
          <div className="p-4 space-y-2">
            <h3 className="font-semibold group-hover:text-primary">
              E-commerce Store
            </h3>
            <p className="text-sm text-muted-foreground">
              Product listing, cart, and checkout flow for online stores.
            </p>
          </div>
        </a>

        <a
          href="/examples/saas"
          className="group overflow-hidden rounded-lg border transition-colors hover:border-primary"
        >
          <div className="aspect-video bg-muted flex items-center justify-center">
            <span className="text-muted-foreground">SaaS Preview</span>
          </div>
          <div className="p-4 space-y-2">
            <h3 className="font-semibold group-hover:text-primary">
              SaaS Landing Page
            </h3>
            <p className="text-sm text-muted-foreground">
              Marketing site with pricing, features, and authentication.
            </p>
          </div>
        </a>

        <a
          href="/examples/blog"
          className="group overflow-hidden rounded-lg border transition-colors hover:border-primary"
        >
          <div className="aspect-video bg-muted flex items-center justify-center">
            <span className="text-muted-foreground">Blog Preview</span>
          </div>
          <div className="p-4 space-y-2">
            <h3 className="font-semibold group-hover:text-primary">
              Blog Platform
            </h3>
            <p className="text-sm text-muted-foreground">
              Content management system with post editor and reader views.
            </p>
          </div>
        </a>

        <a
          href="/examples/portfolio"
          className="group overflow-hidden rounded-lg border transition-colors hover:border-primary"
        >
          <div className="aspect-video bg-muted flex items-center justify-center">
            <span className="text-muted-foreground">Portfolio Preview</span>
          </div>
          <div className="p-4 space-y-2">
            <h3 className="font-semibold group-hover:text-primary">
              Portfolio Website
            </h3>
            <p className="text-sm text-muted-foreground">
              Personal portfolio with projects, about, and contact sections.
            </p>
          </div>
        </a>

        <a
          href="/examples/docs"
          className="group overflow-hidden rounded-lg border transition-colors hover:border-primary"
        >
          <div className="aspect-video bg-muted flex items-center justify-center">
            <span className="text-muted-foreground">Docs Preview</span>
          </div>
          <div className="p-4 space-y-2">
            <h3 className="font-semibold group-hover:text-primary">
              Documentation Site
            </h3>
            <p className="text-sm text-muted-foreground">
              Complete documentation layout with search and navigation.
            </p>
          </div>
        </a>
      </div>
    </div>
  );
}
