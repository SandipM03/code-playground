Below is a **complete, professional guide** to structure your UI component library website—similar to **shadcn/ui**, **Radix**, **Aceternity**, etc. This includes the **best folder structure**, **routing**, **tech stack choices**, **MDX setup**, **turborepo structure**, and **how to integrate your already-published npm UI package**.

---

# ✅ **1. Final Turborepo Structure (Recommended)**

Your turborepo should look like this:

```
/
├── apps/
│   ├── docs/               # Your UI Library Website (Next.js)
│   │   ├── app/
│   │   │   ├── layout.tsx
│   │   │   ├── page.tsx
│   │   │   ├── docs/
│   │   │   │   ├── page.mdx
│   │   │   │   ├── getting-started.mdx
│   │   │   │   ├── installation.mdx
│   │   │   │   ├── components/
│   │   │   │   │   ├── button.mdx
│   │   │   │   │   ├── card.mdx
│   │   │   │   │   └── ...all other components
│   │   │   ├── components/
│   │   │   ├── blocks/
│   │   │   ├── themes/
│   │   ├── content/        # MDX content if you want separate folder
│   │   ├── components/     # Website UI components
│   │   ├── lib/            # utils
│   │   ├── styles/
│   │   ├── next.config.js
│   │   └── package.json
│   └── playground/         # Optional: sandbox usage demo
│
├── packages/
│   ├── ui/                 # Your actual component library
│   │   ├── src/
│   │   │   ├── components/
│   │   │   ├── hooks/
│   │   │   ├── utils/
│   │   └── package.json
│   └── config/             # eslint, tsconfig shared
│
├── turbo.json
├── package.json
└── tsconfig.json
```

---

# ✅ **2. Should You Use MDX?**

**YES. 100%.**
All modern UI libraries use MDX:

* **shadcn/ui**
* **Radix**
* **NextUI**
* **Aceternity UI**
* **MagicUI**
* **Mantine**
* **Chakra**

### MDX is perfect because:

✔ Write docs like Markdown
✔ Embed React components inside docs
✔ Render live UI previews
✔ Auto-generate sidebar navigation
✔ Perfect for `/docs`, `/docs/components`, `/blocks`, `/themes`

---

# 🧱 **3. Website Routes (Production-Level)**

Use **Next.js App Router** with the following route tree:

```
app/
├── page.tsx                     # Homepage
├── docs/
│   ├── page.mdx                 # Docs index page
│   ├── getting-started.mdx
│   ├── installation.mdx
│   ├── configuration.mdx
│   ├── components/
│   │   ├── page.mdx             # Components intro
│   │   ├── button.mdx
│   │   ├── card.mdx
│   │   └── ...
│   ├── blocks/
│   │   ├── page.mdx
│   │   ├── pricing-section.mdx
│   │   └── hero-section.mdx
│   ├── themes/
│   │   ├── page.mdx
│   │   ├── dark-theme.mdx
│   │   ├── retro-theme.mdx
│   │   └── ...
│   └── guides/
│       ├── customizing.mdx
│       ├── tokens.mdx
│       ├── animations.mdx
│       └── ...
└── api/                         # Optional backend routes
```

---

# 🎨 **4. Component Docs Format Example (`button.mdx`)**

````
---
title: "Button"
description: "Buttons trigger actions and user interactions."
---

import { Button } from "your-package-ui"

## Usage

```tsx
import { Button } from "your-package-ui"

export default function Example() {
  return <Button variant="primary">Click me</Button>
}
````

## Props

| Prop     | Type                  | Default | Description        |
| -------- | --------------------- | ------- | ------------------ |
| variant  | "primary" | "outline" | primary | Visual style       |
| disabled | boolean               | false   | Disable the button |

## Preview

<Button variant="primary">Primary</Button> <Button variant="outline">Outline</Button>

````

💡 MDX lets users see **live preview + code snippet**.

---

# ⚙️ **5. Install MDX in Next.js**

Inside `apps/docs`:

```bash
npm install @next/mdx mdx-prism rehype-slug rehype-autolink-headings
````

`next.config.js`:

```js
const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
});

module.exports = withMDX({
  pageExtensions: ['ts', 'tsx', 'mdx'],
});
```

---

# 📚 **6. Auto-generate Sidebar Like Shadcn**

You need:

```
apps/docs/components/sidebar.tsx
apps/docs/config/docs.config.ts
```

Example config:

```ts
export const docsConfig = {
  mainNav: [
    { title: "Docs", href: "/docs" },
    { title: "Components", href: "/docs/components" },
    { title: "Blocks", href: "/docs/blocks" },
    { title: "Themes", href: "/docs/themes" },
  ],

  sidebarNav: [
    {
      title: "Getting Started",
      items: [
        { title: "Introduction", href: "/docs" },
        { title: "Installation", href: "/docs/installation" },
      ],
    },
    {
      title: "Components",
      items: [
        { title: "Button", href: "/docs/components/button" },
        { title: "Card", href: "/docs/components/card" },
      ],
    },
  ],
};
```

---

# 🧩 **7. Import Your UI Library in Docs**

Since you published your UI to npm:

```
npm install your-ui-library
```

Use it inside MDX:

```tsx
import { Button } from "your-ui-library"
```

---

# 🚀 **8. Components Live Preview System (like shadcn)**

Create:

```
apps/docs/components/mdx/code-block.tsx
apps/docs/components/mdx/component-preview.tsx
apps/docs/lib/live-editor.tsx
```

Use a library:

* **react-live**
* or **sandpack-react**

This lets users:

* Edit code
* See live preview
* Copy code instantly

---

# 🎨 **9. Theme System**

Add:

```
app/theme-provider.tsx
```

Use one of:

* `next-themes`
* or `tailwindcss-theme-variants`

Let users toggle:

* Light
* Dark
* Custom theme presets (like `/themes/*`)

---

# 📦 **10. Other Essential Pages & Features**

### ✔ Pricing (if you plan to sell pro components)

```
/pricing
```

### ✔ Releases / Changelog

```
/changelog
```

### ✔ Showcase (websites using your UI)

```
/showcase
```

### ✔ Search (Algolia or custom)

```
/search
```

### ✔ Playground

```
/playground
```

---

# 🧠 **11. Deployment**

Deploy to:

* **Vercel (BEST for Next.js)**
* Use **Turborepo remote caching** for faster CI

---

# 📌 Summary: What You Should Do

### 1️⃣ Use **Next.js + MDX**

Best combo for documentation sites.

### 2️⃣ Create a docs website inside `apps/docs`.

### 3️⃣ Use MDX for all docs, components, guides.

### 4️⃣ Build sidebar from a config file.

### 5️⃣ Add live previews using `react-live` or `sandpack`.

### 6️⃣ Integrate your UI library from npm.

### 7️⃣ Deploy to Vercel.

---

# 💬 If you want, I can also help you with:

✅ Full folder scaffolding (I can generate actual files)
✅ MDX component templates
✅ Sidebar navigation system code
✅ Home page UI like shadcn
✅ Component preview system
✅ NPM integration
✅ Search bar with AI

Just tell me **“generate full project starter code”** and I’ll generate everything.
