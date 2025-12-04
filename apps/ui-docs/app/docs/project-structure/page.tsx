export default function ProjectStructurePage() {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight">Project Structure</h1>
        <p className="text-lg text-muted-foreground">
          Recommended file and folder organization for your project.
        </p>
      </div>

      <div className="prose prose-neutral dark:prose-invert max-w-none">
        <h2>Overview</h2>
        <p>
          Our components work with any React project structure, but here&apos;s a
          recommended setup for Next.js projects.
        </p>

        <h2>Recommended Structure</h2>
        <pre>
          <code>{`my-app/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── components/
│   ├── ui/           # UI components from the library
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   └── ...
│   └── ...           # Your custom components
├── lib/
│   └── utils.ts      # Utility functions
├── public/
├── tailwind.config.ts
├── tsconfig.json
└── package.json`}</code>
        </pre>

        <h2>Directory Breakdown</h2>

        <h3>/app</h3>
        <p>
          Next.js App Router pages and layouts. This is where your route
          components live.
        </p>

        <h3>/components</h3>
        <p>
          All your React components. We recommend separating UI library
          components in a <code>ui</code> subdirectory.
        </p>
        <ul>
          <li>
            <code>components/ui/</code> - Components from our library
          </li>
          <li>
            <code>components/</code> - Your custom application components
          </li>
        </ul>

        <h3>/lib</h3>
        <p>
          Utility functions, helpers, and shared logic. The{" "}
          <code>utils.ts</code> file contains the <code>cn()</code> helper for
          merging class names.
        </p>

        <h3>/public</h3>
        <p>Static assets like images, fonts, and other files.</p>

        <h2>Component Organization</h2>
        <p>For larger components, consider using a folder structure:</p>
        <pre>
          <code>{`components/
├── ui/
│   ├── button/
│   │   ├── index.tsx
│   │   ├── button.tsx
│   │   └── button.test.tsx
│   └── card/
│       ├── index.tsx
│       ├── card.tsx
│       ├── card-header.tsx
│       ├── card-content.tsx
│       └── card-footer.tsx`}</code>
        </pre>

        <h2>Path Aliases</h2>
        <p>
          We use the <code>@/</code> alias for imports. Configure it in your{" "}
          <code>tsconfig.json</code>:
        </p>
        <pre>
          <code>{`{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./*"]
    }
  }
}`}</code>
        </pre>
        <p>This allows you to import like:</p>
        <pre>
          <code>{`import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"`}</code>
        </pre>

        <h2>Best Practices</h2>
        <ul>
          <li>Keep UI components separate from business logic</li>
          <li>Use the <code>ui/</code> folder for library components</li>
          <li>Create custom components outside of <code>ui/</code></li>
          <li>Use path aliases for cleaner imports</li>
          <li>Co-locate tests with components when possible</li>
        </ul>
      </div>
    </div>
  );
}
