"use client";

import { useState } from "react";
import { CodeBlock } from "@/components/code-block";

const themes = [
  {
    name: "Default",
    colors: {
      primary: "#0f172a",
      secondary: "#f1f5f9",
      accent: "#3b82f6",
    },
  },
  {
    name: "Rose",
    colors: {
      primary: "#881337",
      secondary: "#ffe4e6",
      accent: "#fb7185",
    },
  },
  {
    name: "Emerald",
    colors: {
      primary: "#064e3b",
      secondary: "#d1fae5",
      accent: "#34d399",
    },
  },
  {
    name: "Purple",
    colors: {
      primary: "#581c87",
      secondary: "#f3e8ff",
      accent: "#a855f7",
    },
  },
  {
    name: "Orange",
    colors: {
      primary: "#7c2d12",
      secondary: "#fed7aa",
      accent: "#fb923c",
    },
  },
  {
    name: "Blue",
    colors: {
      primary: "#1e3a8a",
      secondary: "#dbeafe",
      accent: "#3b82f6",
    },
  },
];

export default function ThemesPage() {
  const [selectedTheme, setSelectedTheme] = useState(themes[0]);

  return (
    <div className="container py-8 space-y-8">
      <div className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight">Themes</h1>
        <p className="text-lg text-muted-foreground">
          Customize the look and feel of your components with pre-built themes
          or create your own.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Choose a Theme</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {themes.map((theme) => (
              <button
                key={theme.name}
                onClick={() => setSelectedTheme(theme)}
                className={`p-4 rounded-lg border text-left transition-colors ${
                  selectedTheme.name === theme.name
                    ? "border-primary bg-primary/5"
                    : "hover:border-primary/50"
                }`}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex gap-1">
                    <div
                      className="w-6 h-6 rounded-full border"
                      style={{ backgroundColor: theme.colors.primary }}
                    />
                    <div
                      className="w-6 h-6 rounded-full border"
                      style={{ backgroundColor: theme.colors.accent }}
                    />
                  </div>
                  <span className="font-medium">{theme.name}</span>
                </div>
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Preview</h2>
          <div className="rounded-lg border p-8 space-y-4 bg-background">
            <div className="space-y-2">
              <button
                className="px-4 py-2 rounded-md text-sm font-medium text-white"
                style={{ backgroundColor: selectedTheme.colors.primary }}
              >
                Primary Button
              </button>
              <button
                className="px-4 py-2 rounded-md text-sm font-medium ml-2"
                style={{
                  backgroundColor: selectedTheme.colors.secondary,
                  color: selectedTheme.colors.primary,
                }}
              >
                Secondary Button
              </button>
            </div>
            <div
              className="p-4 rounded-md"
              style={{ backgroundColor: selectedTheme.colors.accent + "20" }}
            >
              <p
                className="font-medium"
                style={{ color: selectedTheme.colors.accent }}
              >
                This is an accent color example
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Installation</h2>
        <p className="text-muted-foreground">
          Add the following CSS variables to your <code>globals.css</code>:
        </p>
        <CodeBlock
          language="css"
          code={`:root {
  --primary: ${selectedTheme.colors.primary};
  --secondary: ${selectedTheme.colors.secondary};
  --accent: ${selectedTheme.colors.accent};
}

.dark {
  --primary: ${selectedTheme.colors.primary};
  --secondary: ${selectedTheme.colors.secondary};
  --accent: ${selectedTheme.colors.accent};
}`}
        />
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Customization Guide</h2>
        <div className="prose prose-neutral dark:prose-invert max-w-none">
          <h3>Creating Your Own Theme</h3>
          <p>
            Our theming system is built on CSS variables, making it easy to
            customize every aspect of the components. Here's how to create your
            own theme:
          </p>
          <ol>
            <li>
              Define your color palette using CSS variables in your{" "}
              <code>globals.css</code> file
            </li>
            <li>
              Use semantic naming for colors (primary, secondary, accent, etc.)
            </li>
            <li>
              Provide both light and dark mode variants using the{" "}
              <code>.dark</code> class
            </li>
            <li>Test your theme with all components to ensure consistency</li>
          </ol>

          <h3>Color Variables</h3>
          <p>We use the following color variables throughout the library:</p>
          <ul>
            <li>
              <code>--background</code>: Main background color
            </li>
            <li>
              <code>--foreground</code>: Main text color
            </li>
            <li>
              <code>--primary</code>: Primary brand color
            </li>
            <li>
              <code>--secondary</code>: Secondary color
            </li>
            <li>
              <code>--accent</code>: Accent color for highlights
            </li>
            <li>
              <code>--muted</code>: Muted background color
            </li>
            <li>
              <code>--border</code>: Border color
            </li>
          </ul>

          <h3>Dark Mode</h3>
          <p>
            Dark mode is automatically supported. Just define the colors for the{" "}
            <code>.dark</code> class and toggle the class on your root element.
          </p>
        </div>
      </div>
    </div>
  );
}
