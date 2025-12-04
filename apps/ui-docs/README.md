# UI Component Library Documentation

A comprehensive documentation website for your UI component library, built with Next.js 15, React, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Complete Documentation System** - Introduction, installation, theming, CLI guide
- **Component Showcase** - 20+ component pages with live previews and code examples
- **Blocks Library** - Pre-built sections ready to copy and paste
- **Theme Customization** - Visual theme builder with live preview
- **Examples Gallery** - Real-world application examples
- **Responsive Design** - Mobile-first design that works on all screen sizes
- **Code Copy** - One-click code copying functionality
- **Search & Navigation** - Easy-to-use sidebar navigation

## 📁 Project Structure

```
ui-docs/
├── app/                          # Next.js App Router
│   ├── docs/                    # Documentation routes
│   │   ├── components/          # Component documentation
│   │   │   ├── button/          # Individual component pages
│   │   │   └── page.tsx         # Components overview
│   │   ├── introduction/        # Getting started
│   │   ├── installation/        # Setup guide
│   │   ├── project-structure/   # Project organization
│   │   ├── theming/             # Theme customization
│   │   ├── cli/                 # CLI documentation
│   │   ├── layout.tsx           # Docs layout with sidebar
│   │   └── page.tsx             # Docs home
│   ├── blocks/                  # Pre-built blocks
│   │   └── page.tsx
│   ├── themes/                  # Theme gallery
│   │   └── page.tsx
│   ├── examples/                # Example applications
│   │   └── page.tsx
│   ├── layout.tsx               # Root layout
│   ├── page.tsx                 # Homepage
│   └── globals.css              # Global styles
├── components/                   # React components
│   ├── header.tsx               # Site header
│   ├── footer.tsx               # Site footer
│   ├── docs-sidebar.tsx         # Documentation sidebar
│   ├── sidebar.tsx              # Generic sidebar
│   ├── code-block.tsx           # Code display with copy
│   ├── component-preview.tsx    # Component preview container
│   └── tabs.tsx                 # Tab component
├── lib/                         # Utilities
│   └── utils.ts                 # Helper functions
├── config/                      # Configuration
│   ├── site.ts                  # Site metadata
│   └── docs.ts                  # Docs navigation
└── public/                      # Static assets
```

## 🛠️ Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm, yarn, or pnpm

### Installation

1. Install dependencies:

```bash
npm install
```

2. Run the development server:

```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📝 Main Routes

- `/` - Homepage with hero, features, and CTAs
- `/docs` - Documentation hub
- `/docs/introduction` - Library introduction
- `/docs/installation` - Setup instructions
- `/docs/components` - Component overview
- `/docs/components/[component]` - Individual component docs
- `/blocks` - Pre-built block library
- `/themes` - Theme customization
- `/examples` - Example applications

## 🎨 Customization

### Site Configuration

Edit `config/site.ts` to update:
- Site name and description
- Social links
- Metadata

### Navigation

Edit `config/docs.ts` to modify:
- Main navigation items
- Sidebar navigation structure
- Component list

### Styling

- `app/globals.css` - Global styles and CSS variables
- `tailwind.config.ts` - Tailwind configuration
- Theme variables use HSL format for easy customization

## 📦 Adding New Components

1. Create a new page in `app/docs/components/[component-name]/page.tsx`
2. Add the component to `config/docs.ts` sidebar navigation
3. Include:
   - Component description
   - Live preview
   - Code examples
   - Props documentation
   - Usage instructions

## 🔧 Built With

- [Next.js 15](https://nextjs.org/) - React framework
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [Geist Font](https://vercel.com/font) - Typography

## 📄 License

MIT License - feel free to use this for your own documentation site!

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📮 Support

For questions or support, please open an issue on GitHub.

