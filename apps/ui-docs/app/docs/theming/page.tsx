export default function ThemingPage() {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight">Theming</h1>
        <p className="text-lg text-muted-foreground">
          Customize colors, typography, and other design tokens.
        </p>
      </div>

      <div className="prose prose-neutral dark:prose-invert max-w-none">
        <h2>Overview</h2>
        <p>
          Our theming system is built on CSS variables, making it easy to
          customize the look and feel of your components. You can customize
          colors, spacing, borders, and more.
        </p>

        <h2>CSS Variables</h2>
        <p>
          All theme values are defined as CSS variables in your{" "}
          <code>globals.css</code> file. This makes it easy to switch between
          themes and support dark mode.
        </p>

        <h3>Color Variables</h3>
        <pre>
          <code>{`:root {
  --background: 0 0% 100%;
  --foreground: 222.2 84% 4.9%;
  --primary: 222.2 47.4% 11.2%;
  --primary-foreground: 210 40% 98%;
  --secondary: 210 40% 96.1%;
  --secondary-foreground: 222.2 47.4% 11.2%;
  --muted: 210 40% 96.1%;
  --muted-foreground: 215.4 16.3% 46.9%;
  --accent: 210 40% 96.1%;
  --accent-foreground: 222.2 47.4% 11.2%;
  --destructive: 0 84.2% 60.2%;
  --destructive-foreground: 210 40% 98%;
  --border: 214.3 31.8% 91.4%;
  --input: 214.3 31.8% 91.4%;
  --ring: 222.2 84% 4.9%;
}

.dark {
  --background: 222.2 84% 4.9%;
  --foreground: 210 40% 98%;
  --primary: 210 40% 98%;
  --primary-foreground: 222.2 47.4% 11.2%;
  --secondary: 217.2 32.6% 17.5%;
  --secondary-foreground: 210 40% 98%;
  --muted: 217.2 32.6% 17.5%;
  --muted-foreground: 215 20.2% 65.1%;
  --accent: 217.2 32.6% 17.5%;
  --accent-foreground: 210 40% 98%;
  --destructive: 0 62.8% 30.6%;
  --destructive-foreground: 210 40% 98%;
  --border: 217.2 32.6% 17.5%;
  --input: 217.2 32.6% 17.5%;
  --ring: 212.7 26.8% 83.9%;
}`}</code>
        </pre>

        <h2>Using HSL Colors</h2>
        <p>
          We use HSL color values without the <code>hsl()</code> wrapper. This
          allows us to use Tailwind's opacity modifiers like{" "}
          <code>bg-primary/50</code>.
        </p>

        <h2>Dark Mode</h2>
        <p>
          Dark mode is enabled by adding the <code>.dark</code> class to your
          root element. You can toggle this class to switch between light and
          dark themes.
        </p>

        <h2>Creating Custom Themes</h2>
        <p>To create a custom theme:</p>
        <ol>
          <li>
            Copy the CSS variables from <code>globals.css</code>
          </li>
          <li>Modify the color values to match your brand</li>
          <li>Update both light and dark mode variants</li>
          <li>Test with your components to ensure proper contrast</li>
        </ol>

        <h2>Typography</h2>
        <p>
          Typography is configured in your <code>tailwind.config.ts</code> file.
          You can customize font families, sizes, and line heights.
        </p>
      </div>
    </div>
  );
}
