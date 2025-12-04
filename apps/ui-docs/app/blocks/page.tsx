import Link from "next/link";

const blocks = [
  {
    name: "Hero Section",
    description: "Eye-catching hero sections with CTAs and images.",
    category: "Marketing",
    image: "/blocks/hero.png",
  },
  {
    name: "Feature Grid",
    description: "Showcase product features in a grid layout.",
    category: "Marketing",
    image: "/blocks/features.png",
  },
  {
    name: "Pricing Tables",
    description: "Beautiful pricing tables with feature comparisons.",
    category: "Marketing",
    image: "/blocks/pricing.png",
  },
  {
    name: "Contact Form",
    description: "Professional contact forms with validation.",
    category: "Forms",
    image: "/blocks/contact.png",
  },
  {
    name: "Authentication",
    description: "Login and signup forms with social auth options.",
    category: "Forms",
    image: "/blocks/auth.png",
  },
  {
    name: "Dashboard Layout",
    description: "Complete dashboard layout with sidebar and header.",
    category: "Application",
    image: "/blocks/dashboard.png",
  },
  {
    name: "Data Table",
    description: "Advanced data tables with sorting and filtering.",
    category: "Application",
    image: "/blocks/table.png",
  },
  {
    name: "Settings Page",
    description: "User settings with tabs and form sections.",
    category: "Application",
    image: "/blocks/settings.png",
  },
  {
    name: "Blog Layout",
    description: "Blog post layouts with sidebar and navigation.",
    category: "Content",
    image: "/blocks/blog.png",
  },
  {
    name: "FAQ Section",
    description: "Frequently asked questions with accordion.",
    category: "Content",
    image: "/blocks/faq.png",
  },
  {
    name: "Testimonials",
    description: "Customer testimonials and reviews section.",
    category: "Marketing",
    image: "/blocks/testimonials.png",
  },
  {
    name: "Newsletter",
    description: "Email newsletter signup forms.",
    category: "Marketing",
    image: "/blocks/newsletter.png",
  },
];

export default function BlocksPage() {
  return (
    <div className="container py-8 space-y-8">
      <div className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight">Blocks</h1>
        <p className="text-lg text-muted-foreground">
          Pre-built sections and layouts you can copy and paste into your apps.
          Fully responsive and customizable.
        </p>
      </div>

      <div className="flex items-center gap-4">
        <button className="px-4 py-2 rounded-md text-sm font-medium bg-primary text-primary-foreground hover:bg-primary/90">
          All
        </button>
        <button className="px-4 py-2 rounded-md text-sm font-medium hover:bg-accent">
          Marketing
        </button>
        <button className="px-4 py-2 rounded-md text-sm font-medium hover:bg-accent">
          Application
        </button>
        <button className="px-4 py-2 rounded-md text-sm font-medium hover:bg-accent">
          Forms
        </button>
        <button className="px-4 py-2 rounded-md text-sm font-medium hover:bg-accent">
          Content
        </button>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {blocks.map((block) => (
          <Link
            key={block.name}
            href={`/blocks/${block.name.toLowerCase().replace(/\s+/g, "-")}`}
            className="group overflow-hidden rounded-lg border transition-colors hover:border-primary"
          >
            <div className="aspect-video bg-muted flex items-center justify-center">
              <span className="text-muted-foreground">Preview</span>
            </div>
            <div className="p-4 space-y-2">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold group-hover:text-primary">
                  {block.name}
                </h3>
                <span className="text-xs text-muted-foreground px-2 py-1 rounded-full bg-muted">
                  {block.category}
                </span>
              </div>
              <p className="text-sm text-muted-foreground">
                {block.description}
              </p>
            </div>
          </Link>
        ))}
      </div>

      <div className="rounded-lg border p-6 bg-muted/50">
        <h2 className="text-xl font-semibold mb-2">Custom Blocks</h2>
        <p className="text-muted-foreground mb-4">
          Need a specific block? Request one or contribute your own to the
          library.
        </p>
        <div className="flex gap-4">
          <button className="px-4 py-2 rounded-md text-sm font-medium bg-primary text-primary-foreground hover:bg-primary/90">
            Request a Block
          </button>
          <button className="px-4 py-2 rounded-md text-sm font-medium border hover:bg-accent">
            Contribute
          </button>
        </div>
      </div>
    </div>
  );
}
