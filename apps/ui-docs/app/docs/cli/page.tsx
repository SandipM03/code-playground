import { CodeBlock } from "@/components/code-block";

export default function CLIPage() {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight">CLI</h1>
        <p className="text-lg text-muted-foreground">
          Use our CLI tool to quickly add components to your project.
        </p>
      </div>

      <div className="prose prose-neutral dark:prose-invert max-w-none">
        <h2>Installation</h2>
        <p>
          You don&apos;t need to install the CLI globally. Use <code>npx</code> to run
          it directly:
        </p>
        <CodeBlock
          language="bash"
          code="npx @your-library/cli init"
        />

        <h2>Commands</h2>

        <h3>init</h3>
        <p>
          Initialize your project with the required configuration and
          dependencies:
        </p>
        <CodeBlock
          language="bash"
          code="npx @your-library/cli init"
        />
        <p>This will:</p>
        <ul>
          <li>Install required dependencies</li>
          <li>Set up Tailwind CSS configuration</li>
          <li>Create the necessary utility files</li>
          <li>Configure path aliases</li>
        </ul>

        <h3>add</h3>
        <p>Add a component to your project:</p>
        <CodeBlock
          language="bash"
          code="npx @your-library/cli add button"
        />
        <p>
          This will copy the component source code to your{" "}
          <code>components/ui</code> directory along with any dependencies.
        </p>

        <h4>Add Multiple Components</h4>
        <CodeBlock
          language="bash"
          code="npx @your-library/cli add button card input"
        />

        <h4>Options</h4>
        <ul>
          <li>
            <code>--overwrite</code>: Overwrite existing components
          </li>
          <li>
            <code>--path</code>: Custom path for components
          </li>
          <li>
            <code>--yes</code>: Skip confirmation prompts
          </li>
        </ul>
        <CodeBlock
          language="bash"
          code="npx @your-library/cli add button --overwrite --path src/components"
        />

        <h3>diff</h3>
        <p>Check for updates to components in your project:</p>
        <CodeBlock
          language="bash"
          code="npx @your-library/cli diff button"
        />

        <h3>update</h3>
        <p>Update components to their latest versions:</p>
        <CodeBlock
          language="bash"
          code="npx @your-library/cli update button"
        />

        <h2>Configuration</h2>
        <p>
          The CLI uses a <code>components.json</code> file to store
          configuration. This file is created when you run <code>init</code>.
        </p>
        <CodeBlock
          language="json"
          code={`{
  "$schema": "https://your-library.com/schema.json",
  "style": "default",
  "tailwind": {
    "config": "tailwind.config.ts",
    "css": "app/globals.css",
    "baseColor": "slate"
  },
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils"
  }
}`}
        />

        <h2>Examples</h2>

        <h3>Initialize a new project</h3>
        <CodeBlock
          language="bash"
          code={`# Create a new Next.js project
npx create-next-app@latest my-app
cd my-app

# Initialize the CLI
npx @your-library/cli init

# Add your first component
npx @your-library/cli add button`}
        />

        <h3>Add multiple components at once</h3>
        <CodeBlock
          language="bash"
          code="npx @your-library/cli add button card input select modal toast"
        />
      </div>
    </div>
  );
}
