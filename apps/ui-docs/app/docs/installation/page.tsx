import { CodeBlock } from "@/components/code-block";

export default function InstallationPage() {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight">Installation</h1>
        <p className="text-lg text-muted-foreground">
          How to install and set up the component library in your project.
        </p>
      </div>

      <div className="prose prose-neutral dark:prose-invert max-w-none">
        <h2>Prerequisites</h2>
        <p>
          Before you begin, make sure you have the following installed:
        </p>
        <ul>
          <li>Node.js 18.17 or later</li>
          <li>A Next.js 13+ project (or React 18+ project)</li>
        </ul>

        <h2>Step 1: Create a new project</h2>
        <p>
          If you don't have a Next.js project yet, create one using:
        </p>
        <CodeBlock language="bash" code="npx create-next-app@latest my-app" />

        <h2>Step 2: Install Tailwind CSS</h2>
        <p>
          Our components are built with Tailwind CSS. Install it if you haven't:
        </p>
        <CodeBlock 
          language="bash" 
          code="npm install -D tailwindcss postcss autoprefixer&#10;npx tailwindcss init -p" 
        />

        <h2>Step 3: Configure Tailwind</h2>
        <p>
          Update your <code>tailwind.config.js</code> file:
        </p>
        <CodeBlock
          language="js"
          code={`/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}`}
        />

        <h2>Step 4: Install dependencies</h2>
        <p>
          Install the required dependencies for the components:
        </p>
        <CodeBlock
          language="bash"
          code="npm install class-variance-authority clsx tailwind-merge"
        />

        <h2>Step 5: Set up path aliases</h2>
        <p>
          Update your <code>tsconfig.json</code> to use path aliases:
        </p>
        <CodeBlock
          language="json"
          code={`{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./*"]
    }
  }
}`}
        />

        <h2>Step 6: Create a utils file</h2>
        <p>
          Create a <code>lib/utils.ts</code> file for utility functions:
        </p>
        <CodeBlock
          language="ts"
          code={`import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}`}
        />

        <h2>Step 7: Add components</h2>
        <p>
          Now you're ready to add components! Browse the{" "}
          <a href="/docs/components">components</a> section and copy the code
          for the components you need.
        </p>

        <div className="bg-blue-50 dark:bg-blue-950 p-4 rounded-lg border border-blue-200 dark:border-blue-800 mt-6">
          <p className="text-sm font-medium text-blue-900 dark:text-blue-100">
            💡 Tip: Use our CLI tool to quickly add components to your project:
          </p>
          <CodeBlock
            language="bash"
            code="npx @your-library/cli add button"
          />
        </div>
      </div>
    </div>
  );
}
