export default function IntroductionPage() {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight">Introduction</h1>
        <p className="text-lg text-muted-foreground">
          Welcome to our UI component library documentation.
        </p>
      </div>

      <div className="prose prose-neutral dark:prose-invert max-w-none">
        <h2>What is this library?</h2>
        <p>
          This is a collection of beautifully designed, accessible, and fully
          customizable UI components that you can copy and paste into your
          applications. Built with React, TypeScript, and Tailwind CSS.
        </p>

        <h2>Philosophy</h2>
        <p>
          Our components are not packaged as a traditional npm dependency. 
          Instead, you copy the source code directly into your project and 
          customize it to your needs. This gives you complete control over 
          the components and their styling.
        </p>

        <h2>Key Features</h2>
        <ul>
          <li>
            <strong>Copy & Paste:</strong> Pick the components you need and 
            copy them into your project.
          </li>
          <li>
            <strong>Fully Customizable:</strong> You own the code. Modify it 
            however you want.
          </li>
          <li>
            <strong>Accessible:</strong> Built with accessibility in mind 
            following WAI-ARIA standards.
          </li>
          <li>
            <strong>TypeScript:</strong> Fully typed components for better 
            developer experience.
          </li>
          <li>
            <strong>Themeable:</strong> Easy to customize with CSS variables 
            and Tailwind.
          </li>
        </ul>

        <h2>Technology Stack</h2>
        <ul>
          <li>React 18+</li>
          <li>TypeScript</li>
          <li>Tailwind CSS</li>
          <li>Radix UI (for primitives)</li>
          <li>Class Variance Authority (for variants)</li>
        </ul>

        <h2>Next Steps</h2>
        <p>
          Ready to get started? Check out the{" "}
          <a href="/docs/installation">installation guide</a> to set up your
          project.
        </p>
      </div>
    </div>
  );
}
